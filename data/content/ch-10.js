window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["10"] = {
  lead: `Dernier chapitre : deux familles d'algorithmes parmi les plus étudiés en informatique, qui réutilisent tout ce que vous avez appris — tableaux, boucles, variable temporaire, conditions. Trier un tableau, puis y chercher efficacement une valeur.`,
  sections: [
    {
      id: "pourquoi",
      title: "Pourquoi trier et chercher ?",
      blocks: [
        { type: "p", text: "Trouver un nom dans un annuaire papier, classé par ordre alphabétique, est bien plus rapide que dans une liste en désordre. Le tri organise les données pour rendre les recherches ultérieures efficaces — c'est tout l'enjeu de ce chapitre." },
      ],
    },
    {
      id: "tri-bulles",
      title: "Le tri à bulles",
      blocks: [
        { type: "p", text: "Le tri à bulles compare les éléments adjacents deux à deux, et les échange s'ils sont dans le mauvais ordre. On répète ce parcours jusqu'à ce qu'un passage complet ne provoque plus aucun échange : le tableau est alors trié. Les plus grandes valeurs « remontent » progressivement vers la fin, comme des bulles." },
        {
          type: "code",
          label: "tri-bulles.algo",
          code: `Tableau T(n) en Entier
Variables i, j, Temp en Entier
Début
  Pour i ← 0 à n-1
    Pour j ← 0 à n-2-i
      Si T(j) > T(j+1) Alors
        Temp ← T(j)
        T(j) ← T(j+1)
        T(j+1) ← Temp
      FinSi
    j Suivant
  i Suivant
Fin`,
        },
        { type: "p", text: "On y retrouve l'échange de deux variables du chapitre 1 (avec Temp comme variable temporaire), appliqué ici à deux cases d'un même tableau plutôt qu'à deux variables isolées." },
        {
          type: "array",
          cells: ["5", "1", "4", "2"],
          highlight: [0, 1],
        },
        { type: "p", text: "Au tout premier passage, on compare T(0)=5 et T(1)=1 : comme 5 &gt; 1, on les échange, ce qui donne <code class=\"inline\">1, 5, 4, 2</code>. Le parcours continue ainsi de proche en proche jusqu'à la fin du tableau." },
      ],
    },
    {
      id: "tri-selection",
      title: "Le tri par sélection",
      blocks: [
        { type: "p", text: "Le tri par sélection procède différemment : à chaque tour, il cherche le plus petit élément parmi ceux qui restent à trier, et le place directement à sa position finale (en l'échangeant avec l'élément actuellement à cette position)." },
        {
          type: "code",
          label: "tri-selection.algo",
          code: `Tableau T(n) en Entier
Variables i, j, IndiceMin, Temp en Entier
Début
  Pour i ← 0 à n-2
    IndiceMin ← i
    Pour j ← i+1 à n-1
      Si T(j) < T(IndiceMin) Alors
        IndiceMin ← j
      FinSi
    j Suivant
    Temp ← T(i)
    T(i) ← T(IndiceMin)
    T(IndiceMin) ← Temp
  i Suivant
Fin`,
        },
        { type: "p", text: "On retrouve ici le motif du « champion » du chapitre 5 (variable qui retient l'indice du minimum rencontré), suivi d'un unique échange par tour — contrairement au tri à bulles qui peut échanger plusieurs fois par passage." },
      ],
    },
    {
      id: "recherche-sequentielle",
      title: "Rappel : la recherche séquentielle",
      blocks: [
        { type: "p", text: "Chercher une valeur dans un tableau non trié impose de le parcourir du début à la fin, sans raccourci possible, jusqu'à trouver la valeur (ou atteindre la fin du tableau sans l'avoir trouvée)." },
        {
          type: "code",
          label: "recherche-sequentielle.algo",
          code: `Tableau T(n) en Entier
Variables i, Cible en Entier
Variable Trouve en Booléen
Début
  Trouve ← Faux
  i ← 0
  TantQue i <= n-1 ET Non Trouve
    Si T(i) = Cible Alors
      Trouve ← Vrai
    FinSi
    i ← i + 1
  FinTantQue
Fin`,
        },
        { type: "p", text: "Dans le pire des cas (valeur absente, ou tout au bout du tableau), il faut examiner les n éléments un par un. Si le tableau est trié, on peut faire radicalement mieux." },
      ],
    },
    {
      id: "recherche-dichotomique",
      title: "La recherche dichotomique",
      blocks: [
        { type: "p", text: "Sur un tableau <strong>trié</strong>, la recherche dichotomique compare la valeur cherchée à l'élément du milieu du tableau. Si ce n'est pas la bonne valeur, on sait immédiatement dans quelle moitié continuer à chercher (l'autre moitié peut être totalement écartée), et on répète le procédé sur cette moitié restante." },
        {
          type: "code",
          label: "recherche-dichotomique.algo",
          code: `Tableau T(n) en Entier    // T doit être trié
Variables Debut, Fin, Milieu, Cible en Entier
Variable Trouve en Booléen
Début
  Debut ← 0
  Fin ← n - 1
  Trouve ← Faux
  TantQue Debut <= Fin ET Non Trouve
    Milieu ← (Debut + Fin) / 2
    Si T(Milieu) = Cible Alors
      Trouve ← Vrai
    SinonSi T(Milieu) < Cible Alors
      Debut ← Milieu + 1
    Sinon
      Fin ← Milieu - 1
    FinSi
  FinTantQue
Fin`,
        },
        {
          type: "trace",
          vars: ["Debut", "Fin", "Milieu", "T(Milieu)"],
          rows: [
            { instr: "recherche de 42, T trié de 0 à 15", values: { Debut: "0", Fin: "15", Milieu: "7", "T(Milieu)": "23" }, changed: ["Milieu"] },
            { instr: "23 < 42 → Debut ← Milieu+1", values: { Debut: "8", Fin: "15", Milieu: "11", "T(Milieu)": "51" }, changed: ["Debut", "Milieu"] },
            { instr: "51 > 42 → Fin ← Milieu-1", values: { Debut: "8", Fin: "10", Milieu: "9", "T(Milieu)": "42" }, changed: ["Fin", "Milieu"] },
            { instr: "42 = 42 → Trouvé !", values: { Debut: "8", Fin: "10", Milieu: "9", "T(Milieu)": "42" }, changed: [] },
          ],
        },
        { type: "p", text: "En seulement 3 comparaisons, la dichotomie a trouvé la valeur dans un tableau de 16 éléments, là où une recherche séquentielle aurait pu nécessiter jusqu'à 16 comparaisons. À chaque étape, l'espace de recherche est divisé par deux : c'est ce qui rend cette méthode redoutablement efficace sur de grands tableaux." },
        {
          type: "callout",
          variant: "pitfall",
          title: "Condition indispensable : le tableau doit être trié",
          text: "La recherche dichotomique ne fonctionne que sur un tableau déjà trié. L'appliquer sur un tableau en désordre produit des résultats faux, puisque tout le raisonnement repose sur le fait d'éliminer une moitié entière du tableau à chaque étape.",
        },
      ],
    },
    {
      id: "comparaison",
      title: "Séquentielle ou dichotomique ?",
      blocks: [
        {
          type: "list",
          items: [
            "<strong>Recherche séquentielle</strong> — fonctionne sur n'importe quel tableau, trié ou non ; jusqu'à n comparaisons dans le pire cas.",
            "<strong>Recherche dichotomique</strong> — exige un tableau trié au préalable ; de l'ordre de log₂(n) comparaisons seulement (environ 10 comparaisons suffisent pour un tableau de 1000 éléments).",
            "Trier un tableau a un coût (le temps du tri lui-même) : la dichotomie n'est rentable que si l'on effectue ensuite de nombreuses recherches sur ce même tableau trié.",
          ],
        },
      ],
    },
  ],
};
