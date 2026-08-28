window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["14"] = {
  lead: `Dernier chapitre de ce parcours : un premier pas vers la programmation orientée objet. Une classe est un modèle qui décrit à la fois des données et les actions qu'on peut effectuer sur elles, regroupées sous un même nom.`,
  sections: [
    {
      id: "analogie",
      title: "Analogie : le moule à gâteau",
      blocks: [
        {
          type: "callout",
          variant: "tip",
          title: "Un moule, et les gâteaux qu'il produit",
          text: "Une classe, c'est comme un moule à gâteau : il définit une forme, mais n'est pas lui-même un gâteau. Chaque gâteau réellement cuit à partir de ce moule est une instance de la classe — un objet concret, avec ses propres ingrédients (données), mais qui suit toujours la même forme (le comportement défini par la classe).",
        },
      ],
    },
    {
      id: "definir-classe",
      title: "Définir une classe",
      blocks: [
        {
          type: "code",
          label: "classe_simple.py",
          lang: "python",
          code: `class Personne:
    def __init__(self, nom, age):
        self.nom = nom
        self.age = age

    def se_presenter(self):
        print("Je m'appelle", self.nom, "et j'ai", self.age, "ans")`,
        },
        {
          type: "table",
          headers: ["Élément", "Rôle"],
          rows: [
            ["<code class=\"inline\">class Personne:</code>", "Déclare une nouvelle classe nommée Personne"],
            ["<code class=\"inline\">__init__</code>", "Le constructeur : une fonction spéciale exécutée automatiquement à la création de chaque nouvel objet"],
            ["<code class=\"inline\">self</code>", "Représente l'objet en cours d'utilisation lui-même — toujours le premier paramètre d'une méthode"],
            ["<code class=\"inline\">self.nom</code>", "Un attribut : une donnée propre à chaque objet créé à partir de cette classe"],
          ],
        },
      ],
    },
    {
      id: "instances",
      title: "Créer des objets (instances)",
      blocks: [
        {
          type: "code",
          label: "instances.py",
          lang: "python",
          code: `awa = Personne("Awa", 18)
karim = Personne("Karim", 20)

awa.se_presenter()     # Je m'appelle Awa et j'ai 18 ans
karim.se_presenter()   # Je m'appelle Karim et j'ai 20 ans

print(awa.nom)          # Awa`,
        },
        { type: "p", text: "Chaque appel à <code class=\"inline\">Personne(...)</code> crée un nouvel objet indépendant, avec ses propres valeurs pour <code class=\"inline\">nom</code> et <code class=\"inline\">age</code> — exactement comme deux gâteaux issus du même moule peuvent avoir des parfums différents." },
        {
          type: "callout",
          variant: "pitfall",
          title: "self n'est jamais passé explicitement à l'appel",
          text: "Bien que self soit le premier paramètre déclaré dans __init__ et se_presenter, on ne l'écrit jamais lors de l'appel (<code class=\"inline\">awa.se_presenter()</code>, pas <code class=\"inline\">awa.se_presenter(awa)</code>) — Python le fournit automatiquement, c'est l'objet à gauche du point.",
        },
      ],
    },
    {
      id: "pour-aller-plus-loin",
      title: "Pour aller plus loin",
      blocks: [
        { type: "p", text: "Les classes constituent tout un pan de la programmation Python (héritage, méthodes spéciales, encapsulation…) qui dépasse le cadre de ce cours d'introduction. Vous disposez maintenant des bases pour explorer ces notions plus avancées dans le document source complet de ce module." },
      ],
    },
  ],
};
