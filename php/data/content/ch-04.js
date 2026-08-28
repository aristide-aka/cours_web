window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["04"] = {
  lead: `Une constante est une valeur qui, contrairement à une variable, ne doit plus jamais changer une fois définie. Ce chapitre présente aussi les commentaires, déjà rencontrés dans les modules précédents mais avec une syntaxe légèrement différente en PHP.`,
  sections: [
    {
      id: "constantes",
      title: "Les constantes",
      blocks: [
        { type: "p", text: "Une constante se définit avec <code class=\"inline\">define()</code>, ou depuis PHP 5.3 avec le mot-clé <code class=\"inline\">const</code>. Par convention, son nom s'écrit en MAJUSCULES." },
        {
          type: "code",
          label: "constantes.php",
          lang: "php",
          code: `<?php
define("TVA", 0.20);
const NOM_SITE = "Algo Academy";

echo TVA;        // 0.2
echo NOM_SITE;   // Algo Academy`,
        },
        {
          type: "callout",
          variant: "pitfall",
          title: "Pas de $ devant une constante",
          text: "Contrairement aux variables, une constante ne s'écrit jamais avec le symbole $ — ni à sa définition, ni à son utilisation.",
        },
      ],
    },
    {
      id: "commentaires",
      title: "Les commentaires",
      blocks: [
        { type: "p", text: "PHP accepte trois syntaxes de commentaire, héritées à la fois du C et du shell Unix." },
        {
          type: "code",
          label: "commentaires.php",
          lang: "php",
          code: `<?php
// Commentaire sur une ligne, style C
# Commentaire sur une ligne, style shell
/*
   Commentaire sur
   plusieurs lignes
*/
echo "Bonjour";  // commentaire en fin de ligne`,
        },
        { type: "p", text: "La forme <code class=\"inline\">//</code> est la plus répandue en pratique ; les trois sont strictement équivalentes en fonctionnement." },
      ],
    },
  ],
};
