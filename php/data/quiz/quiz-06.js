window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["06"] = [
  {
    type: "qcm",
    lang: "php",
    code: `var_dump(5 == "5");`,
    prompt: "Que va afficher ce code ?",
    options: ["true", "false", "Une erreur", "\"5\""],
    correct: 0,
    explain: [
      { type: "p", text: "== compare après conversion automatique de type si nécessaire : la chaîne \"5\" est convertie en nombre 5, et la comparaison renvoie true." },
    ],
  },
  {
    type: "qcm",
    lang: "php",
    code: `var_dump(5 === "5");`,
    prompt: "Que va afficher ce code ?",
    options: ["true", "false", "Une erreur", "5"],
    correct: 1,
    explain: [
      { type: "p", text: "=== exige une égalité stricte, à la fois en valeur et en type. 5 est un int, \"5\" est un string : les types diffèrent, donc le résultat est false, même si la « valeur » semble identique." },
    ],
  },
  {
    type: "qcm",
    prompt: "Pourquoi est-il généralement recommandé de préférer === à == en PHP ?",
    options: [
      "Ce n'est pas recommandé, == est toujours préférable",
      "Pour éviter les conversions de type automatiques, parfois source de résultats surprenants",
      "=== est plus rapide à taper",
      "== n'existe plus dans les versions récentes de PHP",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Les conversions automatiques de == peuvent produire des résultats contre-intuitifs dans certains cas particuliers. Utiliser === par défaut rend le comportement du code plus prévisible et plus facile à déboguer." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quel opérateur PHP correspond à ET du pseudo-code ?",
    options: ["<code class=\"inline\">and</code> uniquement", "<code class=\"inline\">&&</code>", "<code class=\"inline\">+</code>", "<code class=\"inline\">et</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "PHP utilise des symboles hérités du C pour ses opérateurs logiques : && (ET), || (OU), ! (NON) — contrairement à Python qui utilise des mots entiers (and, or, not)." },
    ],
  },
  {
    type: "qcm",
    lang: "php",
    code: `$age = 20;
$a_un_billet = false;
var_dump($age >= 18 && $a_un_billet);`,
    prompt: "Que va afficher ce code ?",
    options: ["true", "false", "20", "Une erreur"],
    correct: 1,
    explain: [
      { type: "p", text: "&& exige que les deux conditions soient vraies. $age >= 18 est vrai, mais $a_un_billet vaut false : l'ensemble est donc false." },
    ],
  },
  {
    type: "qcm",
    prompt: "Que calcule l'opérateur % en PHP ?",
    options: ["Un pourcentage", "Le reste de la division entière", "La racine carrée", "La concaténation"],
    correct: 1,
    explain: [
      { type: "p", text: "% (modulo) renvoie le reste de la division : 10 % 3 vaut 1, exactement comme en C et en Python." },
    ],
  },
  {
    type: "vraifaux",
    prompt: "Vrai ou faux : ** est l'opérateur de puissance en PHP.",
    options: ["Vrai", "Faux"],
    correct: 0,
    explain: [
      { type: "p", text: "Vrai. 2 ** 3 vaut 8 en PHP, exactement comme en Python." },
    ],
  },
];
