// =====================================================================
//  Données mockées de l'espace SUPER ADMIN (propriétaire de la plateforme).
//  Vue globale : candidats, administrations, offres, formations, activité.
// =====================================================================

export type AdminAccountStatus = 'Actif' | 'En attente' | 'Suspendu'

export interface AdminCandidate {
  id: string
  name: string
  title: string
  domain: string
  regionId: string
  email: string
  phone: string
  avatarColor: string
  status: AdminAccountStatus
  registeredDaysAgo: number
  cvFileName: string
}

export const adminCandidates: AdminCandidate[] = [
  { id: 'cand-001', name: 'Aïcha Diallo', title: 'Ingénieure Logicielle', domain: 'Numérique & Informatique', regionId: 'reg-cap', email: 'aicha.diallo@email.bj', phone: '+229 90 12 34 56', avatarColor: '#1f47e6', status: 'Actif', registeredDaysAgo: 2, cvFileName: 'CV_Aicha_Diallo.pdf' },
  { id: 'cand-002', name: 'Koffi Mensah', title: 'Gestionnaire Administratif', domain: 'Administration', regionId: 'reg-littoral', email: 'koffi.mensah@email.bj', phone: '+229 91 22 33 44', avatarColor: '#059669', status: 'Actif', registeredDaysAgo: 3, cvFileName: 'CV_Koffi_Mensah.pdf' },
  { id: 'cand-003', name: 'Fatou Camara', title: 'Médecin Généraliste', domain: 'Santé & Action sociale', regionId: 'reg-centre', email: 'fatou.camara@email.bj', phone: '+229 92 55 66 77', avatarColor: '#dc2626', status: 'Actif', registeredDaysAgo: 5, cvFileName: 'CV_Fatou_Camara.pdf' },
  { id: 'cand-004', name: 'Ibrahim Touré', title: 'Ingénieur Énergies', domain: 'Ingénierie & BTP', regionId: 'reg-littoral', email: 'ibrahim.toure@email.bj', phone: '+229 93 44 55 66', avatarColor: '#ea580c', status: 'En attente', registeredDaysAgo: 1, cvFileName: 'CV_Ibrahim_Toure.pdf' },
  { id: 'cand-005', name: 'Awa Bah', title: 'Professeure de Lycée', domain: 'Éducation & Recherche', regionId: 'reg-ouest', email: 'awa.bah@email.bj', phone: '+229 94 11 22 33', avatarColor: '#7c3aed', status: 'Actif', registeredDaysAgo: 7, cvFileName: 'CV_Awa_Bah.pdf' },
  { id: 'cand-006', name: 'Marc Houngbé', title: 'Juriste Public', domain: 'Droit & Justice', regionId: 'reg-cap', email: 'marc.houngbe@email.bj', phone: '+229 95 66 77 88', avatarColor: '#0891b2', status: 'Suspendu', registeredDaysAgo: 18, cvFileName: 'CV_Marc_Houngbe.pdf' },
  { id: 'cand-007', name: 'Nadia Sossou', title: 'Chargée de Communication', domain: 'Communication & Médias', regionId: 'reg-maritime', email: 'nadia.sossou@email.bj', phone: '+229 96 33 44 55', avatarColor: '#db2777', status: 'Actif', registeredDaysAgo: 9, cvFileName: 'CV_Nadia_Sossou.pdf' },
  { id: 'cand-008', name: 'Yao Adjovi', title: 'Technicien Réseau', domain: 'Numérique & Informatique', regionId: 'reg-sud', email: 'yao.adjovi@email.bj', phone: '+229 97 88 99 00', avatarColor: '#16a34a', status: 'En attente', registeredDaysAgo: 1, cvFileName: 'CV_Yao_Adjovi.pdf' },
]

export type ActivityType = 'candidat' | 'offre' | 'organisme' | 'candidature' | 'formation'

export interface ActivityItem {
  id: string
  type: ActivityType
  text: string
  daysAgo: number
}

export const activityFeed: ActivityItem[] = [
  { id: 'a1', type: 'candidat', text: 'Yao Adjovi s’est inscrit comme candidat (Technicien Réseau).', daysAgo: 0 },
  { id: 'a2', type: 'offre', text: 'Nouvelle offre publiée par le Ministère de la Santé Publique.', daysAgo: 0 },
  { id: 'a3', type: 'organisme', text: 'La Mairie de Cotonou a été vérifiée et activée.', daysAgo: 1 },
  { id: 'a4', type: 'candidature', text: '128 nouvelles candidatures reçues sur l’ensemble de la plateforme.', daysAgo: 1 },
  { id: 'a5', type: 'formation', text: 'Formation « Cybersécurité » ajoutée par l’Agence Nationale du Numérique.', daysAgo: 2 },
  { id: 'a6', type: 'candidat', text: 'Ibrahim Touré s’est inscrit comme candidat (Ingénieur Énergies).', daysAgo: 2 },
]

// Volume d'inscriptions candidats sur 6 mois (graphe super admin).
export const signupsTrend = [
  { month: 'Jan', value: 320 },
  { month: 'Fév', value: 410 },
  { month: 'Mar', value: 380 },
  { month: 'Avr', value: 520 },
  { month: 'Mai', value: 610 },
  { month: 'Juin', value: 740 },
]
