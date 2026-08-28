window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["14"] = {
  lead: `Dernier grand concept de ce parcours : la programmation orientée objet. Une classe est un modèle qui décrit à la fois des données et les actions qu'on peut effectuer sur elles.`,
  sections: [
    {
      id: "analogie",
      title: "Analogie : le moule à gâteau",
      blocks: [
        {
          type: "callout",
          variant: "tip",
          title: "Un moule, et les gâteaux qu'il produit",
          text: "Une classe, c'est comme un moule à gâteau : elle définit une forme, sans être elle-même un gâteau. Chaque objet créé à partir d'elle (chaque instance) est un gâteau bien réel, avec ses propres ingrédients, mais toujours conforme à la forme du moule.",
        },
      ],
    },
    {
      id: "definir-classe",
      title: "Définir une classe",
      blocks: [
        {
          type: "code",
          label: "classe_simple.php",
          lang: "php",
          code: `<?php
class Personne {
    public $nom;
    public $age;

    public function __construct($nom, $age) {
        $this->nom = $nom;
        $this->age = $age;
    }

    public function sePresenter() {
        echo "Je m'appelle " . $this->nom . " et j'ai " . $this->age . " ans";
    }
}`,
        },
        {
          type: "table",
          headers: ["Élément", "Rôle"],
          rows: [
            ["<code class=\"inline\">class Personne {</code>", "Déclare une nouvelle classe nommée Personne"],
            ["<code class=\"inline\">public $nom;</code>", "Déclare une propriété (une donnée que chaque objet possédera)"],
            ["<code class=\"inline\">__construct</code>", "Le constructeur : une méthode spéciale exécutée automatiquement à la création de chaque nouvel objet"],
            ["<code class=\"inline\">$this</code>", "Représente l'objet en cours d'utilisation lui-même — l'équivalent PHP du self de Python"],
          ],
        },
      ],
    },
    {
      id: "instances",
      title: "Créer des objets avec new",
      blocks: [
        {
          type: "code",
          label: "instances.php",
          lang: "php",
          code: `<?php
$awa = new Personne("Awa", 18);
$karim = new Personne("Karim", 20);

$awa->sePresenter();     // Je m'appelle Awa et j'ai 18 ans
echo "\\n";
$karim->sePresenter();   // Je m'appelle Karim et j'ai 20 ans

echo $awa->nom;           // Awa`,
        },
        { type: "p", text: "Le mot-clé <code class=\"inline\">new</code> crée un nouvel objet à partir de la classe. On accède ensuite à ses propriétés et méthodes avec la flèche <code class=\"inline\">-&gt;</code>, plutôt qu'avec un simple point comme en Python." },
        {
          type: "callout",
          variant: "pitfall",
          title: "-> et non . pour accéder à un membre d'objet",
          text: "PHP réserve le point . à la concaténation de texte (chapitre 5) : pour accéder à une propriété ou une méthode d'objet, il faut impérativement utiliser la flèche ->.",
        },
      ],
    },
  ],
};
