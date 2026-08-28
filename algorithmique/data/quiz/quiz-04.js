window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["04"] = [
  {
    type: "qcm",
    prompt: "Quand l'expression <code class=\"inline\">A ET B</code> est-elle vraie ?",
    options: ["Dès que A ou B est vrai", "Uniquement lorsque A et B sont vraies simultanément", "Uniquement lorsque A et B sont fausses", "Toujours"],
    correct: 1,
    explain: [
      { type: "p", text: "L'opérateur ET est le plus strict des deux : il exige que les deux conditions soient vraies en même temps. Il suffit qu'une seule des deux soit fausse pour que l'ensemble devienne faux." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quand l'expression <code class=\"inline\">A OU B</code> est-elle fausse ?",
    options: ["Dès que A est fausse", "Uniquement lorsque A et B sont fausses toutes les deux", "Dès que B est vraie", "Jamais"],
    correct: 1,
    explain: [
      { type: "p", text: "OU est un opérateur permissif : il suffit qu'une seule des deux conditions soit vraie pour que l'ensemble soit vrai. Il ne devient faux que dans le seul cas où A et B sont fausses toutes les deux." },
    ],
  },
  {
    type: "trace",
    prompt: "Si M = 4 et N = -2, que vaut l'expression <code class=\"inline\">M > 0 ET N > 0</code> ?",
    code: `M ← 4
N ← -2
Résultat ← M > 0 ET N > 0`,
    options: ["Vrai", "Faux", "4", "Erreur"],
    correct: 1,
    explain: [
      { type: "p", text: "<code class=\"inline\">M > 0</code> vaut Vrai (4 est positif), mais <code class=\"inline\">N > 0</code> vaut Faux (−2 n'est pas positif). Comme ET exige que les deux conditions soient vraies, et que l'une des deux est fausse, le résultat global est Faux." },
    ],
  },
  {
    type: "qcm",
    prompt: "Que vaut <code class=\"inline\">NON (N > 0)</code> pour N = -3 ?",
    options: ["Vrai", "Faux", "-3", "Cela dépend du type de N"],
    correct: 0,
    explain: [
      { type: "p", text: "<code class=\"inline\">N > 0</code> vaut Faux quand N = -3 (−3 n'est pas positif). L'opérateur NON inverse cette valeur : NON Faux devient Vrai. <code class=\"inline\">NON (N > 0)</code> équivaut d'ailleurs à écrire directement <code class=\"inline\">N &lt;= 0</code>, ce qui est vrai pour N = -3." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quel est l'ordre de priorité correct entre les trois opérateurs logiques ?",
    options: [
      "OU, puis ET, puis NON",
      "NON, puis ET, puis OU",
      "ET, puis OU, puis NON",
      "Les trois ont exactement la même priorité",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Comme en mathématiques avec la multiplication et l'addition, NON se calcule en premier (il porte sur une seule expression), puis ET, puis OU. En cas de doute — ou pour la clarté du lecteur — l'usage de parenthèses reste toujours recommandé." },
    ],
  },
  {
    type: "qcm",
    prompt: "Comment simplifier ces deux Si imbriqués en une seule condition ?",
    code: `Si M > 0 Alors
  Si N > 0 Alors
    Écrire "Les deux positifs"
  FinSi
FinSi`,
    options: [
      "Si M > 0 OU N > 0 Alors ... FinSi",
      "Si M > 0 ET N > 0 Alors ... FinSi",
      "Si NON(M > 0) Alors ... FinSi",
      "Cela ne peut pas être simplifié",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Les deux Si imbriqués exigent que M > 0 <em>et</em> que N > 0 pour atteindre l'instruction interne : c'est exactement la définition de l'opérateur ET. <code class=\"inline\">Si M > 0 ET N > 0 Alors</code> produit un résultat rigoureusement identique, en une seule ligne bien plus lisible." },
    ],
  },
  {
    type: "vraifaux",
    prompt: "Vrai ou faux : dans le langage courant, \"ou\" est souvent exclusif, alors que le OU logique algorithmique est toujours inclusif.",
    options: ["Vrai", "Faux"],
    correct: 0,
    explain: [
      { type: "p", text: "Vrai. En français courant, « thé ou café » sous-entend un choix entre les deux. En algorithmique, <code class=\"inline\">A OU B</code> reste vrai même si A <em>et</em> B sont vraies simultanément — c'est un OU inclusif, à ne pas confondre avec un choix exclusif." },
    ],
  },
];
