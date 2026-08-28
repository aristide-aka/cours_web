window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["13"] = {
  lead: `La gestion de fichiers en PHP ressemble presque trait pour trait à celle du C, avec les mêmes quatre étapes : ouvrir, lire ou écrire, puis fermer.`,
  sections: [
    {
      id: "fopen",
      title: "Ouvrir avec fopen()",
      blocks: [
        {
          type: "translate",
          rightLang: "php",
          labelLeft: "Pseudo-code",
          labelRight: "PHP",
          left: `Ouvrir "notes.txt" sur 1 en Lecture
...
Fermer 1`,
          right: `<?php
$f = fopen("notes.txt", "r");
...
fclose($f);`,
        },
        {
          type: "table",
          headers: ["Mode", "Effet"],
          rows: [
            ["<code class=\"inline\">\"r\"</code>", "Lecture seule"],
            ["<code class=\"inline\">\"w\"</code>", "Écriture — écrase le contenu existant"],
            ["<code class=\"inline\">\"a\"</code>", "Ajout à la fin du fichier existant"],
          ],
        },
        {
          type: "callout",
          variant: "warn",
          title: "Toujours vérifier le résultat de fopen()",
          text: "Si l'ouverture échoue (fichier absent, droits insuffisants…), fopen() renvoie false plutôt que de bloquer le script. Un code robuste teste toujours <code class=\"inline\">if ($f === false)</code> avant de continuer.",
        },
      ],
    },
    {
      id: "lire",
      title: "Lire un fichier",
      blocks: [
        {
          type: "code",
          label: "lire_fichier.php",
          lang: "php",
          code: `<?php
$f = fopen("notes.txt", "r");
if ($f === false) {
    echo "Impossible d'ouvrir le fichier";
} else {
    while (!feof($f)) {
        $ligne = fgets($f);
        echo $ligne;
    }
    fclose($f);
}`,
        },
        { type: "p", text: "<code class=\"inline\">feof($f)</code> devient vraie une fois la fin du fichier atteinte — l'équivalent PHP direct de la fonction EOF du pseudo-code. <code class=\"inline\">fgets($f)</code> lit une ligne à chaque appel." },
      ],
    },
    {
      id: "ecrire",
      title: "Écrire dans un fichier",
      blocks: [
        {
          type: "code",
          label: "ecrire_fichier.php",
          lang: "php",
          code: `<?php
$f = fopen("notes.txt", "w");
fwrite($f, "12\\n");
fwrite($f, "15\\n");
fclose($f);`,
        },
        { type: "p", text: "Comme en C et en Python, <code class=\"inline\">fwrite()</code> n'ajoute jamais de retour à la ligne automatique : il faut l'inclure soi-même avec <code class=\"inline\">\\n</code>." },
      ],
    },
  ],
};
