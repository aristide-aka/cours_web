window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["13"] = {
  lead: `Une erreur d'exécution (une division par zéro, un fichier absent, une clé de dictionnaire manquante) arrête normalement un programme Python net. Les exceptions permettent d'anticiper ces situations et d'y réagir proprement, sans planter.`,
  sections: [
    {
      id: "pourquoi",
      title: "Pourquoi gérer les erreurs ?",
      blocks: [
        {
          type: "callout",
          variant: "tip",
          title: "Analogie : le disjoncteur électrique",
          text: "Sans disjoncteur, un court-circuit incendie toute l'installation. Avec un disjoncteur, l'incident coupe juste le circuit concerné, sans tout détruire. Une exception non gérée « incendie » tout le programme ; une exception gérée coupe proprement juste la partie concernée.",
        },
        {
          type: "code",
          label: "sans_gestion.py",
          lang: "python",
          code: `nombre = int(input("Entrez un diviseur : "))
resultat = 10 / nombre
print(resultat)
# Si l'utilisateur entre 0 :
# ZeroDivisionError: division by zero
# Le programme s'arrête net.`,
        },
      ],
    },
    {
      id: "try-except",
      title: "try / except",
      blocks: [
        { type: "p", text: "On place le code risqué dans un bloc <code class=\"inline\">try</code>. Si une erreur du type précisé se produit, l'exécution saute immédiatement au bloc <code class=\"inline\">except</code> correspondant, sans planter le programme." },
        {
          type: "code",
          label: "try_except.py",
          lang: "python",
          code: `try:
    nombre = int(input("Entrez un diviseur : "))
    resultat = 10 / nombre
    print(resultat)
except ZeroDivisionError:
    print("Impossible de diviser par zéro !")
except ValueError:
    print("Ce n'était pas un nombre valide.")

print("Le programme continue normalement")`,
        },
        { type: "p", text: "On peut prévoir plusieurs blocs <code class=\"inline\">except</code>, chacun pour un type d'erreur différent — ici <code class=\"inline\">ZeroDivisionError</code> (diviser par zéro) et <code class=\"inline\">ValueError</code> (une saisie qui n'est pas un nombre)." },
      ],
    },
    {
      id: "exceptions-courantes",
      title: "Quelques exceptions courantes",
      blocks: [
        {
          type: "table",
          headers: ["Exception", "Situation typique"],
          rows: [
            ["<code class=\"inline\">ValueError</code>", "Une conversion échoue, ex. <code class=\"inline\">int(\"abc\")</code>"],
            ["<code class=\"inline\">ZeroDivisionError</code>", "Une division par zéro"],
            ["<code class=\"inline\">KeyError</code>", "Une clé absente d'un dictionnaire (vu au chapitre 9)"],
            ["<code class=\"inline\">IndexError</code>", "Un indice de liste hors limites"],
            ["<code class=\"inline\">FileNotFoundError</code>", "Un fichier inexistant à l'ouverture (chapitre 11)"],
          ],
        },
      ],
    },
    {
      id: "finally",
      title: "finally : toujours exécuté",
      blocks: [
        { type: "p", text: "Un bloc <code class=\"inline\">finally</code> facultatif s'exécute systématiquement, qu'une erreur se soit produite ou non — utile pour un nettoyage garanti (fermer un fichier, par exemple, même si with s'en charge déjà généralement)." },
        {
          type: "code",
          label: "finally.py",
          lang: "python",
          code: `try:
    resultat = 10 / 0
except ZeroDivisionError:
    print("Erreur gérée")
finally:
    print("Ce message s'affiche dans tous les cas")`,
        },
        {
          type: "callout",
          variant: "warn",
          title: "Ne jamais tout attraper aveuglément",
          text: "Écrire un except sans préciser de type d'erreur (except: seul) attrape absolument tout, y compris des erreurs de programmation que vous auriez dû corriger. Précisez toujours le type d'exception que vous attendez.",
        },
      ],
    },
  ],
};
