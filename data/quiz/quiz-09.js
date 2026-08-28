window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["09"] = [
  {
    type: "qcm",
    prompt: "Quelles sont, dans l'ordre, les trois étapes indispensables pour manipuler un fichier ?",
    options: [
      "Fermer, Lire/Écrire, Ouvrir",
      "Ouvrir, Lire/Écrire, Fermer",
      "Lire, Ouvrir, Écrire",
      "Ouvrir, Fermer, Lire/Écrire",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Un fichier doit toujours être ouvert avant d'être utilisé (en Lecture ou en Écriture), puis fermé une fois le traitement terminé. C'est le cycle systématique de tout algorithme manipulant un fichier." },
    ],
  },
  {
    type: "qcm",
    prompt: "Que se passe-t-il si on ouvre en mode Écriture un fichier qui contenait déjà des données ?",
    options: [
      "Les nouvelles données sont ajoutées à la fin, l'ancien contenu est conservé",
      "Le fichier repart vide : tout l'ancien contenu est perdu",
      "Une erreur d'exécution est levée automatiquement",
      "Le mode Écriture se comporte comme le mode Lecture",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Le mode Écriture écrase intégralement le contenu existant du fichier. C'est une différence essentielle avec le mode Lecture (qui ne fait que consulter, sans jamais modifier) — une confusion entre les deux modes peut faire perdre des données de façon irréversible." },
    ],
  },
  {
    type: "qcm",
    prompt: "À quoi sert la fonction <code class=\"inline\">EOF(canal)</code> ?",
    options: [
      "Elle compte le nombre total de lignes du fichier",
      "Elle devient vraie lorsque la fin du fichier a été atteinte",
      "Elle ferme automatiquement le fichier",
      "Elle efface le contenu du fichier",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "EOF (End Of File) renvoie Vrai dès qu'il n'y a plus rien à lire dans le fichier. Elle est presque toujours utilisée dans une condition <code class=\"inline\">TantQue Non EOF(canal)</code>, pour boucler exactement le bon nombre de fois sans connaître à l'avance la taille du fichier." },
    ],
  },
  {
    type: "qcm",
    prompt: "Pourquoi est-il important d'appeler <code class=\"inline\">Fermer</code> sur un fichier une fois le traitement terminé ?",
    options: [
      "Ce n'est qu'une convention de style, sans réel impact",
      "Pour garantir que les données écrites soient réellement enregistrées, et libérer l'accès au fichier",
      "Parce que sinon le fichier grossit indéfiniment",
      "Uniquement en mode Lecture, jamais en mode Écriture",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Tant qu'un fichier reste ouvert, en particulier en écriture, rien ne garantit que son contenu soit intégralement et définitivement enregistré sur le disque. Fermer le fichier finalise l'opération et libère la ressource proprement." },
    ],
  },
  {
    type: "trace",
    code: `Variable Ligne en Caractère
Début
  Ouvrir "Exemple.txt" sur 5 en Lecture
  TantQue Non EOF(5)
    LireFichier 5, Ligne
    Écrire Ligne
  FinTantQue
  Fermer 5
Fin`,
    prompt: "Que fait précisément cet algorithme ?",
    options: [
      "Il compte le nombre de lignes du fichier Exemple.txt",
      "Il affiche à l'écran l'intégralité du contenu du fichier Exemple.txt, ligne par ligne",
      "Il copie Exemple.txt vers un nouveau fichier",
      "Il supprime le contenu de Exemple.txt",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "La boucle lit une ligne à chaque tour et l'affiche immédiatement à l'écran, jusqu'à ce que EOF(5) devienne vraie (plus rien à lire). C'est le squelette le plus classique pour afficher tout le contenu d'un fichier texte." },
    ],
  },
  {
    type: "vraifaux",
    prompt: "Vrai ou faux : on peut avoir plusieurs fichiers ouverts en même temps, à condition de leur attribuer des numéros de canal différents.",
    options: ["Vrai", "Faux"],
    correct: 0,
    explain: [
      { type: "p", text: "Vrai. Le numéro de canal identifie chaque fichier ouvert de façon unique. On peut par exemple ouvrir un fichier source sur le canal 1 et un fichier destination sur le canal 2 simultanément — c'est exactement ce que fait l'algorithme de concaténation de fichiers de ce chapitre." },
    ],
  },
];
