window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["15"] = [
  {
    type: "qcm",
    prompt: "Qu'est-ce qu'une superglobale en PHP ?",
    options: [
      "Une constante spéciale",
      "Un tableau automatiquement rempli par PHP, accessible partout dans le script",
      "Une fonction mathématique avancée",
      "Un type de boucle",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Une superglobale (comme $_GET, $_POST, $_SERVER) est un tableau associatif spécial que PHP remplit automatiquement, sans avoir à le déclarer, et accessible depuis n'importe quel endroit du script." },
    ],
  },
  {
    type: "qcm",
    prompt: "Que contient $_GET ?",
    options: [
      "Les champs d'un formulaire soumis en POST",
      "Les paramètres présents dans l'URL, après le point d'interrogation",
      "Des informations sur le serveur uniquement",
      "Le contenu d'un fichier",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Si l'URL est page.php?nom=Awa, $_GET contient automatiquement [\"nom\" => \"Awa\"] — sans que le script ait rien eu à faire pour la remplir." },
    ],
  },
  {
    type: "qcm",
    prompt: "Que contient $_POST ?",
    options: [
      "Les paramètres de l'URL",
      "Les données envoyées par un formulaire HTML soumis en méthode POST",
      "Les variables globales du script",
      "La liste des fichiers du serveur",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Quand un formulaire est soumis avec method=\"post\", ses champs se retrouvent dans $_POST, avec pour clé l'attribut name de chaque champ HTML." },
    ],
  },
  {
    type: "qcm",
    lang: "php",
    code: `if (isset($_GET["nom"])) {
    echo "Bonjour, " . $_GET["nom"];
} else {
    echo "Bonjour, visiteur";
}`,
    prompt: "À quoi sert isset() dans ce code ?",
    options: [
      "À afficher la valeur directement",
      "À vérifier qu'une clé existe avant d'y accéder, pour éviter une Notice",
      "À supprimer la variable",
      "À convertir le type de la variable",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Rien ne garantit qu'un visiteur ait fourni le paramètre \"nom\" dans l'URL. isset() vérifie sa présence avant tout accès, évitant une Notice de clé indéfinie — le même principe que .get() sur un dictionnaire Python." },
    ],
  },
  {
    type: "qcm",
    prompt: "Pourquoi les superglobales sont-elles particulièrement caractéristiques de PHP, par rapport aux autres langages de ce cours ?",
    options: [
      "Elles n'ont rien de spécial, on les retrouve identiques partout",
      "Elles reflètent la vocation d'origine de PHP : dialoguer directement avec un navigateur web",
      "Elles n'existent que depuis la toute dernière version de PHP",
      "Elles remplacent complètement les variables classiques",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Contrairement à l'Algorithmique, au C ou à Python (langages généralistes), PHP a été conçu spécifiquement pour le web — les superglobales sont le mécanisme qui permet à un script PHP de recevoir automatiquement les informations envoyées par un visiteur." },
    ],
  },
  {
    type: "qcm",
    prompt: "Dans un attribut HTML <code class=\"inline\">&lt;input type=\"text\" name=\"pseudo\"&gt;</code>, quelle clé PHP permettra de récupérer sa valeur après soumission en POST ?",
    options: ["<code class=\"inline\">$_POST[\"text\"]</code>", "<code class=\"inline\">$_POST[\"pseudo\"]</code>", "<code class=\"inline\">$_POST[\"input\"]</code>", "<code class=\"inline\">$_GET[\"pseudo\"]</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "C'est l'attribut name de chaque champ HTML qui devient la clé dans $_POST — ici \"pseudo\", pas le type du champ ni la balise elle-même." },
    ],
  },
  {
    type: "vraifaux",
    prompt: "Vrai ou faux : il faut déclarer explicitement $_GET et $_POST avant de pouvoir les utiliser, comme n'importe quelle autre variable.",
    options: ["Vrai", "Faux"],
    correct: 1,
    explain: [
      { type: "p", text: "Faux. C'est justement ce qui fait d'elles des superglobales : PHP les remplit et les rend disponibles automatiquement, sans aucune déclaration préalable de votre part." },
    ],
  },
];
