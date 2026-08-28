window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["02"] = {
  lead: `En pseudo-code et en C, une variable doit être déclarée avec son type avant d'être utilisée. Python fonctionne différemment : c'est ce que ce chapitre explique, avant de présenter les quatre types de données les plus fondamentaux.`,
  sections: [
    {
      id: "typage-dynamique",
      title: "Le typage dynamique",
      blocks: [
        { type: "p", text: "En Python, une variable n'a pas besoin d'être déclarée à l'avance : elle est créée automatiquement dès qu'on lui affecte une valeur. Python détermine tout seul le type de cette valeur — on appelle cela le <strong>typage dynamique</strong>." },
        {
          type: "translate",
          rightLang: "python",
          labelLeft: "Pseudo-code",
          labelRight: "Python",
          left: `Variable Age en Entier
Début
  Age ← 25
Fin`,
          right: `age = 25`,
        },
        {
          type: "callout",
          variant: "tip",
          title: "Analogie : une étiquette autocollante",
          text: "En C, une variable est comme une boîte de taille fixe, prévue pour un type précis d'objet avant même d'être remplie. En Python, une variable est plutôt une étiquette autocollante que l'on colle sur une valeur : la même étiquette peut être décollée puis recollée sur une valeur d'un tout autre type.",
        },
        {
          type: "code",
          label: "typage_dynamique.py",
          lang: "python",
          code: `x = 25
x = "vingt-cinq"   # tout à fait valide : x pointe maintenant vers une chaîne`,
        },
      ],
    },
    {
      id: "nombres",
      title: "Les nombres : int et float",
      blocks: [
        { type: "p", text: "<code class=\"inline\">int</code> représente un nombre entier, <code class=\"inline\">float</code> un nombre à virgule (décimal). Python bascule automatiquement en float dès qu'un calcul produit un résultat non entier." },
        {
          type: "code",
          label: "nombres.py",
          lang: "python",
          code: `age = 25          # int
taille = 1.78     # float
print(type(age))     # <class 'int'>
print(type(taille))  # <class 'float'>`,
        },
        { type: "p", text: "La fonction <code class=\"inline\">type()</code> révèle le type actuel d'une valeur — très utile pour vérifier ce que Python a déduit tout seul." },
      ],
    },
    {
      id: "chaines",
      title: "Le texte : str",
      blocks: [
        { type: "p", text: "Une chaîne de caractères (<code class=\"inline\">str</code>) contient du texte, entre guillemets simples <code class=\"inline\">'...'</code> ou doubles <code class=\"inline\">\"...\"</code> — les deux sont strictement équivalents en Python, contrairement à d'autres langages." },
        {
          type: "code",
          label: "chaines.py",
          lang: "python",
          code: `prenom = "Aïcha"
message = 'Bonjour tout le monde'
print(prenom[0])       # "A" — premier caractère, indice 0
print(prenom[0:3])     # "Aïc" — les 3 premiers caractères`,
        },
      ],
    },
    {
      id: "booleens",
      title: "Le booléen : bool",
      blocks: [
        { type: "p", text: "Un booléen ne vaut que <code class=\"inline\">True</code> ou <code class=\"inline\">False</code> (avec une majuscule, contrairement à la plupart des autres mots Python). C'est le résultat naturel d'une comparaison." },
        {
          type: "code",
          label: "booleens.py",
          lang: "python",
          code: `majeur = True
en_stock = False
resultat = 5 > 3
print(resultat)         # True
print(type(resultat))   # <class 'bool'>`,
        },
      ],
    },
    {
      id: "apercu",
      title: "Un aperçu de ce qui vous attend",
      blocks: [
        { type: "p", text: "Python propose aussi des types plus riches pour regrouper plusieurs valeurs : la <strong>liste</strong> (une collection ordonnée, chapitre 8) et le <strong>dictionnaire</strong> (des paires clé-valeur, chapitre 9). Nous les découvrirons en détail plus tard — inutile de vous en préoccuper pour l'instant." },
      ],
    },
  ],
};
