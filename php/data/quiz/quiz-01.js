window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["01"] = [
  {
    type: "qcm",
    prompt: "Pour quoi PHP a-t-il été conçu à l'origine ?",
    options: ["Le calcul scientifique", "Générer des pages web dynamiques, qui réagissent au visiteur", "La création de jeux vidéo", "La gestion de bases de données uniquement"],
    correct: 1,
    explain: [
      { type: "p", text: "PHP (PHP: Hypertext Preprocessor) a été conçu pour le web dynamique : un script PHP s'exécute sur un serveur et génère une page HTML qui peut varier selon le visiteur ou ses actions." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quelles balises délimitent le code PHP à l'intérieur d'un fichier .php ?",
    options: ["<code class=\"inline\">&lt;script&gt; ... &lt;/script&gt;</code>", "<code class=\"inline\">&lt;?php ... ?&gt;</code>", "<code class=\"inline\">{{ ... }}</code>", "<code class=\"inline\">#!/php ...</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "Tout code PHP doit être encadré par &lt;?php et ?&gt;. En dehors de ces balises, le contenu du fichier est traité comme du HTML brut." },
    ],
  },
  {
    type: "qcm",
    prompt: "Qui voit réellement le code PHP d'un site, en temps normal ?",
    options: [
      "N'importe quel visiteur, en affichant le code source de la page",
      "Personne : seul le résultat HTML déjà généré est envoyé au navigateur",
      "Uniquement les administrateurs connectés",
      "Le code PHP est toujours visible dans l'URL",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "PHP s'exécute côté serveur : le navigateur du visiteur ne reçoit jamais le code PHP lui-même, seulement le HTML déjà produit par son exécution." },
    ],
  },
  {
    type: "qcm",
    prompt: "Comment exécute-t-on un script bonjour.php depuis un terminal, en mode CLI ?",
    options: ["<code class=\"inline\">run bonjour.php</code>", "<code class=\"inline\">php bonjour.php</code>", "<code class=\"inline\">bonjour.php --exec</code>", "En le renommant en .html d'abord"],
    correct: 1,
    explain: [
      { type: "p", text: "La commande php suivie du nom du fichier exécute le script directement en ligne de commande, sans avoir besoin d'un serveur web complet — pratique pour apprendre." },
    ],
  },
  {
    type: "qcm",
    prompt: "Par quoi doit se terminer chaque instruction PHP ?",
    options: ["Un point", "Un point-virgule <code class=\"inline\">;</code>", "Une nouvelle ligne uniquement", "Rien, ce n'est jamais nécessaire"],
    correct: 1,
    explain: [
      { type: "p", text: "Comme en C, chaque instruction PHP se termine par un point-virgule — l'oublier est une source fréquente d'erreurs de syntaxe pour un débutant." },
    ],
  },
  {
    type: "vraifaux",
    prompt: "Vrai ou faux : en dehors des balises &lt;?php ?&gt;, tout le contenu d'un fichier .php est envoyé tel quel, comme du HTML normal.",
    options: ["Vrai", "Faux"],
    correct: 0,
    explain: [
      { type: "p", text: "Vrai. C'est justement ce qui permet à PHP de s'intégrer naturellement au milieu d'une page HTML classique, sans avoir à réécrire tout le HTML en instructions echo." },
    ],
  },
];
