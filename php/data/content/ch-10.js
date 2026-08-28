window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["10"] = {
  lead: `PHP fournit un grand nombre de fonctions prêtes à l'emploi pour manipuler du texte — l'équivalent PHP de Len, Mid et Trouve rencontrés en pseudo-code.`,
  sections: [
    {
      id: "guillemets",
      title: "Simples vs doubles guillemets",
      blocks: [
        { type: "p", text: "Contrairement à Python, les guillemets simples et doubles ne sont <strong>pas équivalents</strong> en PHP : seuls les guillemets doubles interprètent les variables directement à l'intérieur de la chaîne — on appelle cela l'interpolation." },
        {
          type: "compare",
          bad: {
            title: "Guillemets simples : pas d'interpolation",
            code: `$nom = "Awa";
echo 'Bonjour $nom';
// affiche littéralement : Bonjour $nom`,
          },
          good: {
            title: "Guillemets doubles : interpolation",
            code: `$nom = "Awa";
echo "Bonjour $nom";
// affiche : Bonjour Awa`,
          },
        },
      ],
    },
    {
      id: "fonctions-chaines",
      title: "Les fonctions de base",
      blocks: [
        {
          type: "table",
          headers: ["Pseudo-code", "PHP"],
          rows: [
            ["<code class=\"inline\">Len(s)</code>", "<code class=\"inline\">strlen($s)</code>"],
            ["<code class=\"inline\">Mid(s, deb, long)</code>", "<code class=\"inline\">substr($s, deb-1, long)</code>"],
            ["<code class=\"inline\">Trouve(s, motif)</code>", "<code class=\"inline\">strpos($s, $motif)</code>"],
            ["<code class=\"inline\">A &amp; B</code>", "<code class=\"inline\">$a . $b</code>"],
          ],
        },
        {
          type: "code",
          label: "fonctions_chaines.php",
          lang: "php",
          code: `<?php
$mot = "algorithme";
echo substr($mot, 0, 4);      // "algo"
echo strlen($mot);            // 10
echo strpos($mot, "go");      // 2 (position, à partir de 0)`,
        },
        {
          type: "callout",
          variant: "warn",
          title: "strpos peut renvoyer 0 : attention au test",
          text: "Si le motif recherché est trouvé tout au début de la chaîne, strpos renvoie 0 — que PHP considère comme \"faux\" dans un test simple. Il faut donc comparer explicitement avec === false pour tester une absence : <code class=\"inline\">if (strpos($mot, \"xyz\") === false)</code>.",
        },
      ],
    },
    {
      id: "decouper",
      title: "Découper et rassembler",
      blocks: [
        { type: "p", text: "<code class=\"inline\">explode()</code> découpe une chaîne en tableau selon un séparateur ; <code class=\"inline\">implode()</code> fait l'inverse." },
        {
          type: "code",
          label: "explode_implode.php",
          lang: "php",
          code: `<?php
$mots = explode(" ", "Bonjour le monde");
print_r($mots);   // ["Bonjour", "le", "monde"]

$phrase = implode("-", $mots);
echo $phrase;      // Bonjour-le-monde`,
        },
      ],
    },
  ],
};
