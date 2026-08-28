window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["08"] = [
  {
    type: "qcm",
    prompt: "Quelle boucle PHP correspond directement à TantQue du pseudo-code ?",
    options: ["<code class=\"inline\">for</code>", "<code class=\"inline\">while</code>", "<code class=\"inline\">foreach</code>", "<code class=\"inline\">loop</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "while répète son bloc tant qu'une condition reste vraie, testée avant chaque tour — exactement comme TantQue." },
    ],
  },
  {
    type: "trace",
    lang: "php",
    code: `for ($i = 0; $i <= 4; $i++) {
    echo $i;
}`,
    prompt: "Que va afficher ce code ?",
    options: ["01234", "0123", "12345", "1234"],
    correct: 0,
    explain: [
      { type: "p", text: "La boucle démarre à 0 et continue tant que $i <= 4, donc pour $i valant 0, 1, 2, 3 et 4 : elle affiche 01234." },
    ],
  },
  {
    type: "qcm",
    lang: "php",
    code: `$n = 0;
do {
    echo $n;
    $n++;
} while ($n < 3);`,
    prompt: "Quelle condition Répéter...Jusqu'à correspond réellement à ce do...while ?",
    options: [
      "Jusqu'à N &lt; 3",
      "Jusqu'à N &gt;= 3",
      "TantQue N &lt; 3",
      "Il n'y a pas d'équivalent",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Comme en C, do...while continue tant que sa condition reste vraie, alors que Répéter...Jusqu'à s'arrête dès qu'elle devient vraie : il faut inverser la condition. while ($n < 3) équivaut à Jusqu'à N >= 3." },
    ],
  },
  {
    type: "qcm",
    lang: "php",
    code: `for ($i = 0; $i < 10; $i++) {
    if ($i == 5) {
        break;
    }
    if ($i % 2 == 0) {
        continue;
    }
    echo $i;
}`,
    prompt: "Que va afficher ce code ?",
    options: ["13", "12345", "1234", "0123456789"],
    correct: 0,
    explain: [
      { type: "p", text: "continue saute les nombres pairs (0, 2, 4) sans les afficher. break arrête tout dès que $i vaut 5. Restent donc affichés : 1 et 3, soit \"13\"." },
    ],
  },
  {
    type: "qcm",
    prompt: "Pourquoi foreach n'est-il pas présenté dans ce chapitre sur les boucles ?",
    options: [
      "Parce qu'il n'existe pas en PHP",
      "Parce qu'il est spécifiquement conçu pour parcourir un tableau, notion vue seulement au chapitre suivant",
      "Parce qu'il est identique à for",
      "Parce qu'il est obsolète",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "foreach est indissociable des tableaux, qui ne sont introduits qu'au chapitre 9 — il y est donc naturellement présenté à ce moment-là, pour respecter l'ordre progressif du cours." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quelle est la différence entre break et continue ?",
    options: [
      "Elles sont identiques",
      "break arrête complètement la boucle, continue passe au tour suivant",
      "continue arrête la boucle, break passe au tour suivant",
      "break ne fonctionne que dans les boucles for",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "break sort définitivement de la boucle. continue interrompt seulement le tour en cours et enchaîne sur le suivant — comportement identique à celui vu en C et en Python." },
    ],
  },
  {
    type: "qcm",
    prompt: "Que regroupe la syntaxe for ($i = 0; $i < 10; $i++) sur une seule ligne ?",
    options: [
      "Seulement la condition d'arrêt",
      "L'initialisation, la condition de poursuite, et l'incrémentation",
      "Uniquement l'incrémentation",
      "Le corps entier de la boucle",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "La boucle for de PHP (comme celle du C) regroupe ces trois éléments sur une seule ligne, séparés par des points-virgules : $i = 0 (initialisation), $i < 10 (condition), $i++ (incrémentation)." },
    ],
  },
  {
    type: "vraifaux",
    prompt: "Vrai ou faux : $i++ est un raccourci équivalent à $i = $i + 1.",
    options: ["Vrai", "Faux"],
    correct: 0,
    explain: [
      { type: "p", text: "Vrai. ++ est l'opérateur d'incrémentation, qui ajoute 1 à la variable — un raccourci très courant en PHP comme en C." },
    ],
  },
];
