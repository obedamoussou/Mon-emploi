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
    id: 'form-cyber',
    title: 'Cybersécurité & protection des systèmes d’information',
    provider: 'Agence Nationale du Numérique',
    category: 'Numérique',
    level: 'Intermédiaire',
    mode: 'Hybride',
    duration: '8 semaines',
    certifying: true,
    free: true,
    icon: 'ShieldCheck',
    color: '#1f47e6',
    seats: 40,
  },
  {
    id: 'form-data',
    title: 'Data Analyse & tableaux de bord décisionnels',
    provider: 'Institut National de la Statistique',
    category: 'Données',
    level: 'Intermédiaire',
    mode: 'En ligne',
    duration: '6 semaines',
    certifying: true,
    free: true,
    icon: 'BarChart3',
    color: '#059669',
    seats: 60,
  },
  {
    id: 'form-gestion',
    title: 'Gestion de projet & méthodes agiles',
    provider: 'École Nationale d’Administration',
    category: 'Management',
    level: 'Tous niveaux',
    mode: 'Présentiel',
    duration: '4 semaines',
    certifying: true,
    free: false,
    icon: 'Workflow',
    color: '#ea580c',
    seats: 30,
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
  {
    id: 'form-bureautique',
    title: 'Bureautique avancée & outils collaboratifs',
    provider: 'Centre de Formation de la Fonction Publique',
    category: 'Numérique',
    level: 'Débutant',
    mode: 'En ligne',
    duration: '3 semaines',
    certifying: true,
    free: true,
    icon: 'MonitorSmartphone',
    color: '#0891b2',
    seats: 120,
  },
  {
    id: 'form-langues',
    title: 'Anglais professionnel & communication',
    provider: 'Institut des Langues de Cotonou',
    category: 'Langues',
    level: 'Tous niveaux',
    mode: 'Hybride',
    duration: '10 semaines',
    certifying: true,
    free: false,
    icon: 'Languages',
    color: '#dc2626',
    seats: 50,
  },
]
