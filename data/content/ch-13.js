window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["13"] = {
  lead: `PHP est un langage historiquement conçu pour le web, mais qui s'exécute tout aussi bien en ligne de commande. Ce chapitre traduit les dix notions déjà étudiées — variables, tests, boucles, tableaux, chaînes, fonctions, fichiers — en PHP, jusqu'à un script complet et exécutable.`,
  sections: [
    {
      id: "structure",
      title: "Un langage taillé pour le web",
      blocks: [
        { type: "p", text: "Un script PHP s'écrit toujours entre les balises <code class=\"inline\">&lt;?php</code> et <code class=\"inline\">?&gt;</code>, qui signalent à l'interpréteur où commence et où finit le code à exécuter (le reste d'un fichier .php, en dehors de ces balises, est traité comme du HTML brut — c'est ce qui rend PHP pratique pour générer des pages web dynamiques)." },
        {
          type: "code",
          label: "squelette.php",
          lang: "php",
          code: `<?php

$n = 5;
if ($n > 0) {
    echo "Positif";
} else {
    echo "Négatif";
}

?>`,
        },
        {
          type: "callout",
          variant: "info",
          title: "Deux contextes d'exécution",
          text: "PHP tourne historiquement derrière un serveur web (le visiteur envoie une requête, PHP génère la page en retour). Il s'exécute aussi très bien en ligne de commande avec <code class=\"inline\">php script.php</code> — c'est ce mode CLI que nous utiliserons pour traduire fidèlement les exercices Lire/Écrire de ce cours.",
        },
      ],
    },
    {
      id: "variables",
      title: "Variables : le symbole $",
      blocks: [
        { type: "p", text: "Comme Python, PHP ne demande aucune déclaration de type : le typage est dynamique. Sa particularité visuelle est que <strong>tout nom de variable commence obligatoirement par <code class=\"inline\">$</code></strong>. <code class=\"inline\">Variable X en Entier</code> devient <code class=\"inline\">$x = 0;</code>." },
        {
          type: "translate",
          rightLang: "php",
          labelRight: "PHP",
          left: `Variables A, B en Entier
Début
  A ← 1
  B ← A + 3
  A ← 3
Fin`,
          right: `<?php
$a = 1;
$b = $a + 3;
$a = 3;
?>`,
        },
        {
          type: "callout",
          variant: "pitfall",
          title: "Le $ n'est jamais facultatif",
          text: "Oublier le <code class=\"inline\">$</code> devant un nom de variable (écrire <code class=\"inline\">a = 1;</code> au lieu de <code class=\"inline\">$a = 1;</code>) est l'erreur la plus fréquente en arrivant d'un autre langage vers PHP.",
        },
      ],
    },
    {
      id: "entrees-sorties",
      title: "Afficher et lire : echo et fgets(STDIN)",
      blocks: [
        { type: "p", text: "<code class=\"inline\">Écrire</code> devient <code class=\"inline\">echo</code>. Pour <code class=\"inline\">Lire</code>, PHP en ligne de commande utilise <code class=\"inline\">fgets(STDIN)</code>, qui lit une ligne saisie au clavier — la valeur récupérée est toujours une chaîne, à convertir explicitement si l'on attend un nombre." },
        {
          type: "translate",
          rightLang: "php",
          labelRight: "PHP",
          left: `Variable N en Entier
Début
  Écrire "Entrez un nombre : "
  Lire N
  Écrire "Vous avez saisi : ", N
Fin`,
          right: `<?php
echo "Entrez un nombre : ";
$n = (int) trim(fgets(STDIN));
echo "Vous avez saisi : " . $n;
?>`,
        },
        {
          type: "callout",
          variant: "warn",
          title: "Le piège du point : . concatène, + additionne",
          text: "En PHP, <code class=\"inline\">.</code> (un point) assemble du texte, tandis que <code class=\"inline\">+</code> est réservé à l'addition numérique — utiliser + sur deux chaînes en PHP tente une conversion en nombres plutôt que de les assembler, résultat surprenant garanti.",
        },
      ],
    },
    {
      id: "conditions",
      title: "Tests : if, elseif, else",
      blocks: [
        { type: "p", text: "La syntaxe est très proche du C, à un détail près : SinonSi s'écrit en un seul mot, <code class=\"inline\">elseif</code> (contrairement au C qui utilise deux mots, <code class=\"inline\">else if</code>)." },
        {
          type: "table",
          headers: ["Pseudo-code", "PHP"],
          rows: [
            ["ET", "<code class=\"inline\">&&</code> (ou <code class=\"inline\">and</code>)"],
            ["OU", "<code class=\"inline\">||</code> (ou <code class=\"inline\">or</code>)"],
            ["NON", "<code class=\"inline\">!</code>"],
            ["<code class=\"inline\">&lt;&gt;</code>", "<code class=\"inline\">!=</code>"],
          ],
        },
        {
          type: "code",
          label: "conditions.php",
          lang: "php",
          code: `<?php
if ($n > 0) {
    echo "Positif";
} elseif ($n < 0) {
    echo "Négatif";
} else {
    echo "Nul";
}
?>`,
        },
      ],
    },
    {
      id: "boucles",
      title: "Boucles : while, for, do...while",
      blocks: [
        { type: "p", text: "PHP reprend, presque à l'identique, la syntaxe des boucles du C : <code class=\"inline\">while</code>, <code class=\"inline\">for</code>, et un <code class=\"inline\">do { } while()</code> natif pour Répéter...Jusqu'à." },
        {
          type: "translate",
          rightLang: "php",
          labelRight: "PHP",
          left: `Variables N, i en Entier
Début
  Lire N
  Pour i ← 1 à 10
    Écrire N, " x ", i, " = ", N * i
  i Suivant
Fin`,
          right: `<?php
$n = (int) trim(fgets(STDIN));
for ($i = 1; $i <= 10; $i++) {
    echo $n . " x " . $i . " = " . ($n * $i) . "\\n";
}
?>`,
        },
        {
          type: "callout",
          variant: "pitfall",
          title: "do...while inverse la condition, comme en C",
          text: "PHP hérite exactement du même piège que le C : do { } while(condition) continue tant que la condition est <strong>vraie</strong>, alors que Répéter...Jusqu'à s'arrête dès qu'elle devient vraie. Il faut donc toujours écrire la condition <strong>niée</strong> lors de la traduction.",
        },
        {
          type: "code",
          label: "do-while.php",
          lang: "php",
          code: `<?php
do {
    echo "Entrez un nombre entre 1 et 3 : ";
    $n = (int) trim(fgets(STDIN));
} while ($n < 1 || $n > 3);
?>`,
        },
      ],
    },
    {
      id: "tableaux",
      title: "Les tableaux (array)",
      blocks: [
        { type: "p", text: "Un Tableau se traduit par un <code class=\"inline\">array</code> PHP, que l'on peut écrire avec la syntaxe moderne <code class=\"inline\">[]</code>. Comme en Python, sa taille n'a pas besoin d'être fixée à l'avance." },
        {
          type: "translate",
          rightLang: "php",
          labelRight: "PHP",
          left: `Tableau Notes(9) en Numérique
Variable i en Entier
Début
  Pour i ← 0 à 9
    Lire Notes(i)
  i Suivant
Fin`,
          right: `<?php
$notes = [];
for ($i = 0; $i <= 9; $i++) {
    $notes[$i] = (float) trim(fgets(STDIN));
}
?>`,
        },
        { type: "p", text: "L'indexation reste identique à celle du pseudo-code (premier élément <code class=\"inline\">$notes[0]</code>), et <code class=\"inline\">count($notes)</code> donne le nombre d'éléments — l'équivalent PHP de <code class=\"inline\">Len</code> appliqué à un tableau." },
      ],
    },
    {
      id: "chaines",
      title: "Chaînes de caractères",
      blocks: [
        {
          type: "table",
          headers: ["Pseudo-code", "PHP"],
          rows: [
            ["<code class=\"inline\">Len(s)</code>", "<code class=\"inline\">strlen($s)</code>"],
            ["<code class=\"inline\">Mid(s, deb, long)</code>", "<code class=\"inline\">substr($s, deb-1, long)</code>"],
            ["<code class=\"inline\">Trouve(s, motif)</code>", "<code class=\"inline\">strpos($s, $motif)</code> (renvoie false si absent, pas 0)"],
            ["<code class=\"inline\">A &amp; B</code>", "<code class=\"inline\">$a . $b</code> (opérateur point)"],
          ],
        },
        {
          type: "code",
          label: "chaines.php",
          lang: "php",
          code: `<?php
$mot = "algorithme";
echo substr($mot, 0, 4);      // "algo"
echo strlen($mot);            // 10
echo strpos($mot, "go");      // 2 (position, à partir de 0)
?>`,
        },
        {
          type: "callout",
          variant: "warn",
          title: "strpos peut renvoyer 0 : attention au test",
          text: "Si le motif est trouvé tout au début de la chaîne, <code class=\"inline\">strpos</code> renvoie 0 — qui est considéré comme \"faux\" dans un test PHP classique ! Il faut donc comparer explicitement avec <code class=\"inline\">=== false</code> pour tester une absence, plutôt qu'un simple <code class=\"inline\">if (!strpos(...))</code>.",
        },
      ],
    },
    {
      id: "fonctions",
      title: "Fonctions et passage par référence",
      blocks: [
        { type: "p", text: "Une fonction PHP se déclare avec <code class=\"inline\">function</code>. Contrairement à Python, PHP propose un <strong>passage par référence explicite</strong>, très proche de la notation du pseudo-code : il suffit d'ajouter <code class=\"inline\">&</code> devant le paramètre concerné." },
        {
          type: "translate",
          rightLang: "php",
          labelRight: "PHP",
          left: `Procédure Echanger(a, b en Entier par Référence)
  Variable Temp en Entier
  Temp ← a
  a ← b
  b ← Temp
FinProcédure`,
          right: `<?php
function echanger(&$a, &$b) {
    $temp = $a;
    $a = $b;
    $b = $temp;
}

// appel : echanger($A, $B);
?>`,
        },
        {
          type: "callout",
          variant: "tip",
          title: "Le & se met à la déclaration, pas à l'appel",
          text: "Contrairement au C où il faut écrire &$A explicitement à l'appel pour passer une adresse, en PHP le & se place uniquement dans l'en-tête de la fonction (<code class=\"inline\">function echanger(&$a, &$b)</code>) : l'appel lui-même, <code class=\"inline\">echanger($A, $B)</code>, reste parfaitement normal.",
        },
      ],
    },
    {
      id: "fichiers",
      title: "Fichiers",
      blocks: [
        { type: "p", text: "La gestion de fichiers en PHP ressemble presque trait pour trait à celle du C, avec les mêmes quatre étapes : ouvrir, tester la fin de fichier, lire, fermer." },
        {
          type: "table",
          headers: ["Pseudo-code", "PHP"],
          rows: [
            ["<code class=\"inline\">Ouvrir \"f.txt\" sur 1 en Lecture</code>", "<code class=\"inline\">$f = fopen(\"f.txt\", \"r\");</code>"],
            ["<code class=\"inline\">LireFichier 1, Ligne</code>", "<code class=\"inline\">$ligne = fgets($f);</code>"],
            ["<code class=\"inline\">EOF(1)</code>", "<code class=\"inline\">feof($f)</code>"],
            ["<code class=\"inline\">Fermer 1</code>", "<code class=\"inline\">fclose($f);</code>"],
          ],
        },
        {
          type: "code",
          label: "lecture-fichier.php",
          lang: "php",
          code: `<?php
$f = fopen("exemple.txt", "r");
if ($f === false) {
    echo "Impossible d'ouvrir le fichier";
} else {
    while (!feof($f)) {
        echo fgets($f);
    }
    fclose($f);
}
?>`,
        },
      ],
    },
    {
      id: "bilan",
      title: "Bilan : l'échange de variables en PHP",
      blocks: [
        { type: "p", text: "Pour conclure, voici l'exercice fondateur du chapitre 1 sous la forme d'un script PHP complet, exécutable en ligne de commande avec <code class=\"inline\">php echange.php</code>." },
        {
          type: "code",
          label: "echange.php — programme complet",
          lang: "php",
          code: `<?php

function echanger(&$a, &$b) {
    $temp = $a;
    $a = $b;
    $b = $temp;
}

echo "Entrez A : ";
$A = (int) trim(fgets(STDIN));
echo "Entrez B : ";
$B = (int) trim(fgets(STDIN));

echanger($A, $B);

echo "Après échange : A = " . $A . ", B = " . $B . "\\n";

?>`,
        },
        { type: "p", text: "On y retrouve, une fois de plus, exactement le même raisonnement qu'au chapitre 1 : une variable temporaire pour ne pas perdre la première valeur. Seule la syntaxe change d'un langage à l'autre — la logique algorithmique, elle, reste rigoureusement identique." },
      ],
    },
  ],
};
