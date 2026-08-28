/**
 * course-render.js — moteur de rendu du cours.
 * Transforme les données déclaratives de data/content/*.js en HTML
 * (prose, callouts, blocs de code, tables de trace, diagrammes de tableaux…)
 * et construit la sidebar / la table des matières de cours.html.
 */

function renderSection(section, chapterId) {
  const blocks = section.blocks.map(renderBlock).join("\n");
  return `<h2 id="${section.id}">${section.title}</h2>\n${blocks}`;
}

function buildSidebar(activeId) {
  const groups = CHAPTERS_META.map((c) => {
    const active = c.id === activeId;
    const done = Progress.isChapterRead(c.id);
    return `<a class="sidebar-link ${active ? "active" : ""} ${done ? "complete" : ""}" href="cours.html?ch=${c.id}">
      <span class="chip">${done ? "✓" : c.id}</span>
      <span>${c.title}</span>
      ${done ? '<span class="status-dot"></span>' : ""}
    </a>`;
  }).join("");
  return `<div class="sidebar-group">
    <div class="sidebar-group-title">Programme — 10 chapitres</div>
    ${groups}
  </div>`;
}

function buildToc(sections) {
  const links = sections.map((s) => `<a href="#${s.id}">${s.title}</a>`).join("");
  return `<div class="toc-title">Sur cette page</div>${links}`;
}

function initTocScrollSpy() {
  const tocLinks = document.querySelectorAll(".docs-toc a");
  if (!tocLinks.length) return;
  const targets = [...tocLinks].map((a) => document.getElementById(a.getAttribute("href").slice(1))).filter(Boolean);
  if (!("IntersectionObserver" in window) || !targets.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          tocLinks.forEach((a) => a.classList.remove("active"));
          const link = document.querySelector(`.docs-toc a[href="#${entry.target.id}"]`);
          if (link) link.classList.add("active");
        }
      });
    },
    { rootMargin: "-15% 0px -70% 0px" }
  );
  targets.forEach((t) => io.observe(t));
}

function renderChapterPage() {
  const params = new URLSearchParams(location.search);
  const id = params.get("ch") || "01";
  const meta = chapterById(id);
  const content = window.CHAPTERS_CONTENT && window.CHAPTERS_CONTENT[id];

  if (!meta || !content) {
    document.querySelector(".docs-main").innerHTML = `<div class="quiz-intro"><h1>Chapitre introuvable</h1><p class="lead">Retournez à l'accueil pour choisir un chapitre.</p><a class="btn btn-primary" href="index.html">Retour à l'accueil</a></div>`;
    return;
  }

  document.title = `${meta.title} — Algo Academy`;
  document.getElementById("sidebar-slot").innerHTML = buildSidebar(id);
  document.getElementById("toc-slot").innerHTML = buildToc(content.sections);

  const idx = chapterIndex(id);
  const prev = CHAPTERS_META[idx - 1];
  const next = CHAPTERS_META[idx + 1];

  document.getElementById("docs-main-content").innerHTML = `
    <div class="docs-breadcrumb">
      <a href="index.html">Accueil</a>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
      <a href="index.html#chapitres">Chapitres</a>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
      <span>${meta.title}</span>
    </div>
    <header class="docs-header">
      <div class="docs-kicker">
        <div class="chapter-num">${meta.id}</div>
        <span>Chapitre ${meta.id} sur 10</span>
      </div>
      <h1><span class="chapter-icon lg">${meta.icon}</span>${meta.title}</h1>
      <p class="docs-lead">${content.lead}</p>
      <div class="docs-meta">
        <div class="docs-meta-item">${ICONS.clock} ${meta.minutes} min de lecture</div>
        <div class="docs-meta-item">${ICONS.quiz} ${meta.quizCount} questions de quiz</div>
      </div>
    </header>
    <div class="prose">
      ${content.sections.map((s) => renderSection(s, id)).join("\n")}
    </div>
    <div class="chapter-cta" id="chapter-end-marker">
      <div>
        <h3>Prêt à tester vos connaissances ?</h3>
        <p>Quiz interactif de ${meta.quizCount} questions avec correction détaillée et visuelle.</p>
      </div>
      <a class="btn btn-primary btn-lg" href="quiz.html?ch=${id}">Démarrer le quiz →</a>
    </div>
    <div class="docs-pagenav">
      ${prev ? `<a class="pagenav-card prev" href="cours.html?ch=${prev.id}"><span class="pagenav-lbl">← Précédent</span><span class="pagenav-title">${prev.title}</span></a>` : "<div></div>"}
      ${next ? `<a class="pagenav-card next" href="cours.html?ch=${next.id}"><span class="pagenav-lbl">Suivant →</span><span class="pagenav-title">${next.title}</span></a>` : "<div></div>"}
    </div>
  `;

  initTocScrollSpy();
  window.scrollTo(0, 0);

  const marker = document.getElementById("chapter-end-marker");
  if ("IntersectionObserver" in window && marker) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const wasRead = Progress.isChapterRead(id);
            Progress.markChapterRead(id);
            if (!wasRead) showToast(`Chapitre "${meta.title}" marqué comme lu ✓`);
            document.querySelector(`.sidebar-link[href="cours.html?ch=${id}"]`)?.classList.add("complete");
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(marker);
  }
}

document.addEventListener("DOMContentLoaded", renderChapterPage);
