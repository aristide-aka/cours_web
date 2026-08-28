window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["08"] = [
  {
    type: "qcm",
    prompt: "Quelle est la différence fondamentale entre une fonction et une procédure ?",
    options: [
      "Une fonction ne prend jamais de paramètres",
      "Une fonction renvoie une valeur unique, une procédure non",
      "Une procédure ne peut pas contenir de boucle",
      "Il n'y a aucune différence, ce sont des synonymes",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Une fonction se termine par <code class=\"inline\">Renvoyer &lt;valeur&gt;</code> et peut donc être utilisée dans une expression, comme un calcul. Une procédure exécute des actions (afficher, modifier des paramètres par référence) mais ne produit aucune valeur exploitable directement dans un calcul." },
    ],
  },
  {
    type: "qcm",
    prompt: "Que se passe-t-il si on oublie l'instruction Renvoyer dans une fonction censée calculer un résultat ?",
    options: [
      "Une erreur de compilation est immédiatement levée",
      "La fonction renvoie 0 par défaut",
      "Aucune valeur exploitable n'est produite : la fonction est incomplète",
      "Cela n'a aucune conséquence",
    ],
    correct: 2,
    explain: [
      { type: "p", text: "Renvoyer est ce qui transmet le résultat calculé au code appelant. Sans lui, tout le travail effectué à l'intérieur de la fonction (calculs, boucles) est fait pour rien : aucune valeur n'en ressort." },
    ],
  },
  {
    type: "qcm",
    prompt: "Un paramètre passé <strong>par valeur</strong> est modifié à l'intérieur d'une procédure. Que se passe-t-il pour la variable d'origine, à l'extérieur ?",
    options: [
      "Elle est modifiée elle aussi, à l'identique",
      "Elle reste inchangée : seule la copie locale a été modifiée",
      "Le programme provoque une erreur d'exécution",
      "Cela dépend du type de la variable",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Le passage par valeur transmet une copie indépendante. Tout ce qui arrive à cette copie à l'intérieur de la procédure ou de la fonction reste local, et n'a strictement aucun effet sur la variable d'origine côté appelant." },
    ],
  },
  {
    type: "qcm",
    prompt: "Dans <code class=\"inline\">Procédure SaisieLettre(a, b en Caractère par Référence)</code>, pourquoi le passage par référence est-il indispensable pour le paramètre a ?",
    options: [
      "Parce que a est une chaîne de caractères, et les chaînes sont toujours passées par référence",
      "Parce que la procédure doit réellement mettre à jour a pour le programme appelant, une fois l'appel terminé",
      "Ce n'est pas indispensable, c'est juste une préférence de style",
      "Parce que sinon la procédure ne compile pas",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "L'instruction <code class=\"inline\">a ← a & b</code> à l'intérieur de la procédure ne sert à rien si la modification reste locale. Le passage par référence garantit que cette mise à jour de l'historique des lettres proposées est bien répercutée dans le programme appelant, une fois SaisieLettre terminée." },
    ],
  },
  {
    type: "trace",
    code: `Fonction Sum(a, b, c, d, e)
  Renvoyer a + b + c + d + e
FinFonction

Variable Total en Entier
Début
  Total ← Sum(1, 2, 3, 4, 5)
Fin`,
    prompt: "Quelle est la valeur finale de Total ?",
    options: ["10", "15", "5", "0"],
    correct: 1,
    explain: [
      { type: "p", text: "La fonction Sum additionne ses cinq paramètres : 1+2+3+4+5 = 15. Cette valeur est renvoyée par Renvoyer, puis affectée à Total lors de l'appel <code class=\"inline\">Total ← Sum(1, 2, 3, 4, 5)</code>." },
    ],
  },
  {
    type: "vraifaux",
    prompt: "Vrai ou faux : une fonction peut appeler une autre fonction dans son propre corps.",
    options: ["Vrai", "Faux"],
    correct: 0,
    explain: [
      { type: "p", text: "Vrai. C'est même l'un des grands intérêts du découpage en fonctions : NbVoyelles (chapitre 7) appelle par exemple Len, Mid et Trouve. Une fonction peut aussi s'appeler elle-même — on parle alors de récursivité, abordée au chapitre 10." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quel est le mode de passage de paramètre recommandé par défaut, sauf besoin explicite de modifier la variable de l'appelant ?",
    options: ["Par référence", "Par valeur", "Les deux sont strictement équivalents", "Cela dépend uniquement du type"],
    correct: 1,
    explain: [
      { type: "p", text: "Le passage par valeur est plus sûr par défaut : la fonction ou la procédure ne peut pas modifier accidentellement une variable de l'appelant qu'elle ne devrait pas toucher. Le passage par référence doit rester une décision explicite et justifiée." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quel mot-clé referme le corps d'une procédure ?",
    options: ["<code class=\"inline\">FinFonction</code>", "<code class=\"inline\">FinProcédure</code>", "<code class=\"inline\">Fin</code> uniquement", "<code class=\"inline\">Renvoyer</code>"],
    correct: 1,
    explain: [
      { type: "p", text: "Une fonction se referme par <code class=\"inline\">FinFonction</code>, une procédure par <code class=\"inline\">FinProcédure</code> — les deux mots-clés ne sont pas interchangeables, même si leur rôle syntaxique est similaire." },
    ],
  },
];
