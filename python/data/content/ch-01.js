window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["01"] = {
  lead: `Python est un langage de programmation réel, utilisé partout dans le monde — sites web, intelligence artificielle, scripts d'automatisation. Contrairement au pseudo-code, il s'exécute vraiment sur un ordinateur. Ce chapitre pose les bases : qu'est-ce que Python, comment l'installer, et comment écrire votre tout premier programme.`,
  sections: [
    {
      id: "quest-ce-que-python",
      title: "Qu'est-ce que Python ?",
      blocks: [
        { type: "p", text: "Python est un langage <strong>interprété</strong> : contrairement au C (chapitre précédent), il n'a pas besoin d'être compilé avant de s'exécuter. Un programme appelé l'<strong>interpréteur</strong> lit votre code ligne par ligne et l'exécute directement, ce qui rend Python particulièrement rapide à tester et à apprendre." },
        {
          type: "callout",
          variant: "tip",
          title: "Analogie : l'interprète humain",
          text: "Compiler un programme, c'est comme traduire un livre entier avant de le distribuer. Interpréter, c'est comme avoir un traducteur qui parle en direct, phrase par phrase, pendant que vous lisez. Python fonctionne comme ce traducteur en direct.",
        },
        { type: "p", text: "Créé en 1991 par Guido van Rossum, Python est aujourd'hui l'un des langages les plus utilisés au monde, notamment pour sa syntaxe réputée proche du langage naturel — ce qui en fait un excellent choix pour apprendre à programmer." },
      ],
    },
    {
      id: "installer",
      title: "Installer et vérifier Python",
      blocks: [
        { type: "p", text: "Ce cours utilise <strong>Python 3</strong> (la version actuelle et activement développée — l'ancienne version Python 2 n'est plus maintenue depuis 2020 et ne doit plus être utilisée). Une fois Python installé sur votre machine, vérifiez la version installée dans un terminal :" },
        {
          type: "code",
          label: "terminal",
          lang: "python",
          code: `python3 --version
# Python 3.12.0`,
        },
        {
          type: "callout",
          variant: "warn",
          title: "python ou python3 ?",
          text: "Sur certains systèmes (notamment macOS et Linux), la commande <code class=\"inline\">python</code> seule peut encore pointer vers l'ancien Python 2. Utilisez toujours <code class=\"inline\">python3</code> explicitement pour être certain d'utiliser la bonne version.",
        },
      ],
    },
    {
      id: "mode-interactif",
      title: "Le mode interactif (REPL)",
      blocks: [
        { type: "p", text: "Taper <code class=\"inline\">python3</code> seul, sans nom de fichier, ouvre une <strong>console interactive</strong> (aussi appelée REPL, pour Read-Eval-Print-Loop) : vous tapez une instruction, elle s'exécute immédiatement, son résultat s'affiche, et vous recommencez. C'est un excellent outil pour tester rapidement une idée." },
        {
          type: "code",
          label: "console interactive",
          lang: "python",
          code: `$ python3
Python 3.12.0
>>> print("Bonjour")
Bonjour
>>> 3 + 5
8
>>> exit()`,
        },
        { type: "p", text: "Le symbole <code class=\"inline\">&gt;&gt;&gt;</code> est l'invite (prompt) qui attend votre prochaine instruction. Pour quitter, tapez <code class=\"inline\">exit()</code> ou pressez Ctrl+D." },
      ],
    },
    {
      id: "premier-script",
      title: "Écrire et exécuter un script",
      blocks: [
        { type: "p", text: "Pour un vrai programme, on écrit le code dans un fichier texte portant l'extension <code class=\"inline\">.py</code>, puis on demande à Python de l'exécuter." },
        {
          type: "code",
          label: "bonjour.py",
          lang: "python",
          code: `print("Bonjour, le monde !")`,
        },
        {
          type: "code",
          label: "terminal",
          lang: "python",
          code: `$ python3 bonjour.py
Bonjour, le monde !`,
        },
        { type: "p", text: "<code class=\"inline\">print()</code> est une <strong>fonction</strong> déjà fournie par Python (nous verrons comment créer les nôtres au chapitre 12) : elle affiche à l'écran ce qu'on lui donne entre parenthèses. C'est l'équivalent Python de l'instruction <code class=\"inline\">Écrire</code> du pseudo-code." },
      ],
    },
    {
      id: "erreurs",
      title: "Un premier repère sur les erreurs",
      blocks: [
        {
          type: "list",
          items: [
            "Une <strong>erreur de syntaxe</strong> (SyntaxError) signifie que Python n'a pas compris la structure de votre code — souvent une parenthèse ou des guillemets oubliés.",
            "Une <strong>erreur d'exécution</strong> survient pendant que le programme tourne, par exemple si vous divisez par zéro. Le programme s'arrête net et affiche un message d'erreur appelé un <em>traceback</em>.",
            "Ne paniquez jamais devant un traceback : il indique précisément la ligne fautive et le type d'erreur. C'est une information précieuse, pas une punition.",
          ],
        },
      ],
    },
  ],
};
