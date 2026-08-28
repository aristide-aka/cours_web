window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["05"] = [
  {
    type: "qcm",
    prompt: "Quelle est la différence essentielle entre TantQue et Répéter...Jusqu'à ?",
    options: [
      "TantQue teste sa condition avant chaque tour, Répéter...Jusqu'à la teste après",
      "Il n'y a aucune différence, ce sont des synonymes",
      "TantQue ne peut pas contenir de Lire",
      "Répéter...Jusqu'à ne peut faire qu'un seul tour",
    ],
    correct: 0,
    explain: [
      { type: "p", text: "TantQue est une boucle à test préalable : si la condition est fausse dès le départ, le corps ne s'exécute jamais. Répéter...Jusqu'à est une boucle à test final : le corps s'exécute toujours au moins une fois, la condition n'étant vérifiée qu'à la fin de chaque tour." },
    ],
  },
  {
    type: "trace",
    code: `Variables N, i en Entier
Début
  N ← 5
  Pour i ← 1 à N
    Écrire i
  i Suivant
Fin`,
    prompt: "Combien de fois l'instruction <code class=\"inline\">Écrire i</code> est-elle exécutée ?",
    options: ["4 fois", "5 fois", "6 fois", "Une infinité de fois"],
    correct: 1,
    explain: [
      { type: "p", text: "<code class=\"inline\">Pour i ← 1 à 5</code> exécute le corps de la boucle pour i = 1, 2, 3, 4 et 5 : soit exactement 5 tours, bornes incluses des deux côtés." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quelle boucle choisir pour parcourir un nombre de valeurs fixé à l'avance (par exemple, exactement 20 saisies) ?",
    options: ["TantQue", "Pour", "Répéter...Jusqu'à", "Aucune, il faut écrire 20 fois la même instruction"],
    correct: 1,
    explain: [
      { type: "p", text: "Dès que le nombre de répétitions est connu avant même de démarrer la boucle, Pour est la structure la plus naturelle et la plus lisible — elle gère automatiquement l'incrémentation et la condition d'arrêt sur le compteur." },
    ],
  },
  {
    type: "qcm",
    prompt: "Que se passe-t-il si, dans une boucle TantQue, la variable testée par la condition n'est jamais modifiée dans le corps de la boucle ?",
    options: [
      "L'algorithme s'arrête automatiquement après 100 tours par sécurité",
      "Une erreur de compilation est levée avant l'exécution",
      "La boucle tourne indéfiniment (boucle infinie), si la condition reste vraie",
      "Cela n'a aucun effet, la boucle s'exécute normalement une seule fois",
    ],
    correct: 2,
    explain: [
      { type: "p", text: "Le pseudo-code académique n'effectue aucune vérification automatique de ce type. Si rien dans le corps de la boucle ne fait évoluer la condition testée par TantQue, celle-ci reste vraie indéfiniment et l'algorithme ne se termine jamais : c'est la boucle infinie, l'un des bugs les plus classiques." },
    ],
  },
  {
    type: "qcm",
    prompt: "Pourquoi doit-on initialiser Som à 0 avant une boucle qui calcule une somme avec <code class=\"inline\">Som ← Som + i</code> ?",
    options: [
      "Ce n'est pas nécessaire, Som vaut 0 par défaut dans tous les cas",
      "Parce que la première addition a besoin d'une valeur de départ connue et neutre pour l'addition",
      "Uniquement pour respecter une convention esthétique",
      "Parce que sinon la boucle ne démarre pas",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Une variable non initialisée a un contenu indéterminé. Comme chaque tour ajoute à Som sa propre valeur courante, il faut lui donner une valeur de départ neutre pour l'addition — 0 — sans quoi le résultat final serait imprévisible. Pour un produit (comme une factorielle), c'est 1 qui joue ce rôle neutre." },
    ],
  },
  {
    type: "trace",
    code: `Variables N, i, F en Entier
Début
  N ← 4
  F ← 1
  Pour i ← 2 à N
    F ← F * i
  i Suivant
  Écrire F
Fin`,
    prompt: "Que va afficher cet algorithme (factorielle de N) ?",
    options: ["4", "12", "24", "8"],
    correct: 2,
    explain: [
      {
        type: "trace",
        vars: ["i", "F"],
        rows: [
          { instr: "F ← 1 (avant boucle)", values: { i: "—", F: "1" }, changed: ["F"] },
          { instr: "i ← 2 : F ← F*i", values: { i: "2", F: "2" }, changed: ["i", "F"] },
          { instr: "i ← 3 : F ← F*i", values: { i: "3", F: "6" }, changed: ["i", "F"] },
          { instr: "i ← 4 : F ← F*i", values: { i: "4", F: "24" }, changed: ["i", "F"] },
        ],
      },
      { type: "p", text: "F démarre à 1 (élément neutre de la multiplication), puis est multiplié successivement par 2, 3 et 4 : 1×2×3×4 = 24, qui est bien la factorielle de 4 (notée 4!)." },
    ],
  },
  {
    type: "qcm",
    prompt: "Dans l'algorithme qui cherche le plus grand de 20 nombres, à quoi sert le test <code class=\"inline\">i = 1 OU N > PG</code> ?",
    options: [
      "À ignorer la première valeur saisie",
      "À forcer PG à prendre la première valeur saisie, sans connaître à l'avance une borne de départ",
      "À arrêter la boucle prématurément",
      "Il ne sert à rien, on pourrait le supprimer sans effet",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Au premier tour (i = 1), le OU rend la condition vraie quelle que soit la valeur de N, ce qui initialise PG avec la première saisie. Les tours suivants (i &gt; 1), seule la comparaison N &gt; PG compte, pour ne mettre à jour PG que si une valeur plus grande est trouvée." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quelle structure choisir pour une saisie qu'on doit de toute façon demander au moins une fois, avant même de pouvoir la valider ?",
    options: ["Pour", "TantQue", "Répéter...Jusqu'à", "Si...Alors"],
    correct: 2,
    explain: [
      { type: "p", text: "Répéter...Jusqu'à exécute toujours son corps au moins une fois avant de tester la condition de sortie — exactement le comportement souhaité pour une saisie qu'on doit obtenir avant de pouvoir juger si elle est correcte, sans avoir besoin d'initialiser artificiellement la variable au préalable." },
    ],
  },
  {
    type: "vraifaux",
    prompt: "Vrai ou faux : une boucle TantQue dont la condition est fausse dès le premier test n'exécute jamais son corps.",
    options: ["Vrai", "Faux"],
    correct: 0,
    explain: [
      { type: "p", text: "Vrai. TantQue est une boucle à test préalable : la condition est vérifiée avant chaque tour, y compris le tout premier. Si elle est fausse d'entrée de jeu, le corps de la boucle n'est exécuté aucune fois — contrairement à Répéter...Jusqu'à." },
    ],
  },
];
