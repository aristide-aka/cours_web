window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["10"] = {
  lead: `print() a déjà été utilisé dans presque tous les exemples de ce cours. Ce chapitre l'approfondit, puis présente input(), qui permet à un programme Python de dialoguer avec son utilisateur — l'équivalent du couple Écrire/Lire du pseudo-code.`,
  sections: [
    {
      id: "print-approfondi",
      title: "print(), en détail",
      blocks: [
        { type: "p", text: "<code class=\"inline\">print()</code> accepte plusieurs valeurs séparées par des virgules, qu'il affiche à la suite, séparées automatiquement par un espace." },
        {
          type: "code",
          label: "print_detail.py",
          lang: "python",
          code: `nom = "Awa"
age = 18
print("Nom :", nom, "- Âge :", age)
# Nom : Awa - Âge : 18`,
        },
        { type: "p", text: "On peut personnaliser le séparateur avec <code class=\"inline\">sep</code>, ou ce qui est affiché en fin de ligne avec <code class=\"inline\">end</code> (par défaut, un retour à la ligne) :" },
        {
          type: "code",
          label: "print_options.py",
          lang: "python",
          code: `print("pomme", "poire", sep=", ")   # pomme, poire
print("Chargement", end="...")
print("terminé")
# Chargement...terminé`,
        },
      ],
    },
    {
      id: "input",
      title: "input() : récupérer une saisie",
      blocks: [
        {
          type: "translate",
          rightLang: "python",
          labelLeft: "Pseudo-code",
          labelRight: "Python",
          left: `Variable Nom en Caractère
Début
  Écrire "Quel est votre nom ? "
  Lire Nom
  Écrire "Bonjour, ", Nom
Fin`,
          right: `nom = input("Quel est votre nom ? ")
print("Bonjour,", nom)`,
        },
        { type: "p", text: "<code class=\"inline\">input()</code> affiche le message qu'on lui passe, met le programme en pause, puis renvoie ce que l'utilisateur a tapé une fois qu'il presse Entrée." },
        {
          type: "callout",
          variant: "pitfall",
          title: "input() renvoie toujours du texte",
          text: "Quelle que soit la saisie, input() renvoie systématiquement une chaîne de caractères (str) — jamais un nombre. Pour faire un calcul avec la valeur saisie, il faut la convertir explicitement avec int() ou float().",
        },
        {
          type: "code",
          label: "input_nombre.py",
          lang: "python",
          code: `age_texte = input("Quel âge avez-vous ? ")
age = int(age_texte)          # conversion en entier
print("Dans 10 ans, vous aurez", age + 10, "ans")`,
        },
      ],
    },
  ],
};
