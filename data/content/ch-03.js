window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["03"] = {
  lead: `Jusqu'ici, nos algorithmes exécutaient toutes leurs instructions dans l'ordre, sans exception. Les structures conditionnelles introduisent la première vraie prise de décision : exécuter tel bloc d'instructions plutôt que tel autre, selon qu'une condition est vraie ou fausse.`,
  sections: [
    {
      id: "principe",
      title: "Le principe du test",
      blocks: [
        { type: "p", text: "Une structure conditionnelle évalue une expression qui ne peut valoir que Vrai ou Faux (on parle d'expression booléenne), puis aiguille l'exécution vers un bloc d'instructions ou vers un autre selon le résultat." },
        {
          type: "syntax",
          title: "Syntaxe minimale",
          code: `Si <condition> Alors
  <instructions si la condition est vraie>
FinSi`,
        },
        { type: "p", text: "Le mot-clé <code class=\"inline\">FinSi</code> est obligatoire : il marque la fin du bloc conditionnel, exactement comme une accolade fermante dans d'autres langages. L'oublier est l'une des erreurs les plus fréquentes chez les débutants." },
      ],
    },
    {
      id: "sinon",
      title: "Prévoir l'alternative avec Sinon",
      blocks: [
        { type: "p", text: "Le mot-clé <code class=\"inline\">Sinon</code> introduit le bloc à exécuter lorsque la condition est fausse. Un Si peut donc avoir zéro, un, ou aucun Sinon — mais jamais plusieurs." },
        {
          type: "code",
          label: "exercice 3.1",
          code: `Variable n en Entier
Début
  Écrire "Entrez un nombre : "
  Lire n
  Si n > 0 Alors
    Écrire "Ce nombre est positif"
  Sinon
    Écrire "Ce nombre est négatif"
  FinSi
Fin`,
        },
        {
          type: "callout",
          variant: "warn",
          title: "Attention au cas particulier zéro",
          text: "Cet algorithme ignore volontairement le cas où n vaut 0 (ni positif, ni négatif au sens strict). Un algorithme rigoureux devrait le traiter explicitement — c'est justement l'objet du bloc SinonSi ci-dessous.",
        },
      ],
    },
    {
      id: "sinonsi",
      title: "Enchaîner les cas avec SinonSi",
      blocks: [
        { type: "p", text: "Dès qu'il y a plus de deux cas à distinguer, on enchaîne des <code class=\"inline\">SinonSi</code> : chaque condition n'est évaluée que si toutes les précédentes ont échoué. L'ordre des tests a donc de l'importance." },
        {
          type: "code",
          label: "catégories d'âge",
          code: `Variable Age en Entier
Début
  Écrire "Âge de l'enfant : "
  Lire Age
  Si Age <= 7 Alors
    Écrire "Poussin"
  SinonSi Age <= 9 Alors
    Écrire "Pupille"
  SinonSi Age <= 11 Alors
    Écrire "Minime"
  Sinon
    Écrire "Cadet"
  FinSi
Fin`,
        },
        { type: "p", text: "Remarquez qu'il suffit de tester <code class=\"inline\">Age <= 9</code> pour la catégorie Pupille : on sait déjà, à ce stade, que Age est strictement supérieur à 7 (sinon on serait entrés dans le premier bloc). Chaque SinonSi hérite implicitement de la négation de tous les tests précédents." },
        {
          type: "callout",
          variant: "tip",
          title: "Un seul bloc s'exécute",
          text: "Dans une chaîne Si / SinonSi / SinonSi / Sinon, un seul bloc est exécuté au maximum : dès qu'une condition est vraie, les suivantes ne sont même pas évaluées.",
        },
      ],
    },
    {
      id: "operateurs",
      title: "Les opérateurs de comparaison",
      blocks: [
        {
          type: "list",
          items: [
            "<code class=\"inline\">=</code> — égal à (attention : ce n'est plus l'affectation ici, mais bien un test)",
            "<code class=\"inline\">&lt;&gt;</code> — différent de",
            "<code class=\"inline\">&lt;</code> et <code class=\"inline\">&gt;</code> — strictement inférieur / supérieur",
            "<code class=\"inline\">&lt;=</code> et <code class=\"inline\">&gt;=</code> — inférieur ou égal / supérieur ou égal",
          ],
        },
        {
          type: "callout",
          variant: "pitfall",
          title: "= n'est pas ← ",
          text: "Dans une condition, <code class=\"inline\">Si A = B Alors</code> teste l'égalité sans jamais modifier A ni B. Ne le confondez pas avec l'affectation <code class=\"inline\">A ← B</code>, qui écrase A. Les deux symboles ont des rôles totalement différents et ne sont jamais interchangeables.",
        },
      ],
    },
    {
      id: "imbrication",
      title: "Imbriquer des structures conditionnelles",
      blocks: [
        { type: "p", text: "Un bloc Si peut lui-même contenir un autre Si : on parle d'imbrication (ou de nidification). C'est utile lorsque le deuxième test n'a de sens que dans certains cas précis du premier." },
        {
          type: "code",
          label: "test imbriqué",
          code: `Variables M, N en Entier
Début
  Écrire "Entrez deux nombres : "
  Lire M, N
  Si M > 0 Alors
    Si N > 0 Alors
      Écrire "Les deux nombres sont positifs"
    Sinon
      Écrire "Seul M est positif"
    FinSi
  Sinon
    Écrire "M n'est pas positif"
  FinSi
Fin`,
        },
        { type: "p", text: "Chaque niveau d'imbrication doit avoir son propre <code class=\"inline\">FinSi</code>. Une indentation soignée (décaler visuellement chaque niveau) est indispensable pour garder ce genre d'algorithme lisible — le prochain chapitre montrera aussi comment simplifier ce cas précis avec l'opérateur logique ET." },
      ],
    },
    {
      id: "erreurs",
      title: "Erreurs fréquentes",
      blocks: [
        {
          type: "compare",
          bad: {
            title: "FinSi manquant",
            code: `Si N > 0 Alors
  Écrire "Positif"
Sinon
  Écrire "Négatif"
// structure jamais refermée`,
          },
          good: {
            title: "Structure bien fermée",
            code: `Si N > 0 Alors
  Écrire "Positif"
Sinon
  Écrire "Négatif"
FinSi`,
          },
        },
        {
          type: "list",
          items: [
            "Utiliser <code class=\"inline\">=</code> quand on veut affecter (c'est <code class=\"inline\">←</code> qu'il faut) ou l'inverse.",
            "Empiler des Si indépendants là où un seul SinonSi suffirait, au risque d'évaluer inutilement des conditions déjà exclues.",
            "Oublier qu'un seul bloc s'exécute dans une chaîne SinonSi : si plusieurs cas doivent pouvoir se déclencher ensemble, il faut des Si séparés, pas un SinonSi.",
          ],
        },
      ],
    },
  ],
};
