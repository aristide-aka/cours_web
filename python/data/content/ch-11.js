window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["11"] = {
  lead: `Toutes les données manipulées jusqu'ici disparaissent à la fin du programme. Pour les conserver durablement, il faut les écrire dans un fichier sur le disque — et pour les récupérer plus tard, les relire.`,
  sections: [
    {
      id: "with-open",
      title: "Ouvrir un fichier avec open() et with",
      blocks: [
        {
          type: "translate",
          rightLang: "python",
          labelLeft: "Pseudo-code",
          labelRight: "Python",
          left: `Ouvrir "notes.txt" sur 1 en Lecture
...
Fermer 1`,
          right: `with open("notes.txt", "r") as fichier:
    ...
# le fichier est refermé automatiquement ici`,
        },
        { type: "p", text: "Le mot-clé <code class=\"inline\">with</code> garantit que le fichier sera <strong>automatiquement refermé</strong> à la sortie du bloc indenté, même si une erreur survient entre-temps. C'est la façon recommandée d'ouvrir un fichier en Python — plus sûre qu'un Fermer explicite qu'on pourrait oublier." },
        {
          type: "table",
          headers: ["Mode", "Effet"],
          rows: [
            ["<code class=\"inline\">\"r\"</code>", "Lecture seule (le fichier doit déjà exister)"],
            ["<code class=\"inline\">\"w\"</code>", "Écriture — crée le fichier, ou écrase tout contenu existant"],
            ["<code class=\"inline\">\"a\"</code>", "Ajout à la fin du fichier existant, sans l'écraser"],
          ],
        },
      ],
    },
    {
      id: "lire",
      title: "Lire le contenu d'un fichier",
      blocks: [
        {
          type: "code",
          label: "lire_fichier.py",
          lang: "python",
          code: `with open("notes.txt", "r") as fichier:
    for ligne in fichier:
        print(ligne.strip())   # .strip() retire le retour à la ligne final`,
        },
        { type: "p", text: "<code class=\"inline\">for ligne in fichier</code> parcourt le fichier une ligne à la fois — le motif le plus courant, et l'équivalent Python direct du <code class=\"inline\">TantQue Non EOF(1)</code> du pseudo-code." },
        { type: "p", text: "Pour tout récupérer d'un coup, deux autres méthodes existent : <code class=\"inline\">fichier.read()</code> renvoie le contenu entier sous forme d'une seule chaîne, et <code class=\"inline\">fichier.readlines()</code> renvoie une liste où chaque élément est une ligne." },
      ],
    },
    {
      id: "ecrire",
      title: "Écrire dans un fichier",
      blocks: [
        {
          type: "code",
          label: "ecrire_fichier.py",
          lang: "python",
          code: `with open("notes.txt", "w") as fichier:
    fichier.write("12\\n")
    fichier.write("15\\n")
    fichier.write("9\\n")`,
        },
        {
          type: "callout",
          variant: "warn",
          title: "\\n n'est pas automatique",
          text: "Contrairement à print(), write() n'ajoute jamais de retour à la ligne automatique : il faut l'inclure vous-même avec <code class=\"inline\">\\n</code> à la fin de chaque ligne écrite.",
        },
      ],
    },
  ],
};
