window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["02"] = {
  lead: `Un algorithme qui ne peut ni afficher un résultat ni demander une information à l'utilisateur n'a aucun intérêt pratique. Les instructions Écrire et Lire sont le pont entre votre algorithme et le monde extérieur.`,
  sections: [
    {
      id: "role",
      title: "Le dialogue avec l'utilisateur",
      blocks: [
        { type: "p", text: "Un algorithme interactif suit presque toujours le même schéma en trois temps : afficher une consigne, lire une réponse, puis traiter cette réponse. Deux instructions suffisent à couvrir ces échanges : <code class=\"inline\">Écrire</code> pour envoyer de l'information vers l'écran, et <code class=\"inline\">Lire</code> pour en recevoir depuis le clavier." },
        {
          type: "flow",
          steps: ["Écrire une consigne", "Lire la réponse", "Traiter la valeur", "Écrire le résultat"],
        },
      ],
    },
    {
      id: "ecrire",
      title: "Afficher avec Écrire",
      blocks: [
        { type: "p", text: "L'instruction <code class=\"inline\">Écrire</code> affiche à l'écran un ou plusieurs éléments, séparés par des virgules : du texte littéral entre guillemets, le contenu d'une variable, ou le résultat d'un calcul." },
        {
          type: "code",
          label: "affichage",
          code: `Variables N, i en Entier
Début
  N ← 7
  Pour i ← 1 à 10
    Écrire N, " x ", i, " = ", N * i
  i Suivant
Fin`,
        },
        { type: "p", text: "Chaque élément séparé par une virgule est affiché à la suite des autres, sans retour à la ligne automatique entre eux (mais chaque nouvel appel à <code class=\"inline\">Écrire</code> commence en général une nouvelle ligne à l'écran)." },
      ],
    },
    {
      id: "lire",
      title: "Récupérer une saisie avec Lire",
      blocks: [
        { type: "p", text: "L'instruction <code class=\"inline\">Lire</code> met l'algorithme en pause, attend que l'utilisateur tape une valeur au clavier puis valide (touche Entrée), et range cette valeur dans la variable indiquée. Cette variable doit impérativement avoir été déclarée au préalable." },
        {
          type: "syntax",
          title: "Syntaxe",
          code: `Écrire "message", var1, var2, ...
Lire variable`,
        },
        {
          type: "code",
          label: "dialogue.algo",
          code: `Variable N en Entier
Début
  Écrire "Entrez un nombre : "
  Lire N
  Écrire "Vous avez saisi : ", N
Fin`,
        },
        {
          type: "callout",
          variant: "tip",
          title: "Toujours annoncer ce qu'on attend",
          text: "Une bonne pratique académique consiste à toujours faire précéder un <code class=\"inline\">Lire</code> d'un <code class=\"inline\">Écrire</code> qui explique clairement à l'utilisateur ce qu'il doit saisir (type de valeur, unité, plage attendue…).",
        },
      ],
    },
    {
      id: "type-coherence",
      title: "Le type de la saisie doit correspondre",
      blocks: [
        { type: "p", text: "Le type déclaré de la variable détermine comment la saisie est interprétée. Si l'utilisateur tape autre chose que ce qui est attendu (des lettres pour une variable Entier, par exemple), on considère qu'il s'agit d'une saisie invalide — un vrai programme la validerait avant de continuer (mécanisme étudié au chapitre 5 avec les boucles de contrôle de saisie)." },
        {
          type: "compare",
          bad: {
            title: "Aucune vérification",
            code: `Variable Age en Entier
Début
  Écrire "Votre âge : "
  Lire Age    // une saisie non numérique
Fin           // provoquerait une erreur ici`,
          },
          good: {
            title: "On annonce le format attendu",
            code: `Variable Age en Entier
Début
  Écrire "Votre âge (nombre entier) : "
  Lire Age
Fin`,
          },
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
            "Oublier de déclarer la variable avant de la lire ou de l'écrire.",
            "Confondre <code class=\"inline\">Écrire</code> (qui affiche) et <code class=\"inline\">Lire</code> (qui récupère une saisie) — un piège fréquent en début d'apprentissage.",
            "Écrire une consigne puis lire dans la <em>mauvaise</em> variable (copier-coller un peu trop vite entre deux exercices).",
            "Oublier les guillemets autour d'un texte littéral : <code class=\"inline\">Écrire Bonjour</code> tente d'afficher le contenu d'une variable nommée Bonjour, pas le mot lui-même.",
          ],
        },
        {
          type: "callout",
          variant: "pitfall",
          title: "Guillemets oubliés",
          text: "<code class=\"inline\">Écrire \"Bonjour\"</code> affiche le texte Bonjour. <code class=\"inline\">Écrire Bonjour</code> (sans guillemets) est interprété comme l'affichage du contenu d'une variable appelée Bonjour — qui provoquera une erreur si elle n'existe pas.",
        },
      ],
    },
  ],
};
