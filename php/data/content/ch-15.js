window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["15"] = {
  lead: `Dernier chapitre de ce parcours : ce qui rend PHP réellement unique par rapport aux autres langages de ce cours — sa capacité à dialoguer directement avec un navigateur web, via des tableaux automatiquement remplis appelés superglobales.`,
  sections: [
    {
      id: "principe",
      title: "Le principe des superglobales",
      blocks: [
        { type: "p", text: "Une superglobale est un tableau associatif spécial, automatiquement rempli par PHP, accessible depuis n'importe quel endroit du script sans rien avoir à déclarer. Les plus utilisées permettent de récupérer les informations envoyées par le navigateur d'un visiteur." },
        {
          type: "table",
          headers: ["Superglobale", "Contenu"],
          rows: [
            ["<code class=\"inline\">$_GET</code>", "Les paramètres présents dans l'URL (après le ?)"],
            ["<code class=\"inline\">$_POST</code>", "Les données envoyées par un formulaire HTML soumis en méthode POST"],
            ["<code class=\"inline\">$_SERVER</code>", "Des informations sur le serveur et la requête en cours"],
          ],
        },
      ],
    },
    {
      id: "get",
      title: "$_GET : lire l'URL",
      blocks: [
        { type: "p", text: "Si un visiteur accède à <code class=\"inline\">page.php?nom=Awa</code>, PHP remplit automatiquement <code class=\"inline\">$_GET</code> avec cette information." },
        {
          type: "code",
          label: "page.php",
          lang: "php",
          code: `<?php
if (isset($_GET["nom"])) {
    echo "Bonjour, " . $_GET["nom"];
} else {
    echo "Bonjour, visiteur";
}`,
        },
        {
          type: "callout",
          variant: "tip",
          title: "isset() avant tout accès",
          text: "Rien ne garantit qu'un visiteur ait bien fourni le paramètre attendu dans l'URL. isset() vérifie qu'une clé existe avant d'y accéder, évitant ainsi une Notice — le même principe que .get() sur un dictionnaire Python (module Python, chapitre 9).",
        },
      ],
    },
    {
      id: "post",
      title: "$_POST : lire un formulaire",
      blocks: [
        { type: "p", text: "Quand un formulaire HTML est soumis avec <code class=\"inline\">method=\"post\"</code>, ses champs se retrouvent dans <code class=\"inline\">$_POST</code>, avec pour clé l'attribut <code class=\"inline\">name</code> de chaque champ." },
        {
          type: "code",
          label: "formulaire.html",
          lang: "php",
          code: `<form method="post" action="traitement.php">
    <input type="text" name="pseudo">
    <button type="submit">Envoyer</button>
</form>`,
        },
        {
          type: "code",
          label: "traitement.php",
          lang: "php",
          code: `<?php
$pseudo = $_POST["pseudo"] ?? "anonyme";
echo "Bienvenue, " . $pseudo;`,
        },
      ],
    },
    {
      id: "conclusion",
      title: "Le mot de la fin",
      blocks: [
        { type: "p", text: "Ce chapitre boucle la boucle amorcée dès le premier chapitre : PHP n'est pas qu'un langage de calcul comme les autres — c'est un langage pensé pour recevoir une requête d'un visiteur, la traiter, et renvoyer une réponse. Tout ce que vous avez appris (variables, conditions, boucles, tableaux, fonctions, classes) prend tout son sens combiné à ces superglobales, la brique qui relie votre code au monde extérieur du web." },
      ],
    },
  ],
};
