window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["02"] = [
  {
    type: "qcm",
    prompt: "Qu'est-ce que le \"typage dynamique\" en Python ?",
    options: [
      "Il faut déclarer le type d'une variable avant de l'utiliser, comme en C",
      "Le type d'une variable est déduit automatiquement à partir de la valeur qu'on lui affecte",
      "Toutes les variables sont obligatoirement du type texte",
      "Le type d'une variable ne peut jamais changer une fois fixé",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Contrairement au pseudo-code ou au C, Python n'exige aucune déclaration de type préalable : écrire <code class=\"inline\">age = 25</code> crée directement une variable de type int, déduit de la valeur affectée." },
    ],
  },
  {
    type: "qcm",
    lang: "python",
    code: `x = 25
x = "vingt-cinq"`,
    prompt: "Que se passe-t-il lors de la seconde ligne ?",
    options: [
      "Une erreur, car x est déjà un int",
      "Rien de particulier : x pointe désormais vers une chaîne de caractères, c'est parfaitement valide",
      "x devient automatiquement égal à 25 malgré tout",
      "Python convertit \"vingt-cinq\" en nombre",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Une variable Python n'est pas liée à un type fixe : elle peut être réaffectée à une valeur d'un tout autre type sans provoquer d'erreur, contrairement au C où le type est fixé à la déclaration." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quel type Python correspond à un nombre à virgule comme 1.78 ?",
    options: ["<code class=\"inline\">int</code>", "<code class=\"inline\">float</code>", "<code class=\"inline\">str</code>", "<code class=\"inline\">bool</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "float désigne les nombres décimaux (à virgule flottante). int est réservé aux nombres entiers, sans partie décimale." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quelle fonction permet de connaître le type actuel d'une variable ?",
    options: ["<code class=\"inline\">kind()</code>", "<code class=\"inline\">type()</code>", "<code class=\"inline\">class()</code>", "<code class=\"inline\">typeof()</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "type() renvoie le type actuel d'une valeur, par exemple <code class=\"inline\">&lt;class 'int'&gt;</code> — très utile pour vérifier ce que Python a déduit automatiquement." },
    ],
  },
  {
    type: "qcm",
    lang: "python",
    code: `prenom = "Aïcha"
print(prenom[0:3])`,
    prompt: "Que va afficher ce code ?",
    options: ["\"Aï\"", "\"Aïc\"", "\"ïch\"", "\"Aïcha\""],
    correct: 1,
    explain: [
      { type: "p", text: "prenom[0:3] extrait les caractères d'indice 0, 1 et 2 (l'indice 3 étant exclu, comme pour range()) : A, ï, c — soit \"Aïc\"." },
    ],
  },
  {
    type: "vraifaux",
    prompt: "Vrai ou faux : les guillemets simples '...' et doubles \"...\" sont strictement équivalents pour écrire une chaîne de caractères en Python.",
    options: ["Vrai", "Faux"],
    correct: 0,
    explain: [
      { type: "p", text: "Vrai. Contrairement à certains langages, Python ne fait aucune distinction de fonctionnement entre guillemets simples et doubles pour délimiter une chaîne — c'est purement une question de préférence (ou pratique, si le texte contient déjà l'un des deux)." },
    ],
  },
];
