window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["01"] = [
  {
    type: "qcm",
    prompt: "Quel mot-clé marque le point de départ obligatoire de tout programme C ?",
    options: ["<code class=\"inline\">Début</code>", "<code class=\"inline\">int main(void)</code>", "<code class=\"inline\">#include</code>", "<code class=\"inline\">start()</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "<code class=\"inline\">int main(void)</code> est la fonction par laquelle l'exécution d'un programme C commence toujours — c'est l'équivalent direct du <code class=\"inline\">Début</code> du pseudo-code. <code class=\"inline\">#include</code> ne fait qu'importer des bibliothèques, il n'exécute rien par lui-même." },
    ],
  },
  {
    type: "qcm",
    lang: "c",
    code: `int n = 5;
if (n = 0) {
    printf("nul");
}`,
    prompt: "Ce code C contient une erreur classique. Laquelle ?",
    options: [
      "Il manque un point-virgule",
      "<code class=\"inline\">n = 0</code> est une affectation, pas un test d'égalité — il fallait écrire <code class=\"inline\">n == 0</code>",
      "printf est mal orthographié",
      "Il n'y a aucune erreur",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "En C, <code class=\"inline\">=</code> affecte une valeur (comme ← en pseudo-code), tandis que <code class=\"inline\">==</code> compare deux valeurs. <code class=\"inline\">if (n = 0)</code> affecte 0 à n puis teste ce 0 (donc Faux) — le code compile souvent sans erreur, ce qui rend ce piège particulièrement traître." },
    ],
  },
  {
    type: "qcm",
    prompt: "Pourquoi écrit-on <code class=\"inline\">scanf(\"%d\", &N)</code> et non <code class=\"inline\">scanf(\"%d\", N)</code> ?",
    options: [
      "Le & est purement décoratif, sans effet réel",
      "scanf a besoin de l'adresse mémoire de N pour pouvoir y écrire la valeur saisie",
      "C'est une erreur de frappe classique dans les manuels, les deux fonctionnent",
      "& transforme N en chaîne de caractères",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "scanf doit modifier la variable N depuis l'extérieur : sans le & (« adresse de »), elle ne recevrait qu'une copie de la valeur actuelle de N et ne pourrait rien y écrire. C'est l'équivalent, en C, du passage par référence vu au chapitre 8." },
      { type: "callout", variant: "tip", title: "Exception à retenir", text: "Cette règle ne s'applique pas aux tableaux (dont les chaînes char[]) : <code class=\"inline\">scanf(\"%s\", mot)</code> s'écrit sans &, car le nom d'un tableau désigne déjà une adresse." },
    ],
  },
  {
    type: "qcm",
    prompt: "En pseudo-code, un tableau est déclaré <code class=\"inline\">Tableau Notes(9) en Numérique</code>. Quelle est sa traduction correcte en C ?",
    options: ["<code class=\"inline\">float Notes[9];</code>", "<code class=\"inline\">float Notes[10];</code>", "<code class=\"inline\">float Notes(10);</code>", "<code class=\"inline\">int Notes[9];</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "Le pseudo-code de ce cours indique le <em>dernier indice</em> valide (9), tandis que C indique la <em>taille totale</em> du tableau entre crochets. Un tableau d'indices 0 à 9 compte 10 cases : il faut donc écrire <code class=\"inline\">Notes[10]</code>, pas <code class=\"inline\">Notes[9]</code>. Le type Numérique se traduit par <code class=\"inline\">float</code>, pas <code class=\"inline\">int</code>." },
    ],
  },
  {
    type: "trace",
    lang: "c",
    code: `int N = 5;
do {
    printf("%d", N);
    N--;
} while (N < 1 || N > 3);`,
    prompt: "Quelle traduction pseudo-code correspond réellement à ce do...while ?",
    options: [
      "<code class=\"inline\">Répéter ... Jusqu'à N &lt; 1 OU N &gt; 3</code>",
      "<code class=\"inline\">Répéter ... Jusqu'à N &gt;= 1 ET N &lt;= 3</code>",
      "<code class=\"inline\">TantQue N &lt; 1 OU N &gt; 3</code>",
      "Ce code n'a aucun équivalent en pseudo-code",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "do { } while(condition) continue tant que la condition reste vraie, alors que Répéter...Jusqu'à s'arrête dès que sa condition devient vraie : les deux conditions sont donc l'inverse l'une de l'autre. <code class=\"inline\">while (N &lt; 1 || N &gt; 3)</code> équivaut à <code class=\"inline\">Jusqu'à N &gt;= 1 ET N &lt;= 3</code> (négation d'un OU : NON(A OU B) = NON A ET NON B)." },
      { type: "callout", variant: "warn", title: "Piège du chapitre", text: "C'est l'erreur de traduction la plus fréquente entre Répéter...Jusqu'à et do...while : oublier d'inverser la condition." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quelle fonction de <code class=\"inline\">string.h</code> correspond à <code class=\"inline\">Len(s)</code> du pseudo-code ?",
    options: ["<code class=\"inline\">length(s)</code>", "<code class=\"inline\">strlen(s)</code>", "<code class=\"inline\">size(s)</code>", "<code class=\"inline\">strcat(s)</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "<code class=\"inline\">strlen</code> (« string length ») renvoie le nombre de caractères d'une chaîne C, exactement comme <code class=\"inline\">Len</code> en pseudo-code. <code class=\"inline\">strcat</code>, elle, correspond à l'opérateur de concaténation &, pas à Len." },
    ],
  },
  {
    type: "qcm",
    prompt: "Comment traduit-on en C une Procédure du pseudo-code, qui n'a pas de valeur à renvoyer ?",
    options: [
      "Une fonction dont le type de retour est <code class=\"inline\">void</code>",
      "Ce n'est pas possible, C n'a que des fonctions avec retour obligatoire",
      "Une fonction dont le type de retour est <code class=\"inline\">int</code>, toujours à 0",
      "Un simple bloc { } sans nom",
    ],
    correct: 0,
    explain: [
      { type: "p", text: "C ne distingue pas fonction et procédure : il n'existe que la fonction. Le type de retour <code class=\"inline\">void</code> signifie explicitement « cette fonction ne renvoie rien », ce qui correspond exactement au rôle d'une Procédure en pseudo-code." },
    ],
  },
  {
    type: "qcm",
    prompt: "Pour traduire un paramètre passé <strong>par Référence</strong> en pseudo-code, quel outil du langage C utilise-t-on ?",
    options: ["Un tableau", "Un pointeur (<code class=\"inline\">int *</code>)", "Une variable globale", "Le mot-clé <code class=\"inline\">const</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "C ne connaît pas nativement le passage par référence : on le simule en passant l'<em>adresse</em> de la variable (<code class=\"inline\">&variable</code>) à un paramètre de type pointeur (<code class=\"inline\">int *param</code>), puis en écrivant <code class=\"inline\">*param</code> pour lire ou modifier la valeur pointée." },
    ],
  },
  {
    type: "qcm",
    prompt: "Pourquoi doit-on toujours vérifier que <code class=\"inline\">fopen</code> n'a pas renvoyé <code class=\"inline\">NULL</code> avant de continuer ?",
    options: [
      "Ce n'est qu'une convention de style sans réelle utilité",
      "Parce que fopen échoue silencieusement si le fichier n'existe pas ou n'est pas accessible, et NULL signale cet échec",
      "Parce que NULL provoque toujours un arrêt automatique du programme",
      "Cette vérification n'existe qu'en pseudo-code, jamais en C",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Contrairement au pseudo-code, où Ouvrir est implicitement supposé réussir, fopen peut échouer (fichier absent, droits insuffisants…) et renvoie alors NULL plutôt que de lever une erreur bloquante. Un programme C robuste doit tester ce cas explicitement, sous peine de plantage si l'on tente ensuite de lire ou écrire dans ce fichier inexistant." },
    ],
  },
];
