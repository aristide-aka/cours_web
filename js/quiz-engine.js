/**
 * quiz-engine.js — moteur de quiz interactif.
 * Écran d'intro → questions une par une avec feedback immédiat →
 * explication détaillée (texte + trace visuelle) → écran de résultats.
 */

const QuizEngine = (() => {
  let state = {
    chapterId: null,
    questions: [],
    index: 0,
    answers: [], // { selected, correct, isCorrect }
    startedAt: 0,
  };

  const els = {};

  function typeLabel(type) {
    return { qcm: "Choix multiple", vraifaux: "Vrai ou faux", trace: "Trace d'exécution" }[type] || "Question";
  }

  function init() {
    const params = new URLSearchParams(location.search);
    const id = params.get("ch") || "01";
    const meta = chapterById(id);
    const questions = window.QUIZZES && window.QUIZZES[id];

    els.root = document.getElementById("quiz-root");

    if (!meta || !questions || !questions.length) {
      els.root.innerHTML = `<div class="quiz-intro"><h1>Quiz introuvable</h1><p class="lead">Retournez à l'accueil pour choisir un chapitre.</p><a class="btn btn-primary" href="../index.html">Retour à l'accueil</a></div>`;
      return;
    }

    state.chapterId = id;
    state.meta = meta;
    state.questions = questions;
    renderIntro();
  }

  function renderIntro() {
    const { meta, questions, chapterId } = state;
    const best = Progress.quizResult(window.MODULE_ID, chapterId);
    document.title = `Quiz — ${meta.title} — ${window.MODULE_NAME} — Algo Academy`;
    els.root.innerHTML = `
      <div class="quiz-intro reveal in-view">
        <div class="chapter-num">${meta.icon}</div>
        <div class="eyebrow" style="justify-content:center;margin-bottom:10px;">Quiz · Chapitre ${meta.id}</div>
        <h1>${meta.title}</h1>
        <p class="lead">${questions.length} questions pour vérifier votre maîtrise du chapitre. Chaque réponse est suivie d'une correction détaillée et visuelle — trace d'exécution, diagrammes et pièges classiques expliqués.</p>
        <div class="quiz-intro-stats">
          <div><div class="n">${questions.length}</div><div class="l">Questions</div></div>
          <div><div class="n">~${Math.max(3, Math.round(questions.length * 0.8))} min</div><div class="l">Durée estimée</div></div>
          <div><div class="n">${best ? best.best + "%" : "—"}</div><div class="l">Meilleur score</div></div>
        </div>
        <div class="hero-actions">
          <a href="cours.html?ch=${chapterId}" class="btn btn-secondary">← Revoir le cours</a>
          <button class="btn btn-primary btn-lg" id="start-quiz-btn">Commencer le quiz</button>
        </div>
      </div>
    `;
    document.getElementById("start-quiz-btn").addEventListener("click", startQuiz);
  }

  function startQuiz() {
    state.index = 0;
    state.answers = [];
    state.startedAt = Date.now();
    renderTopbar();
    renderQuestion();
  }

  function renderTopbar() {
    const { questions, index, chapterId } = state;
    els.root.innerHTML = `
      <div class="quiz-topbar">
        <a class="quiz-exit" href="cours.html?ch=${chapterId}" title="Quitter le quiz">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </a>
        <div class="quiz-progress-track"><div class="quiz-progress-fill" id="quiz-progress-fill" style="width:0%"></div></div>
        <div class="quiz-step-lbl" id="quiz-step-lbl">1 / ${questions.length}</div>
      </div>
      <div class="quiz-card" id="quiz-card"></div>
    `;
    els.card = document.getElementById("quiz-card");
    els.progressFill = document.getElementById("quiz-progress-fill");
    els.stepLbl = document.getElementById("quiz-step-lbl");
  }

  function updateTopbar() {
    const { questions, index } = state;
    const pct = Math.round((index / questions.length) * 100);
    els.progressFill.style.width = pct + "%";
    els.stepLbl.textContent = `${Math.min(index + 1, questions.length)} / ${questions.length}`;
  }

  function renderQuestion() {
    updateTopbar();
    const q = state.questions[state.index];
    const letters = ["A", "B", "C", "D", "E"];

    els.card.innerHTML = `
      <div class="quiz-type-badge">${typeLabel(q.type)}</div>
      ${q.code ? `<div class="quiz-code-embed">${renderCodeBlock(q.code, q.codeLabel || "pseudo-code", q.lang || "pseudo")}</div>` : ""}
      <div class="quiz-question">${q.prompt}</div>
      <div class="quiz-options" id="quiz-options">
        ${q.options
          .map(
            (opt, i) => `
          <button class="quiz-option" data-idx="${i}" type="button">
            <span class="opt-letter">${letters[i]}</span>
            <span class="opt-text">${opt}</span>
          </button>`
          )
          .join("")}
      </div>
      <div class="quiz-feedback-banner" id="quiz-feedback"></div>
      <div class="quiz-explain" id="quiz-explain"></div>
      <div class="quiz-actions" id="quiz-actions"></div>
    `;

    els.card.classList.remove("reveal");
    els.card.querySelectorAll(".quiz-option").forEach((btn) => {
      btn.addEventListener("click", () => selectAnswer(parseInt(btn.dataset.idx, 10)));
    });
  }

  function selectAnswer(selectedIdx) {
    const q = state.questions[state.index];
    const isCorrect = selectedIdx === q.correct;
    state.answers.push({ selected: selectedIdx, correct: q.correct, isCorrect, prompt: q.prompt });

    const optionBtns = els.card.querySelectorAll(".quiz-option");
    optionBtns.forEach((btn, i) => {
      btn.setAttribute("disabled", "true");
      if (i === q.correct) btn.classList.add("correct");
      if (i === selectedIdx && !isCorrect) btn.classList.add("incorrect");
      if (i === selectedIdx) btn.classList.add("selected");
      const mark =
        i === q.correct
          ? `<span class="opt-mark">${ICONS.check}</span>`
          : i === selectedIdx
          ? `<span class="opt-mark">${ICONS.pitfall}</span>`
          : "";
      btn.querySelector(".opt-mark")?.remove();
      btn.insertAdjacentHTML("beforeend", mark);
    });

    const banner = document.getElementById("quiz-feedback");
    banner.className = "quiz-feedback-banner show " + (isCorrect ? "ok" : "ko");
    banner.innerHTML = isCorrect
      ? `${ICONS.check} Bonne réponse !`
      : `${ICONS.pitfall} Pas tout à fait — voici pourquoi.`;

    const explain = document.getElementById("quiz-explain");
    explain.innerHTML = `
      <div class="quiz-explain-title">${ICONS.tip} Explication détaillée</div>
      <div class="prose">${q.explain.map(renderBlock).join("\n")}</div>
    `;
    requestAnimationFrame(() => explain.classList.add("show"));

    const isLast = state.index === state.questions.length - 1;
    document.getElementById("quiz-actions").innerHTML = `
      <button class="btn btn-primary btn-lg" id="next-q-btn">${isLast ? "Voir mes résultats" : "Question suivante"} →</button>
    `;
    document.getElementById("next-q-btn").addEventListener("click", () => {
      if (isLast) {
        finishQuiz();
      } else {
        state.index++;
        renderQuestion();
      }
    });
  }

  function finishQuiz() {
    const total = state.questions.length;
    const correctCount = state.answers.filter((a) => a.isCorrect).length;
    const pct = Math.round((correctCount / total) * 100);
    const result = Progress.recordQuizResult(window.MODULE_ID, state.chapterId, pct, correctCount, total);
    const elapsed = Math.max(1, Math.round((Date.now() - state.startedAt) / 1000));

    const idx = chapterIndex(state.chapterId);
    const next = CHAPTERS_META[idx + 1];

    const r = 78;
    const circumference = 2 * Math.PI * r;
    const offset = circumference - (pct / 100) * circumference;

    let title = "Bien joué !";
    let sub = "Vous progressez vite.";
    if (pct === 100) {
      title = "Score parfait ! 🎯";
      sub = "Vous maîtrisez ce chapitre à la perfection.";
    } else if (pct >= 80) {
      title = "Excellent travail !";
      sub = "Encore un petit effort pour la perfection.";
    } else if (pct >= 50) {
      title = "Pas mal du tout.";
      sub = "Relisez les points manqués puis retentez votre chance.";
    } else {
      title = "Continuez à vous entraîner.";
      sub = "Un petit tour par le cours vous fera le plus grand bien.";
    }

    els.root.innerHTML = `
      <div class="quiz-result">
        <div class="result-ring-wrap">
          <svg viewBox="0 0 176 176">
            <defs>
              <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="var(--accent)"/>
                <stop offset="100%" stop-color="var(--accent-3)"/>
              </linearGradient>
            </defs>
            <circle class="result-ring-bg" cx="88" cy="88" r="${r}"/>
            <circle class="result-ring-fill" cx="88" cy="88" r="${r}" stroke-dasharray="${circumference}" stroke-dashoffset="${circumference}"/>
          </svg>
          <div class="result-ring-label"><div class="pct">${pct}%</div><div class="sub">score</div></div>
        </div>
        <h2>${title}</h2>
        <p>${sub}</p>
        <div class="result-stats">
          <div class="result-stat"><div class="n">${correctCount}/${total}</div><div class="l">Bonnes réponses</div></div>
          <div class="result-stat"><div class="n">${elapsed}s</div><div class="l">Temps</div></div>
          <div class="result-stat"><div class="n">${result.attempts}</div><div class="l">Tentative${result.attempts > 1 ? "s" : ""}</div></div>
          <div class="result-stat"><div class="n">${result.best}%</div><div class="l">Meilleur score</div></div>
        </div>
        <div class="result-actions">
          <button class="btn btn-secondary" id="retry-btn">↺ Recommencer</button>
          <a class="btn btn-secondary" href="cours.html?ch=${state.chapterId}">Revoir le cours</a>
          ${next ? `<a class="btn btn-primary" href="quiz.html?ch=${next.id}">Chapitre suivant →</a>` : `<a class="btn btn-primary" href="../index.html">Retour à l'accueil</a>`}
        </div>
        <div class="review-list">
          ${state.answers
            .map(
              (a, i) => `
            <div class="review-item ${a.isCorrect ? "ok" : "ko"}">
              ${a.isCorrect ? ICONS.check : ICONS.pitfall}
              <div>
                <div class="rq">${i + 1}. ${a.prompt}</div>
                <div class="ra">${a.isCorrect ? "Répondu correctement du premier coup" : "Réponse à revoir — consultez l'explication ci-dessus lors de votre prochain essai"}</div>
              </div>
            </div>`
            )
            .join("")}
        </div>
      </div>
    `;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.querySelector(".result-ring-fill").style.strokeDashoffset = String(offset);
      });
    });

    if (pct >= 80) launchConfetti();
    document.getElementById("retry-btn").addEventListener("click", startQuiz);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return { init };
})();

document.addEventListener("DOMContentLoaded", QuizEngine.init);
