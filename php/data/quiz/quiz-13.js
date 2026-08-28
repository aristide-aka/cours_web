window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["13"] = [
  {
    type: "qcm",
    prompt: "Quelle fonction PHP ouvre un fichier ?",
    options: ["<code class=\"inline\">open()</code>", "<code class=\"inline\">fopen()</code>", "<code class=\"inline\">file_open()</code>", "<code class=\"inline\">openFile()</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "fopen(\"fichier.txt\", \"r\") ouvre un fichier dans le mode précisé et renvoie une ressource utilisable ensuite pour lire ou écrire." },
    ],
  },
  {
    type: "qcm",
    prompt: "Que se passe-t-il si l'on ouvre un fichier existant en mode \"w\" ?",
    options: [
      "Le contenu est conservé, les nouvelles données s'ajoutent à la fin",
      "Le fichier repart vide : le contenu existant est écrasé",
      "Une erreur est levée automatiquement",
      "Rien, w n'affiche que le contenu",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "\"w\" écrase intégralement le contenu existant, exactement comme en C et en Python. Pour ajouter sans perdre le contenu, il faut utiliser \"a\"." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quelle fonction devient vraie une fois la fin d'un fichier atteinte ?",
    options: ["<code class=\"inline\">end()</code>", "<code class=\"inline\">feof()</code>", "<code class=\"inline\">eof()</code>", "<code class=\"inline\">last()</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "feof($f) renvoie true une fois qu'il n'y a plus rien à lire dans le fichier — l'équivalent direct de la fonction EOF du pseudo-code." },
    ],
  },
  {
    type: "qcm",
    prompt: "Pourquoi doit-on toujours vérifier que fopen() n'a pas renvoyé false ?",
    options: [
      "Ce n'est qu'une convention de style",
      "Parce que fopen() échoue silencieusement (fichier absent, droits insuffisants…) en renvoyant false plutôt que de bloquer le script",
      "Parce que false provoque toujours un arrêt automatique",
      "Cette vérification n'existe pas en PHP",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Contrairement à Ouvrir en pseudo-code, fopen() peut échouer sans lever d'erreur bloquante : il renvoie simplement false. Un script robuste doit toujours tester if ($f === false) avant de continuer." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quelle fonction lit une ligne à la fois dans un fichier ouvert ?",
    options: ["<code class=\"inline\">fread()</code>", "<code class=\"inline\">fgets()</code>", "<code class=\"inline\">readline()</code>", "<code class=\"inline\">getLine()</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "fgets($f) lit et renvoie la prochaine ligne du fichier à chaque appel — souvent utilisée dans une boucle while (!feof($f))." },
    ],
  },
  {
    type: "vraifaux",
    prompt: "Vrai ou faux : comme en C et en Python, fwrite() n'ajoute jamais automatiquement de retour à la ligne.",
    options: ["Vrai", "Faux"],
    correct: 0,
    explain: [
      { type: "p", text: "Vrai. Il faut explicitement ajouter \\n à la fin de chaque appel à fwrite() si l'on veut que la ligne suivante démarre sur une nouvelle ligne." },
    ],
  },
];
