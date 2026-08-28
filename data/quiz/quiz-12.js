window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["12"] = [
  {
    type: "qcm",
    prompt: "En Python, qu'est-ce qui délimite l'appartenance d'une instruction à un bloc (if, while, for…) ?",
    options: [
      "Des accolades { }, comme en C",
      "Les mots-clés FinSi, FinTantQue, etc.",
      "L'indentation (le niveau de décalage à gauche)",
      "Rien, Python devine automatiquement les blocs"
    ],
    correct: 2,
    explain: [
      { type: "p", text: "Python est unique parmi les langages courants : il n'utilise ni accolades ni mots-clés de fin de bloc. C'est l'indentation elle-même qui a une valeur syntaxique et détermine quelles lignes appartiennent à quel bloc. Une indentation incohérente empêche le script de s'exécuter." },
    ],
  },
  {
    type: "qcm",
    lang: "python",
    code: `n = input("Entrez un nombre : ")
resultat = n + 1
print(resultat)`,
    prompt: "Ce script Python provoque une erreur à l'exécution. Pourquoi ?",
    options: [
      "input() n'existe pas en Python",
      "n est une chaîne de caractères (str), pas un nombre : on ne peut pas lui ajouter 1 directement",
      "print() ne peut afficher qu'une seule valeur à la fois",
      "Il manque des points-virgules",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "input() renvoie toujours une chaîne de caractères, quelle que soit la saisie. Additionner une chaîne et un entier (<code class=\"inline\">n + 1</code>) provoque une erreur de type. Il aurait fallu écrire <code class=\"inline\">n = int(input(\"Entrez un nombre : \"))</code> pour convertir la saisie en entier avant de pouvoir calculer avec." },
    ],
  },
  {
    type: "trace",
    lang: "python",
    code: `for i in range(1, 10):
    print(i)`,
    prompt: "Quelle est la dernière valeur affichée par cette boucle ?",
    options: ["10", "9", "8", "11"],
    correct: 1,
    explain: [
      { type: "p", text: "range(1, 10) est un piège classique : il génère les valeurs de 1 jusqu'à 9 <strong>inclus</strong>, la borne de fin (10) étant systématiquement exclue. La dernière valeur affichée est donc 9, pas 10." },
      { type: "callout", variant: "warn", title: "Pour aller jusqu'à 10 inclus", text: "Il aurait fallu écrire <code class=\"inline\">range(1, 11)</code> — toujours ajouter 1 à la borne souhaitée." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quel mot-clé Python remplace le SinonSi du pseudo-code ?",
    options: ["<code class=\"inline\">elseif</code>", "<code class=\"inline\">elif</code>", "<code class=\"inline\">else if</code>", "<code class=\"inline\">sinonsi</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "Python utilise le mot-clé contracté <code class=\"inline\">elif</code> (de « else if »), différent de la syntaxe du C (<code class=\"inline\">else if</code>, deux mots) ou du PHP (<code class=\"inline\">elseif</code>, un mot mais orthographié différemment)." },
    ],
  },
  {
    type: "qcm",
    prompt: "Python n'a pas de structure Répéter...Jusqu'à native. Comment la simule-t-on ?",
    options: [
      "Avec une boucle for et range()",
      "Avec while True: combiné à une instruction break pour sortir",
      "Ce n'est pas possible en Python",
      "Avec l'instruction repeat, propre à Python",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "<code class=\"inline\">while True:</code> crée une boucle qui ne s'arrête jamais toute seule ; on y place la condition de sortie sous forme d'un <code class=\"inline\">if condition: break</code>, ce qui reproduit fidèlement le comportement d'un Répéter...Jusqu'à (le corps s'exécute au moins une fois, la condition n'est testée qu'après)." },
    ],
  },
  {
    type: "qcm",
    lang: "python",
    code: `mot = "algorithme"
print(mot[0:4])`,
    prompt: "Que va afficher ce code ?",
    options: ["\"algo\"", "\"algor\"", "\"lgo\"", "\"a\""],
    correct: 0,
    explain: [
      { type: "p", text: "Le slicing <code class=\"inline\">mot[0:4]</code> extrait les caractères d'indice 0, 1, 2 et 3 (l'indice 4 étant exclu) : a-l-g-o, soit \"algo\". C'est l'équivalent Python de <code class=\"inline\">Mid(mot, 1, 4)</code>, avec une convention de bornes différente (indices, pas longueur, et borne de fin exclusive)." },
    ],
  },
  {
    type: "qcm",
    lang: "python",
    code: `def vider(liste):
    liste.clear()

notes = [12, 8, 15]
vider(notes)
print(notes)`,
    prompt: "Que va afficher ce script ?",
    options: ["[12, 8, 15]", "[]", "None", "Une erreur d'exécution"],
    correct: 1,
    explain: [
      { type: "p", text: "Une liste est un type <strong>mutable</strong> en Python : passée en paramètre, la fonction reçoit un accès direct à la même liste que l'appelant (comme un passage par référence). <code class=\"inline\">liste.clear()</code> vide donc réellement la liste notes, qui affiche [] une fois vidée." },
      { type: "callout", variant: "tip", title: "Retenir la règle", text: "Nombres, chaînes et booléens (immuables) se comportent comme un passage par Valeur ; listes et dictionnaires (mutables) se comportent comme un passage par Référence." },
    ],
  },
  {
    type: "qcm",
    prompt: "Que fait le mot-clé <code class=\"inline\">with</code> lors de l'ouverture d'un fichier en Python ?",
    options: [
      "Il empêche le fichier d'être modifié",
      "Il ouvre le fichier et garantit sa fermeture automatique à la fin du bloc",
      "Il compile le fichier avant de l'exécuter",
      "Il n'a aucun effet particulier",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "<code class=\"inline\">with open(...) as f:</code> garantit que le fichier sera automatiquement fermé à la sortie du bloc, même en cas d'erreur pendant la lecture. Cela rend l'instruction Fermer explicite du pseudo-code facultative en pratique — bien qu'elle reste conceptuellement toujours nécessaire." },
    ],
  },
  {
    type: "vraifaux",
    prompt: "Vrai ou faux : en Python, print(\"Total :\", 5 + 3) est une instruction valide qui affiche plusieurs valeurs séparées par une virgule, comme Écrire en pseudo-code.",
    options: ["Vrai", "Faux"],
    correct: 0,
    explain: [
      { type: "p", text: "Vrai. print() accepte un nombre quelconque d'arguments séparés par des virgules, et les affiche à la suite en les séparant automatiquement par un espace — exactement comme <code class=\"inline\">Écrire \"Total : \", 5 + 3</code> en pseudo-code." },
    ],
  },
];
