window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["14"] = [
  {
    type: "qcm",
    prompt: "Quel mot-clé permet de définir une classe en PHP ?",
    options: ["<code class=\"inline\">class</code>", "<code class=\"inline\">function</code>", "<code class=\"inline\">object</code>", "<code class=\"inline\">struct</code>"],
    correct: 0,
    explain: [
      { type: "p", text: "class introduit la définition d'une nouvelle classe, comme en Python." },
    ],
  },
  {
    type: "qcm",
    prompt: "À quoi sert la méthode __construct ?",
    options: [
      "Elle affiche le contenu de l'objet",
      "C'est le constructeur : elle s'exécute automatiquement à la création de chaque nouvel objet",
      "Elle détruit l'objet",
      "Elle n'a aucune utilité particulière",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "__construct est appelée automatiquement lors de la création d'un objet avec new — l'équivalent PHP direct du __init__ de Python." },
    ],
  },
  {
    type: "qcm",
    prompt: "Que représente $this dans une méthode de classe PHP ?",
    options: [
      "Le nom de la classe elle-même",
      "L'objet en cours d'utilisation, sur lequel la méthode a été appelée",
      "Un mot-clé sans signification particulière",
      "La dernière valeur renvoyée",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "$this représente l'instance elle-même — l'équivalent PHP direct du self de Python." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quel mot-clé crée un nouvel objet à partir d'une classe ?",
    options: ["<code class=\"inline\">create</code>", "<code class=\"inline\">new</code>", "<code class=\"inline\">make</code>", "<code class=\"inline\">instance</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "new Personne(\"Awa\", 18) crée un nouvel objet (une instance) de la classe Personne, en appelant automatiquement son constructeur." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quel opérateur utilise-t-on pour accéder à une propriété ou une méthode d'un objet en PHP ?",
    options: ["Un point <code class=\"inline\">.</code>", "Une flèche <code class=\"inline\">-&gt;</code>", "Deux points <code class=\"inline\">:</code>", "Un dollar <code class=\"inline\">$</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "PHP réserve le point à la concaténation de texte : pour accéder à un membre d'objet, on utilise la flèche ->, par exemple $awa->nom." },
    ],
  },
  {
    type: "trace",
    lang: "php",
    code: `class Personne {
    public $nom;
    public $age;
    public function __construct($nom, $age) {
        $this->nom = $nom;
        $this->age = $age;
    }
}

$awa = new Personne("Awa", 18);
$karim = new Personne("Karim", 20);
echo $awa->nom . " " . $karim->age;`,
    prompt: "Que va afficher ce code ?",
    options: ["Awa 20", "Karim 18", "Awa Karim", "18 20"],
    correct: 0,
    explain: [
      { type: "p", text: "$awa et $karim sont deux objets indépendants avec leurs propres propriétés. $awa->nom vaut \"Awa\", $karim->age vaut 20 : le code affiche \"Awa 20\"." },
    ],
  },
  {
    type: "vraifaux",
    prompt: "Vrai ou faux : deux objets créés à partir de la même classe PHP partagent obligatoirement les mêmes valeurs de propriétés.",
    options: ["Vrai", "Faux"],
    correct: 1,
    explain: [
      { type: "p", text: "Faux. Chaque objet possède ses propres valeurs de propriétés, indépendantes des autres objets créés à partir de la même classe — comme deux gâteaux issus du même moule peuvent avoir des parfums différents." },
    ],
  },
];
