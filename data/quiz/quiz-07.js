window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["07"] = [
  {
    type: "qcm",
    prompt: "Que renvoie <code class=\"inline\">Len(\"algorithme\")</code> ?",
    options: ["9", "10", "11", "0"],
    correct: 1,
    explain: [
      { type: "p", text: "Len renvoie le nombre total de caractères de la chaîne. \"algorithme\" compte bien 10 lettres : a-l-g-o-r-i-t-h-m-e." },
    ],
  },
  {
    type: "qcm",
    prompt: "Que renvoie <code class=\"inline\">Mid(\"algorithme\", 1, 4)</code> ?",
    options: ["\"algo\"", "\"lgor\"", "\"algor\"", "\"a\""],
    correct: 0,
    explain: [
      { type: "p", text: "Mid part du caractère numéro 1 (le premier caractère d'une chaîne, par convention, contrairement aux tableaux qui commencent à l'indice 0) et prend 4 caractères : a-l-g-o, soit \"algo\"." },
    ],
  },
  {
    type: "qcm",
    prompt: "Que renvoie <code class=\"inline\">Trouve(\"aeiouy\", \"z\")</code> ?",
    options: ["-1", "0", "6", "\"z\""],
    correct: 1,
    explain: [
      { type: "p", text: "La lettre \"z\" n'apparaît nulle part dans la chaîne \"aeiouy\". Quand la sous-chaîne recherchée est absente, Trouve renvoie systématiquement 0 — jamais -1, ni une valeur négative." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quel est le bon opérateur pour assembler deux chaînes de caractères bout à bout ?",
    options: ["<code class=\"inline\">+</code>", "<code class=\"inline\">&</code>", "<code class=\"inline\">*</code>", "<code class=\"inline\">Mid</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "L'opérateur <code class=\"inline\">&</code> est réservé à la concaténation de texte. <code class=\"inline\">+</code> est réservé à l'addition de nombres ; l'utiliser sur des chaînes provoque une erreur d'exécution (voir chapitre 1)." },
    ],
  },
  {
    type: "trace",
    code: `Variable Mot en Caractère
Variables i, Nb en Entier
Début
  Mot ← "pseudo"
  Nb ← 0
  Pour i ← 1 à Len(Mot)
    Si Trouve("aeiouy", Mid(Mot, i, 1)) <> 0 Alors
      Nb ← Nb + 1
    FinSi
  i Suivant
  Écrire Nb
Fin`,
    prompt: "Que va afficher cet algorithme ?",
    options: ["2", "3", "4", "1"],
    correct: 1,
    explain: [
      { type: "p", text: "\"pseudo\" contient les lettres p-s-e-u-d-o. Parmi elles, e, u et o sont des voyelles (au sens large incluant y) : trois lettres sur six déclenchent le compteur. Nb vaut donc 3, qui est la valeur affichée." },
    ],
  },
  {
    type: "qcm",
    prompt: "Pourquoi doit-on initialiser une variable Resultat à <code class=\"inline\">\"\"</code> avant une boucle qui la construit avec <code class=\"inline\">Resultat ← Resultat & C</code> ?",
    options: [
      "Ce n'est pas nécessaire, une chaîne vaut \"\" par défaut dans tous les langages",
      "Pour lui donner un point de départ neutre pour la concaténation, comme 0 l'est pour une somme",
      "Parce que sinon la boucle ne s'exécute pas",
      "Pour économiser de la mémoire",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "C'est le même principe que l'accumulateur numérique du chapitre 5 : une chaîne vide \"\" est l'élément neutre de la concaténation, exactement comme 0 l'est pour l'addition. Sans cette initialisation, le contenu de départ de Resultat serait indéterminé." },
    ],
  },
  {
    type: "vraifaux",
    prompt: "Vrai ou faux : dans Mid(chaîne, début, longueur), le premier caractère de la chaîne porte le numéro 0, comme pour un tableau.",
    options: ["Vrai", "Faux"],
    correct: 1,
    explain: [
      { type: "p", text: "Faux. C'est un piège classique : Mid numérote le premier caractère d'une chaîne à partir de 1, alors qu'un tableau numérote sa première case à partir de 0. Les deux conventions coexistent et ne doivent pas être confondues." },
    ],
  },
  {
    type: "qcm",
    prompt: "Dans l'algorithme de chiffrement par décalage, à quoi sert <code class=\"inline\">Trouve(\"ABCDEFGHIJKLMNOPQRSTUVWXYZ\", C)</code> ?",
    options: [
      "À vérifier que C est bien une lettre",
      "À trouver la position de C dans l'alphabet, pour ensuite lire la lettre décalée à la même position",
      "À compter le nombre de lettres de la phrase",
      "À convertir C en minuscule",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Trouve renvoie la position (le rang) de la lettre C dans l'alphabet normal. On utilise ensuite ce rang comme position à lire dans un second alphabet, décalé : c'est ce mécanisme en deux temps (chercher le rang, puis lire à ce rang ailleurs) qui réalise le chiffrement." },
    ],
  },
];
