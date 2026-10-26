import type { Bilingual, ExpertiseDomain } from './types'

export const expertise = {
  intro: {
    fr: "Six domaines complémentaires, du geste technique au produit numérique. Chacun est relié aux projets qui le démontrent réellement.",
    en: 'Six complementary domains, from hands-on technical work to digital products. Each one is tied to the projects that actually demonstrate it.',
  } satisfies Bilingual,
  domains: [
    {
      id: 'maintenance',
      icon: 'wrench',
      title: { fr: 'Maintenance industrielle', en: 'Industrial maintenance' },
      description: {
        fr: "Je sais observer un équipement, comprendre comment il fonctionne, trouver l'origine d'une panne et organiser son entretien dans le temps, avec une trace écrite de chaque intervention.",
        en: 'I can observe a piece of equipment, understand how it works, find the origin of a fault and organise its upkeep over time, with a written record of each intervention.',
      },
      projectSlugs: ['eclairage-progressif', 'jirolink'],
      level: 'operationnel',
    },
    {
      id: 'electricite',
      icon: 'zap',
      title: { fr: 'Électricité et électrotechnique', en: 'Electricity and electrotechnics' },
      description: {
        fr: "Je raccorde et je commande des charges sur le secteur, je mesure tension, courant et énergie, j'alimente les modules que je conçois et je les installe chez le client en respectant les règles de sécurité.",
        en: 'I wire and switch mains loads, measure voltage, current and energy, power the modules I design and install them at the client’s site while respecting safety rules.',
      },
      projectSlugs: ['eclairage-progressif', 'jirolink', 'smartswitch'],
      level: 'operationnel',
    },
    {
      id: 'embarque',
      icon: 'cpu',
      title: { fr: 'Électronique et systèmes embarqués', en: 'Electronics and embedded systems' },
      description: {
        fr: "Je conçois des cartes électroniques, du schéma jusqu'au circuit imprimé que je fabrique moi-même, puis j'écris le programme embarqué qui les fait vivre : acquisition des capteurs, sécurité, mise à jour à distance.",
        en: 'I design electronic boards, from the schematic to the printed circuit I make myself, then write the embedded program that brings them to life: sensor reading, safety, remote updates.',
      },
      projectSlugs: ['eclairage-progressif', 'jirolink', 'mybike', 'smartcount'],
      level: 'confirme',
    },
    {
      id: 'iot',
      icon: 'radio',
      title: { fr: 'IoT et domotique', en: 'IoT and home automation' },
      description: {
        fr: "Je relie les équipements à Internet ou entre eux : télémétrie, commandes à distance, supervision en temps réel, fonctionnement local quand le réseau manque.",
        en: 'I connect equipment to the Internet or to each other: telemetry, remote commands, real-time supervision, local operation when the network is down.',
      },
      projectSlugs: ['jirolink', 'mybike', 'smartcount', 'smartswitch', 'couveuse'],
      level: 'confirme',
    },
    {
      id: 'logiciel',
      icon: 'code',
      title: { fr: 'Développement logiciel', en: 'Software development' },
      description: {
        fr: "Je développe les applications web et mobiles qui exploitent ces systèmes : tableaux de bord, caisse et stock, gestion scolaire, pointage, avec un fonctionnement hors-ligne quand le terrain l'exige.",
        en: 'I build the web and mobile applications that operate these systems: dashboards, point of sale and stock, school management, attendance, working offline when the field requires it.',
      },
      projectSlugs: ['stockpoint', 'smarteducation', 'pointage', 'jobs-madagascar'],
      level: 'confirme',
    },
    {
      id: 'gestion',
      icon: 'kanban',
      title: { fr: 'Gestion de projet technique', en: 'Technical project management' },
      description: {
        fr: "Je formalise le besoin avec le client, j'écris les cahiers des charges et les dossiers de conception, je coordonne l'équipe et je prépare les mises en service.",
        en: 'I formalise the need with the client, write specifications and design documents, coordinate the team and prepare commissioning.',
      },
      projectSlugs: ['smartcount', 'jirolink', 'stockpoint'],
      level: 'operationnel',
    },
  ] satisfies ExpertiseDomain[],
}
