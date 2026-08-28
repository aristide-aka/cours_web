window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["03"] = {
  lead: `C'est la particularité la plus célèbre de Python, et celle qui surprend le plus quand on vient d'un autre langage : il n'y a ni accolades { }, ni mots-clés comme FinSi. C'est l'espacement du texte lui-même qui structure le programme.`,
  sections: [
    {
      id: "principe",
      title: "L'indentation délimite les blocs",
      blocks: [
        { type: "p", text: "En C, un bloc d'instructions est délimité par des accolades <code class=\"inline\">{ }</code>. En pseudo-code, on utilise des mots-clés comme <code class=\"inline\">FinSi</code>. En Python, c'est <strong>l'indentation</strong> — le décalage vers la droite — qui indique quelles lignes appartiennent à quel bloc." },
        {
          type: "callout",
          variant: "tip",
          title: "Analogie : un plan détaillé",
          text: "Pensez à un sommaire de document avec des sous-parties décalées (1, puis 1.1, puis 1.1.1…). Le simple décalage suffit à montrer ce qui appartient à quoi, sans avoir besoin d'écrire « fin de la partie 1.1 ». Python applique exactement ce principe à son code.",
        },
        { type: "p", text: "Voici un exemple utilisant <code class=\"inline\">if</code>, que vous découvrirez en détail au chapitre 6 — concentrez-vous ici uniquement sur l'indentation, pas sur ce que fait le code :" },
        {
          type: "code",
          label: "indentation.py",
          lang: "python",
          code: `age = 20
if age >= 18:
    print("Majeur")
    print("Vous pouvez voter")
else:
    print("Mineur")
print("Fin du programme")`,
        },
        { type: "p", text: "Les deux lignes indentées sous <code class=\"inline\">if age >= 18:</code> forment un même bloc : elles ne s'exécutent que si la condition est vraie. La dernière ligne, revenue au niveau de gauche, ne fait plus partie d'aucun bloc et s'exécute donc toujours." },
      ],
    },
    {
      id: "regle",
      title: "La règle : 4 espaces, toujours les mêmes",
      blocks: [
        {
          type: "list",
          items: [
            "La convention universelle en Python est d'indenter avec <strong>4 espaces</strong> par niveau.",
            "Il ne faut <strong>jamais mélanger tabulations et espaces</strong> dans un même fichier : cela provoque une erreur.",
            "Toute ligne se terminant par <code class=\"inline\">:</code> (après if, else, while, for, def…) annonce le début d'un nouveau bloc indenté à la ligne suivante.",
          ],
        },
        {
          type: "callout",
          variant: "pitfall",
          title: "IndentationError",
          text: "Si l'indentation d'une ligne ne correspond à aucun niveau cohérent, Python refuse d'exécuter le programme et affiche une <code class=\"inline\">IndentationError</code>. Contrairement au C, ce n'est jamais une simple question d'esthétique : c'est une erreur bloquante.",
        },
      ],
    },
    {
      id: "erreurs",
      title: "Erreurs classiques",
      blocks: [
        {
          type: "compare",
          bad: {
            title: "Rien après le :",
            code: `if True:
print("Erreur !")
# IndentationError : la ligne après ':' doit être indentée`,
          },
          good: {
            title: "Correctement indenté",
            code: `if True:
    print("Correct")`,
          },
        },
        { type: "p", text: "Une erreur plus sournoise encore : une ligne mal désindentée qui change discrètement le sens du programme sans provoquer d'erreur visible. C'est pourquoi un bon éditeur de code (qui affiche les indentations) est un allié précieux en Python." },
      ],
    },
  ],
};
