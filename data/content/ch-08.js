window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["08"] = {
  lead: `Un algorithme de plusieurs centaines de lignes écrit d'un seul bloc devient vite illisible. Fonctions et procédures permettent de le découper en morceaux nommés, testables et réutilisables — le passage obligé pour écrire des algorithmes ambitieux.`,
  sections: [
    {
      id: "pourquoi",
      title: "Pourquoi découper un algorithme ?",
      blocks: [
        { type: "p", text: "Dès qu'un même traitement doit être effectué à plusieurs endroits — ou dès qu'un bloc d'instructions correspond à une tâche identifiable (« calculer une moyenne », « vérifier qu'un mot est valide ») — il devient plus clair de lui donner un nom et de l'isoler du reste de l'algorithme." },
        {
          type: "callout",
          variant: "tip",
          title: "Le principe de la boîte noire",
          text: "Une fonction ou une procédure bien conçue peut être utilisée sans connaître son fonctionnement interne : il suffit de savoir ce qu'elle attend en entrée, et ce qu'elle produit en sortie.",
        },
      ],
    },
    {
      id: "fonction-vs-procedure",
      title: "Fonction ou procédure ?",
      blocks: [
        { type: "p", text: "Les deux permettent d'isoler un traitement et de lui passer des paramètres. Leur différence tient à la sortie :" },
        {
          type: "list",
          items: [
            "Une <strong>Fonction</strong> calcule et <strong>renvoie une valeur unique</strong>, utilisable ensuite dans une expression : <code class=\"inline\">Moyenne ← Somme(Notes) / 10</code>.",
            "Une <strong>Procédure</strong> exécute une série d'actions (afficher, modifier des paramètres) mais <strong>ne renvoie aucune valeur</strong> directement.",
          ],
        },
      ],
    },
    {
      id: "syntaxe-fonction",
      title: "Écrire une fonction",
      blocks: [
        {
          type: "syntax",
          title: "Syntaxe",
          code: `Fonction <Nom>(<param1> en <Type>, <param2> en <Type>, ...)
  <instructions>
  Renvoyer <valeur>
FinFonction`,
        },
        {
          type: "code",
          label: "exercice 11.1",
          code: `Fonction Sum(a, b, c, d, e)
  Renvoyer a + b + c + d + e
FinFonction`,
        },
        { type: "p", text: "On appelle ensuite la fonction comme n'importe quelle expression : <code class=\"inline\">Total ← Sum(1, 2, 3, 4, 5)</code>. Une fonction peut tout à fait en appeler une autre — c'est même l'un des grands intérêts du découpage : <code class=\"inline\">NbVoyelles</code> (chapitre 7) appelle par exemple <code class=\"inline\">Len</code>, <code class=\"inline\">Mid</code> et <code class=\"inline\">Trouve</code>, qui sont elles-mêmes des fonctions." },
      ],
    },
    {
      id: "syntaxe-procedure",
      title: "Écrire une procédure",
      blocks: [
        {
          type: "syntax",
          title: "Syntaxe",
          code: `Procédure <Nom>(<param1> en <Type>, ...)
  <instructions>
FinProcédure`,
        },
        {
          type: "code",
          label: "affichage du mot à deviner (jeu du pendu)",
          code: `Procédure AffichageMot(m en Caractère par Valeur, t() en Booléen par Valeur)
  Variable Aff en Caractère
  Variable i en Entier
  Aff ← ""
  Pour i ← 0 à Len(m) - 1
    Si Non t(i) Alors
      Aff ← Aff & "-"
    Sinon
      Aff ← Aff & Mid(m, i + 1, 1)
    FinSi
  i Suivant
  Écrire Aff
FinProcédure`,
        },
      ],
    },
    {
      id: "parametres",
      title: "Paramètres par valeur ou par référence",
      blocks: [
        { type: "p", text: "Par défaut, un paramètre est passé <strong>par valeur</strong> : la fonction ou procédure reçoit une copie. Toute modification de ce paramètre à l'intérieur reste locale, et n'affecte pas la variable d'origine utilisée lors de l'appel." },
        { type: "p", text: "À l'inverse, un paramètre passé <strong>par référence</strong> (mot-clé explicite <code class=\"inline\">par Référence</code>) donne à la procédure un accès direct à la variable d'origine : toute modification à l'intérieur se répercute réellement à l'extérieur, une fois l'appel terminé." },
        {
          type: "code",
          label: "exercice — validation d'une lettre (par Référence)",
          code: `Procédure SaisieLettre(a, b en Caractère par Référence)
  Variable Correct en Booléen
  Variable Alpha en Caractère
  Début
    Correct ← Faux
    Alpha ← "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    TantQue Non Correct
      Écrire "Entrez la lettre proposée : "
      Lire b
      Si Trouve(Alpha, b) = 0 OU Len(b) <> 1 Alors
        Écrire "Ce n'est pas une lettre !"
      SinonSi Trouve(a, b) <> 0 Alors
        Écrire "Lettre déjà proposée !"
      Sinon
        Correct ← Vrai
        a ← a & b
      FinSi
    FinTantQue
  Fin Procédure`,
        },
        { type: "p", text: "Ici, <code class=\"inline\">a</code> (l'historique des lettres déjà proposées) doit être mis à jour pour de bon dans le programme appelant : le passage par référence est donc indispensable. Si <code class=\"inline\">a</code> avait été passé par valeur, la modification <code class=\"inline\">a ← a & b</code> aurait été perdue dès la sortie de la procédure." },
        {
          type: "callout",
          variant: "warn",
          title: "Choisir le bon mode de passage",
          text: "Par défaut, préférez le passage par valeur (plus sûr : la procédure ne peut pas modifier ce qu'elle ne devrait pas). Réservez le passage par référence aux cas où la fonction ou la procédure doit explicitement modifier une variable de l'appelant.",
        },
      ],
    },
    {
      id: "erreurs",
      title: "Erreurs fréquentes",
      blocks: [
        {
          type: "list",
          items: [
            "Oublier <code class=\"inline\">Renvoyer</code> dans une fonction — sans lui, aucune valeur n'est produite.",
            "Faire des effets de bord dans une fonction censée se contenter de renvoyer un résultat (afficher à l'écran depuis une fonction, par exemple) : c'est souvent le signe qu'il fallait une procédure.",
            "Croire qu'un paramètre par valeur modifié dans la fonction change la variable d'origine — c'est faux, sauf passage explicite par référence.",
            "Donner le même nom à un paramètre et à une variable locale utilisée ailleurs dans l'algorithme, source de confusion.",
          ],
        },
      ],
    },
  ],
};
