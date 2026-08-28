window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["08"] = {
  lead: `La liste est la structure de données la plus utilisée en Python : une collection ordonnée de valeurs, capable de grandir et de rétrécir librement — l'équivalent souple du Tableau du pseudo-code.`,
  sections: [
    {
      id: "creer",
      title: "Créer et indexer une liste",
      blocks: [
        { type: "p", text: "Une liste s'écrit entre crochets <code class=\"inline\">[ ]</code>, ses éléments séparés par des virgules. Comme en pseudo-code, le premier élément est à l'indice 0." },
        {
          type: "translate",
          rightLang: "python",
          labelLeft: "Pseudo-code",
          labelRight: "Python",
          left: `Tableau Notes(2) en Numérique
Début
  Notes(0) ← 12
  Notes(1) ← 15
  Notes(2) ← 9
Fin`,
          right: `notes = [12, 15, 9]
print(notes[0])   # 12`,
        },
        {
          type: "callout",
          variant: "tip",
          title: "Aucune taille à prévoir à l'avance",
          text: "Contrairement au Tableau du pseudo-code (et au tableau C, chapitre précédent), une liste Python n'a pas de taille fixe à déclarer : elle grandit et rétrécit à la demande, avec append() et pop() ci-dessous.",
        },
        { type: "p", text: "Le slicing permet d'extraire une sous-portion : <code class=\"inline\">notes[0:2]</code> donne <code class=\"inline\">[12, 15]</code> (du premier indice inclus au second exclu, comme <code class=\"inline\">range()</code> vu au chapitre précédent)." },
      ],
    },
    {
      id: "modifier",
      title: "Ajouter, retirer, modifier",
      blocks: [
        {
          type: "table",
          headers: ["Méthode", "Effet"],
          rows: [
            ["<code class=\"inline\">liste.append(x)</code>", "Ajoute x à la fin de la liste"],
            ["<code class=\"inline\">liste.pop()</code>", "Retire et renvoie le dernier élément"],
            ["<code class=\"inline\">liste.pop(i)</code>", "Retire et renvoie l'élément à l'indice i"],
            ["<code class=\"inline\">liste.remove(x)</code>", "Retire la première occurrence de la valeur x"],
            ["<code class=\"inline\">len(liste)</code>", "Renvoie le nombre d'éléments"],
          ],
        },
        {
          type: "code",
          label: "modifier_liste.py",
          lang: "python",
          code: `notes = [12, 15, 9]
notes.append(18)
print(notes)          # [12, 15, 9, 18]
notes.pop(0)
print(notes)          # [15, 9, 18]
print(len(notes))     # 3`,
        },
      ],
    },
    {
      id: "parcourir",
      title: "Parcourir une liste",
      blocks: [
        { type: "p", text: "Le for du chapitre précédent donne accès direct à chaque élément, sans avoir à gérer un indice manuellement." },
        {
          type: "code",
          label: "parcourir_liste.py",
          lang: "python",
          code: `notes = [12, 15, 9, 18]
somme = 0
for note in notes:
    somme = somme + note
print("Moyenne :", somme / len(notes))`,
        },
      ],
    },
    {
      id: "trier",
      title: "Trier une liste",
      blocks: [
        { type: "p", text: "<code class=\"inline\">liste.sort()</code> trie la liste directement (elle est modifiée). <code class=\"inline\">sorted(liste)</code> renvoie une nouvelle liste triée, sans toucher à l'originale." },
        {
          type: "code",
          label: "trier.py",
          lang: "python",
          code: `notes = [15, 9, 18, 12]
notes.sort()
print(notes)                # [9, 12, 15, 18]
notes.sort(reverse=True)
print(notes)                # [18, 15, 12, 9]`,
        },
        { type: "p", text: "Une seule ligne remplace ainsi tout un algorithme de tri à bulles écrit à la main (comme celui du chapitre Algorithmique) — Python fournit un tri déjà optimisé, prêt à l'emploi." },
      ],
    },
  ],
};
