window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["05"] = {
  lead: `Beaucoup de problèmes se résolvent en répétant une même série d'instructions : valider une saisie jusqu'à ce qu'elle soit correcte, parcourir dix valeurs, cumuler une somme. Les boucles évitent de dupliquer du code et permettent de traiter un nombre de répétitions inconnu à l'avance.`,
  sections: [
    {
      id: "pourquoi",
      title: "Pourquoi répéter ?",
      blocks: [
        { type: "p", text: "Imaginez devoir afficher la table de multiplication de 7 sans boucle : il faudrait écrire dix lignes de calcul quasi identiques. Une boucle exprime cette répétition une seule fois, en décrivant le motif qui varie (ici, le multiplicateur) plutôt que chaque cas particulier." },
        { type: "p", text: "Le pseudo-code académique propose trois structures de boucle, chacune adaptée à une situation différente : <code class=\"inline\">TantQue</code>, <code class=\"inline\">Pour</code>, et <code class=\"inline\">Répéter...Jusqu'à</code>." },
      ],
    },
    {
      id: "tantque",
      title: "TantQue — répéter tant qu'une condition est vraie",
      blocks: [
        { type: "p", text: "<code class=\"inline\">TantQue</code> teste sa condition <strong>avant</strong> chaque tour. Si la condition est fausse dès le départ, le corps de la boucle ne s'exécute jamais — pas même une fois." },
        {
          type: "syntax",
          title: "Syntaxe",
          code: `TantQue <condition>
  <instructions>
FinTantQue`,
        },
        {
          type: "code",
          label: "exercice 5.1 — saisie contrôlée",
          code: `Variable N en Entier
Début
  N ← 0
  Écrire "Entrez un nombre entre 1 et 3"
  TantQue N < 1 OU N > 3
    Lire N
    Si N < 1 OU N > 3 Alors
      Écrire "Saisie erronée. Recommencez"
    FinSi
  FinTantQue
Fin`,
        },
        { type: "p", text: "C'est la structure idéale pour valider une saisie : on ne sait pas à l'avance combien de tentatives l'utilisateur aura besoin, donc on ne peut pas utiliser un nombre de répétitions fixe." },
        {
          type: "callout",
          variant: "pitfall",
          title: "Boucle infinie",
          text: "Si la condition de TantQue ne devient jamais fausse (par exemple parce qu'on a oublié de faire évoluer une variable testée dans la condition), la boucle tourne indéfiniment. C'est l'erreur la plus redoutée des débutants : vérifiez toujours que chaque tour rapproche la condition de sa sortie.",
        },
      ],
    },
    {
      id: "pour",
      title: "Pour — répéter un nombre de fois connu",
      blocks: [
        { type: "p", text: "<code class=\"inline\">Pour</code> répète un bloc en faisant varier automatiquement une variable compteur entre une borne de départ et une borne d'arrivée, avec un pas de 1 par défaut. C'est la structure à privilégier dès que le nombre de répétitions est connu d'avance." },
        {
          type: "syntax",
          title: "Syntaxe",
          code: `Pour <compteur> ← <début> à <fin>
  <instructions>
<compteur> Suivant`,
        },
        {
          type: "code",
          label: "exercice 5.4 — table de multiplication",
          code: `Variables N, i en Entier
Début
  Écrire "Entrez un nombre : "
  Lire N
  Pour i ← 1 à 10
    Écrire N, " x ", i, " = ", N * i
  i Suivant
Fin`,
        },
        { type: "p", text: "La variable compteur (ici i) est automatiquement incrémentée de 1 après chaque tour, et la boucle s'arrête dès qu'elle dépasse la borne d'arrivée. On l'utilise très souvent pour parcourir un intervalle d'entiers ou, plus tard, les indices d'un tableau." },
        {
          type: "code",
          label: "exercice 5.5 — accumulateur",
          code: `Variables N, i, Som en Entier
Début
  Écrire "Entrez un nombre : "
  Lire N
  Som ← 0
  Pour i ← 1 à N
    Som ← Som + i
  i Suivant
  Écrire "La somme est : ", Som
Fin`,
        },
        {
          type: "callout",
          variant: "tip",
          title: "Le motif de l'accumulateur",
          text: "Initialiser une variable à 0 avant la boucle, puis lui ajouter une valeur à chaque tour, est un motif fondamental (l'accumulateur) que l'on retrouve pour sommer, compter ou multiplier — comme pour la factorielle, en initialisant à 1 au lieu de 0.",
        },
      ],
    },
    {
      id: "repeter",
      title: "Répéter...Jusqu'à — tester après coup",
      blocks: [
        { type: "p", text: "<code class=\"inline\">Répéter...Jusqu'à</code> fonctionne comme TantQue, à un détail près mais essentiel : la condition est testée <strong>après</strong> chaque tour, à la fin. Le corps de la boucle s'exécute donc toujours <strong>au moins une fois</strong>, même si la condition est déjà vraie au départ." },
        {
          type: "syntax",
          title: "Syntaxe",
          code: `Répéter
  <instructions>
Jusqu'à <condition>`,
        },
        {
          type: "code",
          label: "saisie contrôlée avec Répéter",
          code: `Variable N en Entier
Début
  Répéter
    Écrire "Entrez un nombre entre 1 et 3 : "
    Lire N
  Jusqu'à N >= 1 ET N <= 3
Fin`,
        },
        { type: "p", text: "Notez la nuance avec l'exemple équivalent en TantQue : ici, la condition de sortie (« jusqu'à ce que ce soit valide ») est bien plus naturelle à exprimer, et on n'a plus besoin d'initialiser N artificiellement avant la boucle, puisqu'on est sûr de passer au moins une fois par le Lire." },
      ],
    },
    {
      id: "choisir",
      title: "Quelle boucle choisir ?",
      blocks: [
        {
          type: "list",
          items: [
            "<strong>Pour</strong> — dès que le nombre de répétitions est connu à l'avance (parcourir de 1 à N, parcourir un tableau).",
            "<strong>TantQue</strong> — nombre de répétitions inconnu, et le cas « zéro répétition » doit rester possible.",
            "<strong>Répéter...Jusqu'à</strong> — nombre de répétitions inconnu, mais on est certain de vouloir exécuter le bloc au moins une fois (typiquement : une saisie qu'on doit forcément demander avant de pouvoir la valider).",
          ],
        },
      ],
    },
    {
      id: "cas-etude",
      title: "Cas d'étude : trouver le plus grand nombre",
      blocks: [
        { type: "p", text: "Cet algorithme demande vingt nombres à l'utilisateur et retient le plus grand rencontré, à l'aide d'un accumulateur particulier souvent appelé variable de suivi ou « champion »." },
        {
          type: "code",
          label: "exercice 5.7",
          code: `Variables N, i, PG en Entier
Début
  PG ← 0
  Pour i ← 1 à 20
    Écrire "Entrez un nombre : "
    Lire N
    Si i = 1 OU N > PG Alors
      PG ← N
    FinSi
  i Suivant
  Écrire "Le nombre le plus grand était : ", PG
Fin`,
        },
        { type: "p", text: "Le test <code class=\"inline\">i = 1 OU N > PG</code> est une astuce classique : au premier tour, on force PG à prendre la première valeur saisie (quelle qu'elle soit), sans avoir besoin de connaître à l'avance une valeur de départ « suffisamment petite »." },
      ],
    },
    {
      id: "erreurs",
      title: "Erreurs fréquentes",
      blocks: [
        {
          type: "list",
          items: [
            "Oublier d'initialiser l'accumulateur (une somme doit démarrer à 0, un produit à 1) avant d'entrer dans la boucle.",
            "Écrire une condition de TantQue qui ne dépend d'aucune variable modifiée dans le corps de la boucle → boucle infinie.",
            "Confondre le nombre de tours d'un Pour : <code class=\"inline\">Pour i ← 1 à 10</code> exécute exactement 10 tours (1, 2, … 10), pas 9.",
            "Utiliser TantQue là où Répéter...Jusqu'à serait plus naturel (et inversement), rendant l'algorithme inutilement compliqué à initialiser.",
          ],
        },
      ],
    },
  ],
};
