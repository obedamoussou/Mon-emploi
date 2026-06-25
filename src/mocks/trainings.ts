// =====================================================================
//  Opportunités de formation (mock) — certifications & montées en
//  compétences proposées aux candidats du secteur public.
// =====================================================================

export interface Training {
  id: string
  title: string
  provider: string
  category: string
  level: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Tous niveaux'
  mode: 'En ligne' | 'Présentiel' | 'Hybride'
  duration: string
  certifying: boolean
  free: boolean
  icon: string // nom d'icône Lucide
  color: string
  seats: number
}

export const trainings: Training[] = [
  {
    id: 'form-langues',
    title: 'Anglais professionnel & communication',
    provider: 'Ministère des Petites et Moyennes Entreprises et de la Promotion de l’Emploi',
    category: 'Langues',
    level: 'Tous niveaux',
    mode: 'Hybride',
    duration: '10 semaines',
    certifying: true,
    free: true,
    icon: 'Languages',
    color: '#dc2626',
    seats: 50,
  },
  {
    id: 'form-marches',
    title: 'Marchés publics & passation des contrats',
    provider: 'Ministère de l’Économie et des Finances',
    category: 'Juridique',
    level: 'Avancé',
    mode: 'Hybride',
    duration: '5 semaines',
    certifying: true,
    free: true,
    icon: 'Scale',
    color: '#7c3aed',
    seats: 25,
  },
]
