window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["05"] = [
  {
    type: "qcm",
    prompt: "Quelle instruction PHP affiche du texte à l'écran ?",
    options: ["<code class=\"inline\">write</code>", "<code class=\"inline\">echo</code>", "<code class=\"inline\">display</code>", "<code class=\"inline\">output</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "echo est l'instruction la plus utilisée pour afficher du texte en PHP — l'équivalent direct de Écrire du pseudo-code." },
    ],
  },
  {
    type: "qcm",
    lang: "php",
    code: `$a = "12";
$b = "5";
echo $a + $b;`,
    prompt: "Que va afficher ce code ?",
    options: ["\"125\"", "17", "\"12\" + \"5\"", "Une erreur"],
    correct: 1,
    explain: [
      { type: "p", text: "+ reste réservé à l'arithmétique en PHP : il convertit ici les deux chaînes numériques en nombres puis les additionne (12 + 5 = 17), au lieu de les assembler comme le ferait le point ." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quel opérateur assemble (concatène) deux chaînes de caractères en PHP ?",
    options: ["<code class=\"inline\">+</code>", "<code class=\"inline\">.</code> (un point)", "<code class=\"inline\">&amp;</code>", "<code class=\"inline\">,</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "L'opérateur point . assemble du texte en PHP — une syntaxe propre à ce langage, à ne pas confondre avec le + (réservé à l'arithmétique) ou le & du pseudo-code." },
    ],
  },
  {
    type: "vraifaux",
    prompt: "Vrai ou faux : print, contrairement à echo, peut afficher plusieurs valeurs séparées par des virgules en un seul appel.",
    options: ["Vrai", "Faux"],
    correct: 1,
    explain: [
      { type: "p", text: "Faux, c'est l'inverse : echo accepte plusieurs valeurs séparées par des virgules, tandis que print n'accepte qu'une seule valeur à la fois. C'est d'ailleurs l'une des raisons pour lesquelles echo est généralement préféré en pratique." },
    ],
  },
];
