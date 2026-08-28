window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["13"] = [
  {
    type: "qcm",
    prompt: "Quelles balises délimitent le code PHP à exécuter à l'intérieur d'un fichier .php ?",
    options: ["<code class=\"inline\">&lt;script&gt; ... &lt;/script&gt;</code>", "<code class=\"inline\">&lt;?php ... ?&gt;</code>", "<code class=\"inline\">{{ ... }}</code>", "<code class=\"inline\">#!php ... #!end</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "Tout code PHP doit être encadré par <code class=\"inline\">&lt;?php</code> et <code class=\"inline\">?&gt;</code>. En dehors de ces balises, le contenu d'un fichier .php est traité comme du texte brut (souvent du HTML) — c'est ce qui permet à PHP de mélanger code et pages web." },
    ],
  },
  {
    type: "qcm",
    lang: "php",
    code: `age = 25;
echo age;`,
    prompt: "Pourquoi ce script PHP ne fonctionne-t-il pas ?",
    options: [
      "Il manque des guillemets autour de 25",
      "Il manque le symbole $ devant les noms de variable",
      "echo n'existe pas en PHP",
      "Il manque un point-virgule",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "En PHP, tout nom de variable doit obligatoirement commencer par <code class=\"inline\">$</code>. Il fallait écrire <code class=\"inline\">$age = 25; echo $age;</code>. Sans ce symbole, PHP ne reconnaît pas <code class=\"inline\">age</code> comme une variable valide." },
    ],
  },
  {
    type: "qcm",
    lang: "php",
    code: `$a = "12";
$b = "5";
echo $a + $b;`,
    prompt: "Que va afficher ce script ?",
    options: ["\"125\"", "17", "\"12\" + \"5\"", "Une erreur, on ne peut pas additionner des chaînes"],
    correct: 1,
    explain: [
      { type: "p", text: "En PHP, l'opérateur <code class=\"inline\">+</code> est réservé à l'arithmétique : appliqué à deux chaînes numériques, il les convertit en nombres puis les additionne (12 + 5 = 17), au lieu de les assembler comme le ferait & en pseudo-code. Pour concaténer réellement le texte, il aurait fallu utiliser l'opérateur point : <code class=\"inline\">$a . $b</code>, qui aurait donné \"125\"." },
    ],
  },
  {
    type: "qcm",
    prompt: "Comment s'écrit SinonSi en PHP ?",
    options: ["<code class=\"inline\">else if</code> (deux mots)", "<code class=\"inline\">elseif</code> (un seul mot)", "<code class=\"inline\">elsif</code>", "<code class=\"inline\">sinonsi</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "PHP utilise <code class=\"inline\">elseif</code>, en un seul mot — une nuance à ne pas confondre avec le C, qui utilise deux mots séparés (<code class=\"inline\">else if</code>), ou Python qui utilise un mot totalement différent (<code class=\"inline\">elif</code>)." },
    ],
  },
  {
    type: "qcm",
    lang: "php",
    code: `$n = 5;
do {
    echo $n;
    $n--;
} while ($n < 1 || $n > 3);`,
    prompt: "Quelle condition Répéter...Jusqu'à correspond réellement à ce do...while ?",
    options: [
      "Jusqu'à N &lt; 1 OU N &gt; 3",
      "Jusqu'à N &gt;= 1 ET N &lt;= 3",
      "TantQue N &lt; 1 OU N &gt; 3",
      "Il n'y a pas d'équivalent en pseudo-code",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Exactement comme en C, le do...while de PHP continue tant que sa condition reste vraie, alors que Répéter...Jusqu'à s'arrête dès qu'elle devient vraie : il faut inverser la condition pour traduire fidèlement l'un vers l'autre. <code class=\"inline\">while ($n &lt; 1 || $n &gt; 3)</code> équivaut à <code class=\"inline\">Jusqu'à N &gt;= 1 ET N &lt;= 3</code>." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quelle fonction PHP donne le nombre d'éléments d'un tableau, équivalent de Len appliqué à un Tableau ?",
    options: ["<code class=\"inline\">len($tab)</code>", "<code class=\"inline\">sizeof($tab)</code> uniquement", "<code class=\"inline\">count($tab)</code>", "<code class=\"inline\">$tab.length</code>"],
    correct: 2,
    explain: [
      { type: "p", text: "<code class=\"inline\">count($tab)</code> est la fonction standard pour obtenir le nombre d'éléments d'un tableau PHP (sizeof() existe aussi, comme alias, mais count() est la forme la plus courante et recommandée)." },
    ],
  },
  {
    type: "qcm",
    lang: "php",
    code: `$mot = "algorithme";
if (!strpos($mot, "algo")) {
    echo "absent";
} else {
    echo "présent";
}`,
    prompt: "Que va réellement afficher ce script, et pourquoi est-ce un piège ?",
    options: [
      "\"présent\", car \"algo\" est bien dans \"algorithme\"",
      "\"absent\", car strpos renvoie 0 (position de début) et 0 est interprété comme faux par !",
      "Une erreur d'exécution",
      "\"absent\" puis \"présent\" successivement",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "\"algo\" se trouve à la position 0 de \"algorithme\" (tout au début). strpos renvoie donc 0 — une valeur numérique parfaitement valide, mais que PHP considère comme \"fausse\" dans un test booléen. <code class=\"inline\">!strpos(...)</code> vaut donc vrai à tort, et affiche \"absent\" alors que le motif est bien présent." },
      { type: "callout", variant: "tip", title: "La bonne pratique", text: "Toujours comparer explicitement avec <code class=\"inline\">=== false</code> pour tester une absence avec strpos, jamais un simple !strpos(...)." },
    ],
  },
  {
    type: "qcm",
    prompt: "Pour qu'une fonction PHP modifie réellement la variable d'origine passée en paramètre (passage par référence), où place-t-on le symbole & ?",
    options: [
      "Uniquement au moment de l'appel de la fonction",
      "Dans l'en-tête de la fonction, devant le nom du paramètre concerné",
      "Devant le nom de la fonction elle-même",
      "PHP ne permet pas le passage par référence",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Le & se place dans la déclaration de la fonction, par exemple <code class=\"inline\">function echanger(&$a, &$b)</code>. L'appel, lui, reste ensuite parfaitement normal : <code class=\"inline\">echanger($A, $B)</code>, sans & — une différence importante avec le C, où le & doit être répété à chaque appel." },
    ],
  },
  {
    type: "vraifaux",
    prompt: "Vrai ou faux : il faut toujours vérifier si fopen() a renvoyé false avant de continuer à utiliser le fichier, en PHP comme en C.",
    options: ["Vrai", "Faux"],
    correct: 0,
    explain: [
      { type: "p", text: "Vrai. Comme en C, fopen() en PHP renvoie false si l'ouverture échoue (fichier absent, droits insuffisants…), plutôt que de bloquer le programme. Un script robuste teste toujours <code class=\"inline\">if ($f === false)</code> avant d'aller plus loin." },
    ],
  },
];
