window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["06"] = {
  lead: `Comme en pseudo-code et en C, un programme Python peut prendre des décisions. La syntaxe est plus légère : pas de FinSi, pas d'accolades — seulement des deux-points et de l'indentation.`,
  sections: [
    {
      id: "if-elif-else",
      title: "if, elif, else",
      blocks: [
        {
          type: "translate",
          rightLang: "python",
          labelLeft: "Pseudo-code",
          labelRight: "Python",
          left: `Si Age > 2 Alors
  Écrire "Plus grand que 2"
SinonSi Age < 2 Alors
  Écrire "Plus petit que 2"
Sinon
  Écrire "Égal à 2"
FinSi`,
          right: `if age > 2:
    print("Plus grand que 2")
elif age < 2:
    print("Plus petit que 2")
else:
    print("Égal à 2")`,
        },
        {
          type: "callout",
          variant: "pitfall",
          title: "elif, pas \"else if\"",
          text: "Python utilise le mot-clé unique <code class=\"inline\">elif</code> (contraction de « else if »). Écrire <code class=\"inline\">else if</code> en deux mots provoque une erreur de syntaxe.",
        },
      ],
    },
    {
      id: "truthy-falsy",
      title: "Les valeurs \"vraies\" et \"fausses\"",
      blocks: [
        { type: "p", text: "Dans un <code class=\"inline\">if</code>, Python accepte aussi des valeurs qui ne sont pas des booléens : il les convertit implicitement. Sont considérées comme fausses : <code class=\"inline\">0</code>, <code class=\"inline\">0.0</code>, la chaîne vide <code class=\"inline\">\"\"</code>, la liste vide <code class=\"inline\">[]</code>, et <code class=\"inline\">None</code> (l'équivalent Python de « rien »). Tout le reste est considéré comme vrai." },
        {
          type: "code",
          label: "truthy.py",
          lang: "python",
          code: `nom = ""
if nom:
    print("Un nom a été saisi")
else:
    print("Le nom est vide")   # ceci s'affiche : "" est fausse`,
        },
      ],
    },
    {
      id: "comparaisons-chainees",
      title: "Bonus : les comparaisons enchaînées",
      blocks: [
        { type: "p", text: "Particularité élégante de Python : on peut enchaîner les comparaisons comme en mathématiques, sans répéter la variable centrale." },
        {
          type: "translate",
          rightLang: "python",
          labelLeft: "Pseudo-code",
          labelRight: "Python",
          left: `Si X > 0 ET X < 10 Alors
  Écrire "Entre 0 et 10"
FinSi`,
          right: `if 0 < x < 10:
    print("Entre 0 et 10")`,
        },
      ],
    },
    {
      id: "ternaire",
      title: "Bonus : l'expression conditionnelle en une ligne",
      blocks: [
        { type: "p", text: "Pour un choix simple entre deux valeurs, Python propose une écriture compacte, dite « ternaire » — pratique, mais à réserver aux cas vraiment simples pour ne pas nuire à la lisibilité." },
        {
          type: "code",
          label: "ternaire.py",
          lang: "python",
          code: `age = 20
statut = "majeur" if age >= 18 else "mineur"
print(statut)   # "majeur"`,
        },
      ],
    },
  ],
};
