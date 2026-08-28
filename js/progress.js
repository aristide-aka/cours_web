/**
 * Progress — couche de persistance partagée (localStorage).
 * Suit la lecture des chapitres et les scores de quiz, par module
 * (algorithmique / langage-c / python / php) pour que deux modules
 * différents ne se marchent jamais dessus (ex: chapitre "01" existe
 * dans chaque module, mais désigne une notion différente à chaque fois).
 */
const Progress = (() => {
  const KEY = "algoAcademy.progress.v2";

  function readAll() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return { modules: {} };
      const parsed = JSON.parse(raw);
      return { modules: parsed.modules || {} };
    } catch (e) {
      return { modules: {} };
    }
  }

  function writeAll(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
  }

  function readModule(moduleId) {
    const data = readAll();
    return data.modules[moduleId] || { chapters: {}, quizzes: {} };
  }

  function writeModule(moduleId, moduleData) {
    const data = readAll();
    data.modules[moduleId] = moduleData;
    writeAll(data);
  }

  function markChapterRead(moduleId, chapterId) {
    const mod = readModule(moduleId);
    mod.chapters[chapterId] = { read: true, readAt: Date.now() };
    writeModule(moduleId, mod);
  }

  function isChapterRead(moduleId, chapterId) {
    const mod = readModule(moduleId);
    return !!(mod.chapters[chapterId] && mod.chapters[chapterId].read);
  }

  function recordQuizResult(moduleId, chapterId, scorePct, correctCount, totalCount) {
    const mod = readModule(moduleId);
    const prev = mod.quizzes[chapterId];
    const best = prev ? Math.max(prev.best, scorePct) : scorePct;
    mod.quizzes[chapterId] = {
      best,
      last: scorePct,
      attempts: (prev ? prev.attempts : 0) + 1,
      correctCount,
      totalCount,
      lastAt: Date.now(),
    };
    writeModule(moduleId, mod);
    return mod.quizzes[chapterId];
  }

  function quizResult(moduleId, chapterId) {
    const mod = readModule(moduleId);
    return mod.quizzes[chapterId] || null;
  }

  /** Progression 0-100 d'un chapitre : moyenne pondérée lecture (40%) + meilleur score quiz (60%) */
  function chapterProgress(moduleId, chapterId) {
    const mod = readModule(moduleId);
    const readDone = mod.chapters[chapterId] && mod.chapters[chapterId].read ? 40 : 0;
    const quiz = mod.quizzes[chapterId];
    const quizPart = quiz ? Math.round((quiz.best / 100) * 60) : 0;
    return readDone + quizPart;
  }

  /** Statistiques agrégées pour UN module (utilisé sur la page d'accueil de chaque langage) */
  function overallStats(moduleId, chaptersMeta) {
    const mod = readModule(moduleId);
    let chaptersRead = 0;
    let quizzesTaken = 0;
    let scoreSum = 0;
    let totalProgress = 0;
    chaptersMeta.forEach((c) => {
      if (mod.chapters[c.id] && mod.chapters[c.id].read) chaptersRead++;
      if (mod.quizzes[c.id]) {
        quizzesTaken++;
        scoreSum += mod.quizzes[c.id].best;
      }
      totalProgress += chapterProgress(moduleId, c.id);
    });
    const avgScore = quizzesTaken ? Math.round(scoreSum / quizzesTaken) : 0;
    const globalPct = chaptersMeta.length ? Math.round(totalProgress / chaptersMeta.length) : 0;
    return { chaptersRead, quizzesTaken, avgScore, globalPct, totalChapters: chaptersMeta.length };
  }

  /**
   * Statistiques agrégées sur TOUS les modules (page d'accueil générale).
   * `modules` : [{ id: "algorithmique", meta: ALGO_META }, ...]
   */
  function globalStats(modules) {
    let totalChapters = 0;
    let chaptersRead = 0;
    let quizzesTaken = 0;
    let scoreSum = 0;
    let progressSum = 0;
    modules.forEach(({ id, meta }) => {
      const s = overallStats(id, meta);
      totalChapters += s.totalChapters;
      chaptersRead += s.chaptersRead;
      quizzesTaken += s.quizzesTaken;
      if (s.quizzesTaken) scoreSum += s.avgScore * s.quizzesTaken;
      progressSum += s.globalPct * meta.length;
    });
    const avgScore = quizzesTaken ? Math.round(scoreSum / quizzesTaken) : 0;
    const globalPct = totalChapters ? Math.round(progressSum / totalChapters) : 0;
    return { totalChapters, chaptersRead, quizzesTaken, avgScore, globalPct };
  }

  function reset() {
    localStorage.removeItem(KEY);
  }

  return {
    markChapterRead,
    isChapterRead,
    recordQuizResult,
    quizResult,
    chapterProgress,
    overallStats,
    globalStats,
    reset,
  };
})();

/** Theme — clair / sombre / système, persisté séparément (partagé par tous les modules) */
const Theme = (() => {
  const KEY = "algoAcademy.theme";

  function apply(mode) {
    const root = document.documentElement;
    if (mode === "light" || mode === "dark") {
      root.setAttribute("data-theme", mode);
    } else {
      root.removeAttribute("data-theme");
    }
  }

  function get() {
    return localStorage.getItem(KEY) || "system";
  }

  function toggle() {
    const current = get();
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const currentlyDark = current === "dark" || (current === "system" && systemDark);
    const next = currentlyDark ? "light" : "dark";
    localStorage.setItem(KEY, next);
    apply(next);
    return next;
  }

  function init() {
    apply(get());
  }

  return { init, toggle, get };
})();

Theme.init();
