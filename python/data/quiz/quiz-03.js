window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["03"] = [
  {
    type: "qcm",
    prompt: "Qu'est-ce qui délimite un bloc d'instructions en Python ?",
    options: ["Des accolades { }", "Des mots-clés comme FinSi ou FinTantQue", "L'indentation (le décalage vers la droite)", "Des points-virgules"],
    correct: 2,
    explain: [
      { type: "p", text: "C'est la particularité la plus célèbre de Python : ni accolades ni mots-clés de fin de bloc, seulement l'indentation du texte lui-même, qui a une vraie valeur syntaxique." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quelle est l'indentation standard recommandée en Python ?",
    options: ["1 espace", "2 espaces", "4 espaces", "Une tabulation obligatoirement"],
    correct: 2,
    explain: [
      { type: "p", text: "La convention universelle est 4 espaces par niveau d'indentation. L'essentiel est surtout la cohérence : ne jamais mélanger tabulations et espaces dans un même fichier." },
    ],
  },
  {
    type: "qcm",
    lang: "python",
    code: `if True:
print("Bonjour")`,
    prompt: "Que se passe-t-il en exécutant ce code ?",
    options: [
      "Il affiche \"Bonjour\" normalement",
      "IndentationError : la ligne après le : doit être indentée",
      "Rien ne se passe, le programme s'exécute silencieusement",
      "Une SyntaxError liée aux parenthèses",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Toute ligne se terminant par : annonce un bloc qui doit être indenté à la ligne suivante. Ici, print(\"Bonjour\") reste au même niveau que if, ce qui provoque une IndentationError." },
    ],
  },
  {
    type: "vraifaux",
    prompt: "Vrai ou faux : mélanger tabulations et espaces dans un même fichier Python peut provoquer une erreur.",
    options: ["Vrai", "Faux"],
    correct: 0,
    explain: [
      { type: "p", text: "Vrai. Python peut interpréter différemment tabulations et espaces selon le contexte, ce qui peut rendre l'indentation ambiguë et provoquer une erreur — mieux vaut choisir l'un ou l'autre et s'y tenir." },
    ],
  },
  {
    type: "qcm",
    prompt: "Pourquoi une mauvaise indentation est-elle plus grave en Python qu'en C ?",
    options: [
      "Ce n'est pas plus grave, c'est juste une question d'esthétique dans les deux cas",
      "En Python, l'indentation détermine directement la structure du programme, pas seulement sa lisibilité",
      "Le C n'accepte aucune forme d'indentation",
      "Python ignore complètement l'indentation, contrairement au C",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "En C, l'indentation n'est qu'une convention de lisibilité : les accolades définissent réellement les blocs. En Python, l'indentation EST le mécanisme de délimitation des blocs — une erreur d'indentation change le sens du programme, ou l'empêche carrément de s'exécuter." },
    ],
  },
];
