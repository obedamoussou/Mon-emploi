// =====================================================================
//  Types du domaine — Talent-Bénin
// =====================================================================

export type ContractType =
  | 'CDI'
  | 'CDD'
  | 'Stage'
  | 'Concours'
  | 'Vacation'
  | 'Apprentissage'
  | 'Mission'

export type OpportunityKind =
  | 'emploi'
  | 'stage'
  | 'concours'
  | 'appel-candidature'

export type WorkMode = 'Présentiel' | 'Hybride' | 'Télétravail'

export type ExperienceLevel =
  | 'Débutant'
  | 'Junior'
  | 'Confirmé'
  | 'Senior'
  | 'Expert'

export type InstitutionType =
  | 'Ministère'
  | 'Mairie'
  | 'Entreprise publique'
  | 'ONG'
  | 'Université'
  | 'Agence publique'
  | 'Collectivité'
  | 'Organisme partenaire'

export interface Region {
  id: string
  name: string
  chefLieu: string
  population: number
}

export interface Category {
  id: string
  name: string
  slug: string
  icon: string
  description: string
  jobCount: number
}

export interface Institution {
  id: string
  name: string
  shortName: string
  slug: string
  type: InstitutionType
  sector: string
  logoColor: string
  logoInitials: string
  description: string
  presentation: string
  regionId: string
  city: string
  address: string
  email: string
  phone: string
  website: string
  foundedYear: number
  employees: number
  verified: boolean
  jobCount: number
}

export interface SalaryRange {
  min: number
  max: number
  currency: string
  period: 'mois' | 'an'
}

export interface Job {
  id: string
  reference: string
  title: string
  slug: string
  kind: OpportunityKind
  contractType: ContractType
  workMode: WorkMode
  experienceLevel: ExperienceLevel
  institutionId: string
  categoryId: string
  regionId: string
  city: string
  summary: string
  description: string
  missions: string[]
  profile: string[]
  conditions: string[]
  benefits: string[]
  salary?: SalaryRange
  positions: number
  publishedAt: string
  deadline: string
  featured: boolean
  urgent: boolean
  views: number
  applicants: number
}

export type ApplicationStatus =
  | 'Envoyée'
  | 'En cours d’examen'
  | 'Présélectionné'
  | 'Entretien'
  | 'Acceptée'
  | 'Refusée'

export interface Application {
  id: string
  reference: string
  jobId: string
  userId: string
  status: ApplicationStatus
  submittedAt: string
  updatedAt: string
  coverLetter: string
  cvFileName: string
  timeline: { label: string; date: string; done: boolean }[]
}

export interface UserExperience {
  title: string
  organization: string
  startYear: number
  endYear: number | null
  description: string
}

export interface UserEducation {
  degree: string
  school: string
  year: number
}

export interface User {
  id: string
  firstName: string
  lastName: string
  title: string
  email: string
  phone: string
  regionId: string
  city: string
  avatarColor: string
  bio: string
  skills: string[]
  languages: { name: string; level: string }[]
  experiences: UserExperience[]
  education: UserEducation[]
  cvFileName: string
  completion: number
  savedJobs: string[]
}

export interface Testimonial {
  id: string
  name: string
  role: string
  institution: string
  avatarColor: string
  quote: string
  rating: number
}

export interface FaqItem {
  id: string
  question: string
  answer: string
  category: string
}

export interface PlatformStat {
  label: string
  value: number
  suffix: string
  icon: string
}

// ----- Filtres & requêtes -----

export type SortOption =
  | 'recent'
  | 'deadline'
  | 'relevance'
  | 'popularity'

export interface JobFilters {
  query: string
  institutionId: string | null
  institutionType: InstitutionType | null
  regionId: string | null
  contractType: ContractType | null
  categoryId: string | null
  kind: OpportunityKind | null
  datePosted: 'all' | '24h' | '7d' | '30d'
  sort: SortOption
  page: number
}

export interface Paginated<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}
