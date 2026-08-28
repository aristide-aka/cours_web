window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["12"] = [
  {
    type: "qcm",
    prompt: "Quel bloc contient le code potentiellement risqué en PHP ?",
    options: ["<code class=\"inline\">catch</code>", "<code class=\"inline\">try</code>", "<code class=\"inline\">finally</code>", "<code class=\"inline\">throw</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "Le code susceptible de provoquer une exception se place dans le bloc try — exactement le même principe qu'en Python avec try/except." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quelle instruction déclenche volontairement une exception en PHP ?",
    options: ["<code class=\"inline\">raise</code>", "<code class=\"inline\">throw</code>", "<code class=\"inline\">error</code>", "<code class=\"inline\">catch</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "throw new Exception(\"message\") déclenche volontairement une exception, qui sera interceptée par un bloc catch correspondant s'il existe." },
    ],
  },
  {
    type: "qcm",
    prompt: "Que renvoie $e->getMessage() dans un bloc catch (Exception $e) ?",
    options: [
      "Le type exact de l'exception",
      "Le message explicatif associé à l'exception",
      "La ligne exacte où l'erreur s'est produite",
      "Rien, cette méthode n'existe pas",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "getMessage() renvoie le texte explicatif fourni lors du throw new Exception(\"...\"), utile pour informer l'utilisateur ou pour le débogage." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quelle est la différence entre une Notice et une Fatal Error en PHP ?",
    options: [
      "Aucune différence",
      "Une Notice n'arrête pas le script, une Fatal Error l'arrête immédiatement",
      "Une Fatal Error n'arrête jamais le script",
      "Une Notice est plus grave qu'une Fatal Error",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Une Notice (ou un Warning) signale un problème mineur sans interrompre l'exécution du script, alors qu'une Fatal Error stoppe immédiatement tout le programme." },
    ],
  },
  {
    type: "qcm",
    prompt: "À quoi sert un bloc finally ?",
    options: [
      "Il ne s'exécute que si une exception a été levée",
      "Il s'exécute systématiquement, qu'une exception se soit produite ou non",
      "Il remplace catch",
      "finally n'existe pas en PHP",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "finally s'exécute dans tous les cas, après try/catch — exactement le même comportement qu'en Python." },
    ],
  },
  {
    type: "vraifaux",
    prompt: "Vrai ou faux : il est conseillé d'ignorer systématiquement les Notices PHP, car elles n'ont aucune importance.",
    options: ["Vrai", "Faux"],
    correct: 1,
    explain: [
      { type: "p", text: "Faux. Une Notice n'arrête pas le script, mais elle signale presque toujours une véritable erreur de logique (comme une variable oubliée) qu'il vaut mieux corriger plutôt qu'ignorer." },
    ],
  },
];
