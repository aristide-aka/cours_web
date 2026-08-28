window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["05"] = [
  {
    type: "qcm",
    lang: "python",
    code: `print(10 / 4)`,
    prompt: "Que va afficher ce code en Python 3 ?",
    options: ["2", "2.5", "2.0", "Une erreur"],
    correct: 1,
    explain: [
      { type: "p", text: "En Python 3, l'opérateur / effectue toujours une division réelle, même entre deux entiers : 10 / 4 vaut 2.5, pas 2." },
    ],
  },
  {
    type: "qcm",
    lang: "python",
    code: `print(10 // 4)`,
    prompt: "Que va afficher ce code ?",
    options: ["2.5", "2", "3", "2.0"],
    correct: 1,
    explain: [
      { type: "p", text: "// effectue une division entière, en arrondissant systématiquement vers le bas : 10 // 4 vaut 2 (le quotient entier)." },
    ],
  },
  {
    type: "qcm",
    prompt: "Que calcule l'opérateur % ?",
    options: ["Un pourcentage", "Le reste de la division entière", "La racine carrée", "La puissance"],
    correct: 1,
    explain: [
      { type: "p", text: "% (modulo) renvoie le reste de la division entière : 10 % 3 vaut 1, car 10 = 3×3 + 1." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quel est l'équivalent Python de l'opérateur ET du pseudo-code ?",
    options: ["<code class=\"inline\">&&</code>", "<code class=\"inline\">and</code>", "<code class=\"inline\">et</code>", "<code class=\"inline\">AND</code> en majuscules obligatoirement"],
    correct: 1,
    explain: [
      { type: "p", text: "Python utilise des mots entiers en minuscules pour ses opérateurs logiques : and, or, not — contrairement au C qui utilise des symboles (&&, ||, !)." },
    ],
  },
  {
    type: "qcm",
    lang: "python",
    code: `age = 20
a_un_billet = False
print(age >= 18 and a_un_billet)`,
    prompt: "Que va afficher ce code ?",
    options: ["True", "False", "20", "Une erreur"],
    correct: 1,
    explain: [
      { type: "p", text: "and exige que les deux conditions soient vraies. age >= 18 est vrai, mais a_un_billet vaut False : l'ensemble est donc False, comme pour l'opérateur ET du pseudo-code." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quel opérateur utilise-t-on pour tester si deux valeurs sont égales (et non pour affecter) ?",
    options: ["<code class=\"inline\">=</code>", "<code class=\"inline\">==</code>", "<code class=\"inline\">eq</code>", "<code class=\"inline\">===</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "== compare deux valeurs sans rien modifier. = est réservé à l'affectation. Confondre les deux est une erreur fréquente, notamment en arrivant du pseudo-code où = teste une égalité et ← affecte." },
    ],
  },
  {
    type: "vraifaux",
    prompt: "Vrai ou faux : ** est l'opérateur de puissance en Python (par exemple 2 ** 3 vaut 8).",
    options: ["Vrai", "Faux"],
    correct: 0,
    explain: [
      { type: "p", text: "Vrai. 2 ** 3 calcule 2 à la puissance 3, soit 8. Il n'existe pas de symbole ^ pour la puissance en Python (contrairement à d'autres langages) — ^ y a un tout autre sens (opérateur bit à bit)." },
    ],
  },
];
