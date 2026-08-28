window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["06"] = {
  lead: `Une variable simple ne contient qu'une seule valeur. Dès qu'il faut stocker une collection de valeurs de même type — une liste de notes, une série de mesures — le tableau devient indispensable.`,
  sections: [
    {
      id: "definition",
      title: "Qu'est-ce qu'un tableau ?",
      blocks: [
        { type: "p", text: "Un tableau est une suite de cases contiguës en mémoire, toutes de même type, repérées chacune par un numéro appelé indice (ou index). On peut se représenter un tableau comme une rangée de casiers numérotés, chacun pouvant contenir une valeur." },
        {
          type: "array",
          cells: ["12", "8", "45", "3", "27"],
          highlight: [],
        },
        { type: "p", text: "Dans ce cours, les indices commencent à 0 : la première case du tableau ci-dessus est <code class=\"inline\">Nb(0)</code> (qui vaut 12), et sa dernière case est <code class=\"inline\">Nb(4)</code> (qui vaut 27) pour un tableau de 5 éléments." },
      ],
    },
    {
      id: "declaration",
      title: "Déclarer et indexer un tableau",
      blocks: [
        {
          type: "syntax",
          title: "Syntaxe",
          code: `Tableau <Nom>(<taille>) en <Type>
...
<Nom>(<indice>) ← <valeur>       // écrire dans une case
<variable> ← <Nom>(<indice>)     // lire une case`,
        },
        {
          type: "code",
          label: "exercice 6.3",
          code: `Tableau Notes(9) en Numérique
Variable i en Entier
Début
  Pour i ← 0 à 9
    Écrire "Note n°", i, " : "
    Lire Notes(i)
  i Suivant
Fin`,
        },
        {
          type: "callout",
          variant: "warn",
          title: "Attention aux bornes",
          text: "Un tableau déclaré avec <code class=\"inline\">Tableau Notes(9)</code> contient 10 cases valides, indicées de 0 à 9. Accéder à Notes(10) ou Notes(-1) sort du tableau et provoque une erreur d'exécution.",
        },
      ],
    },
    {
      id: "parcours",
      title: "Parcourir un tableau avec Pour",
      blocks: [
        { type: "p", text: "Le duo tableau + boucle Pour est omniprésent en algorithmique : on fait varier l'indice de 0 jusqu'à la dernière case, en traitant chaque valeur au passage." },
        {
          type: "code",
          label: "exercice 6.4",
          code: `Tableau Nb(5) en Entier
Variable i en Entier
Début
  Pour i ← 0 à 5
    Nb(i) ← i * i
  i Suivant
  Pour i ← 0 à 5
    Écrire Nb(i)
  i Suivant
Fin`,
        },
        {
          type: "array",
          cells: ["0", "1", "4", "9", "16", "25"],
          highlight: [3],
        },
        { type: "p", text: "Ce tableau de 6 cases (indices 0 à 5) contient les carrés de leur propre indice : Nb(3) — mis en évidence ci-dessus — vaut 3² = 9." },
      ],
    },
    {
      id: "accumulation",
      title: "Calculer une somme, une moyenne, un maximum",
      blocks: [
        { type: "p", text: "Une fois le tableau rempli, on le parcourt une seconde fois (dans une boucle Pour distincte) pour en extraire une information globale : le même motif d'accumulateur vu au chapitre 5 s'applique directement." },
        {
          type: "code",
          label: "exercice 6.9 — somme d'un tableau",
          code: `Tableau T(9) en Numérique
Variables i en Entier
Variable Somme en Numérique
Début
  Somme ← 0
  Pour i ← 0 à 9
    Somme ← Somme + T(i)
  i Suivant
  Écrire "Somme : ", Somme
  Écrire "Moyenne : ", Somme / 10
Fin`,
        },
      ],
    },
    {
      id: "suite",
      title: "Cas d'étude : une suite définie par récurrence",
      blocks: [
        { type: "p", text: "Un tableau permet aussi de construire une suite où chaque terme dépend des précédents, en réutilisant simplement les cases déjà calculées." },
        {
          type: "code",
          label: "exercice 6.6",
          code: `Tableau Suite(7) en Entier
Variable i en Entier
Début
  Suite(0) ← 1
  Suite(1) ← 1
  Pour i ← 2 à 7
    Suite(i) ← Suite(i-1) + Suite(i-2)
  i Suivant
Fin`,
        },
        {
          type: "trace",
          vars: ["Suite(0)", "Suite(1)", "Suite(2)", "Suite(3)", "Suite(4)"],
          rows: [
            { instr: "initialisation", values: { "Suite(0)": "1", "Suite(1)": "1", "Suite(2)": "?", "Suite(3)": "?", "Suite(4)": "?" }, changed: ["Suite(0)", "Suite(1)"] },
            { instr: "i ← 2", values: { "Suite(0)": "1", "Suite(1)": "1", "Suite(2)": "2", "Suite(3)": "?", "Suite(4)": "?" }, changed: ["Suite(2)"] },
            { instr: "i ← 3", values: { "Suite(0)": "1", "Suite(1)": "1", "Suite(2)": "2", "Suite(3)": "3", "Suite(4)": "?" }, changed: ["Suite(3)"] },
            { instr: "i ← 4", values: { "Suite(0)": "1", "Suite(1)": "1", "Suite(2)": "2", "Suite(3)": "3", "Suite(4)": "5" }, changed: ["Suite(4)"] },
          ],
        },
        { type: "p", text: "Chaque terme est la somme des deux précédents : c'est la suite de Fibonacci. Ce genre de calcul serait impossible avec de simples variables isolées — le tableau permet de garder en mémoire tout l'historique nécessaire." },
      ],
    },
    {
      id: "erreurs",
      title: "Erreurs fréquentes",
      blocks: [
        {
          type: "list",
          items: [
            "Confondre la <strong>taille</strong> déclarée d'un tableau et son <strong>dernier indice valide</strong> (un tableau de taille 10 va de l'indice 0 à 9, pas 0 à 10).",
            "Lire une case avant de l'avoir écrite : son contenu est alors indéterminé.",
            "Utiliser la même variable i comme indice dans deux boucles imbriquées sur le même tableau, ce qui écrase la progression de la boucle externe.",
            "Oublier qu'un tableau se parcourt en général en deux temps distincts : une boucle pour le remplir, une autre pour l'exploiter.",
          ],
        },
      ],
    },
  ],
};
