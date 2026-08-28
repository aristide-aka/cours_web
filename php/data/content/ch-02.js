window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["02"] = {
  lead: `Comme en Python, une variable PHP ne se déclare pas à l'avance : elle est créée dès qu'on lui affecte une valeur. Sa particularité visuelle, immédiatement reconnaissable, est que son nom commence toujours par un symbole dollar.`,
  sections: [
    {
      id: "le-symbole-dollar",
      title: "Le symbole $",
      blocks: [
        {
          type: "translate",
          rightLang: "php",
          labelLeft: "Pseudo-code",
          labelRight: "PHP",
          left: `Variable Age en Entier
Début
  Age ← 25
Fin`,
          right: `<?php
$age = 25;`,
        },
        {
          type: "callout",
          variant: "pitfall",
          title: "Le $ n'est jamais facultatif",
          text: "Oublier le $ devant un nom de variable est l'erreur la plus fréquente en arrivant vers PHP depuis un autre langage. Sans lui, PHP ne reconnaît tout simplement pas qu'il s'agit d'une variable.",
        },
      ],
    },
    {
      id: "regles-de-nommage",
      title: "Règles de nommage",
      blocks: [
        {
          type: "list",
          items: [
            "Un nom de variable commence par $, suivi d'une lettre ou d'un underscore <code class=\"inline\">_</code> (jamais un chiffre).",
            "PHP est <strong>sensible à la casse</strong> pour les noms de variables : <code class=\"inline\">$age</code> et <code class=\"inline\">$Age</code> sont deux variables totalement différentes.",
            "La convention la plus courante est le <em>camelCase</em> pour les noms composés : <code class=\"inline\">$nomComplet</code>.",
          ],
        },
      ],
    },
    {
      id: "typage-dynamique",
      title: "Typage dynamique",
      blocks: [
        { type: "p", text: "Comme Python, PHP ne demande aucune déclaration de type explicite : il déduit le type d'une variable à partir de la valeur qui lui est affectée, et ce type peut changer librement au fil du programme." },
        {
          type: "code",
          label: "typage_dynamique.php",
          lang: "php",
          code: `<?php
$x = 25;              // entier
$x = "vingt-cinq";     // devient une chaîne, sans erreur
echo gettype($x);      // string`,
        },
        { type: "p", text: "<code class=\"inline\">gettype()</code> révèle le type actuel d'une variable — pratique pour vérifier ce que PHP a déduit tout seul. Le chapitre suivant détaille chacun des types disponibles." },
      ],
    },
  ],
};
