window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["12"] = {
  lead: `Une fonction regroupe une série d'instructions sous un nom, pour les réutiliser sans les réécrire. C'est le même principe que la Fonction du pseudo-code, avec une syntaxe bien plus légère.`,
  sections: [
    {
      id: "def",
      title: "Définir et appeler une fonction",
      blocks: [
        {
          type: "translate",
          rightLang: "python",
          labelLeft: "Pseudo-code",
          labelRight: "Python",
          left: `Fonction Saluer()
  Écrire "Bonjour !"
FinFonction`,
          right: `def saluer():
    print("Bonjour !")

saluer()   # on appelle la fonction pour l'exécuter`,
        },
        { type: "p", text: "<code class=\"inline\">def</code> introduit la définition d'une fonction. Comme pour <code class=\"inline\">if</code> ou <code class=\"inline\">while</code>, les deux-points et l'indentation délimitent son corps. Définir une fonction ne l'exécute pas : il faut l'<strong>appeler</strong> ensuite par son nom suivi de parenthèses." },
      ],
    },
    {
      id: "parametres",
      title: "Paramètres et valeurs par défaut",
      blocks: [
        {
          type: "code",
          label: "parametres.py",
          lang: "python",
          code: `def saluer(prenom):
    print("Bonjour,", prenom)

saluer("Awa")   # Bonjour, Awa`,
        },
        { type: "p", text: "On peut donner une <strong>valeur par défaut</strong> à un paramètre : il devient alors facultatif à l'appel." },
        {
          type: "code",
          label: "valeur_par_defaut.py",
          lang: "python",
          code: `def saluer(prenom, message="Bonjour"):
    print(message + ",", prenom)

saluer("Awa")                 # Bonjour, Awa
saluer("Awa", "Bienvenue")     # Bienvenue, Awa`,
        },
      ],
    },
    {
      id: "return",
      title: "Renvoyer un résultat avec return",
      blocks: [
        { type: "p", text: "Comme <code class=\"inline\">Renvoyer</code> en pseudo-code, <code class=\"inline\">return</code> transmet une valeur au code appelant et arrête immédiatement l'exécution de la fonction." },
        {
          type: "code",
          label: "return.py",
          lang: "python",
          code: `def carre(x):
    return x * x

resultat = carre(5)
print(resultat)   # 25`,
        },
        {
          type: "callout",
          variant: "pitfall",
          title: "Sans return, une fonction renvoie None",
          text: "Contrairement au pseudo-code qui distingue Fonction (avec Renvoyer) et Procédure (sans), Python n'a qu'une seule notion : la fonction. Une fonction sans return se comporte comme une procédure — elle renvoie simplement la valeur spéciale None.",
        },
      ],
    },
    {
      id: "portee",
      title: "Portée : variable locale et globale",
      blocks: [
        { type: "p", text: "Une variable créée à l'intérieur d'une fonction (une variable <strong>locale</strong>) n'existe que pendant l'exécution de cette fonction, et disparaît ensuite — elle n'est pas visible depuis l'extérieur." },
        {
          type: "code",
          label: "portee.py",
          lang: "python",
          code: `def calcul():
    resultat = 42   # variable locale à calcul()
    return resultat

calcul()
print(resultat)   # NameError : resultat n'existe pas ici`,
        },
      ],
    },
  ],
};
