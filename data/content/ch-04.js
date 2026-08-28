window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["04"] = {
  lead: `Les vraies décisions dépendent rarement d'une seule condition isolée. Les opérateurs logiques ET, OU et NON permettent de combiner plusieurs tests en une seule expression booléenne, et souvent de remplacer des Si imbriqués par une condition unique, plus lisible.`,
  sections: [
    {
      id: "booleens",
      title: "Rappel : les expressions booléennes",
      blocks: [
        { type: "p", text: "Une expression comme <code class=\"inline\">Age > 18</code> ne vaut ni un nombre, ni du texte : elle vaut <code class=\"inline\">Vrai</code> ou <code class=\"inline\">Faux</code>. On dit qu'elle est de type Booléen. Les opérateurs logiques combinent entre elles des expressions booléennes pour en former une nouvelle." },
      ],
    },
    {
      id: "et",
      title: "ET — les deux conditions doivent être vraies",
      blocks: [
        { type: "p", text: "<code class=\"inline\">A ET B</code> n'est vrai que si A <strong>et</strong> B sont vraies simultanément. Dès que l'une des deux est fausse, l'ensemble est faux." },
        {
          type: "trace",
          vars: ["A", "B", "A ET B"],
          rows: [
            { instr: "Vrai, Vrai", values: { A: "Vrai", B: "Vrai", "A ET B": "Vrai" }, changed: ["A ET B"] },
            { instr: "Vrai, Faux", values: { A: "Vrai", B: "Faux", "A ET B": "Faux" }, changed: ["A ET B"] },
            { instr: "Faux, Vrai", values: { A: "Faux", B: "Vrai", "A ET B": "Faux" }, changed: ["A ET B"] },
            { instr: "Faux, Faux", values: { A: "Faux", B: "Faux", "A ET B": "Faux" }, changed: ["A ET B"] },
          ],
        },
        { type: "p", text: "Cela permet de remplacer une imbrication de Si par une condition unique — reprenons l'exemple du chapitre précédent :" },
        {
          type: "compare",
          bad: {
            title: "Deux Si imbriqués",
            code: `Si M > 0 Alors
  Si N > 0 Alors
    Écrire "Les deux positifs"
  FinSi
FinSi`,
          },
          good: {
            title: "Un seul test avec ET",
            code: `Si M > 0 ET N > 0 Alors
  Écrire "Les deux positifs"
FinSi`,
          },
        },
      ],
    },
    {
      id: "ou",
      title: "OU — au moins une condition vraie",
      blocks: [
        { type: "p", text: "<code class=\"inline\">A OU B</code> est vrai dès que A <strong>ou</strong> B (ou les deux) est vraie. Il n'est faux que lorsque les deux conditions sont fausses en même temps." },
        {
          type: "code",
          label: "exercice 4.1",
          code: `Si Tutu > Toto + 4 OU Tata = "OK" Alors
  Tutu ← Tutu + 1
Sinon
  Tutu ← Tutu - 1
FinSi`,
        },
        {
          type: "callout",
          variant: "warn",
          title: "OU logique ≠ \"ou\" exclusif du langage courant",
          text: "En français courant, « fromage ou dessert » sous-entend souvent un choix exclusif. Le OU logique algorithmique est inclusif : si les deux conditions sont vraies, l'expression reste vraie.",
        },
      ],
    },
    {
      id: "non",
      title: "NON — inverser une condition",
      blocks: [
        { type: "p", text: "<code class=\"inline\">NON A</code> inverse la valeur de vérité de A : vrai devient faux, et faux devient vrai." },
        {
          type: "trace",
          vars: ["A", "NON A"],
          rows: [
            { instr: "Vrai", values: { A: "Vrai", "NON A": "Faux" }, changed: ["NON A"] },
            { instr: "Faux", values: { A: "Faux", "NON A": "Vrai" }, changed: ["NON A"] },
          ],
        },
        { type: "p", text: "<code class=\"inline\">NON (N &gt; 0)</code> équivaut à <code class=\"inline\">N &lt;= 0</code>. Il est en général plus lisible de reformuler directement la condition inverse plutôt que d'empiler les NON, mais l'opérateur reste indispensable dès qu'on teste un booléen ou un drapeau : <code class=\"inline\">TantQue NON Trouvé</code>." },
      ],
    },
    {
      id: "priorites",
      title: "Priorités et parenthèses",
      blocks: [
        { type: "p", text: "Comme en mathématiques, <code class=\"inline\">NON</code> se calcule avant <code class=\"inline\">ET</code>, qui se calcule avant <code class=\"inline\">OU</code>. Dès qu'une expression mélange plusieurs opérateurs, il est fortement recommandé d'utiliser des parenthèses pour lever toute ambiguïté — pour le lecteur autant que pour l'ordinateur." },
        {
          type: "compare",
          bad: {
            title: "Ambigu à la lecture",
            code: `Si Age > 18 ET Sexe = "F" OU Age > 65 Alors
  ...`,
          },
          good: {
            title: "Intention explicite",
            code: `Si (Age > 18 ET Sexe = "F") OU Age > 65 Alors
  ...`,
          },
        },
      ],
    },
    {
      id: "cas-etude",
      title: "Cas d'étude : l'impôt de Zorglub",
      blocks: [
        { type: "p", text: "Les habitants de Zorglub paient l'impôt selon les règles suivantes : les hommes de plus de 20 ans paient l'impôt ; les femmes le paient si elles ont entre 18 et 35 ans ; les autres n'en paient pas." },
        {
          type: "code",
          label: "impot-zorglub.algo",
          code: `Variables Age en Entier
Variable Sexe en Caractère
Variable Imposable en Booléen
Début
  Écrire "Âge : "
  Lire Age
  Écrire "Sexe (H/F) : "
  Lire Sexe
  Imposable ← (Sexe = "H" ET Age > 20) OU (Sexe = "F" ET Age >= 18 ET Age <= 35)
  Si Imposable Alors
    Écrire "Imposable"
  Sinon
    Écrire "Non imposable"
  FinSi
Fin`,
        },
        { type: "p", text: "Cette écriture range directement le résultat du test dans une variable booléenne (<code class=\"inline\">Imposable</code>), ce qui rend le <code class=\"inline\">Si</code> final particulièrement lisible : <code class=\"inline\">Si Imposable Alors</code> se lit presque comme une phrase en français." },
      ],
    },
  ],
};
