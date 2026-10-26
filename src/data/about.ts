import type { Bilingual } from './types'

interface Strength {
  icon: 'wrench' | 'puzzle' | 'blocks' | 'lightbulb' | 'users'
  title: Bilingual
  description: Bilingual
}

export const about = {
  paragraphs: [
    {
      fr: "Je suis technicien en maintenance industrielle, formé à la FTS de Toamasina, et je conçois des solutions connectées pour des commerces, des écoles, des artisans et des particuliers de Toamasina. Mon travail commence presque toujours devant un besoin réel : un escalier à éclairer, un compteur électrique à sécuriser, une moto à démarrer à distance, une porte d'événement à compter.",
      en: 'I am an industrial maintenance technician trained at FTS Toamasina, and I design connected solutions for shops, schools, craftspeople and households in Toamasina. My work almost always starts with a real need: a staircase to light, an electricity meter to secure, a motorbike to start remotely, an event gate to count.',
    },
    {
      fr: "Ma méthode est simple : comprendre le besoin, analyser le système physique et ses contraintes, concevoir une solution, la prototyper, la tester sur le terrain, puis l'améliorer. Je dessine le schéma et la carte, j'écris le programme, et je développe les applications qui permettent de l'exploiter.",
      en: 'My method is simple: understand the need, analyse the physical system and its constraints, design a solution, prototype it, test it in the field, then improve it. I draw the schematic and the board, write the program, and build the applications that operate it.',
    },
    {
      fr: "Autodidacte en informatique, j'ai appris le développement en construisant des outils utiles à de vrais utilisateurs : commerçants, techniciens, écoles et organisateurs d'événements à Madagascar.",
      en: 'Self-taught in software, I learned development by building tools for real users: shopkeepers, technicians, schools and event organisers in Madagascar.',
    },
    {
      fr: "Déterminé, sérieux et autonome, j'accompagne ceux qui veulent un équipement fiable, une installation automatisée ou une application simple à utiliser : de l'analyse du besoin jusqu'à la mise en service et la maintenance.",
      en: 'Determined, serious and autonomous, I help those who want reliable equipment, an automated installation or an easy-to-use application: from needs analysis to commissioning and maintenance.',
    },
  ] satisfies Bilingual[],
  facts: [
    { label: { fr: 'Formation', en: 'Education' }, value: { fr: 'BTS Maintenance Industrielle', en: 'BTS Industrial Maintenance' } },
    { label: { fr: 'Disponibilité', en: 'Availability' }, value: { fr: 'Ouvert à de nouveaux projets', en: 'Open to new projects' } },
    { label: { fr: 'Langues', en: 'Languages' }, value: { fr: 'Français courant · Anglais, notions de base', en: 'Fluent French · Basic English' } },
    { label: { fr: 'En dehors du travail', en: 'Outside work' }, value: { fr: 'Basket-ball, jeux vidéo, lecture', en: 'Basketball, video games, reading' } },
  ],
  strengths: [
    {
      icon: 'blocks',
      title: { fr: 'Polyvalence matériel + logiciel', en: 'Hardware + software versatility' },
      description: {
        fr: "Sur un même projet, je passe du schéma électronique au programme embarqué, puis à l'application qui pilote le module. Cette continuité évite les malentendus entre « ceux du matériel » et « ceux du logiciel ».",
        en: 'On a single project I move from the electronic schematic to the embedded program, then to the application that drives the module. That continuity avoids the usual gap between hardware and software people.',
      },
    },
    {
      icon: 'puzzle',
      title: { fr: 'Résolution de problèmes', en: 'Problem solving' },
      description: {
        fr: "Diagnostiquer un capteur qui ne mesure plus rien, un écran perturbé par un relais ou une carte qui redémarre toute seule : je cherche la cause, je documente, je corrige.",
        en: 'Diagnosing a sensor that stops measuring, a display disturbed by a relay, or a board that reboots on its own: I look for the cause, document it, and fix it.',
      },
    },
    {
      icon: 'wrench',
      title: { fr: 'Compréhension des systèmes physiques', en: 'Understanding physical systems' },
      description: {
        fr: "Courant, tension, puissance, commutation, sécurité électrique : ma formation en maintenance industrielle me permet de comprendre ce que le code va réellement commander.",
        en: 'Current, voltage, power, switching, electrical safety: my industrial maintenance background lets me understand what the code will actually control.',
      },
    },
    {
      icon: 'lightbulb',
      title: { fr: 'Apprentissage par le concret', en: 'Learning by building' },
      description: {
        fr: "Chaque projet m'a fait apprendre quelque chose de nouveau, côté électronique comme côté logiciel. J'apprends ce dont le projet a besoin, au moment où il en a besoin.",
        en: 'Every project taught me something new, on the electronics side as well as the software side. I learn what the project needs, when it needs it.',
      },
    },
    {
      icon: 'users',
      title: { fr: 'Collaboration et gestion de projet', en: 'Collaboration and project management' },
      description: {
        fr: "Je coordonne des projets menés en équipe : cahiers des charges, protocoles documentés, revues de code et suivi des livrables avec les clients.",
        en: 'I coordinate team projects: specifications, documented protocols, code reviews and deliverable tracking with clients.',
      },
    },
  ] satisfies Strength[],
  approach: {
    kicker: { fr: 'Ma manière de travailler', en: 'How I work' },
    steps: [
      { fr: 'Besoin', en: 'Need' },
      { fr: 'Analyse', en: 'Analysis' },
      { fr: 'Conception', en: 'Design' },
      { fr: 'Prototype', en: 'Prototype' },
      { fr: 'Tests', en: 'Tests' },
      { fr: 'Amélioration', en: 'Improvement' },
    ] satisfies Bilingual[],
  },
}
