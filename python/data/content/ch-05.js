window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["05"] = {
  lead: `Calculer et comparer sont les deux gestes les plus fréquents de tout programme. Ce chapitre présente les opérateurs arithmétiques de Python, puis les opérateurs booléens qui permettent de combiner plusieurs conditions.`,
  sections: [
    {
      id: "arithmetique",
      title: "Les opérateurs arithmétiques",
      blocks: [
        {
          type: "table",
          headers: ["Opérateur", "Rôle", "Exemple"],
          rows: [
            ["<code class=\"inline\">+</code>", "Addition", "<code class=\"inline\">5 + 2</code> → 7"],
            ["<code class=\"inline\">-</code>", "Soustraction", "<code class=\"inline\">5 - 2</code> → 3"],
            ["<code class=\"inline\">*</code>", "Multiplication", "<code class=\"inline\">5 * 2</code> → 10"],
            ["<code class=\"inline\">/</code>", "Division réelle", "<code class=\"inline\">5 / 2</code> → 2.5"],
            ["<code class=\"inline\">//</code>", "Division entière (arrondie vers le bas)", "<code class=\"inline\">5 // 2</code> → 2"],
            ["<code class=\"inline\">%</code>", "Modulo (reste de la division)", "<code class=\"inline\">5 % 2</code> → 1"],
            ["<code class=\"inline\">**</code>", "Puissance", "<code class=\"inline\">5 ** 2</code> → 25"],
          ],
        },
        {
          type: "callout",
          variant: "pitfall",
          title: "/ renvoie toujours un float en Python 3",
          text: "En Python 3, <code class=\"inline\">/</code> effectue toujours une division réelle, même entre deux entiers : <code class=\"inline\">10 / 2</code> vaut <code class=\"inline\">5.0</code>, pas <code class=\"inline\">5</code>. Pour obtenir une division entière (comme la division du pseudo-code ou du C), utilisez explicitement <code class=\"inline\">//</code>.",
        },
      ],
    },
    {
      id: "comparaison",
      title: "Les opérateurs de comparaison",
      blocks: [
        {
          type: "table",
          headers: ["Opérateur", "Signification"],
          rows: [
            ["<code class=\"inline\">==</code>", "Égal à (à ne pas confondre avec = qui affecte)"],
            ["<code class=\"inline\">!=</code>", "Différent de"],
            ["<code class=\"inline\">&lt;</code> / <code class=\"inline\">&gt;</code>", "Strictement inférieur / supérieur"],
            ["<code class=\"inline\">&lt;=</code> / <code class=\"inline\">&gt;=</code>", "Inférieur ou égal / supérieur ou égal"],
          ],
        },
        { type: "p", text: "Toute comparaison produit un booléen (<code class=\"inline\">True</code> ou <code class=\"inline\">False</code>) — exactement le type vu au chapitre 2." },
      ],
    },
    {
      id: "operateurs-booleens",
      title: "and, or, not",
      blocks: [
        { type: "p", text: "Python combine des conditions avec des mots entiers plutôt qu'avec des symboles — ce qui rend souvent le code plus lisible qu'en C." },
        {
          type: "table",
          headers: ["Python", "Équivalent pseudo-code"],
          rows: [
            ["<code class=\"inline\">and</code>", "ET"],
            ["<code class=\"inline\">or</code>", "OU"],
            ["<code class=\"inline\">not</code>", "NON"],
          ],
        },
        {
          type: "code",
          label: "operateurs_booleens.py",
          lang: "python",
          code: `age = 20
a_un_billet = True
peut_entrer = age >= 18 and a_un_billet
print(peut_entrer)   # True`,
        },
        {
          type: "callout",
          variant: "tip",
          title: "Analogie : le videur de concert",
          text: "and, c'est le videur qui exige DEUX conditions à la fois (avoir 18 ans ET un billet). or, c'est le vestiaire gratuit qui accepte votre manteau OU votre sac — un seul des deux suffit.",
        },
      ],
    },
  ],
};
