import type { Bilingual } from './types'

export interface ServiceItem {
  id: string
  title: Bilingual
  description: Bilingual
  example: Bilingual
}

export const servicesIntro: Bilingual = {
  fr: "Trois façons concrètes de travailler ensemble, toutes déjà mises en pratique sur le terrain à Toamasina.",
  en: 'Three concrete ways to work together, all already put into practice in the field in Toamasina.',
}

export const services: ServiceItem[] = [
  {
    id: 'module',
    title: { fr: 'Concevoir un équipement connecté', en: 'Design a connected device' },
    description: {
      fr: "Du besoin à l'objet qui fonctionne : schéma, carte électronique, boîtier, programme embarqué et mise en service chez le client.",
      en: 'From the need to a working object: schematic, electronic board, enclosure, embedded program and commissioning at the client’s site.',
    },
    example: { fr: 'Compteur prépayé JiroLink, module d’éclairage progressif, boîtier moto MyBike.', en: 'JiroLink prepaid meter, progressive lighting module, MyBike motorbike box.' },
  },
  {
    id: 'automatiser',
    title: { fr: 'Automatiser et superviser une installation', en: 'Automate and supervise an installation' },
    description: {
      fr: "Capter, compter, commander à distance et suivre en temps réel : éclairage, accès, comptage d'entrées, équipements agricoles.",
      en: 'Sense, count, control remotely and monitor in real time: lighting, access, entry counting, farm equipment.',
    },
    example: { fr: 'SmartCount, Smart Home, couveuse connectée, pointage par géolocalisation.', en: 'SmartCount, Smart Home, connected incubator, GPS attendance.' },
  },
  {
    id: 'application',
    title: { fr: 'Développer une application métier', en: 'Build a business application' },
    description: {
      fr: "Des outils simples pour des usages réels, qui fonctionnent aussi sans connexion : caisse, stock, gestion d'école, suivi d'atelier.",
      en: 'Simple tools for real needs, that also work offline: point of sale, stock, school management, workshop tracking.',
    },
    example: { fr: 'StockPoint pour une pâtisserie, SmartEducation, CashPoint, Freezius tech.', en: 'StockPoint for a bakery, SmartEducation, CashPoint, Freezius tech.' },
  },
]
