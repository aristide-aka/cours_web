window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["08"] = [
  {
    type: "qcm",
    prompt: "Avec quels symboles écrit-on une liste en Python ?",
    options: ["Des accolades { }", "Des crochets [ ]", "Des parenthèses ( )", "Des chevrons &lt; &gt;"],
    correct: 1,
    explain: [
      { type: "p", text: "Une liste s'écrit entre crochets, ses éléments séparés par des virgules : <code class=\"inline\">[12, 15, 9]</code>." },
    ],
  },
  {
    type: "qcm",
    lang: "python",
    code: `notes = [12, 15, 9]
print(notes[0])`,
    prompt: "Que va afficher ce code ?",
    options: ["9", "12", "15", "Une erreur"],
    correct: 1,
    explain: [
      { type: "p", text: "Comme en pseudo-code, le premier élément d'une liste Python est à l'indice 0. notes[0] vaut donc 12." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quelle méthode ajoute un élément à la fin d'une liste ?",
    options: ["<code class=\"inline\">liste.add(x)</code>", "<code class=\"inline\">liste.append(x)</code>", "<code class=\"inline\">liste.push(x)</code>", "<code class=\"inline\">liste.insert(x)</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "append(x) ajoute x à la toute fin de la liste. C'est la méthode la plus courante pour faire grandir une liste au fil d'un programme." },
    ],
  },
  {
    type: "qcm",
    prompt: "Contrairement au Tableau du pseudo-code, que peut-on dire de la taille d'une liste Python ?",
    options: [
      "Elle doit obligatoirement être fixée à la création",
      "Elle est dynamique : la liste grandit et rétrécit librement avec append() et pop()",
      "Une liste Python ne peut jamais dépasser 10 éléments",
      "La taille d'une liste ne peut jamais être connue",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Contrairement au Tableau du pseudo-code (et au tableau C) qui exige une taille fixée à l'avance, une liste Python s'agrandit ou rétrécit librement au fil de l'exécution." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quelle fonction donne le nombre d'éléments d'une liste ?",
    options: ["<code class=\"inline\">size(liste)</code>", "<code class=\"inline\">len(liste)</code>", "<code class=\"inline\">count(liste)</code>", "<code class=\"inline\">liste.length</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "len(liste) renvoie le nombre d'éléments — l'équivalent Python de la taille d'un Tableau en pseudo-code." },
    ],
  },
  {
    type: "trace",
    lang: "python",
    code: `notes = [12, 15, 9]
notes.append(18)
notes.pop(0)
print(notes)`,
    prompt: "Que va afficher ce code ?",
    options: ["[12, 15, 9, 18]", "[15, 9, 18]", "[12, 15, 9]", "[9, 18]"],
    correct: 1,
    explain: [
      { type: "p", text: "append(18) donne [12, 15, 9, 18]. pop(0) retire ensuite l'élément à l'indice 0 (la valeur 12), ce qui laisse [15, 9, 18]." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quelle est la différence entre liste.sort() et sorted(liste) ?",
    options: [
      "Aucune, elles sont strictement identiques",
      "sort() modifie la liste elle-même, sorted() renvoie une nouvelle liste triée sans toucher à l'originale",
      "sorted() modifie la liste, sort() ne fait rien",
      "sort() ne fonctionne que sur les nombres, sorted() sur le texte",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "liste.sort() trie la liste sur place, en la modifiant réellement. sorted(liste) laisse la liste d'origine intacte et renvoie une toute nouvelle liste triée." },
    ],
  },
  {
    type: "qcm",
    lang: "python",
    code: `notes = [12, 15, 9]
somme = 0
for note in notes:
    somme = somme + note
print(somme)`,
    prompt: "Que va afficher ce code ?",
    options: ["36", "3", "[12, 15, 9]", "Une erreur"],
    correct: 0,
    explain: [
      { type: "p", text: "for note in notes parcourt chaque élément de la liste et l'ajoute à somme, qui vaut donc 12 + 15 + 9 = 36 à la fin — le même motif d'accumulateur vu dans le module Algorithmique." },
    ],
  },
];
