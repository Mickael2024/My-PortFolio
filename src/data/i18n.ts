import type { Lang } from './types'

export const ui = {
  nav: {
    about: { fr: 'À propos', en: 'About' },
    services: { fr: 'Ce que je fais', en: 'What I do' },
    education: { fr: 'Parcours', en: 'Journey' },
    expertise: { fr: 'Expertises', en: 'Expertise' },
    projects: { fr: 'Projets', en: 'Projects' },
    tools: { fr: 'Outils', en: 'Tools' },
    method: { fr: 'Méthode', en: 'Method' },
    experience: { fr: 'Expérience', en: 'Experience' },
    gallery: { fr: 'Galerie', en: 'Gallery' },
    contact: { fr: 'Contact', en: 'Contact' },
  },
  hero: {
    discover: { fr: 'Découvrir mon parcours', en: 'Discover my journey' },
    explore: { fr: 'Explorer mes projets', en: 'Explore my projects' },
    cv: { fr: 'Télécharger mon CV', en: 'Download my CV' },
    intro: {
      fr: "Technicien formé à la maintenance industrielle, je travaille sur toute la chaîne d'un système : le matériel électrique et électronique, le programme qui le pilote et les applications qui l'exploitent.",
      en: 'Trained in industrial maintenance, I work across the whole chain of a system: the electrical and electronic hardware, the program that drives it, and the applications that operate it.',
    },
    badge: { fr: 'Disponible pour des projets techniques', en: 'Open to technical projects' },
    scroll: { fr: 'Défiler', en: 'Scroll' },
  },
  sections: {
    about: {
      kicker: { fr: 'À propos', en: 'About' },
      title: { fr: 'Comprendre le système avant d’écrire le code', en: 'Understand the system before writing code' },
    },
    education: {
      kicker: { fr: 'Formation', en: 'Education' },
      title: { fr: 'Mon parcours — FTS Toamasina', en: 'My journey — FTS Toamasina' },
    },
    expertise: {
      kicker: { fr: 'Domaines', en: 'Domains' },
      title: { fr: 'Mes domaines d’expertise', en: 'My areas of expertise' },
    },
    projects: {
      kicker: { fr: 'Réalisations', en: 'Work' },
      title: { fr: 'Mes projets', en: 'My projects' },
    },
    tools: {
      kicker: { fr: 'Atelier', en: 'Workbench' },
      title: { fr: 'Matériel, outils et technologies', en: 'Hardware, tools and technologies' },
    },
    method: {
      kicker: { fr: 'Processus', en: 'Process' },
      title: { fr: 'Ma méthode de travail', en: 'How I work' },
    },
    experience: {
      kicker: { fr: 'Trajectoire', en: 'Track record' },
      title: { fr: 'Expérience et parcours', en: 'Experience and background' },
    },
    gallery: {
      kicker: { fr: 'Réalisations physiques et numériques', en: 'Physical and digital work' },
      title: { fr: 'Galerie technique', en: 'Technical gallery' },
    },
    contact: {
      kicker: { fr: 'Contact', en: 'Contact' },
      title: { fr: 'Discutons d’un projet technique', en: 'Let’s talk about a technical project' },
    },
  },
  projects: {
    search: { fr: 'Rechercher un projet…', en: 'Search projects…' },
    all: { fr: 'Tous', en: 'All' },
    empty: { fr: 'Aucun projet ne correspond à cette recherche.', en: 'No project matches this search.' },
    details: { fr: 'Voir le détail', en: 'View details' },
    close: { fr: 'Fermer', en: 'Close' },
    context: { fr: 'Contexte et problème', en: 'Context and problem' },
    objective: { fr: 'Objectif', en: 'Objective' },
    role: { fr: 'Mon rôle', en: 'My role' },
    architecture: { fr: 'Architecture générale', en: 'Architecture' },
    hardware: { fr: 'Matériel', en: 'Hardware' },
    technologies: { fr: 'Technologies et logiciels', en: 'Technologies and software' },
    operation: { fr: 'Fonctionnement', en: 'How it works' },
    difficulties: { fr: 'Difficultés rencontrées', en: 'Challenges' },
    solutions: { fr: 'Solutions mises en œuvre', en: 'Solutions' },
    results: { fr: 'Résultats obtenus', en: 'Outcomes' },
    media: { fr: 'Visuels', en: 'Visuals' },
    links: { fr: 'Liens', en: 'Links' },
    toConfirm: { fr: 'À compléter / à confirmer', en: 'To complete / confirm' },
    privateRepo: { fr: 'Dépôt privé', en: 'Private repository' },
  },
  categories: {
    industrie: { fr: 'Maintenance industrielle & électricité', en: 'Industrial maintenance & electricity' },
    embarque: { fr: 'Électronique & systèmes embarqués', en: 'Electronics & embedded systems' },
    iot: { fr: 'IoT & domotique', en: 'IoT & home automation' },
    automatisation: { fr: 'Automatisation & contrôle', en: 'Automation & control' },
    logiciel: { fr: 'Développement logiciel & applications', en: 'Software & applications' },
    transversal: { fr: 'Matériel + logiciel', en: 'Hardware + software' },
  },
  status: {
    prototype: { fr: 'Prototype', en: 'Prototype' },
    'en-cours': { fr: 'En cours', en: 'In progress' },
    livre: { fr: 'Livré', en: 'Delivered' },
    academique: { fr: 'Projet académique', en: 'Academic project' },
    experimentation: { fr: 'Expérimentation', en: 'Experiment' },
  },
  kind: {
    professionnel: { fr: 'Mission', en: 'Commission' },
    personnel: { fr: 'Personnel', en: 'Personal' },
    academique: { fr: 'Académique', en: 'Academic' },
  },
  expertise: {
    skills: { fr: 'Compétences', en: 'Skills' },
    relatedProjects: { fr: 'Projets associés', en: 'Related projects' },
    level: {
      confirme: { fr: 'Confirmé par des projets livrés', en: 'Confirmed by delivered projects' },
      operationnel: { fr: 'Opérationnel', en: 'Operational' },
      'en-progression': { fr: 'En progression', en: 'Developing' },
    },
  },
  education: {
    confirmed: { fr: 'Confirmé', en: 'Confirmed' },
    toValidate: { fr: 'À valider', en: 'To validate' },
    knowledge: { fr: 'Connaissances', en: 'Knowledge' },
    tools: { fr: 'Outils', en: 'Tools' },
    practice: { fr: 'Travaux pratiques et projets', en: 'Practical work and projects' },
    bringsToday: { fr: 'Ce que ma formation m’apporte aujourd’hui', en: 'What my training gives me today' },
    yearsMissing: { fr: 'Années de formation : à renseigner', en: 'Study years: to be filled in' },
    bridgeTitle: { fr: 'Comprendre le matériel avant de développer le logiciel', en: 'Understand the hardware before building the software' },
  },
  experience: {
    types: {
      formation: { fr: 'Formation', en: 'Education' },
      experience: { fr: 'Expérience professionnelle', en: 'Professional experience' },
      personnel: { fr: 'Projet personnel', en: 'Personal project' },
      academique: { fr: 'Projet académique', en: 'Academic project' },
      prototype: { fr: 'Expérimentation / prototype', en: 'Experiment / prototype' },
    },
    periodMissing: { fr: 'Période à renseigner', en: 'Period to be filled in' },
  },
  gallery: {
    all: { fr: 'Tout', en: 'All' },
    categories: {
      electronique: { fr: 'Cartes électroniques', en: 'Electronics boards' },
      prototype: { fr: 'Montages et prototypes', en: 'Prototypes' },
      schema: { fr: 'Schémas', en: 'Schematics' },
      installation: { fr: 'Installations', en: 'Installations' },
      interface: { fr: 'Interfaces logicielles', en: 'Software interfaces' },
      terrain: { fr: 'Terrain', en: 'Field' },
    },
    open: { fr: 'Agrandir', en: 'Enlarge' },
    prev: { fr: 'Image précédente', en: 'Previous image' },
    next: { fr: 'Image suivante', en: 'Next image' },
    zoom: { fr: 'Zoom', en: 'Zoom' },
  },
  contact: {
    intro: {
      fr: "Vous avez un équipement à connecter, un système à automatiser ou une application à construire autour d'un besoin terrain ? Parlons-en.",
      en: 'You have equipment to connect, a system to automate, or an application to build around a real field need? Let’s talk.',
    },
    name: { fr: 'Nom', en: 'Name' },
    email: { fr: 'E-mail', en: 'Email' },
    message: { fr: 'Message', en: 'Message' },
    send: { fr: 'Envoyer le message', en: 'Send message' },
    sending: { fr: 'Envoi…', en: 'Sending…' },
    sent: { fr: 'Message envoyé. Merci, je vous réponds rapidement.', en: 'Message sent. Thank you, I will reply shortly.' },
    error: { fr: "L'envoi a échoué. Utilisez l'un des autres moyens de contact.", en: 'Sending failed. Please use another contact channel.' },
    noBackend: {
      fr: "Le formulaire n'est pas encore relié à un service d'envoi. En attendant, contactez-moi via GitHub ou par e-mail ci-contre.",
      en: 'This form is not yet connected to a sending service. Meanwhile, reach me via GitHub or by email.',
    },
    required: { fr: 'Ce champ est obligatoire.', en: 'This field is required.' },
    invalidEmail: { fr: 'Adresse e-mail invalide.', en: 'Invalid email address.' },
    tooShort: { fr: 'Message trop court (10 caractères minimum).', en: 'Message too short (10 characters minimum).' },
    ctaWork: { fr: 'Consulter mes réalisations', en: 'See my work' },
    ctaCv: { fr: 'Télécharger mon CV', en: 'Download my CV' },
    emailMissing: { fr: 'Adresse e-mail à renseigner', en: 'Email address to be filled in' },
    location: { fr: 'Localisation', en: 'Location' },
  },
  footer: {
    built: { fr: 'Conçu et développé par', en: 'Designed and built by' },
    stack: { fr: 'React · TypeScript · Tailwind CSS · Motion', en: 'React · TypeScript · Tailwind CSS · Motion' },
    top: { fr: 'Haut de page', en: 'Back to top' },
  },
  a11y: {
    openMenu: { fr: 'Ouvrir le menu', en: 'Open menu' },
    closeMenu: { fr: 'Fermer le menu', en: 'Close menu' },
    switchLang: { fr: 'Switch to English', en: 'Passer en français' },
    skip: { fr: 'Aller au contenu', en: 'Skip to content' },
  },
} as const

export type UiDict = typeof ui

export function pick<T extends { fr: string; en: string }>(value: T, lang: Lang): string {
  return value[lang]
}
