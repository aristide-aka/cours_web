window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["04"] = [
  {
    type: "qcm",
    prompt: "Quel symbole introduit un commentaire sur une seule ligne en Python ?",
    options: ["<code class=\"inline\">//</code>", "<code class=\"inline\">#</code>", "<code class=\"inline\">--</code>", "<code class=\"inline\">/*</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "Le dièse # introduit un commentaire jusqu'à la fin de la ligne — l'équivalent Python du // du C." },
    ],
  },
  {
    type: "qcm",
    prompt: "Comment écrit-on un commentaire sur plusieurs lignes en Python ?",
    options: [
      "Entre /* et */",
      "Entre triples guillemets \"\"\" ... \"\"\"",
      "Ce n'est pas possible en Python",
      "En répétant # au début de chaque ligne, uniquement",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Les triples guillemets \"\"\" (ou ''') délimitent un texte pouvant s'étaler sur plusieurs lignes, utilisable comme commentaire long." },
    ],
  },
  {
    type: "qcm",
    prompt: "Lequel de ces deux commentaires est le plus utile ?",
    options: [
      "<code class=\"inline\">age = 25  # affecte 25 à age</code>",
      "<code class=\"inline\">age = 25  # âge minimum légal pour ce formulaire</code>",
      "Les deux sont aussi utiles l'un que l'autre",
      "Aucun des deux, les commentaires sont toujours inutiles",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Un bon commentaire explique le pourquoi, pas le quoi. Le premier exemple ne fait que reformuler ce que le code montre déjà clairement ; le second apporte une information que le code seul ne donne pas." },
    ],
  },
  {
    type: "vraifaux",
    prompt: "Vrai ou faux : Python exécute le contenu des commentaires, mais n'affiche pas le résultat.",
    options: ["Vrai", "Faux"],
    correct: 1,
    explain: [
      { type: "p", text: "Faux. Python ignore totalement les commentaires : ils ne sont ni exécutés, ni évalués d'aucune façon. Ils n'existent que pour un lecteur humain." },
    ],
  },
];
