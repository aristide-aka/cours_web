window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["10"] = [
  {
    type: "qcm",
    lang: "python",
    code: `print("pomme", "poire", sep=", ")`,
    prompt: "Que va afficher ce code ?",
    options: ["pomme poire", "pomme, poire", "pomme\\npoire", "Une erreur"],
    correct: 1,
    explain: [
      { type: "p", text: "Le paramètre sep personnalise le séparateur entre les valeurs affichées par print(). Ici, \", \" remplace l'espace par défaut, donnant \"pomme, poire\"." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quelle fonction permet de récupérer une saisie clavier en Python ?",
    options: ["<code class=\"inline\">read()</code>", "<code class=\"inline\">input()</code>", "<code class=\"inline\">get()</code>", "<code class=\"inline\">scan()</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "input() affiche un message facultatif, met le programme en pause, puis renvoie ce que l'utilisateur a tapé — l'équivalent Python du Lire du pseudo-code." },
    ],
  },
  {
    type: "qcm",
    lang: "python",
    code: `age = input("Quel âge avez-vous ? ")
print(age + 10)`,
    prompt: "Pourquoi ce code provoque-t-il une erreur ?",
    options: [
      "input() n'existe pas en Python",
      "age est une chaîne de caractères (str), on ne peut pas lui ajouter directement un nombre",
      "print() ne peut afficher qu'un seul argument",
      "Il manque des guillemets autour de 10",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "input() renvoie toujours une chaîne de caractères, jamais un nombre. Additionner un str et un int provoque une erreur de type ; il aurait fallu écrire int(input(...)) pour convertir la saisie." },
    ],
  },
  {
    type: "qcm",
    prompt: "Comment corrige-t-on le code de la question précédente pour qu'il fonctionne ?",
    options: [
      "<code class=\"inline\">age = str(input(...))</code>",
      "<code class=\"inline\">age = int(input(...))</code>",
      "Ce n'est pas possible à corriger",
      "<code class=\"inline\">age = input(int(...))</code>",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "int(input(...)) convertit explicitement la chaîne renvoyée par input() en un entier utilisable dans un calcul." },
    ],
  },
  {
    type: "vraifaux",
    prompt: "Vrai ou faux : par défaut, print() ajoute automatiquement un retour à la ligne après ce qu'il affiche.",
    options: ["Vrai", "Faux"],
    correct: 0,
    explain: [
      { type: "p", text: "Vrai. Par défaut, le paramètre end de print() vaut \"\\n\" (un retour à la ligne) — c'est ce qui explique que chaque appel à print() affiche son contenu sur une nouvelle ligne, sauf si end est explicitement modifié." },
    ],
  },
];
