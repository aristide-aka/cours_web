window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["01"] = {
  lead: `PHP est le langage historique du web dynamique : il fait tourner une immense partie des sites que vous visitez chaque jour. Ce chapitre explique ce qui rend PHP particulier, et comment écrire et exécuter votre tout premier script.`,
  sections: [
    {
      id: "quest-ce-que-php",
      title: "Qu'est-ce que PHP ?",
      blocks: [
        { type: "p", text: "PHP (PHP: Hypertext Preprocessor) est un langage <strong>interprété</strong>, comme Python, conçu à l'origine pour générer des pages web qui réagissent à leur visiteur — un formulaire rempli, un panier d'achat, un compte utilisateur." },
        {
          type: "callout",
          variant: "tip",
          title: "Analogie : le serveur en cuisine",
          text: "Un site 100% HTML est comme un plat déjà préparé et figé sur une étagère : tout le monde reçoit exactement la même chose. PHP, c'est le cuisinier en cuisine qui prépare le plat à la demande, au moment où le client (votre navigateur) passe commande — chaque visiteur peut recevoir une page légèrement différente.",
        },
        { type: "p", text: "Concrètement, du code PHP s'exécute sur un serveur, et c'est le résultat déjà transformé en HTML classique qui est envoyé à votre navigateur — celui-ci ne voit jamais le code PHP lui-même." },
      ],
    },
    {
      id: "balises",
      title: "Les balises <?php ?>",
      blocks: [
        { type: "p", text: "Tout code PHP doit être placé entre les balises <code class=\"inline\">&lt;?php</code> et <code class=\"inline\">?&gt;</code>. En dehors de ces balises, le contenu d'un fichier .php est traité comme du HTML brut, envoyé tel quel." },
        {
          type: "code",
          label: "bonjour.php",
          lang: "php",
          code: `<!DOCTYPE html>
<html>
<body>
    <p><?php echo "Bonjour, le monde !"; ?></p>
</body>
</html>`,
        },
        { type: "p", text: "<code class=\"inline\">echo</code> affiche du texte — nous y reviendrons en détail au chapitre 5. Chaque instruction PHP se termine par un point-virgule <code class=\"inline\">;</code>, exactement comme en C." },
      ],
    },
    {
      id: "cli",
      title: "Exécuter un script depuis un terminal",
      blocks: [
        { type: "p", text: "Pour ce cours, plutôt que de passer par un serveur web complet, on exécute PHP directement en ligne de commande (CLI), ce qui suffit amplement pour apprendre le langage." },
        {
          type: "code",
          label: "bonjour.php",
          lang: "php",
          code: `<?php
echo "Bonjour, le monde !";`,
        },
        {
          type: "code",
          label: "terminal",
          lang: "php",
          code: `$ php bonjour.php
Bonjour, le monde !`,
        },
        {
          type: "callout",
          variant: "info",
          title: "Vérifier son installation",
          text: "Comme pour Python, on vérifie que PHP est bien installé avec <code class=\"inline\">php --version</code> dans un terminal.",
        },
      ],
    },
  ],
};
