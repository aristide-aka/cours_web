window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["07"] = [
  {
    type: "qcm",
    prompt: "Comment s'écrit SinonSi en PHP ?",
    options: ["<code class=\"inline\">else if</code> (deux mots)", "<code class=\"inline\">elseif</code> (un seul mot)", "<code class=\"inline\">elif</code>", "<code class=\"inline\">sinonsi</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "PHP utilise elseif, en un seul mot — différent du C (else if, deux mots) et de Python (elif)." },
    ],
  },
  {
    type: "trace",
    lang: "php",
    code: `$age = 15;
if ($age > 18) {
    echo "Majeur";
} elseif ($age == 18) {
    echo "Juste majeur";
} else {
    echo "Mineur";
}`,
    prompt: "Que va afficher ce code ?",
    options: ["Majeur", "Juste majeur", "Mineur", "Rien"],
    correct: 2,
    explain: [
      { type: "p", text: "$age vaut 15 : ni $age > 18 ni $age == 18 ne sont vrais. C'est le bloc else qui s'exécute, affichant \"Mineur\"." },
    ],
  },
  {
    type: "qcm",
    prompt: "Dans un switch, que se passe-t-il si l'on oublie break après un case ?",
    options: [
      "Une erreur de syntaxe est levée",
      "L'exécution continue automatiquement dans le case suivant (fall-through)",
      "Rien, PHP ajoute un break automatiquement",
      "Le switch s'arrête immédiatement sans rien afficher",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Sans break, PHP continue d'exécuter le code des case suivants, même s'ils ne correspondent pas à la valeur testée — un comportement appelé « fall-through », source fréquente de bugs si on l'oublie." },
    ],
  },
  {
    type: "qcm",
    lang: "php",
    code: `$jour = 3;
switch ($jour) {
    case 1:
        echo "Lundi";
        break;
    case 3:
        echo "Mercredi";
        break;
    default:
        echo "Autre jour";
}`,
    prompt: "Que va afficher ce code ?",
    options: ["Lundi", "Mercredi", "Autre jour", "Rien"],
    correct: 1,
    explain: [
      { type: "p", text: "$jour vaut 3, ce qui correspond à case 3 : \"Mercredi\" s'affiche, puis break arrête le switch avant d'atteindre default." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quelle structure est particulièrement adaptée pour comparer une même variable à de nombreuses valeurs possibles ?",
    options: ["<code class=\"inline\">while</code>", "<code class=\"inline\">switch</code>", "<code class=\"inline\">foreach</code>", "<code class=\"inline\">function</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "switch permet de tester une même variable contre plusieurs valeurs de façon plus lisible qu'une longue chaîne de if/elseif répétitifs." },
    ],
  },
  {
    type: "qcm",
    prompt: "Que fait le bloc default dans un switch ?",
    options: [
      "Il s'exécute toujours, en plus des autres case",
      "Il s'exécute si aucun des case précédents ne correspond",
      "Il doit obligatoirement être le premier bloc",
      "Il n'existe pas en PHP",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "default joue le rôle du Sinon final : il s'exécute uniquement si aucune des valeurs testées par les case n'a correspondu." },
    ],
  },
  {
    type: "vraifaux",
    prompt: "Vrai ou faux : dans une chaîne if/elseif/else, un seul bloc au maximum peut s'exécuter.",
    options: ["Vrai", "Faux"],
    correct: 0,
    explain: [
      { type: "p", text: "Vrai, exactement comme dans les autres langages de ce cours : dès qu'une condition est vraie, son bloc s'exécute et les suivants sont ignorés." },
    ],
  },
];
