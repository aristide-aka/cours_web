/**
 * Métadonnées du module Langage C.
 * (Un seul chapitre pour l'instant : la traduction du pseudo-code en C.)
 */
var CI = (path) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;

var CHAPTERS_META = [
  {
    id: "01",
    slug: "langage-c",
    title: "Langage C",
    short: "Traduire tout ce que vous avez appris en un vrai programme C qui compile.",
    icon: CI('<path d="M8 3.5c-2 0-3 1-3 3v2.7c0 1.2-.6 2.3-2 2.8 1.4.5 2 1.6 2 2.8v2.7c0 2 1 3 3 3M16 3.5c2 0 3 1 3 3v2.7c0 1.2.6 2.3 2 2.8-1.4.5-2 1.6-2 2.8v2.7c0 2-1 3-3 3"/>'),
    minutes: 22,
    quizCount: 9,
  },
];

var TOTAL_QUIZ_QUESTIONS = CHAPTERS_META.reduce((s, c) => s + c.quizCount, 0);

function chapterById(id) {
  return CHAPTERS_META.find((c) => c.id === id);
}
function chapterIndex(id) {
  return CHAPTERS_META.findIndex((c) => c.id === id);
}

window.MODULE_CHAPTERS = window.MODULE_CHAPTERS || {};
window.MODULE_CHAPTERS["langage-c"] = CHAPTERS_META;
