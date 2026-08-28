window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["09"] = {
  lead: `Toutes les variables vues jusqu'ici disparaissent à la fin de l'exécution de l'algorithme. Pour conserver des données d'une exécution à l'autre — une liste de contacts, un historique de ventes — il faut les stocker dans un fichier.`,
  sections: [
    {
      id: "principe",
      title: "Le principe d'un fichier séquentiel",
      blocks: [
        { type: "p", text: "Un fichier séquentiel se lit et s'écrit dans l'ordre, du début vers la fin, un peu comme une cassette qu'on ne peut qu'avancer. Manipuler un fichier suit toujours le même cycle en trois étapes : l'ouvrir, échanger des données avec lui, puis le fermer." },
        {
          type: "flow",
          steps: ["Ouvrir le fichier", "Lire ou écrire", "Fermer le fichier"],
        },
      ],
    },
    {
      id: "ouvrir",
      title: "Ouvrir un fichier",
      blocks: [
        { type: "p", text: "L'instruction <code class=\"inline\">Ouvrir</code> associe un fichier du disque à un numéro de canal (un entier arbitraire choisi par le programmeur), et précise le mode d'ouverture : <code class=\"inline\">Lecture</code> pour consulter un fichier existant, <code class=\"inline\">Écriture</code> pour en créer un nouveau ou écraser son contenu." },
        {
          type: "syntax",
          title: "Syntaxe",
          code: `Ouvrir "<nom_du_fichier>" sur <canal> en Lecture
Ouvrir "<nom_du_fichier>" sur <canal> en Écriture`,
        },
        {
          type: "callout",
          variant: "warn",
          title: "Écriture écrase le fichier",
          text: "Ouvrir un fichier en mode Écriture repart d'un fichier vide : tout contenu préexistant est perdu. Ce n'est pas le mode à utiliser pour ajouter des données à la fin d'un fichier déjà rempli.",
        },
      ],
    },
    {
      id: "lire-fichier",
      title: "Lire un fichier ligne par ligne",
      blocks: [
        { type: "p", text: "<code class=\"inline\">LireFichier</code> récupère la prochaine ligne du fichier et la range dans une variable. Comme on ne connaît pas toujours à l'avance le nombre de lignes d'un fichier, on utilise une boucle TantQue couplée à la fonction <code class=\"inline\">EOF</code> (End Of File), qui devient vraie une fois la fin du fichier atteinte." },
        {
          type: "code",
          label: "exercice 10.1 — afficher tout un fichier",
          code: `Variable Ligne en Caractère
Début
  Ouvrir "Exemple.txt" sur 5 en Lecture
  TantQue Non EOF(5)
    LireFichier 5, Ligne
    Écrire Ligne
  FinTantQue
  Fermer 5
Fin`,
        },
        { type: "p", text: "Ce squelette — ouvrir, boucler tant que ce n'est pas la fin, fermer — est le motif le plus fréquent de tout ce chapitre. Retenez-le, il revient dans presque tous les algorithmes de traitement de fichier." },
      ],
    },
    {
      id: "ecrire-fichier",
      title: "Écrire dans un fichier",
      blocks: [
        { type: "p", text: "<code class=\"inline\">EcrireFichier</code> fonctionne à l'inverse de LireFichier : elle envoie le contenu d'une variable vers le fichier ouvert, en ajoutant une nouvelle ligne à chaque appel." },
        {
          type: "code",
          label: "constituer un fichier de notes",
          code: `Variables i, Note en Entier
Début
  Ouvrir "notes.txt" sur 1 en Écriture
  Pour i ← 1 à 10
    Écrire "Note n°", i, " : "
    Lire Note
    EcrireFichier 1, Note
  i Suivant
  Fermer 1
Fin`,
        },
      ],
    },
    {
      id: "fermer",
      title: "Toujours fermer un fichier",
      blocks: [
        { type: "p", text: "<code class=\"inline\">Fermer &lt;canal&gt;</code> libère l'accès au fichier une fois le traitement terminé. C'est indispensable : tant qu'un fichier reste ouvert en écriture, rien ne garantit que les données soient réellement et intégralement enregistrées sur le disque." },
        {
          type: "compare",
          bad: {
            title: "Fichier jamais fermé",
            code: `Ouvrir "notes.txt" sur 1 en Écriture
EcrireFichier 1, 15
// oubli du Fermer 1 : risque de perte de données`,
          },
          good: {
            title: "Cycle complet",
            code: `Ouvrir "notes.txt" sur 1 en Écriture
EcrireFichier 1, 15
Fermer 1`,
          },
        },
      ],
    },
    {
      id: "cas-etude",
      title: "Cas d'étude : concaténer deux fichiers",
      blocks: [
        { type: "p", text: "Un exercice classique consiste à recopier intégralement un premier fichier dans un troisième, puis à la suite tout le contenu d'un second — la concaténation de fichiers." },
        {
          type: "code",
          label: "concaténation de Toto.txt et Tata.txt",
          code: `Variable Ligne en Caractère
Début
  Ouvrir "Tutu.txt" sur 3 en Écriture

  Ouvrir "Toto.txt" sur 1 en Lecture
  TantQue Non EOF(1)
    LireFichier 1, Ligne
    EcrireFichier 3, Ligne
  FinTantQue
  Fermer 1

  Ouvrir "Tata.txt" sur 2 en Lecture
  TantQue Non EOF(2)
    LireFichier 2, Ligne
    EcrireFichier 3, Ligne
  FinTantQue
  Fermer 2

  Fermer 3
Fin`,
        },
        { type: "p", text: "Remarquez qu'on peut avoir plusieurs fichiers ouverts simultanément, à condition de leur attribuer des numéros de canal distincts (ici 1, 2 et 3)." },
      ],
    },
    {
      id: "erreurs",
      title: "Erreurs fréquentes",
      blocks: [
        {
          type: "list",
          items: [
            "Oublier <code class=\"inline\">Fermer</code> après avoir fini d'utiliser un fichier.",
            "Tester <code class=\"inline\">EOF</code> après avoir déjà lu la dernière ligne plutôt qu'avant, ce qui décale la boucle d'une ligne.",
            "Ouvrir un fichier en <code class=\"inline\">Écriture</code> alors qu'on voulait seulement le consulter — et perdre son contenu.",
            "Réutiliser le même numéro de canal pour deux fichiers ouverts simultanément.",
          ],
        },
      ],
    },
  ],
};
