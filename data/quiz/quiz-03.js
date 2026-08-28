window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["03"] = [
  {
    type: "qcm",
    prompt: "Quel mot-clé est obligatoire pour refermer un bloc <code class=\"inline\">Si</code> ?",
    options: ["<code class=\"inline\">Fin</code>", "<code class=\"inline\">FinSi</code>", "<code class=\"inline\">EndIf</code>", "Aucun, il se referme automatiquement"],
    correct: 1,
    explain: [
      { type: "p", text: "Toute structure <code class=\"inline\">Si...Alors</code> doit être explicitement refermée par <code class=\"inline\">FinSi</code>, qu'elle comporte un Sinon ou non. L'oubli de ce mot-clé est l'une des erreurs de syntaxe les plus fréquentes chez les débutants." },
    ],
  },
  {
    type: "trace",
    code: `Variable n en Entier
Début
  n ← 0
  Si n > 0 Alors
    Écrire "Positif"
  Sinon
    Écrire "Négatif"
  FinSi
Fin`,
    prompt: "Que va afficher cet algorithme ?",
    options: ["Positif", "Négatif", "Rien du tout", "Positif puis Négatif"],
    correct: 1,
    explain: [
      { type: "p", text: "n vaut 0, et 0 n'est pas strictement supérieur à 0 : la condition <code class=\"inline\">n > 0</code> est donc fausse. C'est le bloc Sinon qui s'exécute, affichant \"Négatif\" — même si, mathématiquement, 0 n'est pas vraiment négatif." },
      { type: "callout", variant: "warn", title: "Piège du cas zéro", text: "Cet algorithme ne gère pas correctement le zéro : un algorithme rigoureux ajouterait un SinonSi n = 0 dédié." },
    ],
  },
  {
    type: "qcm",
    prompt: "Dans une chaîne Si / SinonSi / SinonSi / Sinon, combien de blocs peuvent s'exécuter au maximum ?",
    options: ["Autant que de conditions vraies", "Un seul", "Deux au maximum", "Cela dépend du type des variables"],
    correct: 1,
    explain: [
      { type: "p", text: "Dès qu'une condition est évaluée vraie, son bloc s'exécute et toutes les conditions suivantes de la chaîne sont ignorées — même si elles auraient, elles aussi, été vraies. Une seule branche de la chaîne s'exécute, jamais plus." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quelle est la différence entre <code class=\"inline\">Si A = B Alors</code> et <code class=\"inline\">A ← B</code> ?",
    options: [
      "Aucune, ce sont deux notations pour la même opération",
      "Le premier teste une égalité sans rien modifier, le second écrase A avec la valeur de B",
      "Le premier écrase A, le second teste une égalité",
      "= et ← ne peuvent pas être comparés, ils s'utilisent dans des contextes incompatibles",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "<code class=\"inline\">=</code> est un opérateur de comparaison : il évalue si deux valeurs sont égales, sans jamais rien modifier. <code class=\"inline\">←</code> est l'opérateur d'affectation : il modifie réellement le contenu de la variable de gauche. Confondre les deux est une erreur très fréquente." },
    ],
  },
  {
    type: "trace",
    code: `Variables M, N en Entier
Début
  M ← 4
  N ← -2
  Si M > 0 Alors
    Si N > 0 Alors
      Écrire "Les deux positifs"
    Sinon
      Écrire "Seul M est positif"
    FinSi
  Sinon
    Écrire "M n'est pas positif"
  FinSi
Fin`,
    prompt: "Qu'affiche cet algorithme imbriqué ?",
    options: ["Les deux positifs", "Seul M est positif", "M n'est pas positif", "Rien, erreur de structure"],
    correct: 1,
    explain: [
      { type: "p", text: "M vaut 4 (positif), donc on entre dans le premier bloc Si. À l'intérieur, N vaut −2 (non positif) : c'est donc le Sinon interne qui s'exécute, affichant \"Seul M est positif\". Le Sinon externe (\"M n'est pas positif\") n'est jamais atteint puisqu'on est bien entré dans le bloc Alors externe." },
    ],
  },
  {
    type: "qcm",
    prompt: "Que produit l'opérateur <code class=\"inline\">&lt;&gt;</code> ?",
    options: ["Un test d'égalité", "Un test de différence (non égal)", "Une affectation", "Une comparaison de type uniquement"],
    correct: 1,
    explain: [
      { type: "p", text: "<code class=\"inline\">&lt;&gt;</code> signifie « différent de ». <code class=\"inline\">Si N &lt;&gt; 0 Alors</code> se lit « si N est différent de zéro ». C'est l'opérateur complémentaire de <code class=\"inline\">=</code>." },
    ],
  },
  {
    type: "qcm",
    prompt: "Pourquoi, dans une chaîne SinonSi, peut-on écrire <code class=\"inline\">SinonSi Age &lt;= 9</code> sans revérifier que Age &gt; 7 ?",
    options: [
      "Parce que ce n'est pas nécessaire, le langage vérifie tout automatiquement sans lien avec les tests précédents",
      "Parce qu'on n'atteint ce SinonSi que si le test précédent (Age &lt;= 7) a déjà échoué",
      "Parce que Age est forcément positif",
      "Ce n'est pas correct, il faut absolument revérifier",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Un SinonSi n'est évalué que si toutes les conditions précédentes de la chaîne ont été fausses. Si l'on arrive au test <code class=\"inline\">Age &lt;= 9</code>, c'est donc que <code class=\"inline\">Age &lt;= 7</code> était faux, donc que Age &gt; 7 est déjà garanti — inutile de le retester." },
    ],
  },
  {
    type: "vraifaux",
    prompt: "Vrai ou faux : une structure Si peut avoir plusieurs blocs Sinon.",
    options: ["Vrai", "Faux"],
    correct: 1,
    explain: [
      { type: "p", text: "Faux. Une structure Si n'a jamais qu'un seul Sinon (ou aucun), qui correspond au cas « toutes les conditions précédentes ont échoué ». Pour gérer plusieurs cas intermédiaires, on utilise SinonSi, pas plusieurs Sinon." },
    ],
  },
];
