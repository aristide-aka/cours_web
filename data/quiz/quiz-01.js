window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["01"] = [
  {
    type: "trace",
    code: `Variables A, B en Entier
Début
  A ← 1
  B ← A + 3
  A ← 3
Fin`,
    codeLabel: "exercice 1.1",
    prompt: "Quelles sont les valeurs finales de A et B ?",
    options: ["A = 1, B = 4", "A = 3, B = 4", "A = 3, B = 3", "A = 1, B = 3"],
    correct: 1,
    explain: [
      { type: "p", text: "Suivons chaque instruction dans l'ordre, en notant l'état des deux variables après chacune :" },
      {
        type: "trace",
        vars: ["A", "B"],
        rows: [
          { instr: "A ← 1", values: { A: "1", B: "?" }, changed: ["A"] },
          { instr: "B ← A + 3", values: { A: "1", B: "4" }, changed: ["B"] },
          { instr: "A ← 3", values: { A: "3", B: "4" }, changed: ["A"] },
        ],
      },
      { type: "p", text: "La dernière instruction modifie A, mais B garde la valeur qu'il a reçue plus tôt (4). Les affectations passées ne sont jamais recalculées automatiquement : B ne « suit » pas A." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quelle est la bonne façon de lire l'instruction <code class=\"inline\">A ← B + 3</code> ?",
    options: [
      "« A est égal à B + 3, pour toujours »",
      "« On calcule B + 3, puis on range le résultat dans A »",
      "« B devient A + 3 »",
      "« A et B + 3 sont interchangeables »",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "L'affectation se lit toujours de droite à gauche : on évalue d'abord l'expression à droite de la flèche (ici <code class=\"inline\">B + 3</code>) avec les valeurs <em>actuelles</em> des variables, puis on range ce résultat dans la variable de gauche." },
      { type: "callout", variant: "warn", title: "Ce n'est pas une égalité mathématique", text: "Contrairement au signe =, la flèche ← n'établit pas une relation permanente. Si B change ensuite, A ne changera pas automatiquement." },
    ],
  },
  {
    type: "trace",
    code: `Variables A, B en Entier
Début
  A ← 5
  B ← 2
  A ← B
  B ← A
Fin`,
    codeLabel: "exercice 1.5",
    prompt: "Cet algorithme échange-t-il correctement les valeurs de A et B ?",
    options: [
      "Oui, on obtient A = 2 et B = 5",
      "Non, on obtient A = 2 et B = 2",
      "Non, on obtient une erreur d'exécution",
      "Oui, mais seulement si A et B sont égaux au départ",
    ],
    correct: 1,
    explain: [
      {
        type: "trace",
        vars: ["A", "B"],
        rows: [
          { instr: "A ← 5", values: { A: "5", B: "?" }, changed: ["A"] },
          { instr: "B ← 2", values: { A: "5", B: "2" }, changed: ["B"] },
          { instr: "A ← B", values: { A: "2", B: "2" }, changed: ["A"] },
          { instr: "B ← A", values: { A: "2", B: "2" }, changed: ["B"] },
        ],
      },
      { type: "p", text: "Dès que <code class=\"inline\">A ← B</code> s'exécute, la valeur originale de A (5) est définitivement perdue : elle n'a été sauvegardée nulle part. La dernière instruction ne fait donc que recopier 2 dans B, qui l'avait déjà." },
      { type: "callout", variant: "tip", title: "La solution", text: "Il faut passer par une variable temporaire C pour sauvegarder A avant de l'écraser : <code class=\"inline\">C ← A</code>, <code class=\"inline\">A ← B</code>, <code class=\"inline\">B ← C</code>." },
    ],
  },
  {
    type: "qcm",
    prompt: "Que produit l'algorithme suivant à l'exécution ?",
    code: `Variables A, B, C en Caractère
Début
  A ← "423"
  B ← "12"
  C ← A + B
Fin`,
    options: [
      "C vaut \"42312\"",
      "C vaut 435",
      "Une erreur d'exécution, car + n'est pas défini sur des caractères",
      "C vaut \"423\" (B est ignoré)",
    ],
    correct: 2,
    explain: [
      { type: "p", text: "A et B sont de type Caractère (du texte), pas de type numérique. L'opérateur <code class=\"inline\">+</code> est réservé à l'addition de nombres : il n'est pas défini sur du texte, ce qui provoque une erreur d'exécution." },
      { type: "p", text: "Pour assembler deux chaînes bout à bout, il faut utiliser l'opérateur de concaténation <code class=\"inline\">&</code> : <code class=\"inline\">C ← A & B</code> donnerait alors <code class=\"inline\">\"42312\"</code>." },
    ],
  },
  {
    type: "trace",
    code: `Variables A, B, C en Entier
Début
  A ← 3
  B ← 10
  C ← A + B
  B ← A + B
  A ← C
Fin`,
    codeLabel: "exercice 1.4",
    prompt: "Quelles sont les valeurs finales de A, B et C ?",
    options: ["A = 13, B = 13, C = 13", "A = 3, B = 13, C = 13", "A = 13, B = 10, C = 13", "A = 3, B = 10, C = 13"],
    correct: 0,
    explain: [
      {
        type: "trace",
        vars: ["A", "B", "C"],
        rows: [
          { instr: "A ← 3", values: { A: "3", B: "10", C: "?" }, changed: ["A"] },
          { instr: "B ← 10", values: { A: "3", B: "10", C: "?" }, changed: ["B"] },
          { instr: "C ← A + B", values: { A: "3", B: "10", C: "13" }, changed: ["C"] },
          { instr: "B ← A + B", values: { A: "3", B: "13", C: "13" }, changed: ["B"] },
          { instr: "A ← C", values: { A: "13", B: "13", C: "13" }, changed: ["A"] },
        ],
      },
      { type: "p", text: "Le point clé : à la ligne <code class=\"inline\">B ← A + B</code>, on utilise la valeur de B <em>avant</em> modification (10), pas une valeur future. Chaque affectation utilise l'état courant des variables au moment où elle s'exécute." },
    ],
  },
  {
    type: "vraifaux",
    prompt: "Vrai ou faux : une variable ne peut contenir qu'une seule valeur à la fois.",
    options: ["Vrai", "Faux"],
    correct: 0,
    explain: [
      { type: "p", text: "Vrai. Une variable désigne un unique emplacement mémoire : elle contient exactement une valeur à un instant donné. Affecter une nouvelle valeur écrase systématiquement l'ancienne, qui est perdue si elle n'a pas été sauvegardée ailleurs — c'est précisément ce qui rend l'exercice de l'échange de variables intéressant." },
    ],
  },
  {
    type: "qcm",
    prompt: "Laquelle de ces déclarations est syntaxiquement correcte pour trois variables entières A, B et C ?",
    options: [
      "<code class=\"inline\">Variable A, B, C en Entier</code>",
      "<code class=\"inline\">Variables A, B, C en Entier</code>",
      "<code class=\"inline\">Entier A, B, C</code>",
      "<code class=\"inline\">A, B, C ← Entier</code>",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Le mot-clé s'accorde en nombre : on utilise <code class=\"inline\">Variable</code> au singulier pour une seule variable, et <code class=\"inline\">Variables</code> au pluriel dès qu'on en déclare plusieurs du même type sur une seule ligne, séparées par des virgules." },
      { type: "syntax", title: "Rappel de syntaxe", code: `Variable X en Entier
Variables A, B, C en Entier` },
    ],
  },
  {
    type: "trace",
    code: `Variables A, B, C en Entier
Début
  A ← 5
  B ← 3
  C ← A + B
  A ← 2
  C ← B – A
Fin`,
    codeLabel: "exercice 1.2",
    prompt: "Quelle est la valeur finale de C ?",
    options: ["8", "1", "3", "−2"],
    correct: 1,
    explain: [
      {
        type: "trace",
        vars: ["A", "B", "C"],
        rows: [
          { instr: "A ← 5", values: { A: "5", B: "?", C: "?" }, changed: ["A"] },
          { instr: "B ← 3", values: { A: "5", B: "3", C: "?" }, changed: ["B"] },
          { instr: "C ← A + B", values: { A: "5", B: "3", C: "8" }, changed: ["C"] },
          { instr: "A ← 2", values: { A: "2", B: "3", C: "8" }, changed: ["A"] },
          { instr: "C ← B − A", values: { A: "2", B: "3", C: "1" }, changed: ["C"] },
        ],
      },
      { type: "p", text: "C est d'abord affecté à 8 (5+3), puis totalement écrasé par la valeur de la dernière instruction (3−2 = 1). Sa première valeur (8) est sans importance pour le résultat final : seule la dernière affectation compte." },
    ],
  },
];
