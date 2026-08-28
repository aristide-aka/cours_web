window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["06"] = {
  lead: `Les opérateurs de PHP ressemblent beaucoup à ceux du C, avec quelques particularités propres à son typage dynamique — notamment une distinction subtile entre == et ===.`,
  sections: [
    {
      id: "arithmetiques",
      title: "Opérateurs arithmétiques",
      blocks: [
        {
          type: "table",
          headers: ["Opérateur", "Rôle"],
          rows: [
            ["<code class=\"inline\">+ - * /</code>", "Addition, soustraction, multiplication, division"],
            ["<code class=\"inline\">%</code>", "Modulo (reste de la division entière)"],
            ["<code class=\"inline\">**</code>", "Puissance"],
          ],
        },
      ],
    },
    {
      id: "comparaison",
      title: "Comparaison : == et ===",
      blocks: [
        { type: "p", text: "PHP distingue deux niveaux d'égalité, une subtilité assez unique par rapport aux autres langages de ce cours." },
        {
          type: "table",
          headers: ["Opérateur", "Signification"],
          rows: [
            ["<code class=\"inline\">==</code>", "Égal en valeur, après conversion automatique de type si besoin"],
            ["<code class=\"inline\">===</code>", "Égal en valeur ET en type, sans aucune conversion (comparaison stricte)"],
          ],
        },
        {
          type: "code",
          label: "comparaison_stricte.php",
          lang: "php",
          code: `<?php
var_dump(0 == "abc");    // false (en PHP 8+) — mais piégeux dans d'autres cas
var_dump(5 == "5");      // true  — "5" est converti en nombre
var_dump(5 === "5");     // false — types différents (int vs string)`,
        },
        {
          type: "callout",
          variant: "tip",
          title: "Bonne pratique : préférez ===",
          text: "Pour éviter les surprises liées aux conversions automatiques, il est fortement recommandé d'utiliser === (et !==) par défaut, sauf besoin explicite de la conversion de ==.",
        },
      ],
    },
    {
      id: "logiques",
      title: "Opérateurs logiques",
      blocks: [
        {
          type: "table",
          headers: ["PHP", "Équivalent pseudo-code"],
          rows: [
            ["<code class=\"inline\">&&</code>", "ET"],
            ["<code class=\"inline\">||</code>", "OU"],
            ["<code class=\"inline\">!</code>", "NON"],
          ],
        },
        {
          type: "code",
          label: "logique.php",
          lang: "php",
          code: `<?php
$age = 20;
$a_un_billet = true;
$peut_entrer = $age >= 18 && $a_un_billet;
var_dump($peut_entrer);   // true`,
        },
      ],
    },
  ],
};
