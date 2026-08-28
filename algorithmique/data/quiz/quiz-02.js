window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["02"] = [
  {
    type: "qcm",
    prompt: "Quelle instruction utilise-t-on pour mettre l'algorithme en pause et récupérer une saisie clavier ?",
    options: ["<code class=\"inline\">Écrire</code>", "<code class=\"inline\">Lire</code>", "<code class=\"inline\">Saisir</code>", "<code class=\"inline\">Entrée</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "<code class=\"inline\">Lire</code> attend une saisie de l'utilisateur et la range dans la variable indiquée. <code class=\"inline\">Écrire</code> fait l'inverse : elle affiche une information à l'écran, sans jamais rien demander à l'utilisateur." },
    ],
  },
  {
    type: "qcm",
    prompt: "Que va afficher cet algorithme si l'utilisateur entre 12 ?",
    code: `Variable N en Entier
Début
  Écrire "Entrez un nombre : "
  Lire N
  Écrire "Vous avez saisi : ", N
Fin`,
    options: ["Vous avez saisi : N", "Vous avez saisi : 12", "12", "Une erreur, car N n'est pas entre guillemets"],
    correct: 1,
    explain: [
      { type: "p", text: "Dans <code class=\"inline\">Écrire \"Vous avez saisi : \", N</code>, le texte entre guillemets est affiché tel quel, puis la virgule ajoute à la suite le <em>contenu</em> de la variable N (12), et non le mot « N ». Seul le texte entre guillemets est affiché littéralement." },
    ],
  },
  {
    type: "qcm",
    prompt: "Pourquoi <code class=\"inline\">Écrire Bonjour</code> (sans guillemets) est-il problématique ?",
    options: [
      "Ce n'est pas problématique, cela affiche \"Bonjour\"",
      "L'algorithme cherche à afficher le contenu d'une variable nommée Bonjour, qui n'existe probablement pas",
      "Écrire n'accepte qu'un seul mot à la fois",
      "Il manque un point-virgule à la fin",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Sans guillemets, un identifiant est toujours interprété comme le nom d'une variable dont on veut afficher le contenu — jamais comme du texte littéral. Si aucune variable Bonjour n'a été déclarée, l'algorithme est incorrect." },
      { type: "callout", variant: "tip", title: "Retenir la règle", text: "Texte littéral = toujours entre guillemets. Sans guillemets = toujours un nom de variable." },
    ],
  },
  {
    type: "vraifaux",
    prompt: "Vrai ou faux : une variable doit être déclarée avant de pouvoir être utilisée dans une instruction Lire.",
    options: ["Vrai", "Faux"],
    correct: 0,
    explain: [
      { type: "p", text: "Vrai. Toute variable doit exister (être déclarée avec son type) avant d'apparaître dans une instruction Lire ou Écrire, ou dans tout calcul. C'est cette déclaration qui réserve l'espace mémoire et fixe le type de valeurs qu'elle pourra contenir." },
    ],
  },
  {
    type: "qcm",
    prompt: "Dans une instruction <code class=\"inline\">Écrire</code> comportant plusieurs éléments séparés par des virgules, comment sont-ils affichés ?",
    options: [
      "Chacun sur une ligne séparée, dans l'ordre inverse",
      "À la suite les uns des autres, dans l'ordre où ils sont écrits",
      "Seul le dernier élément est réellement affiché",
      "Dans un ordre aléatoire",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Les éléments séparés par des virgules dans un <code class=\"inline\">Écrire</code> sont concaténés à l'affichage, dans l'ordre exact où ils apparaissent : <code class=\"inline\">Écrire N, \" x \", i, \" = \", N*i</code> produit par exemple <code class=\"inline\">7 x 3 = 21</code>." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quelle est la bonne pratique académique avant chaque instruction <code class=\"inline\">Lire</code> ?",
    options: [
      "Aucune, Lire se suffit à lui-même",
      "Faire précéder Lire d'un Écrire qui explique clairement ce qui est attendu",
      "Toujours initialiser la variable à zéro juste avant",
      "Déclarer une deuxième variable de secours",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Un algorithme lisible et académiquement correct annonce toujours à l'utilisateur ce qu'il doit saisir (nature de la valeur, unité, format) avant de lancer un <code class=\"inline\">Lire</code>. C'est aussi une exigence de bon sens : sans consigne, l'utilisateur ne sait pas quoi taper." },
    ],
  },
];
