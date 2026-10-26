import type { Bilingual } from './types'

/**
 * Informations personnelles : tout ce qui est affiché dans le portfolio
 * est modifiable ici. Les champs laissés vides ne sont pas affichés.
 */
export const profile = {
  firstName: 'Jean Mickael',
  lastName: 'NGEVA',
  initials: 'JMN',
  location: 'Toamasina, Madagascar',
  jobTitle: {
    fr: 'Technicien en maintenance industrielle · Concepteur de solutions connectées',
    en: 'Industrial maintenance technician · Connected solutions designer',
  } satisfies Bilingual,
  company: 'Fortico',
  headline: {
    fr: 'Je donne vie aux idées, du monde industriel au numérique.',
    en: 'I bring ideas to life, from the industrial world to the digital one.',
  } satisfies Bilingual,
  subheadline: {
    fr: "Formé en maintenance industrielle à la FTS de Toamasina, je développe une approche qui relie les systèmes physiques, l'électronique et le logiciel pour concevoir des solutions concrètes.",
    en: 'Trained in industrial maintenance at FTS Toamasina, I take an approach that connects physical systems, electronics and software to build concrete solutions.',
  } satisfies Bilingual,
  photo: '/images/profil.webp',
  /** Version détourée (fond transparent) utilisée dans le Hero. */
  photoCutout: '/images/profil-cutout.webp',
  photoAlt: 'Jean Mickael Ngeva, casque de chantier et tenue haute visibilité, devant un tableau de planification projet',
  /** Chemin vers le CV dans /public. Laisser vide si aucun fichier n'est fourni. */
  cvUrl: '/cv/CV-Ngeva-Jean-Mickael.pdf',
  /** E-mail de contact. Laisser vide tant qu'il n'est pas renseigné. */
  email: 'ngevajeanmickael@gmail.com',
  github: 'https://github.com/Mickael2024',
  githubUser: 'Mickael2024',
  /** URL LinkedIn. Laisser vide si non disponible. */
  linkedin: 'https://www.linkedin.com/in/jean-mickael-ngeva-8a8b4b292/',
  /** Endpoint du formulaire de contact (ex. Formspree). Vide = formulaire désactivé proprement. */
  contactEndpoint: '',
  githubBio: 'Autodidacte en Informatique',
}

export type Profile = typeof profile
