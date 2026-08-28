window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["10"] = [
  {
    type: "qcm",
    prompt: "Sur quel principe repose le tri à bulles ?",
    options: [
      "Chercher le minimum du tableau et le placer en tête, à chaque tour",
      "Comparer les éléments adjacents deux à deux et les échanger si besoin, en répétant jusqu'à ce que plus aucun échange ne soit nécessaire",
      "Diviser le tableau en deux moitiés triées séparément",
      "Insérer chaque élément un par un dans un nouveau tableau vide",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Le tri à bulles compare systématiquement chaque paire d'éléments voisins, et les échange s'ils sont dans le mauvais ordre. Répété suffisamment de fois, ce procédé fait progressivement remonter les plus grandes valeurs vers la fin du tableau, comme des bulles." },
    ],
  },
  {
    type: "qcm",
    prompt: "Dans l'algorithme du tri à bulles, à quoi sert la variable Temp ?",
    options: [
      "À compter le nombre d'échanges effectués",
      "À sauvegarder temporairement une valeur pendant l'échange de deux cases du tableau, comme au chapitre 1",
      "À stocker la taille du tableau",
      "Elle est inutile et peut être supprimée",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Échanger T(j) et T(j+1) directement (<code class=\"inline\">T(j) ← T(j+1)</code> puis <code class=\"inline\">T(j+1) ← T(j)</code>) écraserait la première valeur avant d'avoir pu la transférer — exactement le piège vu au chapitre 1. Temp joue le rôle de la variable de secours qui rend l'échange possible." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quelle condition est indispensable pour pouvoir utiliser la recherche dichotomique ?",
    options: [
      "Le tableau doit contenir uniquement des entiers",
      "Le tableau doit être trié au préalable",
      "Le tableau doit contenir moins de 10 éléments",
      "Aucune condition particulière n'est nécessaire",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Toute la logique de la dichotomie repose sur le fait de pouvoir éliminer une moitié entière du tableau à chaque étape, en comparant la cible à l'élément du milieu. Cela n'est valide que si le tableau est trié : sur un tableau en désordre, la moitié écartée pourrait très bien contenir la valeur cherchée." },
    ],
  },
  {
    type: "trace",
    code: `Tableau T(9) en Entier    // T trié, 10 éléments (indices 0 à 9)
Debut ← 0
Fin ← 9
Milieu ← (Debut + Fin) / 2`,
    prompt: "Pour un tableau trié de 10 éléments (indices 0 à 9), quel est l'indice du milieu lors de la toute première étape ?",
    options: ["10", "5", "4", "9"],
    correct: 2,
    explain: [
      { type: "p", text: "Milieu se calcule par <code class=\"inline\">(Debut + Fin) / 2</code>, soit <code class=\"inline\">(0 + 9) / 2 = 4.5</code>, arrondi à l'entier inférieur : 4. C'est cette case T(4) qui est comparée en premier à la valeur cherchée." },
    ],
  },
  {
    type: "qcm",
    prompt: "Pourquoi la recherche dichotomique est-elle bien plus rapide que la recherche séquentielle sur un grand tableau trié ?",
    options: [
      "Parce qu'elle utilise deux boucles au lieu d'une",
      "Parce qu'elle élimine la moitié des éléments restants à chaque comparaison, au lieu d'avancer un par un",
      "Parce qu'elle ne compare jamais deux fois la même valeur",
      "En réalité, elle n'est pas plus rapide, seulement plus élégante à écrire",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "À chaque étape, la dichotomie divise par deux l'espace de recherche restant. Sur 1000 éléments, il ne faut qu'environ 10 comparaisons (log₂ 1000 ≈ 10), contre potentiellement 1000 comparaisons pour une recherche séquentielle dans le pire des cas." },
    ],
  },
  {
    type: "qcm",
    prompt: "Dans le tri par sélection, que fait-on une fois l'indice du minimum (IndiceMin) trouvé parmi les éléments restants ?",
    options: [
      "On l'affiche à l'écran",
      "On l'échange avec l'élément actuellement en tête de la zone non triée",
      "On le supprime du tableau",
      "On recommence la recherche du minimum depuis le début",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Une fois le plus petit élément restant localisé (à l'indice IndiceMin), on l'échange avec la première case de la zone encore non triée (l'indice i du tour courant). Cela place définitivement ce minimum à sa position finale, et la zone non triée se réduit d'un élément à chaque tour." },
    ],
  },
  {
    type: "vraifaux",
    prompt: "Vrai ou faux : trier un tableau a un coût, donc la recherche dichotomique n'est intéressante que si l'on prévoit de faire plusieurs recherches sur ce même tableau trié.",
    options: ["Vrai", "Faux"],
    correct: 0,
    explain: [
      { type: "p", text: "Vrai. Trier prend du temps. Si l'on ne doit chercher qu'une seule valeur dans un tableau qui n'est pas déjà trié, une simple recherche séquentielle est souvent plus rapide en pratique que de trier le tableau juste pour pouvoir ensuite faire une seule recherche dichotomique." },
    ],
  },
  {
    type: "qcm",
    prompt: "Que se passe-t-il dans la recherche dichotomique lorsque <code class=\"inline\">Debut</code> devient strictement supérieur à <code class=\"inline\">Fin</code> ?",
    options: [
      "Le tableau est automatiquement trié",
      "Cela signifie que la valeur cherchée n'est pas présente dans le tableau",
      "Une erreur d'exécution est levée",
      "La recherche recommence depuis le début du tableau",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Tant qu'il reste une zone valide à explorer, Debut reste inférieur ou égal à Fin. Quand Debut dépasse Fin, cela signifie que toute la zone de recherche a été éliminée sans jamais trouver la valeur : elle est donc absente du tableau. C'est cette condition qui met fin à la boucle TantQue sans que Trouve ne soit jamais passé à Vrai." },
    ],
  },
];
