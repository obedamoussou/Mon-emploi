import type { Testimonial, FaqItem, PlatformStat } from '~/types'

export const platformStats: PlatformStat[] = [
  { label: 'Offres publiées', value: 1240, suffix: '+', icon: 'Briefcase' },
  { label: 'Organismes partenaires', value: 320, suffix: '+', icon: 'Building2' },
  { label: 'Candidats inscrits', value: 480000, suffix: '+', icon: 'Users' },
  { label: 'Recrutements réussis', value: 26500, suffix: '+', icon: 'CheckCircle2' },
]

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Mariam Sow',
    role: 'Attachée d’administration',
    institution: 'Ministère de la Fonction Publique',
    avatarColor: '#1f47e6',
    quote:
      "Grâce à la plateforme, j'ai trouvé et réussi le concours de la fonction publique. Le processus était clair et entièrement dématérialisé. Un vrai progrès pour notre pays.",
    rating: 5,
  },
  {
    id: 'test-2',
    name: 'Ibrahim Touré',
    role: 'Ingénieur Énergies',
    institution: 'Société Nationale d’Électricité',
    avatarColor: '#ea580c',
    quote:
      "J'ai postulé en quelques minutes et suivi ma candidature en temps réel. Aujourd'hui je contribue à l'électrification de zones rurales. Une fierté.",
    rating: 5,
  },
  {
    id: 'test-3',
    name: 'Awa Bah',
    role: 'Professeure de Lycée',
    institution: 'Ministère de l’Éducation Nationale',
    avatarColor: '#059669',
    quote:
      "Une plateforme moderne et transparente. Toutes les offres publiques au même endroit, c'est exactement ce qu'il manquait aux jeunes diplômés.",
    rating: 5,
  },
  {
    id: 'test-4',
    name: 'Dr. Samuel Eto',
    role: 'Directeur des Ressources Humaines',
    institution: 'Ministère de la Santé Publique',
    avatarColor: '#dc2626',
    quote:
      "Côté organisme, nous gérons nos recrutements de bout en bout. La qualité des candidatures reçues a nettement augmenté. Un outil indispensable.",
    rating: 5,
  },
]

export const faqItems: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Candidats',
    question: 'Comment créer un compte sur la plateforme ?',
    answer:
      "La création de compte est gratuite. Cliquez sur « Créer un compte », renseignez vos informations personnelles et validez votre adresse e-mail. Vous pourrez ensuite compléter votre profil et déposer votre CV.",
  },
  {
    id: 'faq-2',
    category: 'Candidats',
    question: 'Comment postuler à une offre ?',
    answer:
      "Depuis la page de détail d'une offre, cliquez sur « Postuler ». Vous serez guidé à travers un formulaire en plusieurs étapes : informations personnelles, dépôt du CV et de la lettre de motivation, puis confirmation. Vous recevez un accusé de réception immédiat.",
  },
  {
    id: 'faq-3',
    category: 'Candidats',
    question: 'Puis-je suivre l’état de mes candidatures ?',
    answer:
      "Oui. Depuis votre tableau de bord candidat, l'onglet « Mes candidatures » affiche en temps réel le statut de chaque dossier : envoyée, en cours d'examen, présélectionnée, entretien, acceptée ou refusée.",
  },
  {
    id: 'faq-4',
    category: 'Concours',
    question: 'Comment fonctionnent les concours de la fonction publique ?',
    answer:
      "Les concours sont publiés par les ministères et organismes habilités. Chaque annonce précise les conditions d'éligibilité, les épreuves, les dates et les centres d'examen. L'inscription se fait directement en ligne.",
  },
  {
    id: 'faq-5',
    category: 'Organismes',
    question: 'Comment publier une offre en tant qu’organisme public ?',
    answer:
      "Les institutions publiques, mairies, entreprises publiques, ONG et universités peuvent demander un compte organisme vérifié. Après validation, elles accèdent à un espace de gestion pour publier leurs offres et traiter les candidatures.",
  },
  {
    id: 'faq-6',
    category: 'Général',
    question: 'La plateforme est-elle gratuite ?',
    answer:
      "Oui, la consultation des offres et la candidature sont entièrement gratuites pour les citoyens. La plateforme est un service public national au bénéfice de l'emploi.",
  },
  {
    id: 'faq-7',
    category: 'Général',
    question: 'Mes données personnelles sont-elles protégées ?',
    answer:
      "Absolument. La plateforme respecte la réglementation nationale sur la protection des données personnelles. Vos informations ne sont partagées qu'avec les organismes auprès desquels vous postulez.",
  },
  {
    id: 'faq-8',
    category: 'Candidats',
    question: 'Puis-je postuler depuis mon téléphone ?',
    answer:
      "Oui, la plateforme est entièrement responsive et optimisée pour mobile, tablette et ordinateur. Vous pouvez consulter les offres et postuler depuis n'importe quel appareil.",
  },
]

// Catégories de FAQ pour le filtre de la page d'accueil.
export const faqCategories = ['Tous', 'Candidats', 'Concours', 'Organismes', 'Général'] as const
