const categories = [
  {
    id: "cat-admin",
    name: "Administration & Fonction publique",
    slug: "administration",
    icon: "Landmark",
    description: "Postes administratifs, gestion publique et appui aux institutions.",
    jobCount: 184
  },
  {
    id: "cat-sante",
    name: "Santé & Action sociale",
    slug: "sante",
    icon: "HeartPulse",
    description: "Médecins, infirmiers, sages-femmes et personnels hospitaliers.",
    jobCount: 142
  },
  {
    id: "cat-education",
    name: "Éducation & Recherche",
    slug: "education",
    icon: "GraduationCap",
    description: "Enseignants, chercheurs et personnels universitaires.",
    jobCount: 167
  },
  {
    id: "cat-tech",
    name: "Numérique & Informatique",
    slug: "numerique",
    icon: "Cpu",
    description: "Développement, data, cybersécurité et transformation digitale.",
    jobCount: 98
  },
  {
    id: "cat-ingenierie",
    name: "Ingénierie & BTP",
    slug: "ingenierie",
    icon: "HardHat",
    description: "Génie civil, travaux publics, énergie et infrastructures.",
    jobCount: 76
  },
  {
    id: "cat-finance",
    name: "Finances & Comptabilité",
    slug: "finances",
    icon: "Landmark",
    description: "Budget, audit, fiscalité et contrôle de gestion publique.",
    jobCount: 64
  },
  {
    id: "cat-juridique",
    name: "Droit & Justice",
    slug: "droit",
    icon: "Scale",
    description: "Magistrats, juristes, greffiers et conseillers juridiques.",
    jobCount: 52
  },
  {
    id: "cat-agri",
    name: "Agriculture & Environnement",
    slug: "agriculture",
    icon: "Sprout",
    description: "Développement rural, eaux et forêts, agronomie.",
    jobCount: 58
  },
  {
    id: "cat-comm",
    name: "Communication & Médias",
    slug: "communication",
    icon: "Megaphone",
    description: "Communication institutionnelle, presse et relations publiques.",
    jobCount: 41
  },
  {
    id: "cat-secu",
    name: "Sécurité & Défense",
    slug: "securite",
    icon: "ShieldCheck",
    description: "Forces de sécurité, protection civile et défense nationale.",
    jobCount: 47
  },
  {
    id: "cat-transport",
    name: "Transport & Logistique",
    slug: "transport",
    icon: "Truck",
    description: "Mobilité, aviation civile, ports et chaîne logistique.",
    jobCount: 39
  },
  {
    id: "cat-rh",
    name: "Ressources humaines",
    slug: "ressources-humaines",
    icon: "Users",
    description: "Gestion des carrières, formation et dialogue social.",
    jobCount: 44
  }
];
const categoryById = (id) => categories.find((c) => c.id === id);
const categoryName = (id) => categoryById(id)?.name ?? "Autre";
export {
  categoryName as a,
  categories as c
};
