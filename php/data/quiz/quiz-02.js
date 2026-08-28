window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["02"] = [
  {
    type: "qcm",
    lang: "php",
    code: `age = 25;
echo age;`,
    prompt: "Pourquoi ce code PHP est-il incorrect ?",
    options: ["Il manque des guillemets", "Il manque le symbole $ devant le nom de la variable", "echo n'existe pas en PHP", "Il manque un point-virgule"],
    correct: 1,
    explain: [
      { type: "p", text: "En PHP, tout nom de variable doit obligatoirement commencer par $. Sans lui, PHP ne reconnaît pas age comme une variable valide." },
    ],
  },
  {
    type: "qcm",
    prompt: "PHP est-il sensible à la casse pour les noms de variables ?",
    options: [
      "Non, $age et $Age désignent la même variable",
      "Oui, $age et $Age sont deux variables totalement différentes",
      "Cela dépend de la version de PHP installée",
      "Seule la première lettre compte",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "PHP distingue strictement majuscules et minuscules dans les noms de variables : $age et $Age sont deux variables indépendantes, ce qui peut être une source de bugs si l'on n'y prend pas garde." },
    ],
  },
  {
    type: "qcm",
    lang: "php",
    code: `$x = 25;
$x = "vingt-cinq";
echo gettype($x);`,
    prompt: "Que va afficher ce code ?",
    options: ["integer", "string", "Une erreur, le type ne peut pas changer", "25"],
    correct: 1,
    explain: [
      { type: "p", text: "Comme Python, PHP a un typage dynamique : une variable peut recevoir une valeur d'un type totalement différent sans provoquer d'erreur. gettype($x) révèle le type courant, ici string après la seconde affectation." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quelle fonction permet de connaître le type actuel d'une variable en PHP ?",
    options: ["<code class=\"inline\">typeof($x)</code>", "<code class=\"inline\">gettype($x)</code>", "<code class=\"inline\">type($x)</code>", "<code class=\"inline\">class($x)</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "gettype() renvoie le type actuel d'une variable sous forme de texte (ex: \"integer\", \"string\", \"boolean\")." },
    ],
  },
  {
    type: "qcm",
    prompt: "Un nom de variable PHP peut-il commencer par un chiffre ?",
    options: ["Oui, toujours", "Non, il doit commencer par une lettre ou un underscore", "Seulement pour les nombres entiers", "Seulement en PHP 8"],
    correct: 1,
    explain: [
      { type: "p", text: "Après le symbole $ obligatoire, un nom de variable doit commencer par une lettre ou un underscore _ — jamais directement par un chiffre." },
    ],
  },
  {
    type: "vraifaux",
    prompt: "Vrai ou faux : comme en pseudo-code et en C, une variable PHP doit être déclarée avec son type avant d'être utilisée.",
    options: ["Vrai", "Faux"],
    correct: 1,
    explain: [
      { type: "p", text: "Faux. PHP a un typage dynamique, comme Python : aucune déclaration de type préalable n'est nécessaire, le type est déduit automatiquement de la valeur affectée." },
    ],
  },
];
