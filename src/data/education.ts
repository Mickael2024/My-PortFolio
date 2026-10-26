import type { Bilingual, EducationDomain } from './types'

/**
 * Parcours FTS Toamasina. Les champs `years` et `diploma` restent factuels :
 * le mémoire indique l'année académique 2025-2026 ; le diplôme n'est affiché
 * comme obtenu que si vous le confirmez ici.
 */
export const education = {
  school: 'FTS Toamasina',
  schoolFull: 'Lycée Technique et Professionnel de Toamasina · Formation des Techniciens Supérieurs',
  city: 'Toamasina, Madagascar',
  program: { fr: 'BTS Maintenance Industrielle', en: 'BTS (Higher Technician Diploma) in Industrial Maintenance' } satisfies Bilingual,
  /** Années de formation : à renseigner (ex. « 2024 – 2026 »). */
  years: 'Depuis 2024' as string | undefined,
  /** Mémoire de fin d'études soutenu pour l'année académique 2025-2026. */
  diploma: "Mémoire de fin d'études BTS (Bac+2), année académique 2025-2026 : « Conception d'un module d'éclairage progressif », domaine domotique et automatisation.",
  intro: {
    fr: "Depuis 2024, je suis la formation de technicien supérieur en Maintenance Industrielle à la FTS de Toamasina : comprendre, entretenir et réparer les équipements industriels, en mécanique, électricité, pneumatique et hydraulique, avec des travaux pratiques en atelier sur des machines de production. C'est le socle de tout ce que je fais. Le mémoire de fin d'études, réalisé en entreprise, a réuni électronique, câblage domestique, fabrication d'une carte et programmation.",
    en: 'Since 2024 I have been following the higher technician programme in Industrial Maintenance at FTS Toamasina: understanding, maintaining and repairing industrial equipment, in mechanics, electricity, pneumatics and hydraulics, with hands-on workshop practice on production machines. It is the foundation of everything I do. The final-year thesis, carried out in a company, combined electronics, domestic wiring, board fabrication and programming.',
  } satisfies Bilingual,
  keyFacts: [
    { label: { fr: 'Contenu de la formation', en: 'Programme content' }, value: { fr: 'Mécanique, électricité, pneumatique, hydraulique, sécurité, lecture de plans', en: 'Mechanics, electricity, pneumatics, hydraulics, safety, drawing reading' } },
    { label: { fr: 'Domaine du mémoire', en: 'Thesis field' }, value: { fr: 'Domotique et automatisation', en: 'Home automation and control' } },
    { label: { fr: 'Encadrement', en: 'Supervision' }, value: { fr: 'Un encadreur en entreprise + une enseignante de programmation', en: 'A company supervisor + a programming lecturer' } },
    { label: { fr: 'Réalisation', en: 'Deliverable' }, value: { fr: 'Module 10 relais, PCB maison, installé chez le client', en: '10-relay module, home-made PCB, installed at the client' } },
  ],
  confirmedTitle: { fr: 'Domaines confirmés par mes travaux', en: 'Domains confirmed by my work' } satisfies Bilingual,
  toValidateTitle: { fr: 'Matières du cursus à préciser', en: 'Curriculum subjects to detail' } satisfies Bilingual,
  toValidateHint: {
    fr: "Ces rubriques font partie d'un cursus type en maintenance industrielle. Elles seront détaillées avec le programme réellement suivi.",
    en: 'These topics belong to a typical industrial maintenance curriculum. They will be detailed with the programme actually followed.',
  } satisfies Bilingual,
  domains: [
    {
      id: 'electronique',
      confirmed: true,
      title: { fr: 'Électronique et conception de cartes', en: 'Electronics and board design' },
      description: {
        fr: "Étude des composants, dessin du schéma et de la carte, puis fabrication artisanale du circuit imprimé double face.",
        en: 'Component study, schematic and board design, then hand fabrication of the double-sided printed circuit.',
      },
      knowledge: ['Commande de relais par transistor', 'Protection des composants', 'Dimensionnement des résistances', 'Lecture d’un capteur de lumière'],
      tools: [],
      practice: ['Carte double face à dix relais', 'Boîtier modélisé pour impression 3D', 'Analyse critique d’un composant sous-dimensionné et proposition de remplacement'],
    },
    {
      id: 'electricite',
      confirmed: true,
      title: { fr: 'Électricité et installations', en: 'Electricity and installations' },
      description: {
        fr: "Commutation de charges 230 V par relais, alimentation 5 V, câblage des détecteurs et des points lumineux d'un escalier de dix marches, installation chez le client.",
        en: 'Switching 230 V loads through relays, 5 V supply, wiring of detectors and the light points of a ten-step staircase, installation at the client’s home.',
      },
      knowledge: ['Circuits de puissance et de commande', 'Sécurité électrique', 'Lecture de schémas'],
      tools: [],
      practice: ['Installation du module d’éclairage progressif', 'Plan de maintenance préventive (1 et 3 mois) et corrective'],
    },
    {
      id: 'automatisation',
      confirmed: true,
      title: { fr: 'Automatisation et programmation embarquée', en: 'Automation and embedded programming' },
      description: {
        fr: "Programmation du module pour qu'il réagisse aux détecteurs sans jamais se bloquer, avec des sécurités contre les faux déclenchements et des réglages accessibles sans reprogrammer.",
        en: 'Programming the module so it reacts to the detectors without ever freezing, with protections against false triggers and adjustments that need no reprogramming.',
      },
      knowledge: ['Séquence repos, allumage, maintien, extinction', 'Temporisations sans blocage', 'Chien de garde et redémarrage sûr'],
      tools: [],
      practice: ['Programme du module dix marches', 'Détecteurs de présence, capteur de lumière, réglages manuels'],
    },
    {
      id: 'diagnostic',
      confirmed: true,
      title: { fr: 'Maintenance préventive, corrective et diagnostic', en: 'Preventive and corrective maintenance, diagnosis' },
      description: {
        fr: "Entretenir et réparer les machines de production en atelier, puis appliquer la même méthode aux équipements connectés que je conçois : mesure, hypothèse, test, correction documentée.",
        en: 'Maintaining and repairing production machines in the workshop, then applying the same method to the connected devices I design: measure, hypothesise, test, document the fix.',
      },
      knowledge: ['Analyse des causes de redémarrage', 'Perturbations provoquées par les relais', 'Calibration des capteurs de mesure'],
      tools: [],
      practice: ['Travaux pratiques d’atelier : diagnostiquer, intervenir, maintenir', 'Guide de diagnostic « tension à zéro »', 'Plan de maintenance du module d’éclairage progressif'],
    },
    {
      id: 'mecanique',
      confirmed: true,
      title: { fr: 'Mécanique, pneumatique et hydraulique', en: 'Mechanics, pneumatics and hydraulics' },
      description: {
        fr: "Les trois familles de systèmes rencontrées sur les machines de production, étudiées en formation et travaillées en atelier.",
        en: 'The three families of systems found on production machines, studied in class and practised in the workshop.',
      },
      knowledge: ['Fonctionnement des équipements industriels', 'Entretien et réparation'],
      tools: [],
      practice: ['Travaux pratiques en atelier sur machines de production'],
    },
    {
      id: 'securite',
      confirmed: true,
      title: { fr: 'Sécurité et lecture de plans', en: 'Safety and drawing reading' },
      description: {
        fr: "Intervenir en sécurité et comprendre un plan ou un schéma avant d'agir : réflexes acquis en formation et appliqués sur chaque installation.",
        en: 'Working safely and understanding a drawing or schematic before acting: habits learned in training and applied on every installation.',
      },
      knowledge: ['Règles de sécurité en intervention', 'Lecture de plans et de schémas'],
      tools: [],
      practice: ['Installation du module d’éclairage progressif chez le client', 'Rigueur et travail en équipe en contexte industriel'],
    },
  ] satisfies EducationDomain[],
  bringsToday: [
    {
      fr: "Je sais ce qu'un relais, un capteur de courant ou une alimentation font physiquement avant d'écrire la ligne de code qui les pilote.",
      en: 'I know what a relay, a current sensor or a power supply physically does before writing the line of code that drives it.',
    },
    {
      fr: "Je raisonne en système complet : capteur, carte, programme, communication, serveur, interface, puis maintenance.",
      en: 'I think in complete systems: sensor, board, program, communication, server, interface, then maintenance.',
    },
    {
      fr: "Je documente les protocoles, les diagnostics et les plans de maintenance, ce qui rend les projets reprenables par une équipe.",
      en: 'I document protocols, diagnostics and maintenance plans, which makes projects maintainable by a team.',
    },
  ] satisfies Bilingual[],
  bridge: [
    {
      title: { fr: 'Comprendre le matériel', en: 'Understand the hardware' },
      description: { fr: 'Mesures, schémas, contraintes électriques et mécaniques de l’équipement réel.', en: 'Measurements, schematics, electrical and mechanical constraints of the real equipment.' },
    },
    {
      title: { fr: 'Programmer le comportement', en: 'Program the behaviour' },
      description: { fr: 'Programme embarqué : lecture des capteurs, sécurités, communication et mise à jour à distance.', en: 'Embedded program: sensor reading, safety rules, communication and remote updates.' },
    },
    {
      title: { fr: 'Exploiter avec le logiciel', en: 'Operate through software' },
      description: { fr: 'Applications web et mobiles, API, bases de données et tableaux de bord pour les utilisateurs.', en: 'Web and mobile apps, APIs, databases and dashboards for users.' },
    },
  ],
}
