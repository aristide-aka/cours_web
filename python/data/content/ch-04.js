window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["04"] = {
  lead: `Un commentaire est du texte que Python ignore totalement à l'exécution — il ne sert qu'à expliquer le code à un être humain (vous-même, dans six mois, ou un autre développeur).`,
  sections: [
    {
      id: "commentaire-simple",
      title: "Le commentaire sur une ligne : #",
      blocks: [
        { type: "p", text: "Tout ce qui suit un <code class=\"inline\">#</code> jusqu'à la fin de la ligne est ignoré par Python — c'est l'équivalent du <code class=\"inline\">//</code> du C." },
        {
          type: "code",
          label: "commentaires.py",
          lang: "python",
          code: `# Ceci est un commentaire sur sa propre ligne
age = 25  # ceci est un commentaire en fin de ligne`,
        },
      ],
    },
    {
      id: "commentaire-multiligne",
      title: "Le commentaire sur plusieurs lignes",
      blocks: [
        { type: "p", text: "Pour un commentaire plus long, on utilise trois guillemets doubles <code class=\"inline\">\"\"\"</code> (ou trois simples <code class=\"inline\">'''</code>) au début et à la fin. Techniquement, il s'agit d'une chaîne de caractères que Python évalue puis ignore si elle n'est affectée à rien." },
        {
          type: "code",
          label: "commentaire-multiligne.py",
          lang: "python",
          code: `"""
Ce commentaire peut s'étaler
sur plusieurs lignes.
Pratique pour expliquer un algorithme complexe.
"""
print("Le programme commence ici")`,
        },
      ],
    },
    {
      id: "bonnes-pratiques",
      title: "Bien commenter : le pourquoi, pas le quoi",
      blocks: [
        {
          type: "callout",
          variant: "tip",
          title: "Analogie : les panneaux en randonnée",
          text: "Un bon commentaire ressemble à un panneau indiquant « attention, sentier glissant » — une information utile que le paysage seul ne donne pas. Un mauvais commentaire, c'est un panneau qui dit « ceci est un arbre » devant un arbre bien visible : inutile, et ça encombre la vue.",
        },
        {
          type: "compare",
          bad: {
            title: "Commentaire inutile",
            code: `age = 25  # affecte 25 à age`,
          },
          good: {
            title: "Commentaire utile",
            code: `age = 25  # âge minimum légal pour ce formulaire`,
          },
        },
        { type: "p", text: "Retenez surtout que ces commentaires deviendront un outil bien plus puissant une fois combinés aux fonctions (chapitre 12) et aux classes (chapitre 14), où l'on parle alors de <em>docstring</em> — un commentaire spécial que Python peut afficher automatiquement pour documenter votre code." },
      ],
    },
  ],
};
