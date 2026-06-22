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
    question: 'Comment m’inscrire en tant que candidat ?',
    answer:
      "Cliquez sur « S’inscrire comme candidat », puis renseignez vos nom, prénom, adresse e-mail, numéro de téléphone et domaine d’activité, et déposez votre CV. Aucune création de mot de passe n’est nécessaire : votre profil est aussitôt visible des organismes recruteurs.",
  },
  {
    id: 'faq-2',
    category: 'Candidats',
    question: 'Comment consulter les offres et les concours ?',
    answer:
      "Rendez-vous dans la rubrique « Offres & concours ». Vous pouvez rechercher et filtrer les opportunités par ministère, institution, région, type de contrat, domaine et date de publication.",
  },
  {
    id: 'faq-3',
    category: 'Candidats',
    question: 'Que deviennent mes informations après mon inscription ?',
    answer:
      "Vos informations et votre CV sont transmis aux organismes recruteurs du secteur public. Ceux dont les besoins correspondent à votre profil vous contactent directement via les coordonnées que vous avez fournies.",
  },
  {
    id: 'faq-4',
    category: 'Formations',
    question: 'Comment accéder aux opportunités de formation ?',
    answer:
      "La section « Opportunités de formation » de l’accueil regroupe des formations professionnelles et certifiantes (cybersécurité, data, gestion de projet, marchés publics, langues…). Plusieurs d’entre elles sont entièrement gratuites.",
  },
  {
    id: 'faq-5',
    category: 'Administrations',
    question: 'Comment publier une offre en tant qu’administration ?',
    answer:
      "Cliquez sur « Connexion administration » et accédez à votre espace de gestion. Vous pouvez y publier vos offres, stages et concours, puis suivre et traiter les candidatures reçues.",
  },
  {
    id: 'faq-6',
    category: 'Administrations',
    question: 'Qui peut disposer d’un espace administration ?',
    answer:
      "Les ministères, mairies, entreprises publiques, ONG, universités et organismes partenaires vérifiés disposent d’un espace d’administration pour gérer leurs recrutements de bout en bout.",
  },
  {
    id: 'faq-7',
    category: 'Général',
    question: 'La plateforme est-elle gratuite ?',
    answer:
      "Oui. L’inscription, la consultation des offres et l’accès aux opportunités sont entièrement gratuits pour les citoyens. La plateforme est un service public national au bénéfice de l’emploi.",
  },
  {
    id: 'faq-8',
    category: 'Général',
    question: 'Puis-je utiliser la plateforme depuis mon téléphone ?',
    answer:
      "Oui, la plateforme est entièrement responsive et optimisée pour mobile, tablette et ordinateur. Vous pouvez vous inscrire et consulter les opportunités depuis n’importe quel appareil.",
  },
]

// Catégories de FAQ pour le filtre de la page d'accueil.
export const faqCategories = ['Tous', 'Candidats', 'Formations', 'Administrations', 'Général'] as const
