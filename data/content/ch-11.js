window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["11"] = {
  lead: `Le pseudo-code académique décrit un raisonnement ; le langage C l'exécute réellement. Ce chapitre reprend chacune des dix notions déjà étudiées — variables, tests, boucles, tableaux, chaînes, fonctions, fichiers — et montre sa traduction fidèle en C, jusqu'à un programme complet qui compile et s'exécute.`,
  sections: [
    {
      id: "structure",
      title: "La structure d'un programme C",
      blocks: [
        { type: "p", text: "Un algorithme commence par <code class=\"inline\">Début</code> et finit par <code class=\"inline\">Fin</code>. Un programme C suit la même logique, avec une syntaxe plus stricte : chaque instruction se termine par un point-virgule <code class=\"inline\">;</code>, et les blocs sont délimités par des accolades <code class=\"inline\">{ }</code> plutôt que par des mots-clés comme FinSi ou FinTantQue." },
        {
          type: "code",
          label: "squelette.c",
          lang: "c",
          code: `#include <stdio.h>

int main(void)
{
    // vos instructions ici

    return 0;
}`,
        },
        {
          type: "table",
          headers: ["Élément", "Rôle"],
          rows: [
            ["<code class=\"inline\">#include &lt;stdio.h&gt;</code>", "Importe les fonctions d'entrée-sortie standard (printf, scanf…) — l'équivalent n'existe pas en pseudo-code, où Écrire/Lire sont toujours disponibles."],
            ["<code class=\"inline\">int main(void)</code>", "Le point de départ obligatoire de tout programme C — équivalent du Début de l'algorithme."],
            ["<code class=\"inline\">{ }</code>", "Délimitent un bloc d'instructions — remplacent Début/Fin, FinSi, FinTantQue, etc."],
            ["<code class=\"inline\">return 0;</code>", "Signale au système que le programme s'est terminé sans erreur — équivalent du Fin."],
            ["<code class=\"inline\">;</code>", "Termine chaque instruction. Son oubli est l'erreur de compilation la plus fréquente chez les débutants."],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Compiler avant d'exécuter",
          text: "Contrairement au pseudo-code, un programme C doit être <strong>compilé</strong> (traduit en langage machine) avant de pouvoir tourner : <code class=\"inline\">gcc programme.c -o programme</code>, puis <code class=\"inline\">./programme</code>. Une erreur de syntaxe bloque déjà la compilation, avant même toute exécution.",
        },
      ],
    },
    {
      id: "variables",
      title: "Variables et types",
      blocks: [
        { type: "p", text: "La déclaration <code class=\"inline\">Variable X en Entier</code> devient en C <code class=\"inline\">int X;</code> : le type se place avant le nom, et non après. L'opérateur d'affectation ← disparaît complètement : en C, c'est le simple signe <code class=\"inline\">=</code> qui affecte une valeur (ce qui peut surprendre, puisqu'en pseudo-code = sert à comparer — en C, la comparaison se note <code class=\"inline\">==</code>, avec deux signes)." },
        {
          type: "table",
          headers: ["Pseudo-code", "Type C", "Exemple"],
          rows: [
            ["Entier", "<code class=\"inline\">int</code>", "<code class=\"inline\">int age;</code>"],
            ["Numérique / Réel", "<code class=\"inline\">float</code> ou <code class=\"inline\">double</code>", "<code class=\"inline\">double moyenne;</code>"],
            ["Caractère (une lettre)", "<code class=\"inline\">char</code>", "<code class=\"inline\">char lettre;</code>"],
            ["Caractère (une chaîne)", "<code class=\"inline\">char[]</code> (tableau de caractères)", "<code class=\"inline\">char nom[50];</code>"],
            ["Booléen", "<code class=\"inline\">int</code> (0 = Faux, tout le reste = Vrai)", "<code class=\"inline\">int trouve = 0;</code>"],
          ],
        },
        {
          type: "translate",
          left: `Variables A, B en Entier
Début
  A ← 1
  B ← A + 3
  A ← 3
Fin`,
          right: `#include <stdio.h>

int main(void)
{
    int A, B;
    A = 1;
    B = A + 3;
    A = 3;
    return 0;
}`,
        },
        {
          type: "callout",
          variant: "pitfall",
          title: "= n'est plus une affectation en pseudo-code, mais l'est en C",
          text: "C'est le piège le plus fréquent en arrivant du pseudo-code : en C, <code class=\"inline\">=</code> affecte (comme ← en pseudo-code) et <code class=\"inline\">==</code> compare. Écrire <code class=\"inline\">if (n = 0)</code> au lieu de <code class=\"inline\">if (n == 0)</code> est une erreur classique qui compile souvent sans même avertir.",
        },
      ],
    },
    {
      id: "entrees-sorties",
      title: "Entrées-sorties : printf et scanf",
      blocks: [
        { type: "p", text: "<code class=\"inline\">Écrire</code> devient <code class=\"inline\">printf</code>, et <code class=\"inline\">Lire</code> devient <code class=\"inline\">scanf</code>. Les deux fonctions ont besoin d'un format qui précise le type de la valeur affichée ou lue : <code class=\"inline\">%d</code> pour un entier, <code class=\"inline\">%f</code> pour un réel, <code class=\"inline\">%c</code> pour un caractère, <code class=\"inline\">%s</code> pour une chaîne." },
        {
          type: "table",
          headers: ["Format", "Type concerné"],
          rows: [
            ["<code class=\"inline\">%d</code>", "int"],
            ["<code class=\"inline\">%f</code>", "float (et <code class=\"inline\">%lf</code> pour double en scanf)"],
            ["<code class=\"inline\">%c</code>", "char"],
            ["<code class=\"inline\">%s</code>", "char[] (chaîne)"],
          ],
        },
        {
          type: "translate",
          left: `Variable N en Entier
Début
  Écrire "Entrez un nombre : "
  Lire N
  Écrire "Vous avez saisi : ", N
Fin`,
          right: `#include <stdio.h>

int main(void)
{
    int N;
    printf("Entrez un nombre : ");
    scanf("%d", &N);
    printf("Vous avez saisi : %d\\n", N);
    return 0;
}`,
        },
        {
          type: "callout",
          variant: "pitfall",
          title: "Le & de scanf, piège numéro un",
          text: "<code class=\"inline\">scanf</code> a besoin de l'<strong>adresse mémoire</strong> de la variable pour pouvoir y écrire la valeur saisie, d'où le <code class=\"inline\">&</code> (« adresse de ») devant le nom : <code class=\"inline\">scanf(\"%d\", &N)</code>, jamais <code class=\"inline\">scanf(\"%d\", N)</code>. C'est l'erreur la plus commise par les débutants venant du pseudo-code, où Lire N n'a besoin d'aucun symbole particulier.",
        },
      ],
    },
    {
      id: "conditions",
      title: "Tests : if, else, else if",
      blocks: [
        { type: "p", text: "La structure reste identique dans l'esprit, mais la syntaxe change : la condition se met entre parenthèses, et les blocs Alors/Sinon entre accolades, sans FinSi." },
        {
          type: "table",
          headers: ["Pseudo-code", "C"],
          rows: [
            ["<code class=\"inline\">=</code> (égalité)", "<code class=\"inline\">==</code>"],
            ["<code class=\"inline\">&lt;&gt;</code> (différent)", "<code class=\"inline\">!=</code>"],
            ["ET", "<code class=\"inline\">&&</code>"],
            ["OU", "<code class=\"inline\">||</code>"],
            ["NON", "<code class=\"inline\">!</code>"],
          ],
        },
        {
          type: "translate",
          left: `Si n > 0 Alors
  Écrire "Positif"
SinonSi n < 0 Alors
  Écrire "Négatif"
Sinon
  Écrire "Nul"
FinSi`,
          right: `if (n > 0) {
    printf("Positif\\n");
} else if (n < 0) {
    printf("Négatif\\n");
} else {
    printf("Nul\\n");
}`,
        },
      ],
    },
    {
      id: "boucles",
      title: "Boucles : while, for, do...while",
      blocks: [
        { type: "p", text: "TantQue devient <code class=\"inline\">while</code>, et Pour devient <code class=\"inline\">for</code> — mais la boucle for en C est plus riche : elle regroupe sur une seule ligne l'initialisation, la condition de poursuite, et l'incrémentation." },
        {
          type: "syntax",
          title: "Syntaxe de la boucle for en C",
          lang: "c",
          code: `for (int i = <début>; i <= <fin>; i++) {
    // corps de la boucle
}`,
        },
        {
          type: "translate",
          labelLeft: "Pseudo-code (Pour)",
          labelRight: "C (for)",
          left: `Variables N, i en Entier
Début
  Lire N
  Pour i ← 1 à 10
    Écrire N, " x ", i, " = ", N * i
  i Suivant
Fin`,
          right: `#include <stdio.h>

int main(void)
{
    int N, i;
    scanf("%d", &N);
    for (i = 1; i <= 10; i++) {
        printf("%d x %d = %d\\n", N, i, N * i);
    }
    return 0;
}`,
        },
        {
          type: "translate",
          labelLeft: "Pseudo-code (TantQue)",
          labelRight: "C (while)",
          left: `TantQue N < 1 OU N > 3
  Lire N
FinTantQue`,
          right: `while (N < 1 || N > 3) {
    scanf("%d", &N);
}`,
        },
        { type: "p", text: "Répéter...Jusqu'à devient <code class=\"inline\">do { } while(...)</code> — avec un piège à surveiller de près." },
        {
          type: "callout",
          variant: "pitfall",
          title: "do...while inverse la condition",
          text: "Répéter...Jusqu'à &lt;condition&gt; s'arrête quand la condition devient <strong>vraie</strong>. do { } while(&lt;condition&gt;) continue tant que la condition reste <strong>vraie</strong> — c'est l'inverse ! Pour traduire <code class=\"inline\">Jusqu'à N &gt;= 1 ET N &lt;= 3</code>, il faut écrire <code class=\"inline\">while (N &lt; 1 || N &gt; 3)</code>, la condition niée.",
        },
        {
          type: "code",
          label: "do-while.c",
          lang: "c",
          code: `int N;
do {
    printf("Entrez un nombre entre 1 et 3 : ");
    scanf("%d", &N);
} while (N < 1 || N > 3);   // continue tant que N est invalide`,
        },
      ],
    },
    {
      id: "tableaux",
      title: "Tableaux",
      blocks: [
        { type: "p", text: "<code class=\"inline\">Tableau Nb(9) en Entier</code> devient <code class=\"inline\">int Nb[10];</code>. Attention à la traduction : le pseudo-code de ce cours indique le <strong>dernier indice</strong> entre parenthèses, alors que C indique la <strong>taille</strong> entre crochets — pour un tableau d'indices 0 à 9 (10 cases), il faut donc écrire <code class=\"inline\">[10]</code>, pas <code class=\"inline\">[9]</code>." },
        {
          type: "translate",
          left: `Tableau Notes(9) en Numérique
Variable i en Entier
Début
  Pour i ← 0 à 9
    Lire Notes(i)
  i Suivant
Fin`,
          right: `#include <stdio.h>

int main(void)
{
    float Notes[10];
    int i;
    for (i = 0; i <= 9; i++) {
        scanf("%f", &Notes[i]);
    }
    return 0;
}`,
        },
        {
          type: "callout",
          variant: "warn",
          title: "Indices identiques, taille différente",
          text: "Bonne nouvelle : les indices valides restent 0 à 9 des deux côtés (le C est lui aussi indexé à partir de 0). Seule la déclaration change de convention : <code class=\"inline\">Tableau Notes(9)</code> (dernier indice) devient <code class=\"inline\">Notes[10]</code> (nombre total de cases).",
        },
      ],
    },
    {
      id: "chaines",
      title: "Chaînes de caractères",
      blocks: [
        { type: "p", text: "Une chaîne C est un tableau de <code class=\"inline\">char</code> terminé par un caractère invisible <code class=\"inline\">'\\0'</code> (le caractère nul), ajouté automatiquement par le compilateur. Les fonctions Len, Mid, Trouve et l'opérateur & du chapitre 7 ont chacun leur équivalent dans la bibliothèque <code class=\"inline\">string.h</code>." },
        {
          type: "table",
          headers: ["Pseudo-code", "C (avec #include &lt;string.h&gt;)"],
          rows: [
            ["<code class=\"inline\">Len(s)</code>", "<code class=\"inline\">strlen(s)</code>"],
            ["<code class=\"inline\">A & B</code>", "<code class=\"inline\">strcat(A, B)</code>"],
            ["<code class=\"inline\">Trouve(s, motif)</code>", "<code class=\"inline\">strstr(s, motif)</code> (renvoie un pointeur, pas une position)"],
            ["Copier une chaîne", "<code class=\"inline\">strcpy(dest, source)</code> — pas d'équivalent direct en pseudo-code (← suffit)"],
          ],
        },
        {
          type: "code",
          label: "longueur.c",
          lang: "c",
          code: `#include <stdio.h>
#include <string.h>

int main(void)
{
    char mot[50];
    printf("Entrez un mot : ");
    scanf("%s", mot);
    printf("Ce mot contient %d lettres\\n", (int) strlen(mot));
    return 0;
}`,
        },
        {
          type: "callout",
          variant: "warn",
          title: "Pas de & devant un tableau",
          text: "Contrairement aux variables simples, un nom de tableau (dont une chaîne <code class=\"inline\">char[]</code>) désigne déjà une adresse en C. On écrit donc <code class=\"inline\">scanf(\"%s\", mot)</code>, sans <code class=\"inline\">&</code> devant <code class=\"inline\">mot</code> — à l'inverse de <code class=\"inline\">scanf(\"%d\", &N)</code> pour une variable simple.",
        },
      ],
    },
    {
      id: "fonctions",
      title: "Fonctions, procédures et pointeurs",
      blocks: [
        { type: "p", text: "En C, il n'existe qu'une seule notion : la fonction. Une <strong>Procédure</strong> du pseudo-code se traduit par une fonction dont le type de retour est <code class=\"inline\">void</code> (« rien à renvoyer »)." },
        {
          type: "translate",
          left: `Fonction Sum(a, b, c, d, e)
  Renvoyer a + b + c + d + e
FinFonction`,
          right: `int Sum(int a, int b, int c, int d, int e)
{
    return a + b + c + d + e;
}`,
        },
        { type: "p", text: "Le passage par référence, en pseudo-code, se fait en C à l'aide des <strong>pointeurs</strong> : on passe l'adresse de la variable (<code class=\"inline\">&variable</code>), et la fonction la manipule via un paramètre de type <code class=\"inline\">int *</code>, en écrivant <code class=\"inline\">*param</code> pour accéder à la valeur pointée." },
        {
          type: "translate",
          labelLeft: "Pseudo-code (par Référence)",
          labelRight: "C (pointeur)",
          left: `Procédure Echanger(a, b en Entier par Référence)
  Variable Temp en Entier
  Temp ← a
  a ← b
  b ← Temp
FinProcédure`,
          right: `void echanger(int *a, int *b)
{
    int temp = *a;
    *a = *b;
    *b = temp;
}

// appel : echanger(&A, &B);`,
        },
        {
          type: "callout",
          variant: "tip",
          title: "Par défaut, C passe toujours par valeur",
          text: "Comme en pseudo-code, un paramètre C ordinaire (<code class=\"inline\">int a</code>) est une copie : le modifier dans la fonction ne change rien à l'extérieur. Le pointeur (<code class=\"inline\">int *a</code>) est la seule façon, en C, d'obtenir l'équivalent du passage par référence.",
        },
      ],
    },
    {
      id: "fichiers",
      title: "Fichiers",
      blocks: [
        { type: "p", text: "Ouvrir / Fermer / LireFichier / EcrireFichier / EOF ont chacun un équivalent dans <code class=\"inline\">stdio.h</code>, basé sur le type <code class=\"inline\">FILE *</code> (un pointeur vers un fichier ouvert)." },
        {
          type: "table",
          headers: ["Pseudo-code", "C"],
          rows: [
            ["<code class=\"inline\">Ouvrir \"f.txt\" sur 1 en Lecture</code>", "<code class=\"inline\">FILE *f = fopen(\"f.txt\", \"r\");</code>"],
            ["<code class=\"inline\">Ouvrir \"f.txt\" sur 1 en Écriture</code>", "<code class=\"inline\">FILE *f = fopen(\"f.txt\", \"w\");</code>"],
            ["<code class=\"inline\">LireFichier 1, Ligne</code>", "<code class=\"inline\">fscanf(f, \"%s\", ligne);</code>"],
            ["<code class=\"inline\">EcrireFichier 1, Valeur</code>", "<code class=\"inline\">fprintf(f, \"%d\\n\", valeur);</code>"],
            ["<code class=\"inline\">EOF(1)</code>", "<code class=\"inline\">feof(f)</code>"],
            ["<code class=\"inline\">Fermer 1</code>", "<code class=\"inline\">fclose(f);</code>"],
          ],
        },
        {
          type: "code",
          label: "lecture-fichier.c",
          lang: "c",
          code: `#include <stdio.h>

int main(void)
{
    char ligne[200];
    FILE *f = fopen("exemple.txt", "r");
    if (f == NULL) {
        printf("Impossible d'ouvrir le fichier\\n");
        return 1;
    }
    while (fgets(ligne, 200, f) != NULL) {
        printf("%s", ligne);
    }
    fclose(f);
    return 0;
}`,
        },
        {
          type: "callout",
          variant: "warn",
          title: "Toujours vérifier le résultat de fopen",
          text: "Contrairement au pseudo-code, où Ouvrir est supposé réussir, fopen renvoie <code class=\"inline\">NULL</code> si le fichier n'existe pas ou n'est pas accessible. Un programme C robuste teste systématiquement ce cas avant de continuer.",
        },
      ],
    },
    {
      id: "bilan",
      title: "Bilan : un algorithme complet, traduit en C",
      blocks: [
        { type: "p", text: "Pour clore ce cours, reprenons l'exercice fondateur du chapitre 1 — l'échange de deux variables — sous la forme d'un programme C complet, autonome et compilable, qui rassemble variables, entrées-sorties et fonctions." },
        {
          type: "code",
          label: "echange.c — programme complet",
          lang: "c",
          code: `#include <stdio.h>

void echanger(int *a, int *b)
{
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main(void)
{
    int A, B;

    printf("Entrez A : ");
    scanf("%d", &A);
    printf("Entrez B : ");
    scanf("%d", &B);

    echanger(&A, &B);

    printf("Après échange : A = %d, B = %d\\n", A, B);

    return 0;
}`,
        },
        { type: "p", text: "Chaque ligne de ce programme est la traduction directe d'une notion déjà rencontrée : déclaration typée, printf/scanf, passage par référence via pointeur, et la structure #include / main / return qui encadre le tout. Vous disposez maintenant de tous les outils pour transformer n'importe lequel de vos algorithmes en un vrai programme qui s'exécute." },
      ],
    },
  ],
};
