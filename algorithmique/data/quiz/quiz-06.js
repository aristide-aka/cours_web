window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["06"] = [
  {
    type: "qcm",
    prompt: "Dans ce cours, à partir de quel indice commence un tableau ?",
    options: ["1", "0", "-1", "Cela dépend de la taille du tableau"],
    correct: 1,
    explain: [
      { type: "p", text: "Par convention dans ce cours (comme dans la grande majorité des langages), les indices d'un tableau commencent à 0. La première case s'écrit donc <code class=\"inline\">T(0)</code>, jamais <code class=\"inline\">T(1)</code>." },
    ],
  },
  {
    type: "qcm",
    prompt: "Un tableau est déclaré avec <code class=\"inline\">Tableau Notes(9) en Numérique</code>. Quel est son dernier indice valide ?",
    options: ["8", "9", "10", "Cela dépend des valeurs stockées"],
    correct: 1,
    explain: [
      { type: "p", text: "<code class=\"inline\">Tableau Notes(9)</code> déclare un tableau de 10 cases, indicées de 0 à 9 inclus. Accéder à <code class=\"inline\">Notes(10)</code> sortirait du tableau et provoquerait une erreur d'exécution." },
    ],
  },
  {
    type: "trace",
    code: `Tableau N(6) en Entier
Variables i, k en Entier
Début
  N(0) ← 1
  Pour k ← 1 à 6
    N(k) ← N(k-1) + 2
  k Suivant
Fin`,
    prompt: "Quelle est la valeur de N(3) après exécution ?",
    options: ["3", "5", "7", "6"],
    correct: 2,
    explain: [
      {
        type: "trace",
        vars: ["N(0)", "N(1)", "N(2)", "N(3)"],
        rows: [
          { instr: "N(0) ← 1", values: { "N(0)": "1", "N(1)": "?", "N(2)": "?", "N(3)": "?" }, changed: ["N(0)"] },
          { instr: "k←1 : N(1)←N(0)+2", values: { "N(0)": "1", "N(1)": "3", "N(2)": "?", "N(3)": "?" }, changed: ["N(1)"] },
          { instr: "k←2 : N(2)←N(1)+2", values: { "N(0)": "1", "N(1)": "3", "N(2)": "5", "N(3)": "?" }, changed: ["N(2)"] },
          { instr: "k←3 : N(3)←N(2)+2", values: { "N(0)": "1", "N(1)": "3", "N(2)": "5", "N(3)": "7" }, changed: ["N(3)"] },
        ],
      },
      { type: "p", text: "Chaque case reprend la précédente et lui ajoute 2 : on obtient la suite des nombres impairs 1, 3, 5, 7… N(3) vaut donc 7." },
    ],
  },
  {
    type: "qcm",
    prompt: "Pourquoi initialise-t-on généralement une variable Somme à 0 avant de parcourir un tableau pour le sommer ?",
    options: [
      "Ce n'est qu'une convention esthétique, sans impact réel",
      "Pour donner à l'accumulateur une valeur de départ neutre pour l'addition",
      "Parce que le tableau lui-même commence toujours par la valeur 0",
      "Pour éviter une erreur de compilation",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Le même principe qu'au chapitre 5 s'applique : l'accumulateur a besoin d'un point de départ neutre. 0 est l'élément neutre de l'addition, ce qui garantit que la première case ajoutée donne bien sa propre valeur à Somme." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quelle structure combine-t-on presque systématiquement avec un tableau pour le parcourir case par case ?",
    options: ["Si...Alors", "Une boucle Pour", "Une déclaration Variable", "Un opérateur ET"],
    correct: 1,
    explain: [
      { type: "p", text: "La boucle Pour, en faisant varier un indice de 0 jusqu'à la dernière case, est l'outil naturel pour visiter chaque élément d'un tableau — que ce soit pour le remplir, l'afficher, ou calculer une statistique dessus." },
    ],
  },
  {
    type: "vraifaux",
    prompt: "Vrai ou faux : on peut lire le contenu d'une case de tableau avant de lui avoir jamais affecté de valeur, et obtenir un résultat fiable.",
    options: ["Vrai", "Faux"],
    correct: 1,
    explain: [
      { type: "p", text: "Faux. Une case de tableau non initialisée a un contenu indéterminé, exactement comme une variable simple non initialisée. Il faut toujours écrire dans une case avant de s'appuyer sur son contenu." },
    ],
  },
  {
    type: "qcm",
    prompt: "Dans l'algorithme de la suite de Fibonacci (Suite(i) ← Suite(i-1) + Suite(i-2)), pourquoi la boucle Pour commence-t-elle à i ← 2 et non à i ← 0 ?",
    options: [
      "Parce que les cases 0 et 1 sont déjà initialisées manuellement avant la boucle",
      "Par pure convention, cela n'a pas d'importance",
      "Parce qu'un tableau ne peut pas commencer à l'indice 0",
      "Pour économiser de la mémoire",
    ],
    correct: 0,
    explain: [
      { type: "p", text: "La formule <code class=\"inline\">Suite(i-1) + Suite(i-2)</code> a besoin de deux termes précédents déjà connus. Suite(0) et Suite(1) sont donc fixés « à la main » avant la boucle ; celle-ci ne peut calculer valablement qu'à partir de i = 2, sans quoi <code class=\"inline\">Suite(i-2)</code> pointerait vers un indice négatif inexistant." },
    ],
  },
  {
    type: "qcm",
    prompt: "Que provoque l'accès à <code class=\"inline\">T(10)</code> sur un tableau déclaré <code class=\"inline\">Tableau T(9) en Entier</code> ?",
    options: [
      "Rien, la case est simplement vide",
      "Une erreur d'exécution : l'indice 10 est hors des bornes valides",
      "Le tableau s'agrandit automatiquement",
      "Cela retourne la valeur de T(0) par sécurité",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "<code class=\"inline\">Tableau T(9)</code> réserve 10 cases, indicées de 0 à 9. L'indice 10 sort de cette plage : c'est un dépassement de tableau, qui provoque une erreur d'exécution — jamais une extension automatique." },
    ],
  },
  {
    type: "qcm",
    prompt: "On veut calculer la moyenne des 10 valeurs d'un tableau Notes(9). Que faut-il faire après avoir sommé toutes les cases dans une variable Somme ?",
    options: [
      "Diviser Somme par 9",
      "Diviser Somme par 10",
      "Multiplier Somme par 10",
      "Rien, Somme est déjà la moyenne",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Un tableau déclaré <code class=\"inline\">Notes(9)</code> contient 10 valeurs (indices 0 à 9). La moyenne se calcule en divisant la somme totale par le <em>nombre</em> de valeurs, soit 10 — pas par le dernier indice (9), erreur classique d'inattention." },
    ],
  },
];
