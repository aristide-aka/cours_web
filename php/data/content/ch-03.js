window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["03"] = {
  lead: `PHP propose plusieurs types de valeurs. Ce chapitre présente les plus fondamentaux — ceux que vous manipulerez dès vos premiers scripts.`,
  sections: [
    {
      id: "null",
      title: "null : l'absence de valeur",
      blocks: [
        { type: "p", text: "<code class=\"inline\">null</code> représente une variable sans valeur définie — un peu comme un casier volontairement laissé vide." },
        {
          type: "code",
          label: "null.php",
          lang: "php",
          code: `<?php
$reponse = null;`,
        },
      ],
    },
    {
      id: "bool",
      title: "bool : vrai ou faux",
      blocks: [
        {
          type: "code",
          label: "booleen.php",
          lang: "php",
          code: `<?php
$majeur = true;
$en_stock = false;`,
        },
      ],
    },
    {
      id: "nombres",
      title: "int et float",
      blocks: [
        {
          type: "code",
          label: "nombres.php",
          lang: "php",
          code: `<?php
$age = 25;        // int : nombre entier
$taille = 1.78;    // float : nombre décimal`,
        },
      ],
    },
    {
      id: "string",
      title: "string : le texte",
      blocks: [
        { type: "p", text: "Une chaîne peut s'écrire entre guillemets simples <code class=\"inline\">'...'</code> ou doubles <code class=\"inline\">\"...\"</code> — mais attention, contrairement à Python, ils <strong>ne sont pas strictement équivalents</strong> en PHP (voir chapitre 10)." },
        {
          type: "code",
          label: "chaine.php",
          lang: "php",
          code: `<?php
$prenom = "Awa";
echo $prenom[0];    // "A" — premier caractère, indice 0`,
        },
      ],
    },
    {
      id: "apercu-array",
      title: "Un aperçu du type array",
      blocks: [
        { type: "p", text: "PHP propose aussi le type <code class=\"inline\">array</code>, une collection de valeurs — l'équivalent du Tableau du pseudo-code, mais bien plus souple. Nous l'étudierons en détail au chapitre 9 ; inutile de vous en préoccuper pour l'instant." },
        {
          type: "callout",
          variant: "info",
          title: "Vérifier un type",
          text: "Comme gettype() vu au chapitre précédent, des fonctions comme <code class=\"inline\">is_int()</code>, <code class=\"inline\">is_string()</code> ou <code class=\"inline\">is_array()</code> permettent de tester directement le type d'une variable.",
        },
      ],
    },
  ],
};
