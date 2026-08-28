window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["01"] = {
  lead: `Tout algorithme manipule des données. La variable est la brique de base qui permet de les nommer, de les stocker en mémoire et de les faire évoluer au fil des instructions. Ce chapitre pose les fondations indispensables à tout le reste du cours.`,
  sections: [
    {
      id: "definition",
      title: "Qu'est-ce qu'une variable ?",
      blocks: [
        { type: "p", text: "Une variable est un espace de la mémoire de l'ordinateur auquel on donne un nom, et dans lequel on peut ranger une valeur. On peut se représenter une variable comme une petite boîte étiquetée : l'étiquette est le nom de la variable, et le contenu de la boîte est sa valeur." },
        { type: "p", text: "À tout moment de l'exécution d'un algorithme, une variable contient exactement une valeur (ou aucune, si elle n'a pas encore été initialisée). Cette valeur peut changer au fil des instructions — c'est même toute l'utilité d'une variable : elle varie." },
        {
          type: "callout",
          variant: "tip",
          title: "Analogie",
          text: "Pensez à une variable comme à un casier de consigne numéroté. Le numéro du casier ne change jamais (c'est le nom), mais on peut retirer ce qu'il contient pour y ranger autre chose (c'est la valeur).",
        },
      ],
    },
    {
      id: "declaration",
      title: "Déclarer une variable",
      blocks: [
        { type: "p", text: "Avant d'utiliser une variable, on doit la déclarer : annoncer son nom et son type. En pseudo-code académique, la déclaration se fait en tête d'algorithme, avec le mot-clé <code class=\"inline\">Variable</code> (ou <code class=\"inline\">Variables</code> si l'on en déclare plusieurs du même type d'un coup)." },
        {
          type: "syntax",
          title: "Syntaxe",
          code: `Variable <Nom> en <Type>
Variables <Nom1>, <Nom2>, ... en <Type>`,
        },
        {
          type: "code",
          label: "exemple.algo",
          code: `Variables A, B en Entier
Début
  A ← 1
  B ← A + 3
  A ← 3
Fin`,
        },
        { type: "p", text: "Un nom de variable doit être explicite (préférez <code class=\"inline\">Moyenne</code> à <code class=\"inline\">X</code> dès que c'est possible), commencer par une lettre, et ne contenir ni espace ni caractère accentué exotique. Par convention dans ce cours, les noms de variables commencent par une majuscule." },
      ],
    },
    {
      id: "affectation",
      title: "L'opérateur d'affectation ←",
      blocks: [
        { type: "p", text: "L'affectation est l'opération qui consiste à ranger une valeur dans une variable. On la note avec une flèche <strong>←</strong> (à ne jamais confondre avec le signe mathématique d'égalité <strong>=</strong>, qui teste une égalité au lieu d'en créer une)." },
        { type: "p", text: "L'instruction <code class=\"inline\">A ← B + 3</code> se lit toujours de droite à gauche : « on calcule B + 3, puis on range le résultat dans A ». Cela implique une conséquence essentielle, source de confusion chez les débutants :" },
        {
          type: "callout",
          variant: "warn",
          title: "Piège classique",
          text: "L'instruction <code class=\"inline\">A ← A + 1</code> n'a aucun sens en mathématiques (aucun nombre n'est égal à lui-même plus un), mais elle est parfaitement valide en algorithmique : on calcule l'ancienne valeur de A, on y ajoute 1, puis on écrase A avec ce nouveau résultat.",
        },
        {
          type: "trace",
          vars: ["A", "B"],
          rows: [
            { instr: "A ← 5", values: { A: "5", B: "?" }, changed: ["A"] },
            { instr: "B ← A + 4", values: { A: "5", B: "9" }, changed: ["B"] },
            { instr: "A ← A + 1", values: { A: "6", B: "9" }, changed: ["A"] },
            { instr: "B ← A − 4", values: { A: "6", B: "2" }, changed: ["B"] },
          ],
        },
        { type: "p", text: "Cette table de trace est l'outil le plus important de ce cours : elle permet de suivre, instruction après instruction, l'évolution du contenu de chaque variable. Vous la retrouverez dans chaque chapitre — apprenez à la construire vous-même au brouillon, c'est la meilleure façon de comprendre (et de déboguer) un algorithme." },
      ],
    },
    {
      id: "types",
      title: "Les types de base",
      blocks: [
        { type: "p", text: "Le type d'une variable détermine la nature des valeurs qu'elle peut contenir, et donc les opérations qui ont un sens sur elle. Les quatre types fondamentaux utilisés dans ce cours sont :" },
        {
          type: "list",
          items: [
            "<strong>Entier</strong> — un nombre sans virgule : <code class=\"inline\">-3</code>, <code class=\"inline\">0</code>, <code class=\"inline\">42</code>.",
            "<strong>Numérique</strong> (ou <strong>Réel</strong>) — un nombre pouvant comporter une partie décimale : <code class=\"inline\">3.14</code>, <code class=\"inline\">-0.5</code>.",
            "<strong>Caractère</strong> (ou <strong>Chaîne</strong>) — du texte entre guillemets : <code class=\"inline\">\"Bonjour\"</code>, <code class=\"inline\">\"423\"</code>.",
            "<strong>Booléen</strong> — une valeur de vérité : <code class=\"inline\">Vrai</code> ou <code class=\"inline\">Faux</code> (étudié en détail au chapitre 4).",
          ],
        },
        {
          type: "callout",
          variant: "pitfall",
          title: "\"423\" n'est pas 423",
          text: "La chaîne de caractères <code class=\"inline\">\"423\"</code> et le nombre entier <code class=\"inline\">423</code> ne sont pas interchangeables. Additionner deux chaînes de caractères avec l'opérateur <code class=\"inline\">+</code> provoque une erreur d'exécution : pour les assembler, on utilise l'opérateur de concaténation <code class=\"inline\">&</code>.",
        },
        {
          type: "compare",
          bad: { title: "Erreur d'exécution", code: `Variables A, B, C en Caractère
Début
  A ← "423"
  B ← "12"
  C ← A + B      // impossible : + n'existe pas sur du texte
Fin` },
          good: { title: "Concaténation correcte", code: `Variables A, B, C en Caractère
Début
  A ← "423"
  B ← "12"
  C ← A & B      // C vaut "42312"
Fin` },
        },
      ],
    },
    {
      id: "echange",
      title: "Cas d'étude : échanger deux variables",
      blocks: [
        { type: "p", text: "C'est l'exercice classique par excellence, et il faut absolument le maîtriser : comment échanger le contenu de deux variables A et B, quelle que soit leur valeur de départ ? L'intuition naïve consiste à écrire :" },
        {
          type: "code",
          label: "version incorrecte",
          code: `Variables A, B en Entier
Début
  A ← 5
  B ← 2
  A ← B          // A vaut maintenant 2 : la valeur 5 est perdue !
  B ← A          // B recopie donc... 2
Fin`,
        },
        { type: "p", text: "Le résultat est A = 2 et B = 2 : l'échange a échoué, car la première instruction a écrasé la valeur originale de A avant qu'on ait pu la donner à B. La solution consiste à utiliser une <strong>variable temporaire</strong> qui sert de « casier de secours » le temps de l'échange :" },
        {
          type: "code",
          label: "version correcte",
          code: `Variables A, B, C en Entier
Début
  A ← 5
  B ← 2
  C ← A          // on sauvegarde A dans la variable temporaire C
  A ← B          // A peut maintenant être écrasé sans risque
  B ← C          // B récupère l'ancienne valeur de A, sauvegardée dans C
Fin`,
        },
        { type: "p", text: "Quel que soit le nombre de variables à faire tourner (échanger A→B, B→C, C→A par exemple), une seule variable temporaire suffit toujours." },
      ],
    },
  ],
};
