import type { ExperienceItem } from './types'

/** Les périodes non confirmées sont laissées vides : rien n'est inventé. */
export const experiences: ExperienceItem[] = [
  {
    id: 'missions',
    type: 'experience',
    title: { fr: 'Conception de solutions connectées', en: 'Connected solutions design' },
    organization: 'Toamasina · pour des clients et en équipe',
    period: 'Depuis 2025',
    summary: {
      fr: "Conception, développement et coordination de solutions connectées livrées à des clients ou menées en équipe : compteur prépayé JiroLink, module moto MyBike, comptage d'entrées SmartCount, gestion scolaire SmartEducation, pointage par géolocalisation.",
      en: 'Design, development and coordination of connected solutions delivered to clients or carried out in a team: JiroLink prepaid meter, MyBike motorbike module, SmartCount entry counting, SmartEducation school management, GPS attendance.',
    },
    highlights: [
      'Programmes embarqués et protocoles de communication documentés',
      'Applications web et mobiles avec leurs services en ligne',
      'Cahiers des charges, dossiers de conception, revues de code',
      'Suivi client et préparation des mises en service',
    ],
    projectSlugs: ['jirolink', 'mybike', 'smartcount', 'smarteducation', 'pointage', 'fortico-tools'],
  },
  {
    id: 'stockpoint-client',
    type: 'experience',
    title: { fr: 'Plateforme de caisse et de stock pour un commerce', en: 'Point-of-sale and stock platform for a retailer' },
    organization: 'Client : pâtisserie HAPPY TIME · Toamasina',
    period: 'Juil. – oct. 2026',
    summary: {
      fr: "Conception et livraison d'une application de caisse et de stock multi-boutiques, utilisable hors connexion, employée en conditions réelles par un atelier de production et trois points de vente.",
      en: 'Design and delivery of a multi-shop point-of-sale and stock application, usable offline, used in real conditions by a production workshop and three sales points.',
    },
    highlights: ['Recette avec le client', 'Synchronisation fiable entre appareils', 'Données strictement séparées par boutique'],
    projectSlugs: ['stockpoint'],
  },
  {
    id: 'bts',
    type: 'formation',
    title: { fr: 'BTS Maintenance Industrielle', en: 'BTS Industrial Maintenance' },
    organization: 'FTS Toamasina · Lycée Technique et Professionnel de Toamasina',
    period: 'Depuis 2024',
    summary: {
      fr: "Formation de technicien supérieur axée sur la compréhension, l'entretien et la réparation des équipements industriels : mécanique, électricité, pneumatique, hydraulique, sécurité et lecture de plans, avec travaux pratiques en atelier. Mémoire de fin d'études (année 2025-2026) réalisé en entreprise.",
      en: 'Higher technician programme focused on understanding, maintaining and repairing industrial equipment: mechanics, electricity, pneumatics, hydraulics, safety and drawing reading, with workshop practice. Final-year thesis (2025-2026) carried out in a company.',
    },
    highlights: ['Diagnostic et intervention sur machines de production', 'Autonomie, rigueur et travail en équipe'],
    projectSlugs: ['eclairage-progressif'],
  },
  {
    id: 'memoire',
    type: 'academique',
    title: { fr: "Module d'éclairage progressif", en: 'Progressive lighting module' },
    organization: 'Mémoire BTS · encadré en entreprise',
    period: 'Avr. – oct. 2026',
    summary: {
      fr: "De l'étude des composants à l'installation chez le client : schéma, carte, boîtier, programme, essais et plan de maintenance.",
      en: 'From component study to installation at the client: schematic, board, enclosure, program, tests and maintenance plan.',
    },
    highlights: [],
    projectSlugs: ['eclairage-progressif'],
  },
  {
    id: 'ecole42',
    type: 'formation',
    title: { fr: 'Stage d’immersion en programmation', en: 'Programming immersion internship' },
    organization: 'École 42 Antananarivo',
    period: 'Déc. 2023 – janv. 2024',
    summary: {
      fr: "Un mois d'immersion dans la programmation informatique sur des projets concrets : premiers pas qui ont lancé mon apprentissage du développement, et travail sur la communication en équipe.",
      en: 'A one-month immersion in programming on concrete projects: the first steps that launched my self-taught journey in software, and work on team communication.',
    },
    highlights: [],
  },
  {
    id: 'bac',
    type: 'formation',
    title: { fr: 'Baccalauréat série OSE', en: 'Baccalauréat, OSE series' },
    organization: 'Toamasina',
    period: '2020 – 2023',
    summary: {
      fr: "Lycée en série Organisation Sociale et Économique : une culture des dynamiques sociales et économiques qui m'aide aujourd'hui à comprendre les besoins des commerçants, des écoles et des entreprises pour lesquels je conçois des outils.",
      en: 'High school in the Social and Economic Organisation track: an understanding of social and economic dynamics that helps me grasp the needs of the shopkeepers, schools and companies I build tools for.',
    },
    highlights: [],
  },
  {
    id: 'perso',
    type: 'personnel',
    title: { fr: 'Outils pour commerçants et techniciens malgaches', en: 'Tools for Malagasy shopkeepers and technicians' },
    organization: 'Projets personnels',
    period: '2025 – 2026',
    summary: {
      fr: "Applications construites en autodidacte pour des besoins concrets : caisse mobile money, gestion de pâtisserie, gestion d'atelier de rebobinage, application de technicien frigoriste, plateforme d'emploi.",
      en: 'Self-taught applications built for concrete needs: mobile-money cash desk, bakery management, motor rewinding workshop, refrigeration technician app, job platform.',
    },
    highlights: [],
    projectSlugs: ['cashpoint', 'gateau-manager', 'jeff-elec', 'freezius', 'jobs-madagascar'],
  },
  {
    id: 'proto',
    type: 'prototype',
    title: { fr: 'Expérimentations et apprentissage', en: 'Experiments and learning' },
    organization: 'GitHub · Mickael2024',
    period: '2024 – 2026',
    summary: {
      fr: "Dépôts d'apprentissage et de prototypage : cartes connectées, interfaces web, minuteries, compteur Seaside, mises à jour à distance. C'est là que je teste avant d'intégrer dans un produit.",
      en: 'Learning and prototyping repositories: connected boards, web interfaces, timers, Seaside counter, remote updates. This is where I test before integrating into a product.',
    },
    highlights: [],
    projectSlugs: ['seaside-counter', 'timer-volets', 'smartclick', 'arduinolearn'],
  },
]
