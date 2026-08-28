window.CHAPTERS_CONTENT = window.CHAPTERS_CONTENT || {};
window.CHAPTERS_CONTENT["08"] = {
  lead: `PHP reprend, presque à l'identique, la syntaxe des boucles du C : while, do...while et for. Une quatrième boucle, foreach, spécialement conçue pour parcourir un tableau, sera vue au chapitre suivant en même temps que les tableaux eux-mêmes.`,
  sections: [
    {
      id: "while",
      title: "while",
      blocks: [
        {
          type: "translate",
          rightLang: "php",
          labelLeft: "Pseudo-code",
          labelRight: "PHP",
          left: `Variable I en Entier
Début
  I ← 0
  TantQue I < 5
    Écrire I
    I ← I + 1
  FinTantQue
Fin`,
          right: `<?php
$i = 0;
while ($i < 5) {
    echo $i;
    $i++;
}`,
        },
      ],
    },
    {
      id: "for",
      title: "for",
      blocks: [
        {
          type: "translate",
          rightLang: "php",
          labelLeft: "Pseudo-code",
          labelRight: "PHP",
          left: `Variable I en Entier
Début
  Pour I ← 0 à 4
    Écrire I
  I Suivant
Fin`,
          right: `<?php
for ($i = 0; $i <= 4; $i++) {
    echo $i;
}`,
        },
        { type: "p", text: "La boucle <code class=\"inline\">for</code> de PHP regroupe sur une seule ligne l'initialisation, la condition de poursuite et l'incrémentation — exactement comme en C." },
      ],
    },
    {
      id: "do-while",
      title: "do...while",
      blocks: [
        { type: "p", text: "PHP possède, comme le C, une structure <code class=\"inline\">do { } while()</code> native pour traduire Répéter...Jusqu'à — avec le même piège d'inversion de condition." },
        {
          type: "code",
          label: "do_while.php",
          lang: "php",
          code: `<?php
$n = 0;
do {
    echo "Tentative n°" . $n . "\\n";
    $n++;
} while ($n < 3);`,
        },
        {
          type: "callout",
          variant: "pitfall",
          title: "do...while inverse la condition",
          text: "do...while continue tant que sa condition reste vraie, alors que Répéter...Jusqu'à s'arrête dès qu'elle devient vraie : les deux conditions sont donc l'inverse l'une de l'autre — exactement comme observé pour le C.",
        },
      ],
    },
    {
      id: "break-continue",
      title: "break et continue",
      blocks: [
        { type: "p", text: "Comme en C et en Python, <code class=\"inline\">break</code> arrête complètement la boucle en cours, tandis que <code class=\"inline\">continue</code> passe directement au tour suivant." },
        {
          type: "code",
          label: "break_continue.php",
          lang: "php",
          code: `<?php
for ($i = 0; $i < 10; $i++) {
    if ($i == 5) {
        break;
    }
    if ($i % 2 == 0) {
        continue;
    }
    echo $i;
}
// affiche : 1 3`,
        },
      ],
    },
  ],
};
