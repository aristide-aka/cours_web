window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["07"] = {
  lead: `Le texte est partout : noms, phrases, mots de passe, messages à décoder. Ce chapitre présente les quatre outils qui permettent de manipuler une chaîne de caractères lettre par lettre : Len, Mid, Trouve et l'opérateur de concaténation &.`,
  sections: [
    {
      id: "rappel",
      title: "Rappel : le type Caractère",
      blocks: [
        { type: "p", text: "Une variable de type Caractère (ou Chaîne) contient du texte entre guillemets. On peut se représenter une chaîne comme un petit tableau de lettres, chacune repérée par sa position — ce qui explique pourquoi les fonctions de ce chapitre ressemblent à celles des tableaux." },
        {
          type: "callout",
          variant: "tip",
          title: "Analogie : un train de wagons-lettres",
          text: "Imaginez le mot \"algo\" comme un petit train de quatre wagons, chacun ne transportant qu'une seule lettre, numérotés dans l'ordre. Len compte le nombre de wagons. Mid détache un groupe de wagons consécutifs. Trouve cherche si une suite de wagons précise apparaît quelque part dans le train.",
        },
      ],
    },
    {
      id: "len",
      title: "Len — connaître la longueur",
      blocks: [
        { type: "p", text: "<code class=\"inline\">Len(chaîne)</code> renvoie le nombre de caractères que contient la chaîne, espaces compris." },
        {
          type: "syntax",
          title: "Syntaxe",
          code: `Len(<chaîne>)   →  renvoie un Entier`,
        },
        {
          type: "code",
          label: "exercice 9.2",
          code: `Variable Mot en Caractère
Variable N en Entier
Début
  Écrire "Entrez un mot : "
  Lire Mot
  N ← Len(Mot)
  Écrire "Ce mot contient ", N, " lettres"
Fin`,
        },
        { type: "p", text: "Si l'utilisateur saisit <code class=\"inline\">\"algorithme\"</code>, alors <code class=\"inline\">Len(Mot)</code> vaut 10." },
      ],
    },
    {
      id: "mid",
      title: "Mid — extraire une portion de texte",
      blocks: [
        { type: "p", text: "<code class=\"inline\">Mid(chaîne, début, longueur)</code> extrait une sous-chaîne : elle commence au caractère numéro <em>début</em> (le premier caractère porte le numéro 1, pas 0, par convention pour les chaînes) et compte <em>longueur</em> caractères." },
        {
          type: "syntax",
          title: "Syntaxe",
          code: `Mid(<chaîne>, <début>, <longueur>)   →  renvoie un Caractère`,
        },
        {
          type: "code",
          label: "exemple",
          code: `Variable Mot en Caractère
Début
  Mot ← "algorithme"
  Écrire Mid(Mot, 1, 4)     // "algo"
  Écrire Mid(Mot, 5, 6)     // "rithme"
  Écrire Mid(Mot, 3, 1)     // "g" — un seul caractère
Fin`,
        },
        {
          type: "callout",
          variant: "warn",
          title: "Indices de Mid : on commence à 1",
          text: "Contrairement aux tableaux (indice 0), la convention pour Mid est de numéroter le premier caractère 1. C'est une source d'erreur fréquente quand on jongle entre tableaux et chaînes dans le même algorithme.",
        },
      ],
    },
    {
      id: "trouve",
      title: "Trouve — chercher une sous-chaîne",
      blocks: [
        { type: "p", text: "<code class=\"inline\">Trouve(chaîne, motif)</code> cherche la première occurrence de <em>motif</em> à l'intérieur de <em>chaîne</em>, et renvoie sa position (numérotée à partir de 1). Si le motif est absent, elle renvoie 0." },
        {
          type: "code",
          label: "compter-voyelles.algo",
          code: `Variable Mot en Caractère
Variables i, Nb en Entier
Début
  Écrire "Entrez un mot : "
  Lire Mot
  Nb ← 0
  Pour i ← 1 à Len(Mot)
    Si Trouve("aeiouy", Mid(Mot, i, 1)) <> 0 Alors
      Nb ← Nb + 1
    FinSi
  i Suivant
  Écrire "Nombre de voyelles : ", Nb
Fin`,
        },
        { type: "p", text: "L'astuce est élégante : plutôt que d'écrire six comparaisons (<code class=\"inline\">Mid(Mot,i,1) = \"a\" OU ... = \"e\" OU ...</code>), on cherche si la lettre courante figure quelque part dans la chaîne <code class=\"inline\">\"aeiouy\"</code>. <code class=\"inline\">Trouve</code> renvoie une position différente de 0 dès qu'elle trouve une correspondance, quelle qu'elle soit." },
        {
          type: "callout",
          variant: "info",
          title: "Pour aller plus loin",
          text: "Ce traitement gagnerait à être isolé dans une fonction réutilisable <code class=\"inline\">NbVoyelles</code> — c'est exactement ce que vous apprendrez à faire au chapitre 8.",
        },
      ],
    },
    {
      id: "concatenation",
      title: "L'opérateur de concaténation &",
      blocks: [
        { type: "p", text: "Vu au chapitre 1, l'opérateur <code class=\"inline\">&</code> assemble deux chaînes bout à bout. Combiné à une boucle, il permet de reconstruire une chaîne caractère par caractère — la technique de base de tout algorithme de chiffrement de texte." },
        {
          type: "code",
          label: "cryptographie — décalage de 1 (chiffre de César simplifié)",
          code: `Variables Phrase, Resultat, C en Caractère
Variables i, Alpha en Entier
Début
  Écrire "Entrez une phrase : "
  Lire Phrase
  Resultat ← ""
  Pour i ← 1 à Len(Phrase)
    C ← Mid(Phrase, i, 1)
    Si Trouve("ABCDEFGHIJKLMNOPQRSTUVWXYZ", C) <> 0 Alors
      Alpha ← Trouve("ABCDEFGHIJKLMNOPQRSTUVWXYZ", C)
      Resultat ← Resultat & Mid("BCDEFGHIJKLMNOPQRSTUVWXYZA", Alpha, 1)
    Sinon
      Resultat ← Resultat & C     // espace, ponctuation... inchangés
    FinSi
  i Suivant
  Écrire "Phrase codée : ", Resultat
Fin`,
        },
        { type: "p", text: "Ce principe — trouver la position de la lettre dans l'alphabet normal, puis lire le caractère à la même position dans un alphabet décalé — est la base de tous les chiffres de substitution, du plus simple (César) au plus élaboré (Vigenère)." },
      ],
    },
    {
      id: "erreurs",
      title: "Erreurs fréquentes",
      blocks: [
        {
          type: "list",
          items: [
            "Confondre l'indexation de Mid (commence à 1) avec celle des tableaux (commence à 0).",
            "Oublier d'initialiser une chaîne accumulatrice à <code class=\"inline\">\"\"</code> (chaîne vide) avant une boucle de concaténation.",
            "Utiliser <code class=\"inline\">+</code> au lieu de <code class=\"inline\">&</code> pour assembler du texte — <code class=\"inline\">+</code> reste réservé aux nombres.",
            "Demander <code class=\"inline\">Mid(chaîne, i, 1)</code> avec i au-delà de Len(chaîne), ce qui sort de la chaîne.",
          ],
        },
      ],
    },
  ],
};
