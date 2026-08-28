/**
 * Métadonnées des chapitres — source unique utilisée par l'accueil,
 * le cours et les quiz (sidebar, TOC, dashboard de progression).
 */
const CI = (path) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;

const CHAPTERS_META = [
  {
    id: "01",
    slug: "variables",
    title: "Variables & affectation",
    short: "Déclarer une variable, comprendre le typage et l'opérateur d'affectation ←.",
    icon: CI('<path d="M3 7a2 2 0 0 1 2-2h7l7 7-7 7H5a2 2 0 0 1-2-2V7Z"/><circle cx="15.5" cy="12" r="1.3" fill="currentColor" stroke="none"/>'),
    minutes: 10,
    quizCount: 8,
  },
  {
    id: "02",
    slug: "entrees-sorties",
    title: "Entrées & sorties",
    short: "Dialoguer avec l'utilisateur grâce à Lire et Écrire.",
    icon: CI('<path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.35 0-2.6-.32-3.7-.9L3 21l1.9-5.7A8.44 8.44 0 0 1 3.5 11.5 8.5 8.5 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5Z"/>'),
    minutes: 8,
    quizCount: 6,
  },
  {
    id: "03",
    slug: "conditions",
    title: "Tests & conditions",
    short: "Aiguiller l'exécution avec Si / Alors / Sinon.",
    icon: CI('<circle cx="6" cy="6" r="2.4"/><circle cx="6" cy="18" r="2.4"/><circle cx="17" cy="12" r="2.4"/><path d="M6 8.4V15.6M8.2 6.9 14.8 11M8.2 17.1 14.8 13"/>'),
    minutes: 12,
    quizCount: 8,
  },
  {
    id: "04",
    slug: "logique",
    title: "Opérateurs logiques",
    short: "Combiner des conditions avec ET, OU, NON et maîtriser les priorités.",
    icon: CI('<rect x="2" y="7" width="20" height="10" rx="5"/><circle cx="16" cy="12" r="3" fill="currentColor" stroke="none"/>'),
    minutes: 12,
    quizCount: 7,
  },
  {
    id: "05",
    slug: "boucles",
    title: "Les boucles",
    short: "Répéter des instructions avec TantQue, Pour et Répéter...Jusqu'à.",
    icon: CI('<path d="M3 11a9 9 0 0 1 15-6.7L21 7M21 3v5h-5M21 13a9 9 0 0 1-15 6.7L3 17m0 4v-5h5"/>'),
    minutes: 16,
    quizCount: 9,
  },
  {
    id: "06",
    slug: "tableaux",
    title: "Les tableaux",
    short: "Stocker et manipuler des collections de valeurs indexées.",
    icon: CI('<rect x="2.5" y="8" width="19" height="8" rx="1.5"/><path d="M9 8v8M14.5 8v8"/>'),
    minutes: 16,
    quizCount: 9,
  },
  {
    id: "07",
    slug: "chaines",
    title: "Chaînes de caractères",
    short: "Longueur, extraction, concaténation et recherche dans le texte.",
    icon: CI('<polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/>'),
    minutes: 14,
    quizCount: 8,
  },
  {
    id: "08",
    slug: "fonctions",
    title: "Fonctions & procédures",
    short: "Découper un algorithme, passer des paramètres, renvoyer un résultat.",
    icon: CI('<path d="M10 3.5a1.8 1.8 0 0 1 3.6 0V5H16a1 1 0 0 1 1 1v2.4h1.5a1.8 1.8 0 0 1 0 3.6H17V14a1 1 0 0 1-1 1h-2.4v1.5a1.8 1.8 0 0 1-3.6 0V15H7a1 1 0 0 1-1-1v-2.4H4.5a1.8 1.8 0 0 1 0-3.6H6V6a1 1 0 0 1 1-1h3V3.5Z"/>'),
    minutes: 16,
    quizCount: 8,
  },
  {
    id: "09",
    slug: "fichiers",
    title: "Fichiers séquentiels",
    short: "Ouvrir, lire, écrire et fermer un fichier ligne par ligne.",
    icon: CI('<path d="M3 7.2A2.2 2.2 0 0 1 5.2 5h3.6l1.8 2H19a2 2 0 0 1 2 2v8a2.2 2.2 0 0 1-2.2 2.2H5.2A2.2 2.2 0 0 1 3 17V7.2Z"/>'),
    minutes: 12,
    quizCount: 6,
  },
  {
    id: "10",
    slug: "tri-recherche",
    title: "Tri & recherche",
    short: "Tri à bulles, tri par sélection et recherche dichotomique.",
    icon: CI('<path d="M4 6h16M4 12h10M4 18h5"/><path d="m16 15 3 3 3-3"/><path d="M19 4v14"/>'),
    minutes: 18,
    quizCount: 8,
  },
  {
    id: "11",
    slug: "langage-c",
    title: "Langage C",
    short: "Traduire tout ce que vous avez appris en un vrai programme C qui compile.",
    icon: CI('<path d="M8 3.5c-2 0-3 1-3 3v2.7c0 1.2-.6 2.3-2 2.8 1.4.5 2 1.6 2 2.8v2.7c0 2 1 3 3 3M16 3.5c2 0 3 1 3 3v2.7c0 1.2.6 2.3 2 2.8-1.4.5-2 1.6-2 2.8v2.7c0 2-1 3-3 3"/>'),
    minutes: 22,
    quizCount: 9,
  },
  {
    id: "12",
    slug: "python",
    title: "Python",
    short: "Traduire l'algorithme en Python : indentation, listes, fonctions et fichiers.",
    icon: CI('<rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="m7 10 3 2.5L7 15M13 15h4"/>'),
    minutes: 20,
    quizCount: 9,
  },
  {
    id: "13",
    slug: "php",
    title: "PHP",
    short: "Traduire l'algorithme en PHP : variables $, tableaux et scripts serveur.",
    icon: CI('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18"/>'),
    minutes: 20,
    quizCount: 9,
  },
];

const TOTAL_QUIZ_QUESTIONS = CHAPTERS_META.reduce((s, c) => s + c.quizCount, 0);

function chapterById(id) {
  return CHAPTERS_META.find((c) => c.id === id);
}
function chapterIndex(id) {
  return CHAPTERS_META.findIndex((c) => c.id === id);
}
