import type { Bilingual, MethodStep } from './types'

export const methodIntro: Bilingual = {
  fr: "Une démarche adaptable à chaque projet, pas une procédure rigide. Elle m'a servi autant pour un module à dix relais que pour une plateforme multi-boutiques.",
  en: 'An approach that adapts to each project rather than a rigid procedure. It has served me for a ten-relay module as well as a multi-shop platform.',
}

export const methodSteps: MethodStep[] = [
  { id: 'besoin', title: { fr: 'Comprendre le besoin', en: 'Understand the need' }, description: { fr: "Rencontrer l'utilisateur, observer l'usage réel, formaliser un cahier des charges ou un brief.", en: 'Meet the user, observe real usage, formalise a specification or brief.' } },
  { id: 'analyse', title: { fr: 'Analyser le système et les contraintes', en: 'Analyse the system and constraints' }, description: { fr: 'Alimentation, environnement, réseau disponible, sécurité, budget, maintenance future.', en: 'Power, environment, available network, safety, budget, future maintenance.' } },
  { id: 'architecture', title: { fr: "Concevoir l'architecture technique", en: 'Design the technical architecture' }, description: { fr: 'Choix des capteurs, de la carte, du mode de communication et des outils logiciels ; schémas de fonctionnement.', en: 'Choice of sensors, board, communication method and software tools; operating diagrams.' } },
  { id: 'prototype', title: { fr: 'Réaliser le prototype', en: 'Build the prototype' }, description: { fr: 'Simulation, schéma, montage de test, puis carte définitive.', en: 'Simulation, schematic, test assembly, then final board.' } },
  { id: 'firmware', title: { fr: 'Développer le programme et les interfaces', en: 'Develop the program and the interfaces' }, description: { fr: 'Programme embarqué robuste, services en ligne et application pour l’utilisateur.', en: 'Robust embedded program, online services and user application.' } },
  { id: 'tests', title: { fr: 'Tester et diagnostiquer', en: 'Test and diagnose' }, description: { fr: 'Mesures, scénarios de panne, revue de code, correction des causes racines.', en: 'Measurements, failure scenarios, code review, root-cause fixes.' } },
  { id: 'integration', title: { fr: 'Intégrer les composants et services', en: 'Integrate components and services' }, description: { fr: 'Communication entre équipements, stockage des données, hébergement, fonctionnement hors-ligne.', en: 'Communication between devices, data storage, hosting, offline operation.' } },
  { id: 'deploiement', title: { fr: 'Documenter, améliorer, déployer', en: 'Document, improve, deploy' }, description: { fr: 'Guides utilisateur, protocole documenté, plan de maintenance et livraison.', en: 'User guides, documented protocol, maintenance plan and delivery.' } },
]
