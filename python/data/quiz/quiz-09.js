window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["09"] = [
  {
    type: "qcm",
    prompt: "Avec quels symboles écrit-on un dictionnaire en Python ?",
    options: ["Des crochets [ ]", "Des accolades { }", "Des parenthèses ( )", "Des guillemets \" \""],
    correct: 1,
    explain: [
      { type: "p", text: "Un dictionnaire s'écrit entre accolades, chaque paire s'écrivant clé: valeur, séparées par des virgules : <code class=\"inline\">{\"nom\": \"Awa\", \"age\": 18}</code>." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quelle est la différence essentielle entre une liste et un dictionnaire ?",
    options: [
      "Il n'y a aucune différence",
      "Une liste accède à ses éléments par indice numérique, un dictionnaire par une clé de son choix",
      "Un dictionnaire ne peut contenir que du texte",
      "Une liste ne peut contenir que des nombres",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Une liste range ses éléments dans l'ordre, accessibles par position (0, 1, 2...). Un dictionnaire associe librement une clé (souvent du texte) à une valeur, pour un accès direct sans avoir à connaître de position." },
    ],
  },
  {
    type: "qcm",
    lang: "python",
    code: `eleve = {"nom": "Awa"}
print(eleve["age"])`,
    prompt: "Que se passe-t-il à l'exécution de ce code ?",
    options: ["Cela affiche None", "Cela affiche une chaîne vide", "Une erreur KeyError, car \"age\" n'existe pas dans le dictionnaire", "Cela affiche 0"],
    correct: 2,
    explain: [
      { type: "p", text: "Accéder à une clé absente d'un dictionnaire avec des crochets provoque une KeyError, qui arrête le programme si elle n'est pas gérée." },
    ],
  },
  {
    type: "qcm",
    prompt: "Comment éviter une KeyError en toute sécurité ?",
    options: [
      "En utilisant .get(cle, valeur_par_defaut) plutôt que les crochets",
      "Ce n'est pas possible en Python",
      "En n'utilisant jamais de dictionnaires",
      "En mettant toujours toutes les clés possibles à l'avance",
    ],
    correct: 0,
    explain: [
      { type: "p", text: "eleve.get(\"age\", \"non renseigné\") renvoie la valeur associée à \"age\" si elle existe, ou la valeur de secours indiquée sinon — sans jamais provoquer d'erreur." },
    ],
  },
  {
    type: "trace",
    lang: "python",
    code: `eleve = {"nom": "Awa", "age": 17}
eleve["age"] = 18
eleve["ville"] = "Dakar"
print(eleve)`,
    prompt: "Que va afficher ce code ?",
    options: [
      "{'nom': 'Awa', 'age': 17}",
      "{'nom': 'Awa', 'age': 18, 'ville': 'Dakar'}",
      "{'nom': 'Awa', 'ville': 'Dakar'}",
      "Une erreur",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "eleve[\"age\"] = 18 modifie la valeur existante de la clé age. eleve[\"ville\"] = \"Dakar\" ajoute une toute nouvelle paire clé/valeur. Le dictionnaire final contient donc les trois paires." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quelle méthode permet de parcourir simultanément les clés et les valeurs d'un dictionnaire ?",
    options: ["<code class=\"inline\">.keys()</code>", "<code class=\"inline\">.values()</code>", "<code class=\"inline\">.items()</code>", "<code class=\"inline\">.pairs()</code>"],
    correct: 2,
    explain: [
      { type: "p", text: "for cle, valeur in dictionnaire.items(): donne accès à la fois à la clé et à la valeur à chaque tour de boucle — la façon la plus courante de parcourir un dictionnaire entièrement." },
    ],
  },
  {
    type: "vraifaux",
    prompt: "Vrai ou faux : del eleve[\"ville\"] supprime la paire clé/valeur \"ville\" du dictionnaire.",
    options: ["Vrai", "Faux"],
    correct: 0,
    explain: [
      { type: "p", text: "Vrai. L'instruction del retire définitivement une clé (et sa valeur associée) d'un dictionnaire." },
    ],
  },
];
