/**
 * Métadonnées du module PHP.
 * Contenu extrait et traduit depuis "PHP Notes for Professionals"
 * (GoalKicker.com) — voir php/pdf.html pour consulter la source.
 */
var CI = (path) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;

var CHAPTERS_META = [
  {
    id: "01",
    slug: "prise-en-main",
    title: "Prise en main de PHP",
    short: "Installer PHP, comprendre les balises <?php ?>, exécuter son premier script.",
    icon: CI('<path d="M5 3v18l14-9L5 3Z"/>'),
    minutes: 10,
    quizCount: 6,
  },
  {
    id: "02",
    slug: "variables",
    title: "Les variables",
    short: "Le symbole $, la déclaration et l'affectation en PHP.",
    icon: CI('<path d="M3 7a2 2 0 0 1 2-2h7l7 7-7 7H5a2 2 0 0 1-2-2V7Z"/><circle cx="15.5" cy="12" r="1.3" fill="currentColor" stroke="none"/>'),
    minutes: 10,
    quizCount: 6,
  },
  {
    id: "03",
    slug: "types",
    title: "Les types",
    short: "Entiers, flottants, chaînes, booléens, tableaux : le typage dynamique de PHP.",
    icon: CI('<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 9h8M8 13h5"/>'),
    minutes: 10,
    quizCount: 6,
  },
  {
    id: "04",
    slug: "constantes-commentaires",
    title: "Constantes et commentaires",
    short: "Des valeurs qui ne changent jamais, et comment documenter son code.",
    icon: CI('<rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>'),
    minutes: 8,
    quizCount: 5,
  },
  {
    id: "05",
    slug: "afficher-une-valeur",
    title: "Afficher une valeur",
    short: "echo, print et l'affichage de texte à l'écran.",
    icon: CI('<path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.35 0-2.6-.32-3.7-.9L3 21l1.9-5.7A8.44 8.44 0 0 1 3.5 11.5 8.5 8.5 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5Z"/>'),
    minutes: 6,
    quizCount: 4,
  },
  {
    id: "06",
    slug: "operateurs",
    title: "Les opérateurs",
    short: "Opérateurs arithmétiques, de comparaison et logiques.",
    icon: CI('<path d="M12 5v6M9 8h6M6 17h5M15 17h3"/>'),
    minutes: 12,
    quizCount: 7,
  },
  {
    id: "07",
    slug: "structures-de-controle",
    title: "Structures de contrôle",
    short: "if, elseif, else et switch pour aiguiller l'exécution.",
    icon: CI('<circle cx="6" cy="6" r="2.4"/><circle cx="6" cy="18" r="2.4"/><circle cx="17" cy="12" r="2.4"/><path d="M6 8.4V15.6M8.2 6.9 14.8 11M8.2 17.1 14.8 13"/>'),
    minutes: 12,
    quizCount: 7,
  },
  {
    id: "08",
    slug: "boucles",
    title: "Les boucles",
    short: "while, for, foreach : répéter des instructions en PHP.",
    icon: CI('<path d="M3 11a9 9 0 0 1 15-6.7L21 7M21 3v5h-5M21 13a9 9 0 0 1-15 6.7L3 17m0 4v-5h5"/>'),
    minutes: 14,
    quizCount: 8,
  },
  {
    id: "09",
    slug: "tableaux",
    title: "Les tableaux",
    short: "Tableaux indexés et associatifs, et comment les parcourir.",
    icon: CI('<rect x="2.5" y="8" width="19" height="8" rx="1.5"/><path d="M9 8v8M14.5 8v8"/>'),
    minutes: 16,
    quizCount: 8,
  },
  {
    id: "10",
    slug: "chaines",
    title: "Les chaînes de caractères",
    short: "Découper, formater et assembler du texte.",
    icon: CI('<polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/>'),
    minutes: 12,
    quizCount: 7,
  },
  {
    id: "11",
    slug: "fonctions",
    title: "Les fonctions",
    short: "Découper son code en blocs réutilisables avec function.",
    icon: CI('<path d="M10 3.5a1.8 1.8 0 0 1 3.6 0V5H16a1 1 0 0 1 1 1v2.4h1.5a1.8 1.8 0 0 1 0 3.6H17V14a1 1 0 0 1-1 1h-2.4v1.5a1.8 1.8 0 0 1-3.6 0V15H7a1 1 0 0 1-1-1v-2.4H4.5a1.8 1.8 0 0 1 0-3.6H6V6a1 1 0 0 1 1-1h3V3.5Z"/>'),
    minutes: 14,
    quizCount: 7,
  },
  {
    id: "12",
    slug: "gerer-les-erreurs",
    title: "Gérer les erreurs",
    short: "Exceptions, try/catch et signalement d'erreurs en PHP.",
    icon: CI('<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"/><path d="M12 9v4M12 17h.01"/>'),
    minutes: 10,
    quizCount: 6,
  },
  {
    id: "13",
    slug: "fichiers",
    title: "Manipuler des fichiers",
    short: "Ouvrir, lire et écrire dans un fichier avec fopen().",
    icon: CI('<path d="M3 7.2A2.2 2.2 0 0 1 5.2 5h3.6l1.8 2H19a2 2 0 0 1 2 2v8a2.2 2.2 0 0 1-2.2 2.2H5.2A2.2 2.2 0 0 1 3 17V7.2Z"/>'),
    minutes: 12,
    quizCount: 6,
  },
  {
    id: "14",
    slug: "classes-objets",
    title: "Introduction aux classes et objets",
    short: "Premiers pas avec la programmation orientée objet en PHP.",
    icon: CI('<path d="M12 3 3 8v8l9 5 9-5V8l-9-5Z"/><path d="M3 8l9 5 9-5M12 13v8"/>'),
    minutes: 16,
    quizCount: 7,
  },
  {
    id: "15",
    slug: "php-et-le-web",
    title: "PHP et le web : les superglobales",
    short: "$_GET, $_POST, $_SERVER : comment PHP dialogue avec un formulaire web.",
    icon: CI('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18"/>'),
    minutes: 14,
    quizCount: 7,
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
window.MODULE_CHAPTERS["php"] = CHAPTERS_META;
