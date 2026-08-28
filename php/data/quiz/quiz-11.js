window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["11"] = [
  {
    type: "qcm",
    prompt: "Quel mot-clé introduit la définition d'une fonction en PHP ?",
    options: ["<code class=\"inline\">def</code>", "<code class=\"inline\">function</code>", "<code class=\"inline\">func</code>", "<code class=\"inline\">Fonction</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "function introduit la définition d'une fonction PHP, suivi de son nom et de ses paramètres entre parenthèses." },
    ],
  },
  {
    type: "trace",
    lang: "php",
    code: `function saluer($prenom, $message = "Bonjour") {
    echo $message . ", " . $prenom;
}

saluer("Awa");`,
    prompt: "Que va afficher ce code ?",
    options: ["Bonjour, Awa", "Awa, Bonjour", "Une erreur, message est obligatoire", "Bonjour,"],
    correct: 0,
    explain: [
      { type: "p", text: "$message a une valeur par défaut (\"Bonjour\"), ce qui le rend facultatif à l'appel. saluer(\"Awa\") utilise donc cette valeur par défaut." },
    ],
  },
  {
    type: "qcm",
    lang: "php",
    code: `function carre($x) {
    return $x * $x;
}
$resultat = carre(5);
echo $resultat;`,
    prompt: "Que va afficher ce code ?",
    options: ["25", "5", "$x * $x", "Rien"],
    correct: 0,
    explain: [
      { type: "p", text: "return transmet le résultat du calcul (5 * 5 = 25) au code appelant, qui le stocke dans $resultat." },
    ],
  },
  {
    type: "qcm",
    lang: "php",
    code: `function calcul() {
    $resultat = 42;
    return $resultat;
}
calcul();
echo $resultat;`,
    prompt: "Que se passe-t-il à la dernière ligne ?",
    options: [
      "Cela affiche 42",
      "Une Notice : $resultat n'existe pas en dehors de la fonction",
      "Cela affiche 0",
      "Cela relance calcul() automatiquement",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "$resultat est une variable locale à calcul() : elle n'existe que pendant l'exécution de cette fonction. Y accéder depuis l'extérieur déclenche une Notice de variable indéfinie." },
    ],
  },
  {
    type: "qcm",
    prompt: "Comment rend-on un paramètre de fonction facultatif en PHP ?",
    options: [
      "Ce n'est pas possible en PHP",
      "En lui donnant une valeur par défaut, comme function saluer($prenom, $message = \"Bonjour\")",
      "En le déclarant avec le mot-clé optional",
      "En omettant simplement son nom",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Donner une valeur par défaut à un paramètre (avec =) le rend facultatif : si l'appelant ne le fournit pas, cette valeur par défaut est utilisée automatiquement." },
    ],
  },
  {
    type: "qcm",
    prompt: "Que se passe-t-il si une fonction PHP ne contient aucun return ?",
    options: ["Une erreur systématique", "Elle renvoie null implicitement", "Elle renvoie 0", "Elle renvoie une chaîne vide"],
    correct: 1,
    explain: [
      { type: "p", text: "Comme None en Python, une fonction PHP sans return se termine simplement sans produire de valeur exploitable — elle renvoie null implicitement." },
    ],
  },
  {
    type: "vraifaux",
    prompt: "Vrai ou faux : une variable définie à l'intérieur d'une fonction PHP est visible depuis l'extérieur de cette fonction.",
    options: ["Vrai", "Faux"],
    correct: 1,
    explain: [
      { type: "p", text: "Faux. Une variable créée dans une fonction est locale : elle n'existe que pendant l'exécution de cette fonction, exactement comme en Python et en C." },
    ],
  },
];
