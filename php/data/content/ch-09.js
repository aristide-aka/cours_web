window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["09"] = {
  lead: `Le tableau (array) est la structure de données la plus utilisée en PHP — au point de servir à la fois de liste ordonnée et de dictionnaire clé-valeur, selon la façon dont on l'utilise.`,
  sections: [
    {
      id: "tableaux-indexes",
      title: "Tableaux indexés",
      blocks: [
        {
          type: "translate",
          rightLang: "php",
          labelLeft: "Pseudo-code",
          labelRight: "PHP",
          left: `Tableau Notes(2) en Numérique
Début
  Notes(0) ← 12
  Notes(1) ← 15
  Notes(2) ← 9
Fin`,
          right: `<?php
$notes = [12, 15, 9];
echo $notes[0];   // 12`,
        },
        { type: "p", text: "La syntaxe moderne <code class=\"inline\">[...]</code> (depuis PHP 5.4) est aujourd'hui préférée à l'ancienne écriture <code class=\"inline\">array(...)</code>, strictement équivalente. Comme en pseudo-code, le premier élément est à l'indice 0." },
        {
          type: "table",
          headers: ["Fonction", "Effet"],
          rows: [
            ["<code class=\"inline\">count($notes)</code>", "Nombre d'éléments du tableau"],
            ["<code class=\"inline\">$notes[] = 18;</code>", "Ajoute 18 à la fin du tableau"],
            ["<code class=\"inline\">array_push($notes, 18)</code>", "Équivalent explicite du précédent"],
            ["<code class=\"inline\">sort($notes)</code>", "Trie le tableau (modifie $notes directement)"],
          ],
        },
      ],
    },
    {
      id: "tableaux-associatifs",
      title: "Tableaux associatifs",
      blocks: [
        { type: "p", text: "Un tableau PHP peut aussi associer une <strong>clé de texte</strong> à chaque valeur, plutôt qu'un simple indice numérique — jouant alors le rôle d'un dictionnaire (comme vu dans le module Python)." },
        {
          type: "code",
          label: "tableau_associatif.php",
          lang: "php",
          code: `<?php
$eleve = ["nom" => "Awa", "age" => 18];
echo $eleve["nom"];    // Awa
$eleve["ville"] = "Dakar";   // ajoute une nouvelle paire`,
        },
        {
          type: "callout",
          variant: "info",
          title: "Un seul type, deux usages",
          text: "En PHP, il n'existe qu'un seul type array pour tout cela : un tableau « classique » n'est en réalité qu'un tableau associatif dont les clés sont automatiquement 0, 1, 2…",
        },
      ],
    },
    {
      id: "foreach",
      title: "Parcourir un tableau avec foreach",
      blocks: [
        { type: "p", text: "<code class=\"inline\">foreach</code> est une boucle dédiée aux tableaux : elle donne accès directement à chaque valeur (et, si besoin, à sa clé), sans avoir à manipuler un indice manuellement." },
        {
          type: "code",
          label: "foreach_valeurs.php",
          lang: "php",
          code: `<?php
$notes = [12, 15, 9];
$somme = 0;
foreach ($notes as $note) {
    $somme = $somme + $note;
}
echo "Moyenne : " . ($somme / count($notes));`,
        },
        { type: "p", text: "Pour un tableau associatif, on récupère à la fois la clé et la valeur :" },
        {
          type: "code",
          label: "foreach_cle_valeur.php",
          lang: "php",
          code: `<?php
$eleve = ["nom" => "Awa", "age" => 18];
foreach ($eleve as $cle => $valeur) {
    echo $cle . " : " . $valeur . "\\n";
}
// nom : Awa
// age : 18`,
        },
      ],
    },
  ],
};
