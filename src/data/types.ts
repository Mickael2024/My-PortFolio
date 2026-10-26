export type Lang = 'fr' | 'en'

export interface Bilingual {
  fr: string
  en: string
}

export type ProjectCategory =
  | 'industrie'
  | 'embarque'
  | 'iot'
  | 'automatisation'
  | 'logiciel'
  | 'transversal'

export type ProjectStatus =
  | 'prototype'
  | 'en-cours'
  | 'livre'
  | 'academique'
  | 'experimentation'

export type ProjectKind = 'professionnel' | 'personnel' | 'academique'

export interface ProjectLink {
  label: string
  url: string
  kind: 'github' | 'demo' | 'doc'
}

export interface ProjectMedia {
  src: string
  alt: string
  caption?: string
  width?: number
  height?: number
}

export interface Project {
  slug: string
  name: string
  tagline: string
  categories: ProjectCategory[]
  status: ProjectStatus
  kind: ProjectKind
  period?: string
  featured?: boolean
  cover?: string
  context: string
  objective: string
  role: string
  architecture: string[]
  hardware: string[]
  technologies: string[]
  operation: string
  difficulties: string[]
  solutions: string[]
  results: string[]
  media: ProjectMedia[]
  links: ProjectLink[]
  /** Informations à confirmer par le propriétaire du portfolio. */
  toConfirm?: string[]
}

export interface ExpertiseDomain {
  id: string
  title: Bilingual
  description: Bilingual
  projectSlugs: string[]
  /** Niveau affiché uniquement s'il est justifiable. */
  level?: 'confirme' | 'operationnel' | 'en-progression'
  icon: 'wrench' | 'zap' | 'cpu' | 'radio' | 'code' | 'kanban'
}


export interface EducationDomain {
  id: string
  title: Bilingual
  description: Bilingual
  knowledge: string[]
  tools: string[]
  practice: string[]
  image?: ProjectMedia
  confirmed: boolean
}

export interface EducationInfo {
  school: string
  schoolFull: string
  program: Bilingual
  city: string
  /** Laisser vide si non confirmé : aucune date n'est inventée. */
  years?: string
  diploma?: string
  domains: EducationDomain[]
  bringsToday: Bilingual[]
}

export interface ExperienceItem {
  id: string
  type: 'formation' | 'experience' | 'personnel' | 'academique' | 'prototype'
  title: Bilingual
  organization: string
  period?: string
  summary: Bilingual
  highlights: string[]
  projectSlugs?: string[]
}


export interface MethodStep {
  id: string
  title: Bilingual
  description: Bilingual
}
