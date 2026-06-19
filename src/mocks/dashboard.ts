// =====================================================================
//  Données mockées spécifiques aux tableaux de bord (candidat & organisme).
// =====================================================================

export interface Notification {
  id: string
  type: 'application' | 'message' | 'alert' | 'system'
  title: string
  body: string
  daysAgo: number
  read: boolean
}

export const notifications: Notification[] = [
  {
    id: 'n1',
    type: 'application',
    title: 'Entretien programmé',
    body: 'La Société Nationale d’Électricité vous convie à un entretien pour le poste d’Ingénieur DevOps.',
    daysAgo: 0,
    read: false,
  },
  {
    id: 'n2',
    type: 'application',
    title: 'Candidature présélectionnée',
    body: 'Votre candidature au stage Développeur Front-End a été présélectionnée.',
    daysAgo: 1,
    read: false,
  },
  {
    id: 'n3',
    type: 'alert',
    title: 'Nouvelle offre correspondant à votre profil',
    body: '3 nouvelles offres « Numérique & Informatique » dans le District de la Capitale.',
    daysAgo: 2,
    read: false,
  },
  {
    id: 'n4',
    type: 'message',
    title: 'Message du Ministère de la Santé',
    body: 'Merci de compléter votre dossier avant le 30 du mois en cours.',
    daysAgo: 4,
    read: true,
  },
  {
    id: 'n5',
    type: 'system',
    title: 'Profil à 85 % complété',
    body: 'Ajoutez une certification pour atteindre 100 % et booster votre visibilité.',
    daysAgo: 6,
    read: true,
  },
]

export interface CoverLetter {
  id: string
  title: string
  updatedDaysAgo: number
  excerpt: string
}

export const coverLetters: CoverLetter[] = [
  {
    id: 'cl1',
    title: 'Lettre — Ingénierie & Numérique',
    updatedDaysAgo: 3,
    excerpt:
      'Madame, Monsieur, forte d’une solide expérience en développement logiciel, je souhaite mettre mes compétences au service de la transformation numérique de l’administration…',
  },
  {
    id: 'cl2',
    title: 'Lettre — Fonction publique (concours)',
    updatedDaysAgo: 12,
    excerpt:
      'Madame, Monsieur, profondément attachée aux valeurs du service public, je me présente au concours afin de contribuer à la modernisation de nos institutions…',
  },
  {
    id: 'cl3',
    title: 'Lettre — Gestion de projet',
    updatedDaysAgo: 28,
    excerpt:
      'Madame, Monsieur, ma maîtrise des méthodes agiles et mon sens de l’organisation me permettront de piloter efficacement vos projets stratégiques…',
  },
]

// ----- Côté organisme -----

export interface OrgStat {
  label: string
  value: string
  delta: string
  trend: 'up' | 'down'
  icon: string
}

export const orgStats: OrgStat[] = [
  { label: 'Offres actives', value: '38', delta: '+4 ce mois', trend: 'up', icon: 'Briefcase' },
  { label: 'Candidatures reçues', value: '1 246', delta: '+18 %', trend: 'up', icon: 'Users' },
  { label: 'Entretiens planifiés', value: '52', delta: '+7', trend: 'up', icon: 'CalendarCheck' },
  { label: 'Taux de réponse', value: '94 %', delta: '+2 pts', trend: 'up', icon: 'Activity' },
]

export interface OrgOffer {
  id: string
  title: string
  ref: string
  status: 'Active' | 'En pause' | 'Clôturée'
  applicants: number
  views: number
  daysLeft: number
}

export const orgOffers: OrgOffer[] = [
  { id: 'o1', title: 'Ingénieur DevOps Senior', ref: 'SNE-2026-031', status: 'Active', applicants: 86, views: 4120, daysLeft: 12 },
  { id: 'o2', title: 'Chargé de communication digitale', ref: 'SNE-2026-029', status: 'Active', applicants: 142, views: 6890, daysLeft: 5 },
  { id: 'o3', title: 'Technicien réseau électrique', ref: 'SNE-2026-027', status: 'Active', applicants: 67, views: 2980, daysLeft: 21 },
  { id: 'o4', title: 'Assistant administratif', ref: 'SNE-2026-024', status: 'En pause', applicants: 54, views: 1870, daysLeft: 0 },
  { id: 'o5', title: 'Comptable confirmé', ref: 'SNE-2026-019', status: 'Clôturée', applicants: 203, views: 9120, daysLeft: 0 },
]

export interface OrgCandidate {
  id: string
  name: string
  role: string
  offer: string
  status: 'Nouveau' | 'Présélectionné' | 'Entretien' | 'Refusé'
  matchScore: number
  avatarColor: string
  appliedDaysAgo: number
}

export const orgCandidates: OrgCandidate[] = [
  { id: 'c1', name: 'Aïcha Diallo', role: 'Ingénieure Logicielle', offer: 'Ingénieur DevOps Senior', status: 'Entretien', matchScore: 94, avatarColor: '#1f47e6', appliedDaysAgo: 3 },
  { id: 'c2', name: 'Moussa Koné', role: 'Administrateur Système', offer: 'Ingénieur DevOps Senior', status: 'Présélectionné', matchScore: 88, avatarColor: '#059669', appliedDaysAgo: 4 },
  { id: 'c3', name: 'Nadia Traoré', role: 'Community Manager', offer: 'Chargé de communication digitale', status: 'Nouveau', matchScore: 82, avatarColor: '#dc2626', appliedDaysAgo: 1 },
  { id: 'c4', name: 'Yao Adjovi', role: 'Technicien Électricité', offer: 'Technicien réseau électrique', status: 'Présélectionné', matchScore: 79, avatarColor: '#ea580c', appliedDaysAgo: 6 },
  { id: 'c5', name: 'Sophie Mensah', role: 'Cheffe de projet digital', offer: 'Chargé de communication digitale', status: 'Nouveau', matchScore: 76, avatarColor: '#7c3aed', appliedDaysAgo: 2 },
]

export interface OrgMessage {
  id: string
  from: string
  role: string
  preview: string
  daysAgo: number
  unread: boolean
  avatarColor: string
}

export const orgMessages: OrgMessage[] = [
  { id: 'm1', from: 'Aïcha Diallo', role: 'Candidate — DevOps', preview: 'Bonjour, je vous confirme ma disponibilité pour l’entretien de jeudi…', daysAgo: 0, unread: true, avatarColor: '#1f47e6' },
  { id: 'm2', from: 'Nadia Traoré', role: 'Candidate — Communication', preview: 'Merci pour votre retour, voici les éléments complémentaires demandés…', daysAgo: 1, unread: true, avatarColor: '#dc2626' },
  { id: 'm3', from: 'Direction des RH', role: 'Interne', preview: 'Validation du calendrier de recrutement du trimestre.', daysAgo: 2, unread: false, avatarColor: '#059669' },
  { id: 'm4', from: 'Moussa Koné', role: 'Candidat — DevOps', preview: 'Je reste à votre disposition pour tout complément d’information.', daysAgo: 3, unread: false, avatarColor: '#7c3aed' },
]

// Volume de candidatures sur 6 mois (mini graphe organisme).
export const applicationsTrend = [
  { month: 'Jan', value: 120 },
  { month: 'Fév', value: 168 },
  { month: 'Mar', value: 145 },
  { month: 'Avr', value: 210 },
  { month: 'Mai', value: 256 },
  { month: 'Juin', value: 312 },
]
