window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["13"] = [
  {
    type: "qcm",
    prompt: "Que se passe-t-il si une exception se produit dans un programme Python et n'est gérée par aucun except ?",
    options: [
      "Rien, le programme continue normalement",
      "Le programme s'arrête immédiatement et affiche un traceback",
      "Python corrige automatiquement l'erreur",
      "Le programme redémarre depuis le début",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Une exception non gérée interrompt immédiatement l'exécution du programme et affiche un traceback décrivant l'erreur — comme une erreur d'exécution non anticipée en pseudo-code ou en C." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quel bloc contient le code potentiellement risqué, susceptible de provoquer une erreur ?",
    options: ["<code class=\"inline\">except</code>", "<code class=\"inline\">try</code>", "<code class=\"inline\">finally</code>", "<code class=\"inline\">catch</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "Le code susceptible de provoquer une erreur se place dans le bloc try. Si une exception du type précisé survient, l'exécution saute directement au bloc except correspondant." },
    ],
  },
  {
    type: "qcm",
    lang: "python",
    code: `try:
    resultat = 10 / 0
except ZeroDivisionError:
    print("Erreur gérée")
print("Suite du programme")`,
    prompt: "Que va afficher ce code ?",
    options: [
      "Une erreur qui arrête tout le programme",
      "\"Erreur gérée\" puis \"Suite du programme\"",
      "\"Suite du programme\" uniquement",
      "\"Erreur gérée\" uniquement, le programme s'arrête ensuite",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "La division par zéro déclenche une ZeroDivisionError, interceptée par le except correspondant, qui affiche \"Erreur gérée\". Le programme continue ensuite normalement, affichant \"Suite du programme\"." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quelle exception Python se produit typiquement lors d'une tentative de conversion int(\"abc\") ?",
    options: ["<code class=\"inline\">TypeError</code>", "<code class=\"inline\">ValueError</code>", "<code class=\"inline\">KeyError</code>", "<code class=\"inline\">ZeroDivisionError</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "ValueError se produit lorsqu'une opération reçoit une valeur du bon type mais inappropriée — comme tenter de convertir en nombre une chaîne qui n'en est pas un." },
    ],
  },
  {
    type: "qcm",
    prompt: "À quoi sert un bloc finally ?",
    options: [
      "Il ne s'exécute que si aucune erreur ne survient",
      "Il s'exécute systématiquement, qu'une erreur se soit produite ou non",
      "Il ne s'exécute que si une erreur survient",
      "finally n'existe pas en Python",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "finally s'exécute dans tous les cas, erreur ou non — utile pour garantir une action de nettoyage (comme refermer une ressource) quoi qu'il arrive." },
    ],
  },
  {
    type: "vraifaux",
    prompt: "Vrai ou faux : il est recommandé d'utiliser un except sans préciser de type d'erreur, pour être sûr de tout attraper.",
    options: ["Vrai", "Faux"],
    correct: 1,
    explain: [
      { type: "p", text: "Faux. Un except sans type précis attrape absolument tout, y compris des erreurs de programmation qui auraient dû être corrigées plutôt que masquées. Il faut toujours préciser le type d'exception attendu." },
    ],
  },
];
