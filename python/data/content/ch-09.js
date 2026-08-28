window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["09"] = {
  lead: `Un dictionnaire associe des clés à des valeurs, pour retrouver une information instantanément sans avoir à parcourir toute une liste. C'est l'une des structures les plus puissantes de Python, sans réel équivalent dans le pseudo-code de ce cours.`,
  sections: [
    {
      id: "principe",
      title: "Le principe clé → valeur",
      blocks: [
        {
          type: "callout",
          variant: "tip",
          title: "Analogie : le carnet d'adresses",
          text: "Une liste, c'est une file de personnes numérotées (0, 1, 2…). Un dictionnaire, c'est un carnet d'adresses : on ne cherche pas « la 3e personne », on cherche directement « le numéro de Marie » — la clé (le nom) mène droit à la valeur (le numéro), sans avoir à tout parcourir.",
        },
        {
          type: "code",
          label: "dictionnaire.py",
          lang: "python",
          code: `eleve = {"nom": "Awa", "age": 17, "classe": "Terminale"}
print(eleve["nom"])    # "Awa"
print(eleve["age"])    # 17`,
        },
        { type: "p", text: "Un dictionnaire s'écrit entre accolades <code class=\"inline\">{ }</code>, chaque paire étant écrite <code class=\"inline\">clé: valeur</code>. On accède à une valeur avec des crochets, comme pour une liste, mais en donnant la clé plutôt qu'un indice numérique." },
      ],
    },
    {
      id: "modifier",
      title: "Ajouter, modifier, supprimer",
      blocks: [
        {
          type: "code",
          label: "modifier_dict.py",
          lang: "python",
          code: `eleve = {"nom": "Awa", "age": 17}
eleve["age"] = 18          # modifie une valeur existante
eleve["ville"] = "Dakar"   # ajoute une nouvelle paire clé/valeur
del eleve["ville"]         # supprime la paire "ville"
print(eleve)                # {'nom': 'Awa', 'age': 18}`,
        },
      ],
    },
    {
      id: "erreur-cle",
      title: "Le piège de la clé absente",
      blocks: [
        { type: "p", text: "Accéder à une clé qui n'existe pas provoque une erreur (<code class=\"inline\">KeyError</code>), qui arrête le programme. La méthode <code class=\"inline\">.get()</code> évite ce risque en renvoyant une valeur par défaut si la clé est absente." },
        {
          type: "compare",
          bad: {
            title: "Risque de KeyError",
            code: `eleve = {"nom": "Awa"}
print(eleve["age"])
# KeyError: 'age'`,
          },
          good: {
            title: "Valeur de secours avec .get()",
            code: `eleve = {"nom": "Awa"}
print(eleve.get("age", "non renseigné"))
# non renseigné`,
          },
        },
        { type: "p", text: "Nous verrons au chapitre 13 une autre façon, plus générale, de se protéger de ce type d'erreur : les exceptions." },
      ],
    },
    {
      id: "parcourir",
      title: "Parcourir un dictionnaire",
      blocks: [
        {
          type: "code",
          label: "parcourir_dict.py",
          lang: "python",
          code: `eleve = {"nom": "Awa", "age": 18, "classe": "Terminale"}
for cle, valeur in eleve.items():
    print(cle, ":", valeur)
# nom : Awa
# age : 18
# classe : Terminale`,
        },
        { type: "p", text: "<code class=\"inline\">.items()</code> donne accès simultanément à la clé et à la valeur à chaque tour de boucle — la façon la plus courante de parcourir un dictionnaire." },
      ],
    },
  ],
};
