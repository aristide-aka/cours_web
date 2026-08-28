window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["10"] = [
  {
    type: "qcm",
    lang: "php",
    code: `$nom = "Awa";
echo 'Bonjour $nom';`,
    prompt: "Que va afficher ce code ?",
    options: ["Bonjour Awa", "Bonjour $nom", "Une erreur", "Bonjour"],
    correct: 1,
    explain: [
      { type: "p", text: "Les guillemets simples n'interprètent jamais les variables : le texte est affiché tel quel, littéralement \"Bonjour $nom\"." },
    ],
  },
  {
    type: "qcm",
    lang: "php",
    code: `$nom = "Awa";
echo "Bonjour $nom";`,
    prompt: "Que va afficher ce code, cette fois avec des guillemets doubles ?",
    options: ["Bonjour Awa", "Bonjour $nom", "Une erreur", "$nom"],
    correct: 0,
    explain: [
      { type: "p", text: "Les guillemets doubles interpolent les variables : $nom est remplacé par sa valeur directement dans la chaîne, affichant \"Bonjour Awa\"." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quelle fonction PHP donne la longueur d'une chaîne, équivalent de Len ?",
    options: ["<code class=\"inline\">length()</code>", "<code class=\"inline\">strlen()</code>", "<code class=\"inline\">count()</code>", "<code class=\"inline\">size()</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "strlen($s) renvoie le nombre de caractères d'une chaîne — l'équivalent PHP de Len en pseudo-code." },
    ],
  },
  {
    type: "qcm",
    lang: "php",
    code: `$mot = "algorithme";
echo strpos($mot, "algo");`,
    prompt: "Que va afficher ce code ?",
    options: ["1", "0", "false", "\"algo\""],
    correct: 1,
    explain: [
      { type: "p", text: "strpos renvoie la position de la première occurrence, en comptant à partir de 0. \"algo\" se trouve tout au début de \"algorithme\", donc à la position 0." },
    ],
  },
  {
    type: "qcm",
    lang: "php",
    code: `$mot = "algorithme";
if (!strpos($mot, "algo")) {
    echo "absent";
} else {
    echo "présent";
}`,
    prompt: "Que va réellement afficher ce script, et pourquoi est-ce un piège ?",
    options: [
      "\"présent\", car \"algo\" est bien dans \"algorithme\"",
      "\"absent\", car strpos renvoie 0 et 0 est considéré comme faux",
      "Une erreur d'exécution",
      "\"absent\" puis \"présent\"",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "\"algo\" est trouvé à la position 0. Or 0 est une valeur \"falsy\" en PHP : !strpos(...) vaut donc vrai à tort, et affiche \"absent\" alors que le motif est bien présent. Il aurait fallu comparer avec === false." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quelle fonction découpe une chaîne en tableau selon un séparateur ?",
    options: ["<code class=\"inline\">split()</code>", "<code class=\"inline\">explode()</code>", "<code class=\"inline\">divide()</code>", "<code class=\"inline\">cut()</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "explode(\" \", \"Bonjour le monde\") découpe la chaîne selon les espaces, produisant [\"Bonjour\", \"le\", \"monde\"]. implode() effectue l'opération inverse." },
    ],
  },
  {
    type: "vraifaux",
    prompt: "Vrai ou faux : en PHP, guillemets simples et doubles sont strictement équivalents, comme en Python.",
    options: ["Vrai", "Faux"],
    correct: 1,
    explain: [
      { type: "p", text: "Faux. Contrairement à Python, seuls les guillemets doubles interprètent les variables à l'intérieur d'une chaîne (interpolation) ; les guillemets simples affichent le texte tel quel, sans aucune interprétation." },
    ],
  },
];
