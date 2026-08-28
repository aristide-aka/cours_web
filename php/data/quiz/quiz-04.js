window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["04"] = [
  {
    type: "qcm",
    prompt: "Comment définit-on une constante en PHP ?",
    options: [
      "Avec le mot-clé var",
      "Avec define() ou le mot-clé const",
      "Une constante ne se déclare jamais, elle est automatique",
      "Avec le symbole $ en majuscule",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "define(\"NOM\", valeur) ou const NOM = valeur; définissent tous deux une constante, dont la valeur ne doit plus jamais changer ensuite." },
    ],
  },
  {
    type: "qcm",
    prompt: "Une constante PHP s'écrit-elle avec le symbole $ ?",
    options: ["Oui, toujours", "Non, jamais — ni à la définition ni à l'utilisation", "Seulement à la définition", "Seulement à l'utilisation"],
    correct: 1,
    explain: [
      { type: "p", text: "Contrairement à une variable, une constante ne s'écrit jamais avec $ — c'est justement ce qui permet de la distinguer visuellement d'une variable classique." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quel symbole introduit un commentaire sur une seule ligne, style C, en PHP ?",
    options: ["<code class=\"inline\">#</code> uniquement", "<code class=\"inline\">//</code>", "<code class=\"inline\">--</code>", "<code class=\"inline\">'''</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "// est la forme la plus répandue en PHP. Le dièse # fonctionne aussi (syntaxe alternative, héritée du shell), les deux étant strictement équivalentes." },
    ],
  },
  {
    type: "qcm",
    prompt: "Comment écrit-on un commentaire sur plusieurs lignes en PHP ?",
    options: ["Entre <code class=\"inline\">\"\"\" ... \"\"\"</code>", "Entre <code class=\"inline\">/* ... */</code>", "En répétant // sur chaque ligne uniquement", "Ce n'est pas possible en PHP"],
    correct: 1,
    explain: [
      { type: "p", text: "/* ... */ délimite un commentaire pouvant s'étaler sur plusieurs lignes, exactement comme en C." },
    ],
  },
  {
    type: "vraifaux",
    prompt: "Vrai ou faux : par convention, le nom d'une constante PHP s'écrit en MAJUSCULES.",
    options: ["Vrai", "Faux"],
    correct: 0,
    explain: [
      { type: "p", text: "Vrai. Ce n'est pas une obligation technique, mais une convention très largement suivie qui permet de repérer immédiatement une constante dans le code, par exemple TVA ou NOM_SITE." },
    ],
  },
];
