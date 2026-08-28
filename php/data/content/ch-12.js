window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["12"] = {
  lead: `Comme les autres langages de ce cours, PHP propose un mécanisme pour anticiper et gérer proprement les erreurs d'exécution, plutôt que de laisser le script planter brutalement.`,
  sections: [
    {
      id: "try-catch",
      title: "try / catch",
      blocks: [
        { type: "p", text: "Le principe est le même qu'en Python (try/except) : on place le code risqué dans un bloc <code class=\"inline\">try</code>, et PHP saute au bloc <code class=\"inline\">catch</code> correspondant si une exception de ce type se produit." },
        {
          type: "code",
          label: "try_catch.php",
          lang: "php",
          code: `<?php
try {
    $diviseur = 0;
    if ($diviseur === 0) {
        throw new Exception("Division par zéro impossible");
    }
    echo 10 / $diviseur;
} catch (Exception $e) {
    echo "Erreur : " . $e->getMessage();
}

echo "\\nLe programme continue normalement";`,
        },
        { type: "p", text: "<code class=\"inline\">throw</code> déclenche volontairement une exception, ici une <code class=\"inline\">Exception</code> générique accompagnée d'un message explicatif, récupérable ensuite avec <code class=\"inline\">$e->getMessage()</code>." },
      ],
    },
    {
      id: "erreurs-courantes",
      title: "Notices, Warnings et Fatal Errors",
      blocks: [
        { type: "p", text: "PHP distingue plusieurs niveaux de gravité pour les problèmes rencontrés à l'exécution." },
        {
          type: "table",
          headers: ["Niveau", "Signification"],
          rows: [
            ["Notice / Warning", "Un problème mineur (variable non définie, index de tableau absent…) : le script continue son exécution"],
            ["Fatal Error", "Une erreur grave qui arrête immédiatement le script (par exemple, appeler une fonction qui n'existe pas)"],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Ne pas ignorer les Notices",
          text: "Une Notice n'arrête pas le script, mais elle signale presque toujours une véritable erreur de logique (comme une variable oubliée). Il est recommandé de toujours les lire et de les corriger, plutôt que de les considérer comme sans importance.",
        },
      ],
    },
    {
      id: "finally",
      title: "finally",
      blocks: [
        { type: "p", text: "Comme en Python, un bloc <code class=\"inline\">finally</code> facultatif s'exécute systématiquement après try/catch, qu'une exception ait été levée ou non." },
        {
          type: "code",
          label: "finally.php",
          lang: "php",
          code: `<?php
try {
    throw new Exception("Erreur test");
} catch (Exception $e) {
    echo "Erreur gérée\\n";
} finally {
    echo "Ce message s'affiche dans tous les cas\\n";
}`,
        },
      ],
    },
  ],
};
