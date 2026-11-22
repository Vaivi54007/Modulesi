/* =========================================================
   CONTENU — Partie 1 (modules 1 à 7)
   Construit à partir des notes et résumés du projet "Module Sed".
   ========================================================= */
window.MODULES = [];

/* ---------------------------------------------------------
   MODULE 1 — FONDATIONS
--------------------------------------------------------- */
MODULES.push({
  id: "fondations",
  emoji: "🧭",
  titre: "Fondations",
  sous: "Le bon état d'esprit avant toute technique",
  couleur: "#F5A35C",
  intro: `Avant les phrases, les regards ou les textos, il y a <b>celui qui agit</b>. Deux hommes peuvent dire exactement la même phrase et provoquer deux réactions opposées : ce n'est pas l'action qui compte, c'est l'énergie et le caractère de celui qui la fait. Ce module pose les bases de tout le reste.`,
  objectifs: [
    "Comprendre que la séduction et la communication sont des compétences, pas des dons",
    "Remplacer le « sérieux » (rigide, crispé) par la « sincérité » (vrai, léger)",
    "Définir la version de toi que tu veux devenir (rétro-ingénierie)",
    "Passer de la consommation de conseils à l'action"
  ],
  lecons: [
    {
      t: "Tout est une compétence (mindset de croissance)",
      p: `<p>Il existe deux façons de voir la vie :</p>
      <ul><li><b>Mindset fixe</b> : « Je suis comme ça, je suis timide, je ne sais pas parler aux filles. » L'échec remet en cause ta valeur, donc tu évites les défis.</li>
      <li><b>Mindset de croissance</b> : « Je ne sais pas <i>encore</i>. Je vais apprendre. » L'échec est une information, un entraînement.</li></ul>
      <p>Les gens à l'aise socialement ne sont pas nés comme ça : ils ont eu des milliers d'interactions. Celui qui raconte des blagues a eu ses bides. Celui qui parle facilement aux femmes s'est fait recaler. <b>La seule différence : ils ont essayé et continué.</b></p>
      <p>Ça vaut aussi pour le couple : penser « si je dois travailler sur ma relation, c'est qu'on n'est pas faits l'un pour l'autre » est une des croyances les plus destructrices (Aaron Beck). Une relation se construit brique par brique.</p>`,
      key: "Je ne suis pas nul, je suis débutant. Tout s'apprend par répétition."
    },
    {
      t: "Ton caractère détermine ton destin",
      p: `<p>Ton caractère agit comme un <b>filtre</b> entre toi et le monde : il décide de ce que tu remarques, de comment tu agis et donc de tes résultats. Chercher sans cesse la meilleure technique à l'extérieur, c'est se perdre.</p>
      <p><b>L'exercice de rétro-ingénierie :</b></p>
      <ol><li>Visualise clairement la vie que tu veux (une relation amoureuse, des amis, une aisance sociale…).</li>
      <li>Demande-toi : <i>« Quel type d'homme vit naturellement cette vie ? Comment il parle, marche, réagit, s'occupe de lui ? »</i></li>
      <li>Agis depuis ce personnage, dès aujourd'hui, dans les petites choses.</li></ol>
      <p>Tu peux le faire dans l'onglet <b>Profil → Ma future version</b>.</p>`,
      key: "Ce n'est pas l'action qui compte, c'est celui qui agit."
    },
    {
      t: "Sois sincère, pas sérieux",
      p: `<p>Le <b>sérieux</b> est lourd, rigide, crispé : il cherche à contrôler son image et prend tout personnellement. La <b>sincérité</b> est légère et vraie : elle n'a rien à prouver.</p>
      <p>Exemple de la danse : si tu danses « sérieusement », tu penses à comment tu as l'air, ton corps est raide, c'est gênant à voir. Si tu danses sincèrement, tu profites du moment — et c'est beau.</p>
      <p><b>Paradoxe :</b> quand tu arrêtes de vouloir plaire à tout prix, tu finis par plaire.</p>
      <p>4 moyens de devenir plus sincère :</p>
      <ul><li>Repère les situations où tu es crispé (devant une fille qui te plaît ?).</li>
      <li>Fais une activité que tu aimes juste pour toi, sans la montrer.</li>
      <li>Memento mori : tu vas mourir un jour. Ce qui te paraissait « grave » perd son poids.</li>
      <li>Entoure-toi de gens légers, qui ne prennent pas tout à cœur.</li></ul>`,
      key: "La sincérité, c'est la liberté de ne rien avoir à prouver."
    },
    {
      t: "Personne ne viendra te sauver (et c'est une bonne nouvelle)",
      p: `<p>Personne ne fera le premier pas à ta place, ne t'apprendra à parler, ne te présentera la femme de ta vie dans ton salon. Ce n'est pas triste : c'est de l'<b>autonomie</b>. Tu es le seul à écrire ton histoire.</p>
      <p>Le vrai danger, c'est de croire que tu as tout le temps : « un jour je serai plus à l'aise ». Ce jour n'arrive jamais tout seul. <b>La confiance n'apparaît pas avant l'action, elle apparaît grâce aux actions répétées.</b></p>
      <p>On regrette rarement ce qu'on a tenté, même raté. On regrette ce qu'on n'a jamais osé.</p>`,
      key: "Le rejet fait mal 5 minutes. Le regret peut durer des années."
    },
    {
      t: "Arrête de consommer, commence à pratiquer",
      p: `<p>Le piège de cette formation, c'est de tout lire et de ne rien faire. Tu peux regarder tout le contenu du monde : sans action, il n'y a pas de changement d'identité.</p>
      <ul><li><b>Il n'y a pas « la bonne option ».</b> Il y en a des centaines. Ton travail n'est pas de trouver la phrase parfaite, c'est de faire marcher celle que tu as choisie.</li>
      <li><b>Règle des 3 secondes</b> : entre la décision et l'action, pas plus de 3 secondes. Après, ton cerveau trouve des excuses.</li>
      <li><b>Loi des moyens</b> : plus tu tentes, plus tu te rapproches des réussites. Ce que tu contrôles, c'est le nombre de tentatives, pas le résultat.</li></ul>`,
      key: "Concentre-toi sur marcher plutôt que sur chercher."
    }
  ],
  exercices: [
    { t: "Écris ta future version", d: "Dans Profil → Ma future version : décris l'homme que tu veux devenir (comment il parle, se tient, aime, s'occupe de lui)." },
    { t: "Repère 3 moments où tu es « sérieux »", d: "Note dans ton journal 3 situations récentes où tu étais crispé, en train de contrôler ton image. Que ferait la version sincère de toi ?" },
    { t: "Une activité juste pour toi", d: "Cette semaine, fais une chose que tu aimes sans la montrer à personne (chanter, dessiner, marcher, danser seul…)." },
    { t: "La règle des 3 secondes, 1 journée", d: "Pendant 24 h, dès que tu décides de faire quelque chose, compte 3-2-1 et bouge. Note combien de fois tu l'as fait." }
  ],
  quiz: [
    { q: "Selon le mindset de croissance, un échec avec une fille signifie…", o: ["Que je ne suis pas fait pour ça", "Une information pour progresser", "Qu'elle était trop bien pour moi"], a: 1, w: "L'échec n'est pas un verdict sur ta valeur, c'est un retour d'expérience." },
    { q: "Quelle est la différence entre « sérieux » et « sincère » ?", o: ["Le sérieux contrôle son image, le sincère n'a rien à prouver", "Le sincère ne travaille pas", "Aucune"], a: 0, w: "Le sérieux est crispé sur son image ; le sincère est vrai et léger." },
    { q: "Quand apparaît la confiance ?", o: ["Avant d'agir", "Grâce aux actions répétées", "Quand on trouve la bonne technique"], a: 1, w: "La confiance est une conséquence de l'action, pas un préalable." }
  ],
  retenir: ["Tout est compétence", "Sincère > sérieux", "Deviens le personnage qui vit la vie que tu veux", "Action > théorie"]
});

/* ---------------------------------------------------------
   MODULE 2 — TIMIDITÉ
--------------------------------------------------------- */
MODULES.push({
  id: "timidite",
  emoji: "🌱",
  titre: "Timidité",
  sous: "Comprendre ton cerveau et te débloquer",
  couleur: "#7BC98F",
  intro: `La timidité n'est ni innée ni une fatalité : c'est une <b>peur apprise</b>, construite sur des années, qui se déconstruit de la même façon — petit pas par petit pas. Tu n'es pas « quelqu'un de timide », tu es quelqu'un qui a passé trop de temps à se retenir.`,
  objectifs: [
    "Distinguer timidité, introversion et anxiété sociale",
    "Comprendre l'effet projecteur et le cercle vicieux de la timidité",
    "Construire ton échelle de courage de 1 à 10",
    "Faire au moins une micro-sortie de zone de confort par jour"
  ],
  lecons: [
    {
      t: "Timide ≠ introverti",
      p: `<table class="tbl"><tr><th>Introverti</th><th>Timide</th></tr>
      <tr><td>Recharge ses batteries dans le calme</td><td>A peur du regard des autres</td></tr>
      <tr><td>Parle peu mais va droit au but</td><td>N'ose pas aller vers les autres</td></tr>
      <tr><td>Un trait de personnalité (une force)</td><td>Une peur qui se travaille</td></tr></table>
      <p>On peut être timide et extraverti, ou introverti et pas timide du tout. L'introversion est une <b>force tranquille</b> : grande écoute, analyse, parole concise. Tu n'as pas besoin de devenir bruyant. Tu as juste besoin d'oser.</p>
      <p>La <b>timidité</b>, c'est la peur d'être jugé pendant l'interaction. L'<b>anxiété sociale</b> est plus envahissante (elle continue après l'événement) : si elle t'empêche de vivre, en parler à un psy est une vraie force, pas une faiblesse.</p>`,
      key: "Garde ton calme d'introverti, travaille ta peur de timide."
    },
    {
      t: "L'effet projecteur : personne ne te regarde autant que tu le crois",
      p: `<p>Le plus gros mensonge de la timidité : <b>tout le monde te regarde</b>. En réalité, la personne en face se demande si elle a l'air ridicule, la fille que tu trouves jolie se demande si sa tenue est bizarre… Chacun est trop occupé par lui-même.</p>
      <p><b>Test :</b> essaie de te rappeler comment étaient habillées les 5 dernières personnes croisées aujourd'hui. Impossible ? Eux non plus ne se souviennent pas de toi.</p>
      <ul><li>Au bout de 5 minutes, les gens t'ont oublié et pensent à leur vie.</li>
      <li>Le jugement des autres n'a aucun impact sur ta valeur.</li>
      <li>Ton juge le plus cruel, c'est toi.</li></ul>`,
      key: "Tu n'es pas sous un projecteur. Tu es un humain parmi d'autres."
    },
    {
      t: "Le cercle vicieux (et comment le casser)",
      p: `<p>Je suis timide → je n'ose pas parler → je ne m'entraîne pas → la seule fois où je parle, c'est maladroit → je perds confiance → j'ose encore moins. Ce cercle est <b>auto-entretenu</b>.</p>
      <p>Avec le temps, l'évitement devient une habitude, puis ton cerveau te dit : « c'est ta personnalité ». Faux. C'est un <b>comportement répété</b>. On le casse avec des petites actions répétées dans l'autre sens.</p>
      <p>3 pièges qui nourrissent la timidité :</p>
      <ul><li><b>Le perfectionnisme</b> : attendre la phrase parfaite… et le sujet a déjà changé. Personne n'a de conversation parfaite. Dis-le, même imparfait.</li>
      <li><b>La comparaison</b> : utilise les gens à l'aise comme preuve que c'est possible, pas comme preuve que tu es nul.</li>
      <li><b>Le confort</b> : il te protège 5 minutes et te prive d'expériences qui pourraient changer ta vie.</li></ul>`,
      key: "Ta timidité n'est pas ton identité, c'est une habitude."
    },
    {
      t: "L'échelle de courage (la feuille blanche)",
      p: `<p>Méthode d'un champion d'éloquence pour déconstruire la timidité :</p>
      <ol><li>Note <b>tout</b> ce qui te fait peur socialement (50, 100, 200 actions) : demander l'heure, renvoyer un plat, dire bonjour au voisin, demander un numéro, prendre la parole en groupe…</li>
      <li>Classe chaque action de <b>1 à 10</b> en difficulté.</li>
      <li>Commence par les 1, puis monte. Ne saute pas les marches.</li></ol>
      <p>Exemple d'un défi « jeu vidéo » sur 6 jours (500 approches en 1 an) :</p>
      <ol><li>Complimenter un homme en passant</li><li>Arrêter un homme et le complimenter</li><li>… + lancer une discussion</li><li>Complimenter une femme en passant</li><li>Arrêter une femme et la complimenter</li><li>… + lancer une discussion</li></ol>
      <p>Résultat de l'auteur : sur plus de 500 approches, <b>moins de 10 % de rejets</b>. La plupart de nos peurs sont des hypothèses jamais vérifiées.</p>`,
      key: "Petits pas, chaque jour. La zone d'inconfort rétrécit."
    },
    {
      t: "La boîte à outils anti-trac",
      p: `<ul><li><b>Tu n'es pas seul</b> : 4 adultes sur 10 se disent timides.</li>
      <li><b>Ne lutte pas contre le stress</b> : accueille-le. « Ok, j'ai le cœur qui bat. C'est normal. » Il passe plus vite.</li>
      <li><b>Respire bas et lentement</b> (ventre). Ça stabilise le visage et la voix.</li>
      <li><b>Agis avant 2-3 secondes</b>, avant que le mental ne fabrique des excuses.</li>
      <li><b>Souris</b> : ton corps envoie un signal de sécurité à ton cerveau.</li>
      <li><b>Nomme ta nervosité à voix haute</b> : « Je vais être honnête, j'ai failli ne pas venir te parler. » Ça désamorce tout et te rend humain.</li>
      <li><b>Une phrase d'ancrage</b> : « Je m'aime assez pour être à l'aise même quand je ne suis pas à l'aise. »</li>
      <li><b>Loi des hypothèses</b> : quand une peur arrive, demande-toi « qu'est-ce qui prouve que c'est vrai ? »</li>
      <li><b>Pas d'alcool pour oser</b> : le jour où la bonne personne sera là et que tu n'auras pas bu, il faudra savoir y aller sobre.</li></ul>`,
      key: "La résistance que tu ressens est le signe que tu es sur le point de grandir."
    },
    {
      t: "Humaniser l'autre",
      p: `<p>La timidité repose sur une idée cachée : les autres seraient <i>différents</i> de toi — jamais seuls, jamais maladroits, sans peurs. C'est faux. Tout le monde tâtonne dans le noir, nous sommes tous de « grands enfants » avec nos insécurités.</p>
      <p><b>Ta mission la prochaine fois que tu te sens timide :</b> trouve <b>une chose que tu apprécies</b> chez la personne et <b>une chose que vous avez en commun</b>.</p>
      <p>Et fixe-toi une intention simple avant une soirée : « Je veux juste avoir <b>une</b> conversation intéressante. » Une fois atteinte, tout le reste est du bonus.</p>`,
      key: "La femme en face aussi a peur, aussi doute, aussi veut qu'on lui parle."
    }
  ],
  exercices: [
    { t: "Remplis ton échelle de courage", d: "Onglet Défis → ajoute au moins 15 peurs sociales et note-les de 1 à 10." },
    { t: "Le test du projecteur", d: "Ce soir, essaie de te rappeler la tenue de 5 personnes croisées aujourd'hui. Note la leçon." },
    { t: "3 « bonjour » francs", d: "Dis bonjour en regardant dans les yeux avec un sourire à 3 inconnus (boulanger, voisin, caissier)." },
    { t: "Demande l'heure à quelqu'un", d: "Niveau 1-2 de l'échelle. Juste demander l'heure, sourire, remercier." },
    { t: "Le défi des 6 jours", d: "Suis la progression : compliment en passant à un homme → … → arrêter une femme, compliment + discussion." },
    { t: "Une chose appréciée + un point commun", d: "Lors de ta prochaine interaction, trouve consciemment ces deux éléments chez la personne." }
  ],
  quiz: [
    { q: "L'effet projecteur, c'est…", o: ["Croire que tout le monde nous observe alors que non", "Être au centre de l'attention", "Une technique de séduction"], a: 0, w: "Chacun est occupé par lui-même : on te remarque beaucoup moins que tu ne le crois." },
    { q: "Un introverti est forcément timide.", o: ["Vrai", "Faux"], a: 1, w: "L'introversion est une préférence pour le calme ; la timidité est une peur du jugement." },
    { q: "Quelle est la meilleure façon de vaincre la timidité ?", o: ["Attendre d'être prêt", "Boire un verre avant", "Des petits pas progressifs et répétés"], a: 2, w: "On élargit la zone de confort marche par marche." },
    { q: "Sur 500 approches, l'auteur du défi a été rejeté environ…", o: ["80 % du temps", "50 % du temps", "Moins de 10 % du temps"], a: 2, w: "Nos peurs sont des hypothèses non vérifiées. La réalité est bien plus douce." }
  ],
  retenir: ["Timidité = habitude, pas identité", "Effet projecteur", "Échelle 1 → 10", "Nomme ta nervosité", "Agis avant 3 secondes"]
});

/* ---------------------------------------------------------
   MODULE 3 — CONFIANCE & ESTIME DE SOI
--------------------------------------------------------- */
MODULES.push({
  id: "confiance",
  emoji: "💎",
  titre: "Confiance & estime de soi",
  sous: "Devenir ton propre point d'appui",
  couleur: "#8FB8F2",
  intro: `La confiance n'est pas quelque chose qu'on <i>a</i>, c'est quelque chose qu'on <b>fait</b>. Elle se construit en gagnant des petites batailles contre soi-même et en tenant ses promesses. Et l'estime de soi, c'est la façon dont tu te traites quand personne ne regarde.`,
  objectifs: [
    "Construire une confiance basée sur des preuves, pas des illusions",
    "Arrêter de mettre les filles qui te plaisent sur un piédestal",
    "Ne plus prendre les réactions des autres personnellement",
    "Prendre soin de toi (corps, hygiène, style) comme d'une personne importante"
  ],
  lecons: [
    {
      t: "La confiance = des preuves accumulées",
      p: `<p>Les affirmations positives seules ne suffisent pas. La confiance absolue vient d'une chose : <b>tu te fixes un objectif et tu le tiens</b>. Encore et encore. Chaque promesse tenue envers toi-même est une preuve que tu es capable. Chaque promesse non tenue t'enlève du respect pour toi.</p>
      <ul><li>Fixe-toi des objectifs <b>réalisables</b> (10 pompes, 1 bonjour, 1 page de journal).</li>
      <li>Tiens-les, même quand tu n'as pas envie.</li>
      <li>Note tes victoires (onglet Journal → Victoires).</li></ul>
      <p>La compétence crée la confiance : sport, lecture, discipline, petites victoires quotidiennes… La confiance construite dans un domaine déborde sur les autres.</p>`,
      key: "Chaque promesse tenue envers toi-même est une brique de confiance."
    },
    {
      t: "Arrête de sacraliser",
      p: `<p>Tant que tu <b>idéalises</b> ce que tu désires, tu te minimises face à ce désir. Et tant que tu te minimises, tu ne peux pas l'obtenir. Une femme qui te plaît n'est pas « au-dessus » de toi : c'est un être humain qui doute, qui a peur, qui se maquille pour se rassurer, qui veut aussi qu'on vienne lui parler.</p>
      <ul><li>Tu as autant de valeur qu'elle. Ni plus, ni moins : <b>égal à égal</b>.</li>
      <li>Avoir des amies femmes aide énormément à désacraliser.</li>
      <li>Parle à une fille qui te plaît comme à une personne que tu respectes, pas comme à une déesse.</li></ul>`,
      key: "Égal à égal. Ni piédestal, ni mépris."
    },
    {
      t: "Ne rien prendre personnellement",
      p: `<p>Quand quelqu'un t'ignore, te répond froidement ou refuse, tu as tendance à chercher ce qui ne va pas chez toi. Mais <b>le comportement des autres est une fenêtre sur leur monde intérieur</b>, pas un verdict sur ta valeur.</p>
      <p>Elle peut refuser parce qu'elle est en couple, fatiguée, en deuil, pressée, pas d'humeur… Elle ne te connaît même pas. Le rejet n'est pas un échec, c'est une <b>redirection</b> : pourquoi vouloir être avec quelqu'un qui ne veut pas être avec toi ?</p>
      <p>C'est ça, le vrai <b>détachement</b> : pas l'indifférence, mais un ancrage en toi qui fait que ta valeur ne dépend pas de la réponse de l'autre.</p>`,
      key: "Ta valeur ne se vote pas à chaque interaction."
    },
    {
      t: "Retrouver l'estime de soi",
      p: `<ul><li><b>Savoir se dire « je t'aime »</b> : traite-toi comme tu traiterais ton enfant ou ton meilleur ami. Parle-toi avec bienveillance.</li>
      <li><b>Vivre selon tes valeurs</b> : ce qui compte vraiment pour toi (onglet Profil → Mes valeurs).</li>
      <li><b>Te mettre au service des autres</b> : aider donne du sens et de la valeur.</li>
      <li><b>Ne pas te mettre sur un piédestal non plus</b> : « je suis à la fois imparfait et extraordinaire ».</li>
      <li><b>Dire non</b> quand c'est non. Ton respect ne se négocie pas. Les gens se permettent ce que tu leur permets.</li>
      <li><b>Exercice du miroir</b> : matin et soir, regarde-toi dans les yeux et dis à voix haute 3 phrases vraies et valorisantes. Inconfortable au début, puissant après 2 semaines.</li></ul>`,
      key: "La valeur que les autres te donnent suit celle que tu te donnes."
    },
    {
      t: "Prendre soin de toi : ta présence parle avant toi",
      p: `<p>Ton apparence n'est pas superficielle : c'est un message de <b>respect de toi</b>. Un homme beau, c'est d'abord un homme propre et soigné.</p>
      <ul><li><b>Hygiène</b> : douche (en frottant), haleine (gratte-langue, fil dentaire, chewing-gum), cheveux propres, draps changés chaque semaine, serviette tous les 2-3 jours, vêtements bien secs.</li>
      <li><b>Parfum</b> : un parfum signature (eau de parfum pour tous les jours). Un parfum ne masque pas une mauvaise odeur, il l'amplifie.</li>
      <li><b>Coiffure</b> : un coiffeur qui propose une coupe adaptée à ton visage. Sourcils et barbe entretenus.</li>
      <li><b>Style</b> : une garde-robe simple qui te va, idéalement choisie avec l'avis d'une amie.</li>
      <li><b>Corps</b> : sport régulier (musculation, sport de combat), 7 h de sommeil, eau, alimentation simple.</li></ul>
      <p>Pas pour impressionner : pour <b>te sentir bien</b>. Quand tu te sens bien et sens bon, les gens le ressentent instantanément.</p>`,
      key: "Travaille ta présence, pas ton image."
    }
  ],
  exercices: [
    { t: "3 promesses tenues cette semaine", d: "Fixe-toi 3 petits engagements (ex. sport, lecture, 1 conversation) et tiens-les. Note-les en Victoires." },
    { t: "Le miroir, 14 jours", d: "Matin et soir, 3 phrases vraies et valorisantes à voix haute en te regardant dans les yeux." },
    { t: "Liste tes valeurs", d: "Profil → Mes valeurs : classe tes 5 valeurs les plus importantes dans l'ordre." },
    { t: "Audit hygiène & style", d: "Gratte-langue, fil dentaire, parfum, draps, coupe : coche ce qui est en place, planifie le reste." },
    { t: "Dire non une fois", d: "Refuse poliment une chose que tu acceptes d'habitude par peur de déplaire (méthode sandwich : + / non / +)." }
  ],
  quiz: [
    { q: "D'où vient une confiance solide ?", o: ["Des compliments des autres", "Des promesses tenues envers soi-même", "D'une bonne technique"], a: 1, w: "La confiance est une accumulation de preuves concrètes." },
    { q: "Une fille te répond froidement. Que te dis-tu ?", o: ["Je suis nul", "Son comportement parle de son monde intérieur, pas de ma valeur", "Il faut que j'insiste"], a: 1, w: "Ne rien prendre personnellement, c'est récupérer ton pouvoir." },
    { q: "Pourquoi éviter de mettre une fille sur un piédestal ?", o: ["Parce qu'il faut la rabaisser", "Parce que ça te place en dessous et crée une relation déséquilibrée", "Ce n'est pas un problème"], a: 1, w: "L'objectif est d'être égal à égal — ni au-dessus, ni en dessous." }
  ],
  retenir: ["Confiance = preuves", "Égal à égal", "Rien n'est personnel", "Prends soin de toi"]
});

/* ---------------------------------------------------------
   MODULE 4 — ÉMOTIONS
--------------------------------------------------------- */
MODULES.push({
  id: "emotions",
  emoji: "❤️",
  titre: "Émotions",
  sous: "Ressentir, nommer, exprimer, ouvrir ton cœur",
  couleur: "#F07A8E",
  intro: `Pour tomber amoureux et laisser quelqu'un t'aimer, il faut pouvoir <b>ressentir</b> et <b>montrer</b> ce que tu ressens. Une femme n'écoute pas seulement ce que tu dis : elle écoute ce que tu ressens. Ce module t'apprend à te reconnecter à tes émotions, à mettre des mots dessus et à les partager au bon moment.`,
  objectifs: [
    "Enrichir ton vocabulaire émotionnel pour mieux te comprendre",
    "Exprimer un ressenti sans accuser (« je me sens… »)",
    "Rester stable face aux émotions (les tiennes et celles des autres)",
    "Oser la vulnérabilité au bon moment pour créer un vrai lien"
  ],
  lecons: [
    {
      t: "Mettre des mots, c'est déjà apaiser",
      p: `<p>Plus tu as de vocabulaire, plus tu as d'intelligence émotionnelle. Des études montrent que <b>nommer précisément ce qu'on ressent</b> (« angoissé », « frustré », « déçu » au lieu de « stressé » ou « mal ») réduit l'activité des zones cérébrales de l'émotion négative.</p>
      <p>Les 6 grandes familles et quelques nuances :</p>
      <ul><li><b>Joie</b> : soulagé, fier, reconnaissant, enthousiaste, serein, amusé, touché</li>
      <li><b>Tristesse</b> : déçu, seul, nostalgique, découragé, blessé, vide</li>
      <li><b>Peur</b> : anxieux, intimidé, inquiet, mal à l'aise, vulnérable, tendu</li>
      <li><b>Colère</b> : frustré, agacé, irrité, vexé, jaloux, impuissant</li>
      <li><b>Honte</b> : gêné, ridicule, coupable, pas à la hauteur</li>
      <li><b>Amour</b> : attiré, attendri, en confiance, proche, admiratif, désir</li></ul>
      <p>Le <b>Journal des émotions</b> de l'app te propose cette roue pour t'entraîner chaque jour.</p>`,
      key: "Ce qui est nommé peut être apprivoisé."
    },
    {
      t: "Exprimer sans accuser : le « je » au lieu du « tu »",
      p: `<p>La communication avancée, c'est passer du <b>reproche</b> au <b>ressenti</b>. Le reproche met l'autre sur la défensive ; le ressenti l'invite à te comprendre.</p>
      <p>Formule simple : <b>Quand [fait précis], je me sens [émotion], parce que j'ai besoin de [besoin]. Est-ce que tu pourrais [demande] ?</b></p>`,
      ex: [
        ["Tu es toujours en retard, t'en as rien à faire de moi.", "Quand j'attends seul longtemps, je me sens un peu mis de côté. J'aime qu'on profite du temps ensemble. Tu peux me prévenir quand tu as du retard ?"],
        ["Tu ne m'écoutes jamais.", "Là, j'ai l'impression de ne pas être écouté, et ça me frustre parce que c'est important pour moi."]
      ],
      key: "Parle de ce que tu ressens, pas de ce que l'autre « est »."
    },
    {
      t: "Le rocher sain : stabilité émotionnelle",
      p: `<p>Être « comme un rocher », ce n'est <b>pas être froid ou indifférent</b>. C'est ne pas être emporté par chaque vague : un refus, un silence, une humeur, une critique.</p>
      <ul><li>Elle refuse un rendez-vous ? « Pas de souci, une autre fois. » Calme, sans bouder, sans insister.</li>
      <li>Elle est triste ou en colère ? Tu restes présent et calme, tu n'as pas besoin de « réparer » tout de suite, ni de t'effondrer avec elle.</li>
      <li>Elle te taquine ? Tu ris, tu ne te vexes pas, tu ne te justifies pas.</li>
      <li><b>Seule exception</b> : un vrai manque de respect. Là, tu poses calmement tes limites.</li></ul>
      <p>Ton calme rassure : <b>si tu es détendu, elle se détend ; si tu es calme, elle se sent en sécurité.</b></p>`,
      key: "Stable ne veut pas dire froid. Stable veut dire sûr."
    },
    {
      t: "Émotionnel ou rationnel ? (la synchronisation)",
      p: `<p>Beaucoup de malentendus viennent d'un décalage : quand quelqu'un se confie, il cherche soit un <b>soutien émotionnel</b> (être écouté, compris), soit une <b>solution</b>. Répondre par une solution à une demande d'écoute = l'autre se sent incompris. C'est le « syndrome du sauveur ».</p>
      <ul><li><b>Émotionnel</b> → écoute, reformule, valide : « Ça a dû être vraiment frustrant. »</li>
      <li><b>Rationnel</b> → propose une solution.</li>
      <li>Dans le doute, demande : « Tu veux que je t'aide à trouver une solution, ou tu as juste besoin de vider ton sac ? »</li></ul>`,
      key: "Avant de réparer, écoute."
    },
    {
      t: "La vulnérabilité : la porte du cœur",
      p: `<p><b>Effet pratfall</b> : une petite erreur assumée te rend plus humain et plus attachant. Une blague qui tombe à plat, un verre renversé : souris, assume, continue. Personne ne tombe amoureux d'un robot parfait.</p>
      <p>Mais la vulnérabilité se <b>dose dans le temps</b> :</p>
      <ul><li>Au début : petites confidences légères (« j'ai mis 2 heures à choisir mon t-shirt »).</li>
      <li>Quand la confiance s'installe : ce qui compte pour toi, tes rêves, tes peurs.</li>
      <li>Dans une relation : tes failles, ton passé, tes besoins profonds.</li></ul>
      <p>On ne déverse pas toutes ses blessures à une inconnue — mais on ne reste pas une forteresse non plus. <b>C'est en partageant qu'on crée l'intimité.</b></p>`,
      key: "Être vrai donne à l'autre la permission d'être vrai avec toi."
    },
    {
      t: "Lâcher prise et revenir au présent",
      p: `<p>Face à toute situation, tu as 3 options : <b>l'accepter</b>, <b>la modifier</b>, ou <b>t'en éloigner</b>. Tout le reste (ruminer, s'inquiéter) n'est que souffrance mentale.</p>
      <p>« Si le problème a une solution, rien ne sert de s'inquiéter. S'il n'en a pas, s'inquiéter ne sert à rien. »</p>
      <ul><li>Respire à pleins poumons.</li>
      <li>Remets en perspective : dans 5 ans, est-ce que ça comptera ?</li>
      <li>Gratitude : tu as déjà tellement.</li>
      <li>Reviens au corps et aux 5 sens : qu'est-ce que je vois, j'entends, je sens maintenant ?</li></ul>
      <p><i>Prière de la sérénité : « Donne-moi la force de changer ce que je peux, la sérénité d'accepter ce que je ne peux pas, et la sagesse de distinguer les deux. »</i></p>
      <p class="note">⚠️ Si des blocages anciens (honte, traumas) remontent fort, travailler avec un psy ou un thérapeute est la meilleure décision. Ce n'est pas une faiblesse.</p>`,
      key: "Accepter, modifier ou partir. Ruminer n'est pas une option."
    },
    {
      t: "Se détacher sainement d'une attirance",
      p: `<p>Quand tu t'accroches trop à quelqu'un, demande-toi : <b>« Qu'est-ce qu'elle me faisait ressentir ? »</b> (de la joie, de l'importance, de l'aventure…). Puis cherche à <b>reproduire ce ressenti dans ta propre vie</b>, sans elle : passions, amis, projets.</p>
      <p>Tu deviens alors quelqu'un qui <i>partage</i> son bonheur au lieu de le <i>mendier</i>. C'est la base d'une relation saine.</p>`,
      key: "Ton bonheur doit avoir plusieurs sources, pas une seule personne."
    }
  ],
  exercices: [
    { t: "Journal des émotions, 7 jours", d: "Chaque soir, une entrée dans Journal → Émotions : l'émotion précise, l'intensité, ce qui l'a déclenchée, le besoin derrière." },
    { t: "Reformule 3 reproches", d: "Prends 3 reproches que tu pourrais faire à quelqu'un et réécris-les en « Quand… je me sens… j'ai besoin… »." },
    { t: "Une mini-confidence", d: "Dans une conversation, partage une petite chose vraie sur toi (une gêne, un plaisir simple, une galère drôle)." },
    { t: "Demande : soutien ou solution ?", d: "La prochaine fois qu'on se confie à toi, demande ce dont la personne a besoin avant de conseiller." },
    { t: "5 minutes de présence", d: "Assieds-toi 5 minutes sans téléphone. Observe tes 5 sens et ta respiration. Note ce que tu ressens." }
  ],
  quiz: [
    { q: "Pourquoi nommer précisément une émotion ?", o: ["Ça la rend plus forte", "Ça aide à l'apaiser et à la comprendre", "Ça ne sert à rien"], a: 1, w: "L'étiquetage émotionnel réduit l'intensité de l'émotion négative." },
    { q: "Quelle phrase exprime un ressenti sans accuser ?", o: ["Tu m'ignores tout le temps", "Quand tu ne réponds pas, je me sens mis de côté", "T'es vraiment égoïste"], a: 1, w: "Le « je me sens » ouvre le dialogue." },
    { q: "Être un « rocher », c'est…", o: ["Être froid et distant", "Rester stable et calme sans être emporté", "Ne jamais montrer d'émotions"], a: 1, w: "La stabilité rassure ; la froideur éloigne." },
    { q: "Une amie se plaint de sa journée. Le meilleur premier réflexe ?", o: ["Lui donner 3 solutions", "Écouter et reformuler, puis demander ce dont elle a besoin", "Raconter ta propre journée"], a: 1, w: "Détecte si c'est une demande émotionnelle ou rationnelle." }
  ],
  retenir: ["Nomme précisément", "Je me sens… plutôt que Tu es…", "Stable ≠ froid", "Vulnérabilité dosée", "Accepter / modifier / partir"]
});

/* ---------------------------------------------------------
   MODULE 5 — COMMUNICATION : LES BASES
--------------------------------------------------------- */
MODULES.push({
  id: "communication",
  emoji: "👂",
  titre: "Communication — Les bases",
  sous: "Écouter vraiment : le vrai cheat code",
  couleur: "#5CC6D0",
  intro: `Tu as deux oreilles et une bouche : fais le calcul. Le plus grand secret des gens « intéressants », c'est qu'ils sont <b>intéressés</b>. Une femme ne tombe pas amoureuse de ce que tu dis, mais de <b>comment elle se sent avec toi</b> : écoutée, vue, comprise. C'est ton point faible ? Tant mieux : c'est le plus facile à travailler.`,
  objectifs: [
    "Maîtriser l'écoute active (encouragements, écho, reformulation)",
    "Tenir le ratio 70 % écoute / 30 % parole",
    "Déplacer le projecteur de toi vers l'autre",
    "Parler avec plus de calme, de clarté et de conviction"
  ],
  lecons: [
    {
      t: "L'écoute active, en 4 gestes",
      p: `<ol><li><b>Les encouragements minimaux</b> : « Mhmm », « Ah bon ? », « Sérieux ? », « Raconte ! », un hochement de tête. Ça invite l'autre à continuer sans que tu aies à faire de discours.</li>
      <li><b>L'écho</b> : répète les 2-3 derniers mots importants sur un ton intrigué. Elle : « J'ai hâte que ce soit le week-end. » Toi : « Hâte que ce soit le week-end ? Il se passe quoi ? »</li>
      <li><b>La reformulation</b> : « Si je comprends bien, tu as l'impression que ton boss ne respecte pas ton temps ? » Elle répond : « Oui, exactement ! Et en plus… »</li>
      <li><b>La présence</b> : téléphone rangé, regard posé, corps tourné vers elle. Tu ne prépares pas ta réponse pendant qu'elle parle.</li></ol>`,
      key: "Écouter pour comprendre, pas pour répondre."
    },
    {
      t: "Les appâts : il y a toujours deux niveaux",
      p: `<p>Les gens lancent sans cesse des <b>appâts</b> : un mot dit avec plus d'énergie, un détail lâché en passant. Une phrase comme « je voyage au moins une fois par an » <i>attend</i> une relance.</p>
      <p>Il y a toujours deux niveaux dans une conversation : ce que la personne dit en surface, et ce qu'elle essaie d'exprimer en dessous. <b>Repère le mot sur lequel sa voix accélère</b> ou sur lequel elle sourit : c'est là que se trouve son trésor.</p>`,
      ex: [
        ["Elle : « Je suis prof de SVT, et là je passe mon permis moto. » — Toi : « Ah cool. Tu habites où ? »", "Toi (tu as vu qu'elle s'est allumée sur « moto ») : « Attends, la moto ! Tu en es où ? »"]
      ],
      key: "Suis le mot qui brille dans ses yeux."
    },
    {
      t: "Déplace le projecteur",
      p: `<p>L'erreur fatale : parler trop de toi, de tes histoires, de tes réussites. Parler de soi active le circuit de la récompense du cerveau (étude Harvard) : <b>les gens adorent parler d'eux</b>. Laisse-lui ce plaisir.</p>
      <ul><li>Repère ce qui l'intéresse, ce qui la passionne, ce qui la préoccupe.</li>
      <li>Mais <b>ne fais pas l'interview</b> : partage aussi un peu. « Ah, ça me fait penser à… » Une phrase suffit, puis tu lui rends la balle.</li>
      <li>Ratio indicatif : <b>70 % écouter / 30 % parler</b>.</li></ul>
      <p>Le but final : qu'en partant elle se trouve <b>plus intéressante qu'en arrivant</b>.</p>`,
      key: "Si tu ne retiens qu'une chose : déplace le projecteur de toi vers l'autre."
    },
    {
      t: "Le tempo : parler moins vite, avec conviction",
      p: `<ul><li><b>Ralentis</b> légèrement, surtout quand le sujet devient personnel. La précipitation est perçue comme de l'insécurité ; le calme comme de l'assurance.</li>
      <li><b>Arrête de t'excuser</b> sans raison (« désolé de te déranger », « je sais pas si c'est intéressant mais… »). Ça dit « ma présence dérange ».</li>
      <li><b>Propose au lieu de laisser en suspens</b> : pas « comme tu veux », mais « je propose qu'on aille là ».</li>
      <li><b>Parle avec conviction</b> : même calmement, on sent quand tu crois à ce que tu dis.</li>
      <li><b>Lis à voix haute</b> 10-15 minutes : ça échauffe la voix et t'habitue à t'entendre parler.</li></ul>`,
      key: "Lent, clair, assumé."
    },
    {
      t: "Éthos, logos, pathos (le secret d'Aristote)",
      p: `<p>Une communication forte combine 3 piliers :</p>
      <ul><li><b>Éthos</b> (crédibilité) : pourquoi t'écouter ? Ton vécu, ta cohérence.</li>
      <li><b>Logos</b> (logique) : est-ce clair et vrai ?</li>
      <li><b>Pathos</b> (émotion) : est-ce qu'on s'en souvient ? Le cerveau retient bien mieux une histoire qu'un chiffre.</li></ul>
      <p>Pour structurer ce que tu dis (en groupe, au travail, ou pour raconter) : <b>idée principale d'abord</b>, puis 2-3 raisons, puis les détails. Pas l'inverse.</p>
      <p>Les 4 vertus du discours : <b>convenance</b> (adapté au public), <b>correction</b> (moins de « euh »), <b>clarté</b>, <b>élégance</b> (vocabulaire) — + un 5e : <b>donner un peu de soi</b>.</p>`,
      key: "Une idée bien communiquée bat une meilleure idée mal dite."
    },
    {
      t: "Le mimétisme et le prénom",
      p: `<ul><li><b>Calibre-toi sur son énergie</b> : si elle est calme, ne sois pas survolté ; si elle est pétillante, ne sois pas éteint. Adaptation subtile, pas imitation.</li>
      <li><b>Utilise son prénom</b>… une ou deux fois, naturellement : « C'est un super point, Sarah. » Entendre son prénom active une sensation de reconnaissance. Pas à chaque phrase (ça devient bizarre).</li>
      <li><b>Les profils</b> : certains sont directs et orientés résultat (va droit au but), d'autres enthousiastes (amuse-toi avec eux), d'autres calmes (avance à leur rythme), d'autres analytiques (sois précis). Observe et adapte-toi.</li></ul>`,
      key: "Se mettre sur la même fréquence, c'est déjà se connecter."
    }
  ],
  exercices: [
    { t: "Une conversation 100 % écoute", d: "Avec un proche, pendant 10 minutes : uniquement encouragements, écho et reformulation. Observe combien il se livre." },
    { t: "Chasse aux appâts", d: "Dans 3 conversations, repère le mot sur lequel la personne s'anime et relance dessus." },
    { t: "Zéro excuse inutile", d: "Une journée sans « désolé de déranger / je sais pas si… ». Remplace par une phrase directe." },
    { t: "Lecture à voix haute", d: "10 minutes par jour pendant 7 jours. Articule, ralentis, fais des pauses." },
    { t: "Le prénom, une fois", d: "Retiens et utilise naturellement le prénom de 3 personnes rencontrées (serveur, collègue, nouvelle connaissance)." }
  ],
  quiz: [
    { q: "Qu'est-ce que la technique de l'écho ?", o: ["Parler fort", "Répéter ses derniers mots importants pour l'inviter à développer", "Répéter ce qu'on a déjà dit"], a: 1, w: "L'écho montre que tu écoutes et relance naturellement." },
    { q: "Le ratio indicatif écoute/parole ?", o: ["30/70", "50/50", "70/30"], a: 2, w: "Écoute davantage, mais partage un peu pour ne pas faire l'interview." },
    { q: "Pourquoi éviter de t'excuser sans raison ?", o: ["C'est impoli", "Ça envoie le message que ta présence dérange", "Ça fait trop parler"], a: 1, w: "Assume ta place, poliment mais sans t'effacer." }
  ],
  retenir: ["Mhmm, écho, reformulation", "Suis le mot qui brille", "Déplace le projecteur", "Lent et assumé"]
});

/* ---------------------------------------------------------
   MODULE 6 — L'ART DES QUESTIONS
--------------------------------------------------------- */
MODULES.push({
  id: "questions",
  emoji: "❓",
  titre: "L'art des questions",
  sous: "Des questions qui ouvrent le cœur, pas des interrogatoires",
  couleur: "#B49CF0",
  intro: `« Juge un homme par ses questions plutôt que par ses réponses » (Voltaire). La qualité de tes questions détermine la qualité de tes conversations. Des chercheurs (Berkeley, Harvard) ont observé que ce qui donne envie de revoir quelqu'un après un premier rendez-vous, ce n'est ni le physique ni la taille : c'est la fréquence des <b>questions de relance</b>.`,
  objectifs: [
    "Passer du « quoi » au « pourquoi » et au « qu'est-ce qui »",
    "Arrêter l'interview façon journaliste",
    "Monter progressivement en profondeur (surface → personnel → intime)",
    "Savoir esquiver une question gênante avec élégance"
  ],
  lecons: [
    {
      t: "Pourquoi > Quoi",
      p: `<p>Les questions en <b>quoi</b> (métier, âge, ville) restent en surface. Les questions en <b>pourquoi / qu'est-ce qui</b> vont vers les motivations, les ressentis : c'est là que la connexion naît.</p>
      <p>Règle d'or : évite « est-ce que… » (réponse oui/non), préfère « qu'est-ce qui… ».</p>`,
      ex: [
        ["Tu fais quoi dans la vie ? — Vétérinaire. — Ah cool, depuis longtemps ?", "Vétérinaire ? Qu'est-ce qui t'a donné envie de faire ce métier ?"],
        ["Tu fais du sport ?", "Qu'est-ce qui te motive à faire du sport ?"],
        ["T'as fait quoi aujourd'hui ?", "Qu'est-ce qui t'a fait sourire aujourd'hui ?"]
      ],
      key: "Le quoi informe, le pourquoi connecte."
    },
    {
      t: "Le piège de l'interview",
      p: `<p>« Tu viens d'où ? Tu fais quoi ? T'as quel âge ? Tu connais qui ici ? » → tu ressembles à un formulaire. Elle répond, tu hoches la tête, question suivante : dynamique froide, « sympa mais pas connecté ».</p>
      <p><b>La recette :</b> Question → écoute → <b>réaction / affirmation / mini-partage</b> → relance sur SA réponse.</p>`,
      ex: [
        ["Tu viens d'où ? — Lyon. — Ok. Et tu fais quoi ?", "Tu viens d'où ? — Lyon. — Ah, la ville où on mange trop bien. Tu es plutôt bouchon ou tu fais partie des rebelles qui fuient la cervelle de canut ?"]
      ],
      key: "Chaque nouvelle question doit naître de sa dernière réponse."
    },
    {
      t: "5 sujets qui suscitent l'émotion",
      p: `<ol><li><b>Ses expériences</b> : « C'était quand ta dernière vraie aventure ? »</li>
      <li><b>Ses rêves</b> : « Si tu étais sûre de ne pas échouer, tu ferais quoi ? »</li>
      <li><b>Ce qu'elle aime faire</b> : « Qu'est-ce que tu aimes vraiment quand tu fais ça ? »</li>
      <li><b>Ses passions</b> : « C'est quoi le truc qui te fait vraiment vibrer ? »</li>
      <li><b>Ses motivations</b> : « Qu'est-ce qui t'a amenée à faire ça ? »</li></ol>
      <p>Sujets qui touchent le cœur : <b>souvenirs d'enfance, voyages, musique, famille, rêves</b>. Et partage aussi les tiens : elle se sentira invitée à se confier.</p>`,
      key: "Les gens oublient les faits, ils se souviennent des émotions."
    },
    {
      t: "Monter en profondeur, progressivement",
      p: `<p>L'expérience des <b>36 questions</b> (Arthur Aron) : deux inconnus qui se posent des questions de plus en plus personnelles, en 3 paliers, développent une forte proximité — certains se sont même mariés.</p>
      <p>Principe : <b>la confiance d'abord, la connexion ensuite.</b> On ne se livre que si on se sent en sécurité.</p>
      <ul><li><b>Palier 1 (léger)</b> : « Ce serait quoi ta journée parfaite ? » « Tu préfères chanter seule ou devant des gens ? »</li>
      <li><b>Palier 2 (personnel)</b> : « De quoi es-tu la plus fière dans ta vie ? » « Qu'est-ce que l'amitié représente pour toi ? »</li>
      <li><b>Palier 3 (intime)</b> : « Quel est ton souvenir le plus précieux ? » « Qu'est-ce que tu aimerais que je sache sur toi ? »</li></ul>
      <p>Bonne nouvelle : les études montrent que les gens <b>surestiment la gêne</b> des conversations profondes. Après coup, ils se sentent plus proches.</p>`,
      key: "Léger → personnel → profond. On ne saute pas les étapes."
    },
    {
      t: "Esquiver une question gênante",
      p: `<p>On te demande ton salaire, ton passé amoureux, si tu veux des enfants… Refuser sèchement donne l'impression que tu caches quelque chose. Répondre te piège parfois.</p>
      <p><b>Solution :</b> réponds par une question dans le même registre, avec le sourire.</p>`,
      ex: [
        ["« Tu gagnes combien ? » — « Euh… pourquoi tu demandes ça ? »", "« C'est important pour toi, tout ce qui est financier ? »"],
        ["« Tu veux te marier ? » — silence gêné", "« Tu y penses souvent, toi, au mariage ? »"]
      ],
      key: "Une question bien retournée redirige sans malaise."
    },
    {
      t: "Bonus : obtenir des réponses vraies",
      p: `<ul><li>Les questions sont des projecteurs. « Ça s'est bien passé ? » attire un « oui » poli. « Qu'est-ce qui a été le plus dur ? » attire la vérité.</li>
      <li>« Tu n'as pas de questions ? » → « Quelles sont tes questions ? »</li>
      <li>Pour complimenter sans en faire trop, <b>demande un conseil</b> : au lieu de « tu as une belle peau », « tu as une astuce pour avoir une peau comme ça ? »</li>
      <li>Ne pose <b>jamais</b> une question qui ne t'intéresse pas. Ton manque d'enthousiasme s'entend.</li></ul>`,
      key: "Une question sincère vaut dix questions polies."
    }
  ],
  exercices: [
    { t: "Transforme 10 questions", d: "Prends 10 questions « quoi » banales et réécris-les en « pourquoi / qu'est-ce qui ». Garde-les dans tes Notes." },
    { t: "La relance x3", d: "Dans une conversation, fais 3 relances d'affilée sur le même sujet avant de changer." },
    { t: "Les 36 questions (palier 1)", d: "Avec un ami ou une amie, pose 5 questions du palier 1. Observe l'ambiance." },
    { t: "Prépare 3 esquives", d: "Liste 3 questions qui te mettent mal à l'aise et prépare une question-retour pour chacune." }
  ],
  quiz: [
    { q: "Quelle question crée le plus de connexion ?", o: ["Tu fais quoi dans la vie ?", "Qu'est-ce qui t'a donné envie de faire ce métier ?", "Tu travailles où ?"], a: 1, w: "Le pourquoi ouvre sur les motivations et les émotions." },
    { q: "Qu'est-ce qui prédit le mieux l'envie de se revoir après un date (études) ?", o: ["La taille", "Les questions de relance", "Le nombre de blagues"], a: 1, w: "Relancer sur ce que l'autre vient de dire montre l'écoute." },
    { q: "« Tu gagnes combien ? » Meilleure réponse ?", o: ["Refuser sèchement", "Donner le chiffre exact", "« C'est important pour toi, le côté financier ? »"], a: 2, w: "Retourner la question dans le même registre, avec le sourire." }
  ],
  retenir: ["Pourquoi > quoi", "Pas d'interview", "Relance sur SA réponse", "Léger → profond"]
});

/* ---------------------------------------------------------
   MODULE 7 — QUOI DIRE
--------------------------------------------------------- */
MODULES.push({
  id: "quoidire",
  emoji: "💬",
  titre: "Quoi dire",
  sous: "Ne plus jamais être à court de mots",
  couleur: "#F2C14E",
  intro: `Tu n'as pas un problème de sujets : tu as un problème de <b>tête trop pleine</b>. Quand tu réfléchis à ce que tu vas dire, tu n'écoutes plus, et le stress bloque l'accès à tes souvenirs. Ce module te donne des outils concrets — suppositions, observations, histoires — et deux méthodes simples : <b>POSER</b> (avant un date) et <b>ÉCHO</b> (pendant).`,
  objectifs: [
    "Remplacer une partie des questions par des affirmations et suppositions",
    "Maîtriser 5 façons de lancer une conversation sans question",
    "Avoir 5 anecdotes prêtes dans ton carnet",
    "Appliquer POSER avant chaque rendez-vous"
  ],
  lecons: [
    {
      t: "Le cheat code : les suppositions",
      p: `<p>Au lieu d'une question bateau, fais une <b>supposition</b> sur elle. Deux issues, toutes deux gagnantes :</p>
      <ul><li>Tu as raison → elle se sent <b>comprise</b>.</li>
      <li>Tu as tort → elle demande « pourquoi tu dis ça ? » → la conversation est lancée.</li></ul>
      <p><b>Formule :</b> affirmation + sur elle + supposition raisonnable.</p>`,
      ex: [
        ["Tu fais quoi dans la vie ?", "Tu as l'air créative, toi. Je parie que tu bosses dans un truc artistique."],
        ["Tu viens d'où ?", "Toi, tu n'as pas grandi ici, je me trompe ?"],
        ["Tu fais du sport ?", "Ça se voit que tu fais du yoga, toi."]
      ],
      key: "Une supposition montre que tu oses penser — et dire."
    },
    {
      t: "5 façons de lancer une conversation sans question",
      p: `<ol><li><b>L'ouverture implicite</b> : une affirmation qui appelle une réaction. « Je suis sûr que tout le monde a un plat qu'il pourrait manger tous les jours de sa vie. »</li>
      <li><b>L'observation partagée</b> : dis à voix haute ce que tu remarques. « J'ai l'impression que cette playlist tourne en boucle depuis 2 heures. »</li>
      <li><b>La mini-confidence</b> : une petite info perso, légère et humaine. « J'ai hésité à venir, j'avais une coupe de cheveux ratée ce matin. »</li>
      <li><b>L'alternative</b> (parfait pour les timides) : « Pop-corn sucré ou salé ? » « Team montagne ou team plage ? »</li>
      <li><b>La projection imaginaire</b> : « Si tu pouvais téléporter un plat ici maintenant, tu prendrais quoi ? »</li></ol>
      <p>Le point commun : tu <b>allèges la charge</b> de l'autre. Tu proposes un jeu au lieu de lui faire passer un examen.</p>`,
      key: "Une conversation, c'est une proposition, c'est un jeu."
    },
    {
      t: "« Je parie que… » : la phrase magique du small talk",
      p: `<p>Les questions génériques (« ça va ta journée ? ») mettent la pression : l'autre doit trouver une réponse intéressante. Les <b>observations</b> enlèvent la pression et ajoutent de la curiosité.</p>
      <p>Une bonne observation a 3 ingrédients : <b>un détail précis</b>, <b>une légère exagération</b>, <b>une histoire sous-entendue</b>.</p>
      <ul><li>« Je parie que ce café vient de sauver ta matinée. »</li>
      <li>« Ces chaussures ont l'air d'avoir survécu à une apocalypse zombie. »</li>
      <li>« Trois livres de genres complètement différents… soit tu as les goûts les plus éclectiques du monde, soit tu fais des cadeaux. »</li></ul>
      <p>Tu n'as pas besoin d'être intéressant. Tu as besoin d'être <b>intéressé</b> et attentif.</p>`,
      key: "Commence par « Je parie que… » et ton cerveau cherchera un détail."
    },
    {
      t: "De quoi parler ? Le 50 / 30 / 20",
      p: `<ul><li><b>50 % sur elle</b> : ce qu'elle aime, son enfance, ses rêves, son temps libre, sa façon de voir la vie. Écoute comme un bon ami curieux.</li>
      <li><b>30 % sur l'environnement</b> : ce qui se passe autour, ce qui te passe par la tête. Pas besoin que ce soit brillant ; ce qui compte, c'est de ne pas avoir l'air d'éviter de dire une bêtise.</li>
      <li><b>20 % sur toi</b> : sous forme d'anecdotes et d'autodérision, pas de CV ni de vantardise. Garde un peu de mystère.</li></ul>
      <p>Et apporte des <b>fils</b> dans tes réponses : « J'adore le foot, mon père m'emmenait au stade, maintenant ça me rend nostalgique. » → elle peut rebondir sur le foot, ton père, la nostalgie.</p>`,
      key: "Donne des fils à tirer dans chacune de tes réponses."
    },
    {
      t: "Le carnet d'anecdotes et le storytelling",
      p: `<p>Avoir 3 à 5 anecdotes prêtes, c'est ne plus jamais avoir le trou de mémoire « euh… rien de spécial ». Choisis-les <b>sortant de l'ordinaire, drôles ou avec une morale</b>.</p>
      <p><b>Structure d'une histoire :</b> situation normale (stable) → un truc dérape (instable) → comment ça finit (stable). Ajoute des personnages, imite les voix, montre l'émotion. Et <b>raccourcis</b> : coupe les digressions.</p>
      <p>Exemple : « Dimanche j'aide mon pote à déménager → le canapé reste coincé entre deux étages pendant 20 minutes → on finit par le monter par le balcon avec une corde, avec les voisins d'en face qui filment. »</p>
      <p>Note tes histoires dans l'onglet <b>Journal → Anecdotes</b>.</p>`,
      key: "Une histoire vaut mille réponses « rien de spécial »."
    },
    {
      t: "Méthode POSER (avant un date, 3 minutes)",
      p: `<p>Le stress bloque deux mémoires : celle de ta vie (« t'as fait quoi cette semaine ? — euh… ») et celle de ce que tu sais d'elle. Et il allume un <b>commentateur intérieur</b> qui juge chacune de tes phrases. On règle tout ça <b>sur le trajet</b> :</p>
      <ul><li><b>P – Poche</b> : téléphone rangé 5 à 30 min avant. Écouteurs retirés 1 minute avant d'arriver.</li>
      <li><b>O – Objectif</b> : UN seul point à travailler (ex. sourire quand elle arrive).</li>
      <li><b>S – Souvenir</b> : 30 secondes pour retrouver une chose vécue cette semaine que tu pourras raconter.</li>
      <li><b>E – Elle</b> : 30 secondes pour te rappeler ce qu'elle t'a dit (sa poterie, son week-end chez sa sœur). = 2 questions prêtes.</li>
      <li><b>R – Risque</b> : un mini-défi dans la rue (bonjour franc, regard tenu 1 seconde de plus) pour que le commentateur crie <i>avant</i> le match, pas pendant.</li></ul>
      <p>Ce n'est pas « calculé » : c'est comme se rappeler que ta grand-mère s'est fait opérer avant d'aller la voir. Ça s'appelle <b>faire attention aux gens</b>.</p>`,
      key: "Si tout est trop : garde juste le P. 5 minutes sans écran avant de la voir."
    },
    {
      t: "Méthode ÉCHO (pendant la conversation)",
      p: `<ul><li><b>É – Étincelle</b> : repère le mot sur lequel sa voix accélère et suis-le de relance en relance. Une réaction spontanée (« Pour un pied ?! ») vaut mieux qu'une réplique parfaite 3 secondes trop tard.</li>
      <li><b>C – Clin d'œil</b> : quand un blanc arrive, ressors un détail qu'elle a dit une heure avant. Elle voit que tu as retenu. Si ta tête est vide : « Pardon, j'ai complètement perdu le fil » avec un sourire.</li>
      <li><b>H – Honnête</b> : ton vrai avis, la même voix qu'avec tes potes. Pas de « moi aussi » automatique : un petit désaccord souriant montre que tu existes.</li>
      <li><b>O – Ouverte</b> : pars sur un bon moment en laissant une porte ouverte (« Je veux savoir comment se passe ton examen jeudi »).</li></ul>
      <p>À éviter : « Je te saoule, non ? » — ça l'oblige à te rassurer et montre que tu te surveilles au lieu d'être avec elle.</p>
      <p><b>Rassure-toi</b> : après une conversation, les gens sous-estiment en moyenne à quel point l'autre les a appréciés.</p>`,
      key: "Ce que tu dis doit être l'écho de ce qu'elle vient de dire."
    },
    {
      t: "Les silences : ni panique, ni mystère forcé",
      p: `<p>Un blanc de 2 secondes n'est pas une catastrophe : souvent, toi seul le remarques. Respire, souris, bois une gorgée. Laisser respirer le silence montre que tu es à l'aise.</p>
      <p>Mais un long blanc (4 s et plus) installé exprès pour « faire mystérieux » met l'autre mal à l'aise. Donc : <b>tu ne le cultives pas, tu ne paniques pas</b>. Tu tires un fil (clin d'œil, observation, alternative).</p>
      <p>Et parfois le flot n'est juste pas là : la conversation va de A à B. Ce n'est pas grave. Savoir terminer avec le sourire, c'est aussi une compétence.</p>`,
      key: "Un silence calme vaut mieux qu'une phrase paniquée."
    }
  ],
  exercices: [
    { t: "10 suppositions", d: "Dans la journée, fais mentalement (ou à voix haute avec des proches) 10 suppositions sur des gens : « je parie qu'il… »." },
    { t: "Écris 5 anecdotes", d: "Journal → Anecdotes : 5 histoires (stable → instable → stable), drôles ou avec une morale." },
    { t: "Les 5 ouvertures", d: "Teste chacune des 5 ouvertures sans question au moins une fois cette semaine (ami, collègue, inconnu)." },
    { t: "POSER avant ta prochaine sortie", d: "Même pour une soirée entre amis : applique les 5 étapes sur le trajet." },
    { t: "Un désaccord souriant", d: "Dans une conversation, donne ton vrai avis quand tu n'es pas d'accord, avec humour, au lieu de « moi aussi »." }
  ],
  quiz: [
    { q: "Pourquoi les suppositions marchent-elles ?", o: ["Parce qu'on a toujours raison", "Juste ou fausse, elles créent connexion ou discussion", "Parce qu'elles impressionnent"], a: 1, w: "Juste : elle se sent comprise. Fausse : elle t'explique pourquoi." },
    { q: "Dans POSER, le « E » signifie…", o: ["Énergie", "Elle : ce que tu sais d'elle", "Excuse"], a: 1, w: "Se rappeler ce qu'elle t'a raconté = 2 questions prêtes et sincères." },
    { q: "Quelle phrase éviter pendant un date ?", o: ["« Je te saoule, non ? »", "« Attends, raconte ! »", "« Ah ouais, la moto ? »"], a: 0, w: "Elle force l'autre à te rassurer et montre que tu te surveilles." },
    { q: "Le 50/30/20 signifie…", o: ["50 % elle, 30 % environnement, 20 % toi", "50 % toi, 30 % elle, 20 % silence", "50 % questions, 50 % blagues"], a: 0, w: "Elle au centre, l'environnement comme terrain de jeu, toi avec légèreté." }
  ],
  retenir: ["Supposer > questionner", "Je parie que…", "50/30/20", "POSER avant", "ÉCHO pendant"]
});
