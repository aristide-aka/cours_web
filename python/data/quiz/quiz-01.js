window.QUIZZES = window.QUIZZES || {};
window.QUIZZES["01"] = [
  {
    type: "qcm",
    prompt: "Quelle est la différence fondamentale entre Python et le C vu au chapitre précédent ?",
    options: [
      "Python doit être compilé avant de s'exécuter, comme le C",
      "Python est interprété : le code s'exécute directement, sans étape de compilation séparée",
      "Il n'y a aucune différence entre les deux",
      "Python ne peut s'exécuter que dans un navigateur web",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Un interpréteur Python lit et exécute le code ligne par ligne, sans le traduire entièrement à l'avance comme le fait un compilateur C. C'est ce qui rend Python particulièrement rapide à tester." },
    ],
  },
  {
    type: "qcm",
    prompt: "Quelle version de Python ce cours utilise-t-il, et pourquoi ?",
    options: [
      "Python 2, car c'est la version historique",
      "Python 3, car Python 2 n'est plus maintenu depuis 2020",
      "Peu importe, les deux versions sont strictement identiques",
      "Une version spéciale appelée Python Notes",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Python 2 a cessé d'être maintenu en 2020 : plus aucune mise à jour de sécurité, plus aucune nouvelle fonctionnalité. Tout nouveau projet doit utiliser Python 3." },
    ],
  },
  {
    type: "qcm",
    prompt: "Que fait la fonction print() ?",
    options: ["Elle imprime le code sur une imprimante physique", "Elle affiche du texte à l'écran", "Elle lit une saisie clavier", "Elle compile le programme"],
    correct: 1,
    explain: [
      { type: "p", text: "print() affiche à l'écran ce qu'on lui passe entre parenthèses — c'est l'équivalent Python de l'instruction Écrire du pseudo-code." },
    ],
  },
  {
    type: "qcm",
    prompt: "Comment exécute-t-on un fichier nommé bonjour.py depuis un terminal ?",
    options: ["<code class=\"inline\">run bonjour.py</code>", "<code class=\"inline\">python3 bonjour.py</code>", "<code class=\"inline\">bonjour.py --start</code>", "En double-cliquant obligatoirement dessus"],
    correct: 1,
    explain: [
      { type: "p", text: "<code class=\"inline\">python3 bonjour.py</code> demande à l'interpréteur Python 3 d'exécuter le contenu de ce fichier, ligne par ligne, depuis le terminal." },
    ],
  },
  {
    type: "qcm",
    prompt: "Qu'est-ce que le mode interactif (REPL) de Python ?",
    options: [
      "Un mode qui n'existe pas en Python",
      "Une console où chaque instruction tapée s'exécute immédiatement et affiche son résultat",
      "Un mode réservé à la compilation de fichiers",
      "Un éditeur de texte spécialisé",
    ],
    correct: 1,
    explain: [
      { type: "p", text: "Lancé avec la commande python3 seule (sans fichier), le REPL permet de taper une instruction, de voir son résultat immédiatement, puis de continuer — idéal pour tester rapidement une idée." },
    ],
  },
  {
    type: "vraifaux",
    prompt: "Vrai ou faux : face à une erreur affichée par Python (un traceback), il faut immédiatement abandonner car le programme est irrécupérable.",
    options: ["Vrai", "Faux"],
    correct: 1,
    explain: [
      { type: "p", text: "Faux. Un traceback est une information précieuse : il indique précisément la ligne fautive et le type d'erreur rencontré, ce qui permet justement de corriger le programme." },
    ],
  },
];
