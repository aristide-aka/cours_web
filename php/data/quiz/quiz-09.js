window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["09"] = [
  {
    type: "qcm",
    prompt: "Quelle syntaxe moderne utilise-t-on pour créer un tableau en PHP ?",
    options: ["Des accolades { }", "Des crochets [ ]", "Des parenthèses ( )", "Des chevrons &lt; &gt;"],
    correct: 1,
    explain: [
      { type: "p", text: "$notes = [12, 15, 9]; est la syntaxe moderne (depuis PHP 5.4), plus concise que l'ancienne écriture array(12, 15, 9), strictement équivalente." },
    ],
  },
  {
    type: "qcm",
    lang: "php",
    code: `$notes = [12, 15, 9];
echo $notes[0];`,
    prompt: "Que va afficher ce code ?",
    options: ["9", "12", "15", "Une erreur"],
    correct: 1,
    explain: [
      { type: "p", text: "Comme en pseudo-code, le premier élément d'un tableau PHP est à l'indice 0. $notes[0] vaut donc 12." },
    ],
  },
  {
    type: "qcm",
    prompt: "Qu'est-ce qu'un tableau associatif en PHP ?",
    options: [
      "Un tableau qui ne peut contenir que des nombres",
      "Un tableau dont les clés sont du texte plutôt que de simples indices numériques",
      "Un tableau limité à 2 éléments",
      "Un type qui n'existe pas en PHP",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Un tableau associatif utilise des clés de son choix (souvent du texte) plutôt que des indices numériques automatiques, jouant alors le rôle d'un dictionnaire, comme $eleve = [\"nom\" => \"Awa\", \"age\" => 18];." },
    ],
  },
  {
    type: "qcm",
    lang: "php",
    code: `$notes = [12, 15, 9];
$notes[] = 18;
echo count($notes);`,
    prompt: "Que va afficher ce code ?",
    options: ["3", "4", "18", "Une erreur"],
    correct: 1,
    explain: [
      { type: "p", text: "$notes[] = 18; ajoute 18 à la fin du tableau, qui contient alors 4 éléments. count() renvoie ce nombre d'éléments." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quelle boucle est spécifiquement conçue pour parcourir un tableau PHP ?",
    options: ["<code class=\"inline\">while</code>", "<code class=\"inline\">for</code>", "<code class=\"inline\">foreach</code>", "<code class=\"inline\">do...while</code>"],
    correct: 2,
    explain: [
      { type: "p", text: "foreach donne directement accès à chaque valeur du tableau (et, si besoin, à sa clé), sans avoir à gérer un indice manuellement." },
    ],
  },
  {
    type: "trace",
    lang: "php",
    code: `$eleve = ["nom" => "Awa", "age" => 18];
foreach ($eleve as $cle => $valeur) {
    echo $cle . ":" . $valeur . " ";
}`,
    prompt: "Que va afficher ce code ?",
    options: ["nom:Awa age:18 ", "Awa:nom 18:age ", "nom age ", "Awa 18 "],
    correct: 0,
    explain: [
      { type: "p", text: "foreach ($eleve as $cle => $valeur) donne accès simultanément à la clé et à la valeur de chaque paire, dans l'ordre où elles ont été définies : nom:Awa puis age:18." },
    ],
  },
  {
    type: "qcm",
    prompt: "Combien de types de tableaux distincts existe-t-il réellement en PHP, techniquement ?",
    options: [
      "Deux types séparés : indexé et associatif",
      "Un seul type array, dont un tableau « indexé » n'est qu'un cas particulier avec des clés numériques automatiques",
      "Trois types distincts",
      "Cela dépend de la version de PHP",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "En PHP, il n'existe qu'un seul type array sous le capot : un tableau « classique » (indexé) n'est en réalité qu'un tableau associatif dont les clés sont automatiquement 0, 1, 2…" },
    ],
  },
  {
    type: "vraifaux",
    prompt: "Vrai ou faux : contrairement au Tableau du pseudo-code, un tableau PHP n'a pas besoin de taille fixée à l'avance.",
    options: ["Vrai", "Faux"],
    correct: 0,
    explain: [
      { type: "p", text: "Vrai. Un tableau PHP grandit et rétrécit librement au fil de l'exécution, comme une liste Python — contrairement au Tableau du pseudo-code (et au tableau C) qui exige une taille fixée dès sa déclaration." },
    ],
  },
];
