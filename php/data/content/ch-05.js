window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["05"] = {
  lead: `L'instruction la plus utilisée dans un script PHP : afficher une valeur à l'écran (ou plus précisément, l'envoyer dans la page HTML générée).`,
  sections: [
    {
      id: "echo",
      title: "echo",
      blocks: [
        {
          type: "translate",
          rightLang: "php",
          labelLeft: "Pseudo-code",
          labelRight: "PHP",
          left: `Écrire "Bonjour, le monde !"`,
          right: `<?php
echo "Bonjour, le monde !";`,
        },
        { type: "p", text: "<code class=\"inline\">echo</code> peut afficher plusieurs valeurs à la suite, séparées par des virgules :" },
        {
          type: "code",
          label: "echo_multiple.php",
          lang: "php",
          code: `<?php
$nom = "Awa";
$age = 18;
echo "Nom : ", $nom, " — Âge : ", $age;`,
        },
      ],
    },
    {
      id: "concatenation",
      title: "Assembler du texte avec le point .",
      blocks: [
        { type: "p", text: "Pour construire une chaîne à partir de plusieurs morceaux, PHP utilise l'opérateur point <code class=\"inline\">.</code> — une syntaxe bien à lui, à ne pas confondre avec le + d'autres langages." },
        {
          type: "code",
          label: "concatenation.php",
          lang: "php",
          code: `<?php
$nom = "Awa";
echo "Bonjour, " . $nom . " !";   // Bonjour, Awa !`,
        },
        {
          type: "callout",
          variant: "warn",
          title: "Piège : . concatène, + additionne",
          text: "En PHP, + reste strictement réservé à l'addition numérique. L'utiliser sur du texte tente une conversion en nombres plutôt que d'assembler les chaînes — un résultat presque toujours inattendu pour un débutant.",
        },
      ],
    },
    {
      id: "print",
      title: "print, une alternative à echo",
      blocks: [
        { type: "p", text: "<code class=\"inline\">print</code> fait presque la même chose qu'echo, à une nuance près : print n'accepte qu'une seule valeur à la fois (pas de liste séparée par des virgules). En pratique, echo est largement préféré — c'est celui que nous utiliserons dans la suite de ce cours." },
      ],
    },
  ],
};
