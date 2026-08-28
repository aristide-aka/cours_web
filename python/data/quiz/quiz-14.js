window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["14"] = [
  {
    type: "qcm",
    prompt: "Dans l'analogie du moule à gâteau, à quoi correspond la classe elle-même ?",
    options: ["À un gâteau déjà cuit", "Au moule, qui définit une forme mais n'est pas un gâteau", "Aux ingrédients", "Au four"],
    correct: 1,
    explain: [
      { type: "p", text: "La classe est le moule : un modèle qui définit une structure commune. Chaque objet créé à partir d'elle (chaque instance) est comme un gâteau individuel, produit à partir de ce moule, avec ses propres données." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quel mot-clé permet de définir une classe en Python ?",
    options: ["<code class=\"inline\">class</code>", "<code class=\"inline\">def</code>", "<code class=\"inline\">object</code>", "<code class=\"inline\">new</code>"],
    correct: 0,
    explain: [
      { type: "p", text: "class introduit la définition d'une nouvelle classe, suivi de son nom et des deux-points annonçant son corps indenté." },
    ],
  },
  {
    type: "qcm",
    prompt: "À quoi sert la méthode __init__ ?",
    options: [
      "Elle affiche le contenu de l'objet",
      "C'est le constructeur : elle s'exécute automatiquement à la création de chaque nouvel objet",
      "Elle supprime l'objet",
      "Elle n'a aucune utilité particulière",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "__init__ est une méthode spéciale, automatiquement appelée lorsqu'on crée un nouvel objet à partir de la classe — c'est l'endroit habituel pour initialiser les attributs de cet objet." },
    ],
  },
  {
    type: "qcm",
    prompt: "Que représente self dans une méthode de classe ?",
    options: [
      "Le nom de la classe elle-même",
      "L'objet en cours d'utilisation, sur lequel la méthode a été appelée",
      "Un mot-clé réservé sans signification réelle",
      "La dernière valeur renvoyée par la méthode précédente",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "self représente l'instance elle-même — l'objet précis sur lequel la méthode a été appelée. C'est pourquoi self.nom peut donner des valeurs différentes selon l'objet concerné." },
    ],
  },
  {
    type: "trace",
    lang: "python",
    code: `class Personne:
    def __init__(self, nom, age):
        self.nom = nom
        self.age = age

awa = Personne("Awa", 18)
karim = Personne("Karim", 20)
print(awa.nom, karim.age)`,
    prompt: "Que va afficher ce code ?",
    options: ["Awa 20", "Karim 18", "Awa Karim", "18 20"],
    correct: 0,
    explain: [
      { type: "p", text: "awa et karim sont deux objets (instances) indépendants, chacun avec ses propres attributs. awa.nom vaut \"Awa\", karim.age vaut 20 : le code affiche donc \"Awa 20\"." },
    ],
  },
  {
    type: "qcm",
    prompt: "Comment appelle-t-on awa.se_presenter() sans jamais lui passer explicitement self ?",
    options: [
      "Ce n'est pas possible, il faut toujours écrire awa.se_presenter(awa)",
      "Python fournit automatiquement self : c'est l'objet à gauche du point (awa)",
      "self prend toujours la valeur None dans ce cas",
      "Il faut utiliser un mot-clé spécial appelé this",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Bien que self soit déclaré comme premier paramètre de chaque méthode, Python le fournit automatiquement à l'appel : awa.se_presenter() transmet implicitement awa comme valeur de self." },
    ],
  },
  {
    type: "vraifaux",
    prompt: "Vrai ou faux : deux objets créés à partir de la même classe partagent obligatoirement les mêmes valeurs d'attributs.",
    options: ["Vrai", "Faux"],
    correct: 1,
    explain: [
      { type: "p", text: "Faux. Chaque objet (instance) possède ses propres attributs, indépendants des autres objets créés à partir de la même classe — comme deux gâteaux issus du même moule peuvent avoir des parfums différents." },
    ],
  },
];
