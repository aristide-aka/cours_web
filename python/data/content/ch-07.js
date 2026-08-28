window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["07"] = {
  lead: `Python propose deux structures de boucle : while (comme en pseudo-code) et for, dont le fonctionnement diffère sensiblement de la boucle Pour du pseudo-code ou du C. Ce chapitre couvre les deux, ainsi que les instructions pour interrompre une boucle en cours de route.`,
  sections: [
    {
      id: "while",
      title: "La boucle while",
      blocks: [
        { type: "p", text: "<code class=\"inline\">while</code> répète un bloc tant qu'une condition reste vraie — exactement comme <code class=\"inline\">TantQue</code> en pseudo-code." },
        {
          type: "translate",
          rightLang: "python",
          labelLeft: "Pseudo-code",
          labelRight: "Python",
          left: `Variable I en Entier
Début
  I ← 0
  TantQue I < 5
    Écrire I
    I ← I + 1
  FinTantQue
Fin`,
          right: `i = 0
while i < 5:
    print(i)
    i += 1`,
        },
        { type: "p", text: "Notez <code class=\"inline\">i += 1</code>, un raccourci Python très courant pour <code class=\"inline\">i = i + 1</code>." },
      ],
    },
    {
      id: "for-range",
      title: "La boucle for et range()",
      blocks: [
        { type: "p", text: "<code class=\"inline\">for</code> en Python ne fonctionne pas comme le <code class=\"inline\">Pour</code> du pseudo-code : il parcourt directement les éléments d'une collection, un par un. Pour répéter un nombre précis de fois, on le combine avec <code class=\"inline\">range()</code>, qui génère une suite de nombres." },
        {
          type: "translate",
          rightLang: "python",
          labelLeft: "Pseudo-code",
          labelRight: "Python",
          left: `Variable I en Entier
Début
  Pour I ← 0 à 4
    Écrire I
  I Suivant
Fin`,
          right: `for i in range(5):
    print(i)`,
        },
        {
          type: "callout",
          variant: "pitfall",
          title: "range(5) exclut 5",
          text: "range(5) génère 0, 1, 2, 3, 4 — cinq valeurs, mais la borne de fin (5) est toujours exclue. Pour obtenir 1 à 10 inclus, il faut écrire <code class=\"inline\">range(1, 11)</code>.",
        },
      ],
    },
    {
      id: "break-continue",
      title: "break et continue",
      blocks: [
        { type: "p", text: "<code class=\"inline\">break</code> arrête immédiatement la boucle. <code class=\"inline\">continue</code> saute directement à l'itération suivante, sans exécuter le reste du bloc pour ce tour-ci." },
        {
          type: "code",
          label: "break_continue.py",
          lang: "python",
          code: `for i in range(10):
    if i == 5:
        break          # arrête complètement la boucle
    if i % 2 == 0:
        continue       # passe au suivant sans afficher
    print(i)
# affiche : 1, 3`,
        },
      ],
    },
    {
      id: "repeter-jusqua",
      title: "Émuler Répéter...Jusqu'à",
      blocks: [
        { type: "p", text: "Python n'a pas de structure Répéter...Jusqu'à native. On la reconstitue avec une boucle infinie <code class=\"inline\">while True</code>, interrompue par un <code class=\"inline\">break</code> dès que la condition de sortie est atteinte — le corps s'exécute alors garanti au moins une fois." },
        {
          type: "code",
          label: "repeter_jusqua.py",
          lang: "python",
          code: `tentative = 0
while True:
    tentative += 1
    print("Tentative numéro", tentative)
    if tentative >= 3:
        break   # on sort après au moins un passage dans la boucle`,
        },
        { type: "p", text: "Ce motif deviendra particulièrement utile au chapitre 10, pour redemander une saisie tant qu'elle n'est pas valide." },
      ],
    },
  ],
};
