window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["11"] = [
  {
    type: "qcm",
    prompt: "Quel avantage offre with open(...) as fichier: par rapport à un simple open() ?",
    options: [
      "Aucun, c'est purement stylistique",
      "Le fichier est automatiquement refermé à la sortie du bloc, même en cas d'erreur",
      "Cela ouvre le fichier deux fois plus vite",
      "with n'existe pas réellement en Python",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "with garantit la fermeture automatique du fichier dès la sortie du bloc indenté, ce qui évite d'oublier un Fermer explicite — une source d'erreurs classique en pseudo-code et en C." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quel mode d'ouverture faut-il utiliser pour lire un fichier existant sans le modifier ?",
    options: ["<code class=\"inline\">\"w\"</code>", "<code class=\"inline\">\"r\"</code>", "<code class=\"inline\">\"a\"</code>", "<code class=\"inline\">\"x\"</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "\"r\" (read) ouvre un fichier existant en lecture seule. \"w\" (write) écraserait son contenu, et \"a\" (append) ajouterait à la suite." },
    ],
  },
  {
    type: "qcm",
    prompt: "Que se passe-t-il si l'on ouvre un fichier existant en mode \"w\" ?",
    options: [
      "Le contenu existant est conservé, les nouvelles données s'ajoutent à la fin",
      "Le fichier repart vide : tout le contenu existant est écrasé",
      "Une erreur est levée automatiquement",
      "Rien, le mode w ne fait qu'afficher le contenu",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Le mode \"w\" écrase intégralement le contenu existant d'un fichier. Pour ajouter du texte sans perdre ce qui existe déjà, il faut utiliser le mode \"a\" (append)." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quelle instruction Python permet de parcourir un fichier ligne par ligne ?",
    options: [
      "<code class=\"inline\">for ligne in fichier:</code>",
      "<code class=\"inline\">while fichier:</code>",
      "<code class=\"inline\">fichier.loop()</code>",
      "<code class=\"inline\">repeat fichier:</code>",
    ],
    correct: 0,
    explain: [
      { type: "p", text: "for ligne in fichier: parcourt automatiquement le fichier une ligne à la fois — l'équivalent Python direct du TantQue Non EOF(1) du pseudo-code, mais bien plus concis." },
    ],
  },
  {
    type: "qcm",
    prompt: "Pourquoi utilise-t-on souvent .strip() sur une ligne lue dans un fichier ?",
    options: [
      "Pour la convertir en majuscules",
      "Pour retirer le retour à la ligne final et les espaces superflus",
      "Pour la transformer en nombre",
      "Ce n'est jamais utile",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Chaque ligne lue dans un fichier texte conserve généralement son retour à la ligne final (\\n). .strip() le retire, ainsi que les espaces en début et fin, pour un affichage plus propre." },
    ],
  },
  {
    type: "vraifaux",
    prompt: "Vrai ou faux : contrairement à print(), la méthode write() n'ajoute jamais automatiquement de retour à la ligne.",
    options: ["Vrai", "Faux"],
    correct: 0,
    explain: [
      { type: "p", text: "Vrai. Il faut explicitement ajouter \\n à la fin de chaque appel à write() si l'on veut que la ligne suivante commence sur une nouvelle ligne dans le fichier." },
    ],
  },
];
