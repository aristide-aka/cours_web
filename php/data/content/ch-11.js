window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["11"] = {
  lead: `Comme dans les autres langages de ce cours, une fonction PHP regroupe une série d'instructions sous un nom, pour la réutiliser sans la réécrire.`,
  sections: [
    {
      id: "function",
      title: "Définir et appeler une fonction",
      blocks: [
        {
          type: "translate",
          rightLang: "php",
          labelLeft: "Pseudo-code",
          labelRight: "PHP",
          left: `Fonction Saluer(Prenom en Caractère)
  Écrire "Bonjour, ", Prenom
FinFonction`,
          right: `<?php
function saluer($prenom) {
    echo "Bonjour, " . $prenom;
}

saluer("Awa");`,
        },
      ],
    },
    {
      id: "valeurs-par-defaut",
      title: "Paramètres optionnels",
      blocks: [
        {
          type: "code",
          label: "valeur_par_defaut.php",
          lang: "php",
          code: `<?php
function saluer($prenom, $message = "Bonjour") {
    echo $message . ", " . $prenom;
}

saluer("Awa");                  // Bonjour, Awa
saluer("Awa", "Bienvenue");      // Bienvenue, Awa`,
        },
      ],
    },
    {
      id: "return",
      title: "Renvoyer un résultat avec return",
      blocks: [
        {
          type: "code",
          label: "return.php",
          lang: "php",
          code: `<?php
function carre($x) {
    return $x * $x;
}

$resultat = carre(5);
echo $resultat;   // 25`,
        },
      ],
    },
    {
      id: "portee",
      title: "Portée locale",
      blocks: [
        { type: "p", text: "Comme en Python et en C, une variable créée à l'intérieur d'une fonction PHP est <strong>locale</strong> : elle n'existe que pendant l'exécution de cette fonction et disparaît ensuite." },
        {
          type: "code",
          label: "portee.php",
          lang: "php",
          code: `<?php
function calcul() {
    $resultat = 42;
    return $resultat;
}

calcul();
echo $resultat;   // Notice : variable indéfinie, $resultat n'existe pas ici`,
        },
      ],
    },
  ],
};
