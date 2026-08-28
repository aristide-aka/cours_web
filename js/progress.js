/**
 * Progress — couche de persistance partagée (localStorage).
 * Suit la lecture des chapitres et les scores de quiz.
 */
const Progress = (() => {
  const KEY = "algoAcademy.progress.v1";

  function read() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return { chapters: {}, quizzes: {} };
      const parsed = JSON.parse(raw);
      return { chapters: parsed.chapters || {}, quizzes: parsed.quizzes || {} };
    } catch (e) {
      return { chapters: {}, quizzes: {} };
    }
  }

  function write(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
  }

  function markChapterRead(id) {
    const data = read();
    data.chapters[id] = { read: true, readAt: Date.now() };
    write(data);
  }

  function isChapterRead(id) {
    const data = read();
    return !!(data.chapters[id] && data.chapters[id].read);
  }

  function recordQuizResult(id, scorePct, correctCount, totalCount) {
    const data = read();
    const prev = data.quizzes[id];
    const best = prev ? Math.max(prev.best, scorePct) : scorePct;
    data.quizzes[id] = {
      best,
      last: scorePct,
      attempts: (prev ? prev.attempts : 0) + 1,
      correctCount,
      totalCount,
      lastAt: Date.now(),
    };
    write(data);
    return data.quizzes[id];
  }

  function quizResult(id) {
    const data = read();
    return data.quizzes[id] || null;
  }

  /** Progression 0-100 d'un chapitre : moyenne pondérée lecture (40%) + meilleur score quiz (60%) */
  function chapterProgress(id) {
    const data = read();
    const readDone = data.chapters[id] && data.chapters[id].read ? 40 : 0;
    const quiz = data.quizzes[id];
    const quizPart = quiz ? Math.round((quiz.best / 100) * 60) : 0;
    return readDone + quizPart;
  }

  function overallStats(chaptersMeta) {
    const data = read();
    let chaptersRead = 0;
    let quizzesTaken = 0;
    let scoreSum = 0;
    let totalProgress = 0;
    chaptersMeta.forEach((c) => {
      if (data.chapters[c.id] && data.chapters[c.id].read) chaptersRead++;
      if (data.quizzes[c.id]) {
        quizzesTaken++;
        scoreSum += data.quizzes[c.id].best;
      }
      totalProgress += chapterProgress(c.id);
    });
    const avgScore = quizzesTaken ? Math.round(scoreSum / quizzesTaken) : 0;
    const globalPct = chaptersMeta.length ? Math.round(totalProgress / chaptersMeta.length) : 0;
    return { chaptersRead, quizzesTaken, avgScore, globalPct, totalChapters: chaptersMeta.length };
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
    reset,
  };
})();

/** Theme — clair / sombre / système, persisté séparément */
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
