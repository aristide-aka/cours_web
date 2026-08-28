window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["06"] = [
  {
    type: "qcm",
    prompt: "Quel mot-clé Python remplace le SinonSi du pseudo-code ?",
    options: ["<code class=\"inline\">else if</code>", "<code class=\"inline\">elseif</code>", "<code class=\"inline\">elif</code>", "<code class=\"inline\">sinonsi</code>"],
    correct: 2,
    explain: [
      { type: "p", text: "Python utilise le mot-clé unique elif (contraction de « else if »). Écrire else if en deux mots séparés provoque une erreur de syntaxe en Python." },
    ],
  },
  {
    type: "trace",
    lang: "python",
    code: `age = 15
if age > 18:
    print("Majeur")
elif age == 18:
    print("Juste majeur")
else:
    print("Mineur")`,
    prompt: "Que va afficher ce code ?",
    options: ["Majeur", "Juste majeur", "Mineur", "Rien du tout"],
    correct: 2,
    explain: [
      { type: "p", text: "age vaut 15 : ni age > 18 ni age == 18 ne sont vrais. C'est donc le bloc else qui s'exécute, affichant \"Mineur\"." },
    ],
  },
  {
    type: "qcm",
    lang: "python",
    code: `nom = ""
if nom:
    print("Rempli")
else:
    print("Vide")`,
    prompt: "Que va afficher ce code, sachant qu'une chaîne vide est considérée comme fausse en Python ?",
    options: ["Rempli", "Vide", "Une erreur, nom n'est pas un booléen", "Rien"],
    correct: 1,
    explain: [
      { type: "p", text: "Une chaîne vide \"\" fait partie des valeurs \"falsy\" en Python : dans un test if, elle se comporte comme False. Le bloc else s'exécute donc, affichant \"Vide\"." },
    ],
  },
  {
    type: "qcm",
    prompt: "Que signifie le terme \"falsy\" en Python ?",
    options: [
      "Une valeur qui provoque toujours une erreur",
      "Une valeur qui se comporte comme False dans un test, sans être littéralement le booléen False",
      "Un synonyme de True",
      "Un type de donnée qui n'existe pas en Python",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "0, 0.0, \"\", [], et None sont considérés comme faux (\"falsy\") dans un contexte booléen, bien qu'ils ne soient pas littéralement égaux à False. Toute autre valeur est considérée vraie." },
    ],
  },
  {
    type: "qcm",
    lang: "python",
    code: `x = 5
print(0 < x < 10)`,
    prompt: "Que va afficher ce code ?",
    options: ["True", "False", "5", "Une erreur de syntaxe"],
    correct: 0,
    explain: [
      { type: "p", text: "Python permet d'enchaîner les comparaisons directement, comme en mathématiques : 0 < x < 10 équivaut à (0 < x) and (x < 10). Comme x vaut 5, les deux sont vraies, donc l'expression entière vaut True." },
    ],
  },
  {
    type: "qcm",
    lang: "python",
    code: `age = 16
statut = "majeur" if age >= 18 else "mineur"
print(statut)`,
    prompt: "Que va afficher ce code ?",
    options: ["majeur", "mineur", "True", "16"],
    correct: 1,
    explain: [
      { type: "p", text: "Cette écriture ternaire teste age >= 18 (faux ici), donc l'expression prend la valeur après else : \"mineur\"." },
    ],
  },
  {
    type: "vraifaux",
    prompt: "Vrai ou faux : dans une chaîne if/elif/else, un seul bloc au maximum peut s'exécuter.",
    options: ["Vrai", "Faux"],
    correct: 0,
    explain: [
      { type: "p", text: "Vrai. Dès qu'une condition est vraie, son bloc s'exécute et toutes les conditions suivantes de la chaîne sont ignorées — exactement comme pour la chaîne Si/SinonSi/Sinon du pseudo-code." },
    ],
  },
];
