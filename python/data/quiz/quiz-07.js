window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["07"] = [
  {
    type: "qcm",
    prompt: "Quelle boucle Python correspond directement à TantQue du pseudo-code ?",
    options: ["<code class=\"inline\">for</code>", "<code class=\"inline\">while</code>", "<code class=\"inline\">loop</code>", "<code class=\"inline\">repeat</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "while répète son bloc tant qu'une condition reste vraie, testée avant chaque tour — exactement le même comportement que TantQue en pseudo-code." },
    ],
  },
  {
    type: "trace",
    lang: "python",
    code: `for i in range(5):
    print(i)`,
    prompt: "Quelle est la dernière valeur affichée ?",
    options: ["5", "4", "6", "0"],
    correct: 1,
    explain: [
      { type: "p", text: "range(5) génère 0, 1, 2, 3, 4 — cinq valeurs, la borne de fin (5) étant toujours exclue. La dernière valeur affichée est donc 4." },
    ],
  },
  {
    type: "qcm",
    prompt: "Pour obtenir les nombres de 1 à 10 inclus avec range(), que faut-il écrire ?",
    options: ["<code class=\"inline\">range(1, 10)</code>", "<code class=\"inline\">range(1, 11)</code>", "<code class=\"inline\">range(0, 10)</code>", "<code class=\"inline\">range(10)</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "range() exclut toujours sa borne de fin. Pour inclure 10, il faut donc utiliser 11 comme borne de fin : range(1, 11) génère 1, 2, ..., 10." },
    ],
  },
  {
    type: "qcm",
    lang: "python",
    code: `for i in range(10):
    if i == 5:
        break
    print(i)`,
    prompt: "Quelle est la dernière valeur affichée avant l'arrêt de la boucle ?",
    options: ["4", "5", "9", "10"],
    correct: 0,
    explain: [
      { type: "p", text: "break interrompt immédiatement la boucle dès que i vaut 5, avant même d'exécuter le print pour cette valeur. La dernière valeur affichée est donc 4 (le tour précédent)." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quelle est la différence entre break et continue ?",
    options: [
      "Elles sont strictement identiques",
      "break arrête complètement la boucle, continue passe seulement au tour suivant",
      "continue arrête complètement la boucle, break passe au tour suivant",
      "Les deux ne s'utilisent que dans les boucles for",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "break sort définitivement de la boucle. continue interrompt seulement le tour en cours et enchaîne directement sur le tour suivant, sans quitter la boucle." },
    ],
  },
  {
    type: "qcm",
    prompt: "Comment Python simule-t-il un Répéter...Jusqu'à, qu'il n'a pas nativement ?",
    options: [
      "Avec une boucle for et range()",
      "Avec while True combiné à un break pour sortir",
      "Ce n'est pas possible en Python",
      "Avec le mot-clé repeat",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "while True: crée une boucle qui ne s'arrête jamais toute seule ; on y place la condition de sortie sous forme d'un if suivi de break, ce qui garantit que le corps s'exécute au moins une fois avant tout test de sortie." },
    ],
  },
  {
    type: "qcm",
    prompt: "Comment le for de Python diffère-t-il fondamentalement du Pour du pseudo-code ?",
    options: [
      "Ils fonctionnent de façon rigoureusement identique",
      "Le for de Python parcourt directement les éléments d'une collection, plutôt que de faire varier un compteur entre deux bornes",
      "Le for de Python ne peut jamais être utilisé avec des nombres",
      "Le for de Python nécessite toujours un TantQue imbriqué",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Le Pour du pseudo-code fait varier un compteur entre deux bornes explicites. Le for de Python parcourt directement les éléments d'une collection (une liste, ou les nombres générés par range()) — une philosophie différente, même si range() permet de retrouver un comportement similaire." },
    ],
  },
  {
    type: "vraifaux",
    prompt: "Vrai ou faux : i += 1 est un raccourci Python équivalent à i = i + 1.",
    options: ["Vrai", "Faux"],
    correct: 0,
    explain: [
      { type: "p", text: "Vrai. += est un opérateur d'affectation combinée très courant en Python, qui ajoute la valeur de droite à la variable et réaffecte le résultat à cette même variable." },
    ],
  },
];
