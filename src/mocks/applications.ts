import type { Application } from '~/types'

function iso(daysAgo: number): string {
  const d = new Date()
  d.setHours(10, 30, 0, 0)
  d.setDate(d.getDate() - daysAgo)
  return d.toISOString()
}

// Candidatures du candidat connecté (user-001).
export const applications: Application[] = [
  {
    id: 'app-001',
    reference: 'CAND-2026-00841',
    jobId: 'job-003', // Ingénieur DevOps
    userId: 'user-001',
    status: 'Entretien',
    submittedAt: iso(14),
    updatedAt: iso(3),
    coverLetter:
      "Madame, Monsieur, c'est avec un grand intérêt que je postule au poste d'Ingénieur DevOps...",
    cvFileName: 'CV_Aicha_Diallo_2026.pdf',
    timeline: [
      { label: 'Candidature envoyée', date: iso(14), done: true },
      { label: 'Dossier reçu et accusé', date: iso(13), done: true },
      { label: 'Présélection', date: iso(8), done: true },
      { label: 'Entretien programmé', date: iso(3), done: true },
      { label: 'Décision finale', date: '', done: false },
    ],
  },
  {
    id: 'app-002',
    reference: 'CAND-2026-00756',
    jobId: 'job-016', // Stage Développeur Front-End
    userId: 'user-001',
    status: 'Présélectionné',
    submittedAt: iso(10),
    updatedAt: iso(5),
    coverLetter:
      "Madame, Monsieur, je vous soumets ma candidature pour le stage de développeur front-end...",
    cvFileName: 'CV_Aicha_Diallo_2026.pdf',
    timeline: [
      { label: 'Candidature envoyée', date: iso(10), done: true },
      { label: 'Dossier reçu et accusé', date: iso(9), done: true },
      { label: 'Présélection', date: iso(5), done: true },
      { label: 'Entretien programmé', date: '', done: false },
      { label: 'Décision finale', date: '', done: false },
    ],
  },
  {
    id: 'app-003',
    reference: 'CAND-2026-00689',
    jobId: 'job-019', // Analyste Statisticien
    userId: 'user-001',
    status: 'En cours d’examen',
    submittedAt: iso(6),
    updatedAt: iso(6),
    coverLetter:
      "Madame, Monsieur, titulaire d'un Master en génie logiciel, je me permets de candidater...",
    cvFileName: 'CV_Aicha_Diallo_2026.pdf',
    timeline: [
      { label: 'Candidature envoyée', date: iso(6), done: true },
      { label: 'Dossier reçu et accusé', date: iso(5), done: true },
      { label: 'Présélection', date: '', done: false },
      { label: 'Entretien programmé', date: '', done: false },
      { label: 'Décision finale', date: '', done: false },
    ],
  },
  {
    id: 'app-004',
    reference: 'CAND-2026-00512',
    jobId: 'job-001', // Médecin généraliste
    userId: 'user-001',
    status: 'Refusée',
    submittedAt: iso(30),
    updatedAt: iso(20),
    coverLetter: 'Candidature exploratoire.',
    cvFileName: 'CV_Aicha_Diallo_2026.pdf',
    timeline: [
      { label: 'Candidature envoyée', date: iso(30), done: true },
      { label: 'Dossier reçu et accusé', date: iso(29), done: true },
      { label: 'Examen du dossier', date: iso(20), done: true },
      { label: 'Décision finale — non retenue', date: iso(20), done: true },
    ],
  },
  {
    id: 'app-005',
    reference: 'CAND-2026-00903',
    jobId: 'job-024', // Concours ENA
    userId: 'user-001',
    status: 'Envoyée',
    submittedAt: iso(1),
    updatedAt: iso(1),
    coverLetter: 'Inscription au concours.',
    cvFileName: 'CV_Aicha_Diallo_2026.pdf',
    timeline: [
      { label: 'Inscription enregistrée', date: iso(1), done: true },
      { label: 'Validation du dossier', date: '', done: false },
      { label: 'Convocation aux épreuves', date: '', done: false },
      { label: 'Résultats', date: '', done: false },
    ],
  },
]

export const applicationsByUser = (userId: string): Application[] =>
  applications.filter((a) => a.userId === userId)
