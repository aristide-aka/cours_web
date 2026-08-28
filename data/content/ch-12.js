window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["12"] = {
  lead: `Python est un langage interprété, réputé pour sa syntaxe proche du pseudo-code lui-même. Ce chapitre traduit les dix notions déjà étudiées — variables, tests, boucles, listes, chaînes, fonctions, fichiers — en Python, jusqu'à un script complet et exécutable.`,
  sections: [
    {
      id: "structure",
      title: "Un langage interprété, sans compilation",
      blocks: [
        { type: "p", text: "Contrairement au C, un script Python n'a pas besoin d'être compilé : l'interpréteur <code class=\"inline\">python3</code> lit et exécute le fichier directement, ligne par ligne. Mais la plus grande différence avec tout ce que vous avez vu jusqu'ici est ailleurs : <strong>Python n'utilise ni accolades ni mots-clés de fin de bloc</strong>. C'est l'indentation elle-même qui délimite chaque bloc." },
        {
          type: "code",
          label: "squelette.py",
          lang: "python",
          code: `# Ce commentaire commence par un dièse, pas par //

n = 5
if n > 0:
    print("Positif")
else:
    print("Négatif")`,
        },
        {
          type: "callout",
          variant: "pitfall",
          title: "L'indentation n'est pas décorative, elle est obligatoire",
          text: "En pseudo-code ou en C, une mauvaise indentation nuit seulement à la lisibilité. En Python, elle change le <strong>sens</strong> du programme : deux lignes indentées différemment n'appartiennent pas au même bloc. Une erreur d'indentation est une erreur qui empêche le script de s'exécuter.",
        },
        {
          type: "table",
          headers: ["Élément", "Rôle"],
          rows: [
            ["<code class=\"inline\">:</code>", "Annonce le début d'un bloc (après if, else, while, for, def…) — remplace Alors, FinSi n'existe plus du tout."],
            ["Indentation (4 espaces)", "Délimite l'appartenance à un bloc — remplace Début/Fin, FinTantQue, etc."],
            ["<code class=\"inline\">#</code>", "Introduit un commentaire jusqu'à la fin de la ligne — équivalent du <code class=\"inline\">//</code> en C."],
          ],
        },
      ],
    },
    {
      id: "variables",
      title: "Variables : le typage dynamique",
      blocks: [
        { type: "p", text: "Python ne demande <strong>aucune déclaration de type</strong> : on affecte directement une valeur à un nom, et Python déduit le type tout seul. <code class=\"inline\">Variable X en Entier</code> devient simplement <code class=\"inline\">x = 0</code>. L'opérateur d'affectation redevient le simple signe <code class=\"inline\">=</code>, comme en C." },
        {
          type: "translate",
          rightLang: "python",
          labelRight: "Python",
          left: `Variables A, B en Entier
Début
  A ← 1
  B ← A + 3
  A ← 3
Fin`,
          right: `a = 1
b = a + 3
a = 3`,
        },
        {
          type: "callout",
          variant: "tip",
          title: "Pas de Début/Fin : le fichier entier est le programme",
          text: "Un script Python n'a pas besoin de bloc Début/Fin explicite : les instructions écrites au niveau le plus à gauche du fichier s'exécutent simplement les unes après les autres, du début à la fin du fichier.",
        },
      ],
    },
    {
      id: "entrees-sorties",
      title: "Afficher et lire : print() et input()",
      blocks: [
        { type: "p", text: "<code class=\"inline\">Écrire</code> devient <code class=\"inline\">print()</code>, et <code class=\"inline\">Lire</code> devient <code class=\"inline\">input()</code>. Aucun format n'est nécessaire : print() accepte directement plusieurs valeurs séparées par des virgules." },
        {
          type: "translate",
          rightLang: "python",
          labelRight: "Python",
          left: `Variable N en Entier
Début
  Écrire "Entrez un nombre : "
  Lire N
  Écrire "Vous avez saisi : ", N
Fin`,
          right: `n = int(input("Entrez un nombre : "))
print("Vous avez saisi :", n)`,
        },
        {
          type: "callout",
          variant: "pitfall",
          title: "input() renvoie toujours du texte",
          text: "Quelle que soit la saisie de l'utilisateur, <code class=\"inline\">input()</code> renvoie systématiquement une chaîne de caractères (str) — jamais un nombre. Pour obtenir un entier utilisable dans un calcul, il faut explicitement convertir avec <code class=\"inline\">int(input(...))</code>, ou <code class=\"inline\">float(input(...))</code> pour un nombre décimal.",
        },
      ],
    },
    {
      id: "conditions",
      title: "Tests : if, elif, else",
      blocks: [
        { type: "p", text: "SinonSi devient <code class=\"inline\">elif</code> (contraction de « else if »). Les opérateurs de comparaison restent proches du C, à l'exception notable des opérateurs logiques, qui redeviennent des mots entiers en anglais plutôt que des symboles." },
        {
          type: "table",
          headers: ["Pseudo-code", "Python"],
          rows: [
            ["ET", "<code class=\"inline\">and</code>"],
            ["OU", "<code class=\"inline\">or</code>"],
            ["NON", "<code class=\"inline\">not</code>"],
            ["<code class=\"inline\">&lt;&gt;</code>", "<code class=\"inline\">!=</code>"],
          ],
        },
        {
          type: "translate",
          rightLang: "python",
          labelRight: "Python",
          left: `Si n > 0 Alors
  Écrire "Positif"
SinonSi n < 0 Alors
  Écrire "Négatif"
Sinon
  Écrire "Nul"
FinSi`,
          right: `if n > 0:
    print("Positif")
elif n < 0:
    print("Négatif")
else:
    print("Nul")`,
        },
      ],
    },
    {
      id: "boucles",
      title: "Boucles : while et for...in range()",
      blocks: [
        { type: "p", text: "TantQue devient <code class=\"inline\">while</code>, sans surprise. Pour, en revanche, se traduit très différemment qu'en C : Python utilise <code class=\"inline\">for ... in range(...)</code>, où <code class=\"inline\">range</code> génère la suite des indices à parcourir." },
        {
          type: "callout",
          variant: "pitfall",
          title: "range() exclut sa borne de fin",
          text: "C'est le piège numéro un de la boucle Python : <code class=\"inline\">range(1, 10)</code> produit 1, 2, 3… jusqu'à <strong>9</strong>, pas 10 ! Pour traduire fidèlement <code class=\"inline\">Pour i ← 1 à 10</code>, il faut donc écrire <code class=\"inline\">range(1, 11)</code>, avec la borne de fin augmentée de un.",
        },
        {
          type: "translate",
          rightLang: "python",
          labelRight: "Python",
          left: `Variables N, i en Entier
Début
  Lire N
  Pour i ← 1 à 10
    Écrire N, " x ", i, " = ", N * i
  i Suivant
Fin`,
          right: `n = int(input())
for i in range(1, 11):
    print(n, "x", i, "=", n * i)`,
        },
        { type: "p", text: "Python n'a pas de structure Répéter...Jusqu'à native. On la simule avec une boucle infinie <code class=\"inline\">while True</code>, que l'on interrompt explicitement avec <code class=\"inline\">break</code> dès que la condition de sortie est atteinte." },
        {
          type: "code",
          label: "repeter-jusqua.py",
          lang: "python",
          code: `while True:
    n = int(input("Entrez un nombre entre 1 et 3 : "))
    if 1 <= n <= 3:
        break`,
        },
      ],
    },
    {
      id: "listes",
      title: "Les listes (tableaux)",
      blocks: [
        { type: "p", text: "Un Tableau se traduit par une <strong>liste</strong> Python : <code class=\"inline\">[]</code>. Contrairement au C, une liste Python n'a pas de taille fixe à déclarer à l'avance — elle grandit dynamiquement avec <code class=\"inline\">append()</code>." },
        {
          type: "translate",
          rightLang: "python",
          labelRight: "Python",
          left: `Tableau Notes(9) en Numérique
Variable i en Entier
Début
  Pour i ← 0 à 9
    Lire Notes(i)
  i Suivant
Fin`,
          right: `notes = []
for i in range(10):
    notes.append(float(input()))`,
        },
        { type: "p", text: "L'indexation reste identique à celle du pseudo-code : le premier élément est <code class=\"inline\">notes[0]</code>, et <code class=\"inline\">len(notes)</code> donne le nombre d'éléments (équivalent de la taille du tableau)." },
      ],
    },
    {
      id: "chaines",
      title: "Chaînes de caractères",
      blocks: [
        { type: "p", text: "Les chaînes Python se comportent comme des listes de caractères : on peut y accéder par indice, et surtout par <strong>slicing</strong> (découpage), qui remplace élégamment la fonction Mid." },
        {
          type: "table",
          headers: ["Pseudo-code", "Python"],
          rows: [
            ["<code class=\"inline\">Len(s)</code>", "<code class=\"inline\">len(s)</code>"],
            ["<code class=\"inline\">Mid(s, deb, long)</code>", "<code class=\"inline\">s[deb-1 : deb-1+long]</code> (slicing, indices à partir de 0)"],
            ["<code class=\"inline\">Trouve(s, motif)</code>", "<code class=\"inline\">motif in s</code> (test) ou <code class=\"inline\">s.find(motif)</code> (position)"],
            ["<code class=\"inline\">A &amp; B</code>", "<code class=\"inline\">a + b</code> (le + concatène aussi le texte en Python)"],
          ],
        },
        {
          type: "code",
          label: "slicing.py",
          lang: "python",
          code: `mot = "algorithme"
print(mot[0:4])     # "algo"  (équivalent de Mid(mot, 1, 4))
print(len(mot))     # 10
print("go" in mot)  # True   (équivalent de Trouve(mot, "go") <> 0)`,
        },
        {
          type: "callout",
          variant: "warn",
          title: "Slicing : borne de fin exclusive, comme range()",
          text: "<code class=\"inline\">mot[0:4]</code> prend les caractères d'indice 0 à 3 (4 exclu) — même logique que range(). C'est cohérent une fois compris, mais déroutant si l'on garde en tête la convention de Mid, où le troisième argument est une <em>longueur</em>, pas un indice de fin.",
        },
      ],
    },
    {
      id: "fonctions",
      title: "Fonctions",
      blocks: [
        { type: "p", text: "Python ne connaît, comme C, qu'une seule notion : la fonction, introduite par <code class=\"inline\">def</code>. Une Procédure se traduit par une fonction qui ne contient simplement aucun <code class=\"inline\">return</code> (elle renvoie alors implicitement la valeur spéciale <code class=\"inline\">None</code>)." },
        {
          type: "translate",
          rightLang: "python",
          labelRight: "Python",
          left: `Fonction Sum(a, b, c, d, e)
  Renvoyer a + b + c + d + e
FinFonction`,
          right: `def somme(a, b, c, d, e):
    return a + b + c + d + e`,
        },
        { type: "p", text: "Le passage par référence est plus subtil en Python qu'en pseudo-code : il ne dépend pas d'un mot-clé, mais du <strong>type de la valeur</strong> passée." },
        {
          type: "table",
          headers: ["Type passé en paramètre", "Comportement"],
          rows: [
            ["Nombre, chaîne, booléen (immuables)", "Toujours comme un passage par Valeur : le modifier dans la fonction n'affecte jamais l'original."],
            ["Liste, dictionnaire (mutables)", "Comme un passage par Référence : modifier son <em>contenu</em> dans la fonction affecte bien l'original."],
          ],
        },
        {
          type: "code",
          label: "reference-implicite.py",
          lang: "python",
          code: `def vider(liste):
    liste.clear()   # modifie réellement la liste d'origine

notes = [12, 8, 15]
vider(notes)
print(notes)   # []  — la liste d'origine a bien été modifiée`,
        },
      ],
    },
    {
      id: "fichiers",
      title: "Fichiers",
      blocks: [
        { type: "p", text: "Python simplifie beaucoup la gestion de fichiers grâce au mot-clé <code class=\"inline\">with</code>, qui ouvre le fichier puis le referme <strong>automatiquement</strong> à la fin du bloc — même en cas d'erreur. Le Fermer explicite du pseudo-code devient donc facultatif en pratique." },
        {
          type: "translate",
          rightLang: "python",
          labelRight: "Python",
          left: `Variable Ligne en Caractère
Début
  Ouvrir "Exemple.txt" sur 5 en Lecture
  TantQue Non EOF(5)
    LireFichier 5, Ligne
    Écrire Ligne
  FinTantQue
  Fermer 5
Fin`,
          right: `with open("Exemple.txt", "r") as f:
    for ligne in f:
        print(ligne, end="")`,
        },
        {
          type: "callout",
          variant: "tip",
          title: "Parcourir un fichier ligne à ligne",
          text: "En Python, <code class=\"inline\">for ligne in f</code> remplace à lui seul tout le motif « TantQue Non EOF » : le fichier ouvert est directement itérable, une ligne à la fois.",
        },
      ],
    },
    {
      id: "bilan",
      title: "Bilan : l'échange de variables en Python",
      blocks: [
        { type: "p", text: "Terminons par l'exercice fondateur du chapitre 1, sous forme d'un script Python complet et exécutable." },
        {
          type: "code",
          label: "echange.py — programme complet",
          lang: "python",
          code: `a = int(input("Entrez A : "))
b = int(input("Entrez B : "))

temp = a
a = b
b = temp

print("Après échange : A =", a, ", B =", b)`,
        },
        { type: "p", text: "On retrouve la même variable temporaire qu'au chapitre 1 — la logique de l'algorithme ne change jamais, seule sa mise en forme s'adapte au langage. Signalons pour finir une élégance propre à Python : le langage permet d'échanger deux variables en une seule ligne, sans variable temporaire explicite, grâce à l'affectation multiple." },
        {
          type: "code",
          label: "echange-pythonique.py — bonus",
          lang: "python",
          code: `a, b = b, a   # Python évalue d'abord (b, a), puis affecte : équivalent strict
              # de l'échange avec variable temporaire, mais en une seule ligne`,
        },
      ],
    },
  ],
};
