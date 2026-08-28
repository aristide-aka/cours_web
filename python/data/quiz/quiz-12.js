window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["12"] = [
  {
    type: "qcm",
    prompt: "Quel mot-clé introduit la définition d'une fonction en Python ?",
    options: ["<code class=\"inline\">function</code>", "<code class=\"inline\">def</code>", "<code class=\"inline\">func</code>", "<code class=\"inline\">Fonction</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "def introduit la définition d'une fonction, suivi de son nom, de ses paramètres entre parenthèses, puis des deux-points annonçant le bloc indenté." },
    ],
  },
  {
    type: "qcm",
    lang: "python",
    code: `def saluer():
    print("Bonjour !")

saluer
saluer()`,
    prompt: "Quelle ligne exécute réellement la fonction ?",
    options: ["<code class=\"inline\">def saluer():</code>", "<code class=\"inline\">saluer</code> (sans parenthèses)", "<code class=\"inline\">saluer()</code> (avec parenthèses)", "Aucune, il manque return"],
    correct: 2,
    explain: [
      { type: "p", text: "Définir une fonction avec def ne l'exécute pas. Écrire son nom sans parenthèses (saluer) fait seulement référence à la fonction elle-même. Seul l'appel avec parenthèses, saluer(), déclenche réellement son exécution." },
    ],
  },
  {
    type: "trace",
    lang: "python",
    code: `def saluer(prenom, message="Bonjour"):
    print(message + ",", prenom)

saluer("Awa")`,
    prompt: "Que va afficher ce code ?",
    options: ["Bonjour, Awa", "Awa, Bonjour", "Une erreur, message est obligatoire", "Bonjour,"],
    correct: 0,
    explain: [
      { type: "p", text: "message a une valeur par défaut (\"Bonjour\"), ce qui le rend facultatif à l'appel. saluer(\"Awa\") utilise donc cette valeur par défaut, affichant \"Bonjour, Awa\"." },
    ],
  },
  {
    type: "qcm",
    lang: "python",
    code: `def carre(x):
    return x * x

resultat = carre(5)
print(resultat)`,
    prompt: "Que va afficher ce code ?",
    options: ["25", "5", "x * x", "None"],
    correct: 0,
    explain: [
      { type: "p", text: "return transmet le résultat du calcul (5 * 5 = 25) au code appelant, qui le stocke dans resultat." },
    ],
  },
  {
    type: "qcm",
    prompt: "Que renvoie une fonction Python qui ne contient aucun return ?",
    options: ["0", "Une chaîne vide", "None", "Une erreur systématique"],
    correct: 2,
    explain: [
      { type: "p", text: "Sans return, une fonction Python renvoie automatiquement la valeur spéciale None — elle se comporte alors comme une Procédure du pseudo-code, qui n'a rien à renvoyer." },
    ],
  },
  {
    type: "qcm",
    lang: "python",
    code: `def calcul():
    resultat = 42
    return resultat

calcul()
print(resultat)`,
    prompt: "Que se passe-t-il à la dernière ligne ?",
    options: [
      "Cela affiche 42",
      "NameError : resultat n'existe pas en dehors de la fonction",
      "Cela affiche None",
      "Cela relance automatiquement calcul()",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "resultat est une variable locale à la fonction calcul() : elle n'existe que pendant l'exécution de cette fonction et disparaît ensuite. Tenter d'y accéder depuis l'extérieur provoque une NameError." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quelle est la différence entre Fonction et Procédure en pseudo-code, du point de vue de Python ?",
    options: [
      "Python n'a aucune de ces deux notions",
      "Python n'a qu'une seule notion, la fonction ; une fonction sans return se comporte comme une procédure",
      "Python distingue strictement les deux avec des mots-clés différents",
      "Une Procédure ne peut pas exister en Python",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Contrairement au pseudo-code qui distingue Fonction (avec Renvoyer) et Procédure (sans), Python utilise def dans les deux cas — la présence ou l'absence de return détermine simplement si elle produit un résultat exploitable." },
    ],
  },
  {
    type: "vraifaux",
    prompt: "Vrai ou faux : on peut donner une valeur par défaut à un paramètre de fonction en Python.",
    options: ["Vrai", "Faux"],
    correct: 0,
    explain: [
      { type: "p", text: "Vrai, par exemple def saluer(prenom, message=\"Bonjour\"):. Ce paramètre devient alors facultatif : on peut l'omettre à l'appel, auquel cas la valeur par défaut est utilisée." },
    ],
  },
];
