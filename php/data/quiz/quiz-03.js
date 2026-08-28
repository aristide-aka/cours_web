window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["03"] = [
  {
    type: "qcm",
    prompt: "Quel type représente l'absence de valeur en PHP ?",
    options: ["<code class=\"inline\">void</code>", "<code class=\"inline\">null</code>", "<code class=\"inline\">empty</code>", "<code class=\"inline\">none</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "null représente une variable sans valeur définie — comme un casier volontairement laissé vide." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quel type correspond à un nombre à virgule comme 1.78 en PHP ?",
    options: ["<code class=\"inline\">int</code>", "<code class=\"inline\">float</code>", "<code class=\"inline\">string</code>", "<code class=\"inline\">bool</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "float désigne les nombres décimaux. int est réservé aux nombres entiers, sans partie décimale — exactement comme en Python." },
    ],
  },
  {
    type: "qcm",
    lang: "php",
    code: `$prenom = "Awa";
echo $prenom[0];`,
    prompt: "Que va afficher ce code ?",
    options: ["Awa", "A", "0", "Une erreur"],
    correct: 1,
    explain: [
      { type: "p", text: "Une chaîne PHP peut être indexée comme un tableau de caractères : $prenom[0] donne le tout premier caractère, \"A\"." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quel type de données correspond au Tableau du pseudo-code en PHP ?",
    options: ["<code class=\"inline\">list</code>", "<code class=\"inline\">array</code>", "<code class=\"inline\">collection</code>", "<code class=\"inline\">set</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "array est le type PHP pour une collection de valeurs. Il sera étudié en détail au chapitre 9 — il joue en réalité un rôle proche à la fois de la liste et du dictionnaire vus dans le module Python." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quelle fonction permet de tester spécifiquement si une variable est un entier ?",
    options: ["<code class=\"inline\">is_int()</code>", "<code class=\"inline\">check_int()</code>", "<code class=\"inline\">int_test()</code>", "<code class=\"inline\">as_int()</code>"],
    correct: 0,
    explain: [
      { type: "p", text: "is_int() (et ses équivalents is_string(), is_array(), is_bool()...) renvoie directement true ou false pour tester le type d'une variable." },
    ],
  },
  {
    type: "vraifaux",
    prompt: "Vrai ou faux : PHP demande une déclaration de type explicite avant chaque variable, comme en C.",
    options: ["Vrai", "Faux"],
    correct: 1,
    explain: [
      { type: "p", text: "Faux. PHP déduit le type automatiquement de la valeur affectée, sans déclaration explicite préalable — comme Python, et à la différence du C." },
    ],
  },
];
