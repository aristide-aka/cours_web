window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["07"] = {
  lead: `Comme en pseudo-code et en C, un script PHP peut aiguiller son exécution selon une condition. La syntaxe est très proche du C, avec une petite variante dans l'orthographe du SinonSi.`,
  sections: [
    {
      id: "if-elseif-else",
      title: "if, elseif, else",
      blocks: [
        {
          type: "translate",
          rightLang: "php",
          labelLeft: "Pseudo-code",
          labelRight: "PHP",
          left: `Si Age > 2 Alors
  Écrire "Plus grand que 2"
SinonSi Age < 2 Alors
  Écrire "Plus petit que 2"
Sinon
  Écrire "Égal à 2"
FinSi`,
          right: `<?php
if ($age > 2) {
    echo "Plus grand que 2";
} elseif ($age < 2) {
    echo "Plus petit que 2";
} else {
    echo "Égal à 2";
}`,
        },
        {
          type: "callout",
          variant: "pitfall",
          title: "elseif en un seul mot",
          text: "PHP utilise elseif, en un seul mot — une nuance à ne pas confondre avec le C, qui utilise deux mots séparés (else if), ou Python qui utilise un mot totalement différent (elif).",
        },
      ],
    },
    {
      id: "switch",
      title: "Bonus : switch",
      blocks: [
        { type: "p", text: "Pour comparer une même variable à de nombreuses valeurs possibles, <code class=\"inline\">switch</code> peut être plus lisible qu'une longue chaîne de elseif." },
        {
          type: "code",
          label: "switch.php",
          lang: "php",
          code: `<?php
$jour = 3;
switch ($jour) {
    case 1:
        echo "Lundi";
        break;
    case 2:
        echo "Mardi";
        break;
    case 3:
        echo "Mercredi";
        break;
    default:
        echo "Autre jour";
}`,
        },
        {
          type: "callout",
          variant: "warn",
          title: "Ne jamais oublier break",
          text: "Sans break, l'exécution continue automatiquement dans le case suivant (comportement appelé \"fall-through\"), ce qui provoque souvent des bugs difficiles à repérer.",
        },
      ],
    },
  ],
};
