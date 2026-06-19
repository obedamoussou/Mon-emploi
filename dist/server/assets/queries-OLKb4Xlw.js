import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { s as slugify, g as delay, h as daysUntil } from "./Badge-txxXTAF8.js";
const currentUser = {
  id: "user-001",
  firstName: "Aïcha",
  lastName: "Diallo",
  title: "Ingénieure Logicielle",
  email: "aicha.diallo@email.tl",
  phone: "+228 90 12 34 56",
  regionId: "reg-cap",
  city: "Nseba",
  avatarColor: "#1f47e6",
  bio: "Ingénieure logicielle passionnée par le service public et la transformation numérique. Je souhaite mettre mes compétences au service de la modernisation de l'administration de mon pays.",
  skills: [
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "Docker",
    "Gestion de projet",
    "Méthodes Agiles"
  ],
  languages: [
    { name: "Français", level: "Langue maternelle" },
    { name: "Anglais", level: "Courant (C1)" },
    { name: "Espagnol", level: "Intermédiaire (B1)" }
  ],
  experiences: [
    {
      title: "Développeuse Full-Stack",
      organization: "Startup TechAfrica",
      startYear: 2022,
      endYear: null,
      description: "Développement de plateformes web pour des clients du secteur public et privé. Encadrement d’une équipe de 3 développeurs."
    },
    {
      title: "Développeuse Junior",
      organization: "Agence Digitale Nseba",
      startYear: 2020,
      endYear: 2022,
      description: "Conception et intégration d’applications web responsive pour divers clients."
    }
  ],
  education: [
    { degree: "Master en Génie Logiciel", school: "Université Polytechnique de Port-Akwa", year: 2020 },
    { degree: "Licence en Informatique", school: "Université Nationale de Nseba", year: 2018 }
  ],
  cvFileName: "CV_Aicha_Diallo_2026.pdf",
  completion: 85,
  savedJobs: ["job-003", "job-016", "job-019"]
};
const regions = [
  { id: "reg-cap", name: "District de la Capitale", chefLieu: "Nseba", population: 248e4 },
  { id: "reg-littoral", name: "Littoral", chefLieu: "Port-Akwa", population: 192e4 },
  { id: "reg-centre", name: "Centre", chefLieu: "Mballa", population: 134e4 },
  { id: "reg-nord", name: "Nord", chefLieu: "Garoua-Sud", population: 111e4 },
  { id: "reg-ouest", name: "Ouest", chefLieu: "Bantou", population: 98e4 },
  { id: "reg-est", name: "Est", chefLieu: "Ndelé", population: 64e4 },
  { id: "reg-sud", name: "Sud", chefLieu: "Kribia", population: 72e4 },
  { id: "reg-plateaux", name: "Plateaux", chefLieu: "Sokodé-Ville", population: 86e4 },
  { id: "reg-savane", name: "Savanes", chefLieu: "Dapango", population: 54e4 },
  { id: "reg-maritime", name: "Maritime", chefLieu: "Aného-Cité", population: 123e4 }
];
const regionById = (id) => regions.find((r) => r.id === id);
const regionName = (id) => regionById(id)?.name ?? "National";
const institutions = [
  {
    id: "inst-fonction-publique",
    name: "Ministère de la Fonction Publique et de la Réforme Administrative",
    shortName: "MFPRA",
    slug: "ministere-fonction-publique",
    type: "Ministère",
    sector: "Administration",
    logoColor: "#1f47e6",
    logoInitials: "FP",
    description: "Pilote la politique nationale de la fonction publique et la modernisation de l’administration.",
    presentation: "Le Ministère de la Fonction Publique et de la Réforme Administrative est le garant de la gestion des carrières des agents de l'État. Il conduit la réforme administrative, organise les concours nationaux et veille à l'égalité d'accès aux emplois publics sur l'ensemble du territoire national.",
    regionId: "reg-cap",
    city: "Nseba",
    address: "Boulevard de la République, Cité Administrative, Nseba",
    email: "recrutement@fonctionpublique.gouv.tl",
    phone: "+228 22 00 10 10",
    website: "www.fonctionpublique.gouv.tl",
    foundedYear: 1962,
    employees: 4200,
    verified: true,
    jobCount: 38
  },
  {
    id: "inst-sante",
    name: "Ministère de la Santé Publique et de l’Hygiène",
    shortName: "MSPH",
    slug: "ministere-sante",
    type: "Ministère",
    sector: "Santé",
    logoColor: "#dc2626",
    logoInitials: "SP",
    description: "Coordonne le système national de santé, les hôpitaux publics et la politique sanitaire.",
    presentation: "Le Ministère de la Santé Publique et de l'Hygiène définit et met en œuvre la politique sanitaire nationale. Il supervise les centres hospitaliers universitaires, les districts sanitaires et les programmes de santé publique, et recrute chaque année des milliers de professionnels de santé.",
    regionId: "reg-cap",
    city: "Nseba",
    address: "Avenue de l’Indépendance, Quartier Ministériel, Nseba",
    email: "rh@sante.gouv.tl",
    phone: "+228 22 00 20 20",
    website: "www.sante.gouv.tl",
    foundedYear: 1960,
    employees: 31e3,
    verified: true,
    jobCount: 46
  },
  {
    id: "inst-education",
    name: "Ministère de l’Éducation Nationale",
    shortName: "MEN",
    slug: "ministere-education",
    type: "Ministère",
    sector: "Éducation",
    logoColor: "#059669",
    logoInitials: "EN",
    description: "En charge de l’enseignement primaire, secondaire et de la formation des enseignants.",
    presentation: "Le Ministère de l'Éducation Nationale assure le pilotage du système éducatif national, de la maternelle au lycée. Il recrute enseignants, inspecteurs et personnels administratifs pour garantir une éducation de qualité accessible à tous les enfants du pays.",
    regionId: "reg-cap",
    city: "Nseba",
    address: "Rond-point de l’Éducation, Nseba",
    email: "concours@education.gouv.tl",
    phone: "+228 22 00 30 30",
    website: "www.education.gouv.tl",
    foundedYear: 1961,
    employees: 58e3,
    verified: true,
    jobCount: 52
  },
  {
    id: "inst-numerique",
    name: "Ministère de l’Économie Numérique et de la Transformation Digitale",
    shortName: "MENTD",
    slug: "ministere-numerique",
    type: "Ministère",
    sector: "Numérique",
    logoColor: "#7c3aed",
    logoInitials: "EN",
    description: "Conduit la stratégie nationale de digitalisation des services publics.",
    presentation: "Le Ministère de l'Économie Numérique porte l'ambition d'un État digital. Il déploie l'administration en ligne, la fibre optique et soutient l'écosystème tech national. Ses recrutements ciblent les talents du développement, de la data et de la cybersécurité.",
    regionId: "reg-cap",
    city: "Nseba",
    address: "Technopole de Nseba, Bâtiment Innovation",
    email: "talents@numerique.gouv.tl",
    phone: "+228 22 00 40 40",
    website: "www.numerique.gouv.tl",
    foundedYear: 2016,
    employees: 1200,
    verified: true,
    jobCount: 27
  },
  {
    id: "inst-finances",
    name: "Ministère de l’Économie et des Finances",
    shortName: "MEF",
    slug: "ministere-finances",
    type: "Ministère",
    sector: "Finances",
    logoColor: "#192f9c",
    logoInitials: "EF",
    description: "Gère le budget de l’État, la fiscalité et la politique économique nationale.",
    presentation: "Le Ministère de l'Économie et des Finances élabore le budget national, pilote la politique fiscale et budgétaire et supervise les régies financières. Il recrute des cadres en finances publiques, audit, statistiques et économie.",
    regionId: "reg-cap",
    city: "Nseba",
    address: "Immeuble du Trésor, Place des Finances, Nseba",
    email: "recrutement@finances.gouv.tl",
    phone: "+228 22 00 50 50",
    website: "www.finances.gouv.tl",
    foundedYear: 1960,
    employees: 9800,
    verified: true,
    jobCount: 24
  },
  {
    id: "inst-mairie-nseba",
    name: "Mairie de Nseba",
    shortName: "Mairie Nseba",
    slug: "mairie-nseba",
    type: "Mairie",
    sector: "Collectivité",
    logoColor: "#0891b2",
    logoInitials: "MN",
    description: "Administration municipale de la capitale, au service de 2,4 millions d’habitants.",
    presentation: "La Mairie de Nseba administre la capitale et ses services de proximité : état civil, voirie, propreté urbaine, urbanisme et action sociale. Elle recrute des agents municipaux dans des domaines variés pour améliorer le cadre de vie des citoyens.",
    regionId: "reg-cap",
    city: "Nseba",
    address: "Hôtel de Ville, Place de la Mairie, Nseba",
    email: "emploi@mairie-nseba.tl",
    phone: "+228 22 11 00 00",
    website: "www.mairie-nseba.tl",
    foundedYear: 1959,
    employees: 6400,
    verified: true,
    jobCount: 19
  },
  {
    id: "inst-mairie-portakwa",
    name: "Mairie de Port-Akwa",
    shortName: "Mairie Port-Akwa",
    slug: "mairie-port-akwa",
    type: "Mairie",
    sector: "Collectivité",
    logoColor: "#0d9488",
    logoInitials: "PA",
    description: "Municipalité de la capitale économique et premier port du pays.",
    presentation: "La Mairie de Port-Akwa gère la métropole portuaire et industrielle du pays. Elle développe les infrastructures urbaines, le transport et l'assainissement, et recrute des profils techniques et administratifs pour accompagner la croissance de la ville.",
    regionId: "reg-littoral",
    city: "Port-Akwa",
    address: "Avenue du Port, Centre-ville, Port-Akwa",
    email: "rh@mairie-portakwa.tl",
    phone: "+228 33 22 00 00",
    website: "www.mairie-portakwa.tl",
    foundedYear: 1955,
    employees: 5100,
    verified: true,
    jobCount: 15
  },
  {
    id: "inst-energie",
    name: "Société Nationale d’Électricité",
    shortName: "SONEL",
    slug: "societe-nationale-electricite",
    type: "Entreprise publique",
    sector: "Énergie",
    logoColor: "#ea580c",
    logoInitials: "SN",
    description: "Opérateur public de production et distribution d’électricité.",
    presentation: "La Société Nationale d'Électricité assure la production, le transport et la distribution de l'énergie électrique sur tout le territoire. Engagée dans la transition énergétique, elle recrute ingénieurs, techniciens et gestionnaires pour ses projets d'électrification rurale et solaire.",
    regionId: "reg-littoral",
    city: "Port-Akwa",
    address: "Zone Industrielle, Port-Akwa",
    email: "carrieres@sonel.tl",
    phone: "+228 33 44 00 00",
    website: "www.sonel.tl",
    foundedYear: 1974,
    employees: 7600,
    verified: true,
    jobCount: 18
  },
  {
    id: "inst-eau",
    name: "Office National de l’Eau et de l’Assainissement",
    shortName: "ONEA",
    slug: "office-national-eau",
    type: "Entreprise publique",
    sector: "Eau & Assainissement",
    logoColor: "#0284c7",
    logoInitials: "OE",
    description: "Gestion de l’accès à l’eau potable et de l’assainissement.",
    presentation: "L'Office National de l'Eau et de l'Assainissement garantit l'accès à l'eau potable pour tous. Il construit et exploite les réseaux d'adduction d'eau et les stations de traitement, et recrute des profils en hydraulique, génie civil et qualité de l'eau.",
    regionId: "reg-centre",
    city: "Mballa",
    address: "Boulevard de l’Eau, Mballa",
    email: "emploi@onea.tl",
    phone: "+228 24 55 00 00",
    website: "www.onea.tl",
    foundedYear: 1981,
    employees: 3400,
    verified: true,
    jobCount: 11
  },
  {
    id: "inst-universite-nseba",
    name: "Université Nationale de Nseba",
    shortName: "UNN",
    slug: "universite-nationale-nseba",
    type: "Université",
    sector: "Enseignement supérieur",
    logoColor: "#1736c4",
    logoInitials: "UN",
    description: "Première université du pays, 48 000 étudiants et 9 facultés.",
    presentation: "L'Université Nationale de Nseba est le plus grand établissement d'enseignement supérieur du pays. Elle forme les futurs cadres de la nation à travers ses facultés de droit, médecine, sciences, lettres et ingénierie, et recrute enseignants-chercheurs et personnels académiques.",
    regionId: "reg-cap",
    city: "Nseba",
    address: "Campus Universitaire, Route de l’Université, Nseba",
    email: "recrutement@unn.edu.tl",
    phone: "+228 22 66 00 00",
    website: "www.unn.edu.tl",
    foundedYear: 1970,
    employees: 4800,
    verified: true,
    jobCount: 21
  },
  {
    id: "inst-universite-portakwa",
    name: "Université Polytechnique de Port-Akwa",
    shortName: "UPPA",
    slug: "universite-polytechnique-port-akwa",
    type: "Université",
    sector: "Enseignement supérieur",
    logoColor: "#4338ca",
    logoInitials: "UP",
    description: "Grande école d’ingénieurs et pôle de recherche technologique.",
    presentation: "L'Université Polytechnique de Port-Akwa est le pôle d'excellence en ingénierie et technologies. Elle développe la recherche appliquée et les partenariats industriels, et recherche des enseignants-chercheurs et ingénieurs de laboratoire de haut niveau.",
    regionId: "reg-littoral",
    city: "Port-Akwa",
    address: "Campus Polytechnique, Port-Akwa",
    email: "rh@uppa.edu.tl",
    phone: "+228 33 66 00 00",
    website: "www.uppa.edu.tl",
    foundedYear: 1988,
    employees: 2600,
    verified: true,
    jobCount: 14
  },
  {
    id: "inst-ong-espoir",
    name: "ONG Espoir & Développement",
    shortName: "Espoir & Dév.",
    slug: "ong-espoir-developpement",
    type: "ONG",
    sector: "Action humanitaire",
    logoColor: "#16a34a",
    logoInitials: "ED",
    description: "Organisation de développement communautaire et d’aide humanitaire.",
    presentation: "Espoir & Développement œuvre depuis vingt ans pour l'éducation, la santé communautaire et l'autonomisation des femmes en milieu rural. Présente dans huit régions, l'ONG recrute des chargés de projet, animateurs et experts du développement.",
    regionId: "reg-nord",
    city: "Garoua-Sud",
    address: "Quartier Plateau, Garoua-Sud",
    email: "recrutement@espoir-dev.org",
    phone: "+228 26 77 00 00",
    website: "www.espoir-dev.org",
    foundedYear: 2004,
    employees: 480,
    verified: true,
    jobCount: 9
  },
  {
    id: "inst-ong-sante-pour-tous",
    name: "ONG Santé Pour Tous",
    shortName: "Santé Pour Tous",
    slug: "ong-sante-pour-tous",
    type: "ONG",
    sector: "Santé communautaire",
    logoColor: "#e11d48",
    logoInitials: "ST",
    description: "Accès aux soins de proximité dans les zones rurales et enclavées.",
    presentation: "Santé Pour Tous déploie des cliniques mobiles et des programmes de prévention dans les régions les plus reculées. L'ONG recrute médecins, infirmiers, logisticiens et coordinateurs de programmes de santé.",
    regionId: "reg-est",
    city: "Ndelé",
    address: "Centre Médico-social, Ndelé",
    email: "jobs@santepourtous.org",
    phone: "+228 27 88 00 00",
    website: "www.santepourtous.org",
    foundedYear: 2010,
    employees: 320,
    verified: true,
    jobCount: 7
  },
  {
    id: "inst-agence-emploi",
    name: "Agence Nationale pour l’Emploi des Jeunes",
    shortName: "ANEJ",
    slug: "agence-nationale-emploi-jeunes",
    type: "Agence publique",
    sector: "Emploi & Insertion",
    logoColor: "#0369a1",
    logoInitials: "AE",
    description: "Insertion professionnelle et accompagnement des jeunes diplômés.",
    presentation: "L'Agence Nationale pour l'Emploi des Jeunes accompagne l'insertion des jeunes diplômés à travers le conseil, la formation et les stages en entreprise. Elle pilote les programmes nationaux d'emploi et recrute conseillers et chargés de mission.",
    regionId: "reg-cap",
    city: "Nseba",
    address: "Maison de l’Emploi, Nseba",
    email: "recrutement@anej.gouv.tl",
    phone: "+228 22 99 00 00",
    website: "www.anej.gouv.tl",
    foundedYear: 2009,
    employees: 890,
    verified: true,
    jobCount: 12
  },
  {
    id: "inst-aviation",
    name: "Agence Nationale de l’Aviation Civile",
    shortName: "ANAC",
    slug: "agence-aviation-civile",
    type: "Agence publique",
    sector: "Transport aérien",
    logoColor: "#2563eb",
    logoInitials: "AC",
    description: "Régulation et sécurité du transport aérien national.",
    presentation: "L'Agence Nationale de l'Aviation Civile veille à la sécurité et à la régulation du transport aérien. Elle supervise les aéroports, la navigation aérienne et la certification, et recrute des ingénieurs aéronautiques, contrôleurs et inspecteurs.",
    regionId: "reg-littoral",
    city: "Port-Akwa",
    address: "Aéroport International de Port-Akwa",
    email: "carrieres@anac.tl",
    phone: "+228 33 99 00 00",
    website: "www.anac.tl",
    foundedYear: 1998,
    employees: 1500,
    verified: true,
    jobCount: 8
  },
  {
    id: "inst-poste",
    name: "Société Nationale des Postes",
    shortName: "SNP",
    slug: "societe-nationale-postes",
    type: "Entreprise publique",
    sector: "Services postaux",
    logoColor: "#ca9a04",
    logoInitials: "SP",
    description: "Réseau postal et services financiers de proximité.",
    presentation: "La Société Nationale des Postes assure le service postal universel et des services financiers de proximité à travers son réseau d'agences. Elle se modernise vers le numérique et recrute des profils en logistique, finance et relation client.",
    regionId: "reg-maritime",
    city: "Aného-Cité",
    address: "Direction Générale, Aného-Cité",
    email: "emploi@laposte.tl",
    phone: "+228 23 44 00 00",
    website: "www.laposte.tl",
    foundedYear: 1960,
    employees: 4100,
    verified: true,
    jobCount: 10
  }
];
const institutionById = (id) => institutions.find((i) => i.id === id);
const institutionTypes = [
  "Ministère",
  "Mairie",
  "Entreprise publique",
  "ONG",
  "Université",
  "Agence publique",
  "Collectivité",
  "Organisme partenaire"
];
function isoDaysFromNow(days) {
  const d = /* @__PURE__ */ new Date();
  d.setHours(9, 0, 0, 0);
  d.setDate(d.getDate() + days);
  return d.toISOString();
}
const seeds = [
  {
    ref: "MSPH-2026-0142",
    title: "Médecin Généraliste — Centre Hospitalier Régional",
    kind: "emploi",
    contractType: "CDI",
    workMode: "Présentiel",
    level: "Confirmé",
    institutionId: "inst-sante",
    categoryId: "cat-sante",
    regionId: "reg-centre",
    city: "Mballa",
    summary: "Le Ministère de la Santé recrute des médecins généralistes pour renforcer les équipes du Centre Hospitalier Régional de Mballa.",
    missions: [
      "Assurer les consultations de médecine générale et le suivi des patients",
      "Poser les diagnostics et prescrire les traitements appropriés",
      "Participer aux gardes et à la permanence des soins",
      "Encadrer les internes et le personnel paramédical",
      "Contribuer aux programmes de santé publique et de prévention"
    ],
    profile: [
      "Doctorat en médecine reconnu par l'État",
      "Inscription à l'Ordre National des Médecins",
      "Minimum 2 ans d’expérience clinique",
      "Sens de l’écoute, rigueur et esprit d’équipe"
    ],
    conditions: [
      "Poste à temps plein basé à Mballa",
      "Logement de fonction selon disponibilité",
      "Prise de poste : septembre 2026"
    ],
    benefits: ["Prime de zone", "Couverture santé", "Formation continue", "Évolution de carrière"],
    salaryMin: 65e4,
    salaryMax: 95e4,
    positions: 6,
    publishedDaysAgo: 2,
    deadlineInDays: 21,
    featured: true,
    urgent: false,
    views: 3240,
    applicants: 87
  },
  {
    ref: "MEN-CONC-2026-007",
    title: "Concours National de Recrutement de Professeurs des Lycées",
    kind: "concours",
    contractType: "Concours",
    workMode: "Présentiel",
    level: "Junior",
    institutionId: "inst-education",
    categoryId: "cat-education",
    regionId: "reg-cap",
    city: "National",
    summary: "Ouverture du concours national pour le recrutement de 1 200 professeurs de l'enseignement secondaire, toutes disciplines confondues.",
    missions: [
      "Enseigner sa discipline dans les établissements publics du secondaire",
      "Préparer et corriger les évaluations",
      "Participer aux conseils de classe et à la vie scolaire",
      "Assurer le suivi pédagogique des élèves"
    ],
    profile: [
      "Licence ou Master dans la discipline concernée",
      "Nationalité requise",
      "Âge maximum : 35 ans à la date du concours",
      "Casier judiciaire vierge"
    ],
    conditions: [
      "Concours écrit et oral organisé dans tous les chefs-lieux de région",
      "Affectation sur l’ensemble du territoire national",
      "Statut de fonctionnaire de l’État après réussite"
    ],
    benefits: ["Sécurité de l’emploi", "Grille indiciaire fonction publique", "Congés scolaires", "Pension de retraite"],
    positions: 1200,
    publishedDaysAgo: 5,
    deadlineInDays: 34,
    featured: true,
    urgent: false,
    views: 18420,
    applicants: 642
  },
  {
    ref: "MENTD-2026-0031",
    title: "Ingénieur DevOps — Plateforme e-Gouvernement",
    kind: "emploi",
    contractType: "CDI",
    workMode: "Hybride",
    level: "Senior",
    institutionId: "inst-numerique",
    categoryId: "cat-tech",
    regionId: "reg-cap",
    city: "Nseba",
    summary: "Rejoignez l'équipe qui construit l'infrastructure numérique de l'État. Nous recherchons un ingénieur DevOps pour fiabiliser la plateforme e-Gouvernement.",
    missions: [
      "Concevoir et maintenir les pipelines CI/CD",
      "Automatiser le déploiement des services publics numériques",
      "Garantir la disponibilité et la sécurité de l’infrastructure cloud souveraine",
      "Mettre en place l’observabilité et la supervision",
      "Accompagner les équipes de développement sur les bonnes pratiques"
    ],
    profile: [
      "Diplôme d’ingénieur en informatique ou équivalent",
      "Maîtrise de Docker, Kubernetes et Terraform",
      "Expérience avec GitLab CI, Prometheus, Grafana",
      "Minimum 4 ans d’expérience en environnement de production"
    ],
    conditions: [
      "Contrat à durée indéterminée",
      "Télétravail partiel (2 jours/semaine)",
      "Astreintes ponctuelles"
    ],
    benefits: ["Prime de technicité", "13e mois", "Matériel haut de gamme", "Budget formation cloud"],
    salaryMin: 9e5,
    salaryMax: 14e5,
    positions: 2,
    publishedDaysAgo: 1,
    deadlineInDays: 18,
    featured: true,
    urgent: true,
    views: 5120,
    applicants: 134
  },
  {
    ref: "MEF-2026-0088",
    title: "Inspecteur des Impôts",
    kind: "concours",
    contractType: "Concours",
    workMode: "Présentiel",
    level: "Junior",
    institutionId: "inst-finances",
    categoryId: "cat-finance",
    regionId: "reg-cap",
    city: "Nseba",
    summary: "La Direction Générale des Impôts recrute par voie de concours des inspecteurs pour renforcer le contrôle fiscal et l'assiette.",
    missions: [
      "Contrôler les déclarations fiscales des contribuables",
      "Mener les vérifications de comptabilité",
      "Conseiller et accompagner les usagers",
      "Lutter contre la fraude et l’évasion fiscale"
    ],
    profile: [
      "Master en finances, comptabilité, droit ou économie",
      "Rigueur, intégrité et sens de l’analyse",
      "Maîtrise des outils bureautiques"
    ],
    conditions: [
      "Concours national",
      "Formation de 12 mois à l’École Nationale des Finances",
      "Affectation selon les besoins du service"
    ],
    benefits: ["Statut de cadre A", "Primes de rendement", "Logement administratif", "Carrière évolutive"],
    positions: 45,
    publishedDaysAgo: 8,
    deadlineInDays: 26,
    featured: false,
    urgent: false,
    views: 9870,
    applicants: 410
  },
  {
    ref: "UNN-2026-0012",
    title: "Maître de Conférences en Informatique",
    kind: "emploi",
    contractType: "CDI",
    workMode: "Présentiel",
    level: "Expert",
    institutionId: "inst-universite-nseba",
    categoryId: "cat-education",
    regionId: "reg-cap",
    city: "Nseba",
    summary: "La Faculté des Sciences de l'Université Nationale de Nseba recrute un maître de conférences en informatique pour ses formations de licence et master.",
    missions: [
      "Assurer les enseignements en informatique (algorithmique, IA, bases de données)",
      "Encadrer les travaux de recherche des étudiants",
      "Publier dans des revues scientifiques de référence",
      "Participer à la vie académique de la faculté"
    ],
    profile: [
      "Doctorat (PhD) en informatique",
      "Publications scientifiques avérées",
      "Expérience d’enseignement supérieur souhaitée",
      "Capacité à monter des projets de recherche"
    ],
    conditions: [
      "Poste statutaire d’enseignant-chercheur",
      "Charge d’enseignement de 192h équivalent TD/an"
    ],
    benefits: ["Prime de recherche", "Mobilité internationale", "Année sabbatique", "Encadrement doctoral"],
    salaryMin: 8e5,
    salaryMax: 12e5,
    positions: 1,
    publishedDaysAgo: 12,
    deadlineInDays: 40,
    featured: false,
    urgent: false,
    views: 2210,
    applicants: 38
  },
  {
    ref: "SONEL-2026-0054",
    title: "Ingénieur Énergies Renouvelables",
    kind: "emploi",
    contractType: "CDI",
    workMode: "Présentiel",
    level: "Confirmé",
    institutionId: "inst-energie",
    categoryId: "cat-ingenierie",
    regionId: "reg-littoral",
    city: "Port-Akwa",
    summary: "La Société Nationale d'Électricité accélère sa transition énergétique et recrute un ingénieur dédié aux projets solaires et hydroélectriques.",
    missions: [
      "Piloter les études techniques des centrales solaires",
      "Superviser la mise en œuvre des projets d’électrification rurale",
      "Assurer le suivi des performances et la maintenance prédictive",
      "Coordonner les partenaires techniques et financiers"
    ],
    profile: [
      "Diplôme d’ingénieur en énergie ou génie électrique",
      "Expérience en projets EnR (3 ans minimum)",
      "Connaissance des normes et réglementations du secteur",
      "Anglais technique courant"
    ],
    conditions: ["Déplacements réguliers sur les sites", "Contrat à durée indéterminée"],
    benefits: ["Véhicule de service", "Prime de mission", "Couverture santé famille", "Plan d’épargne"],
    salaryMin: 75e4,
    salaryMax: 11e5,
    positions: 3,
    publishedDaysAgo: 4,
    deadlineInDays: 16,
    featured: true,
    urgent: false,
    views: 4310,
    applicants: 96
  },
  {
    ref: "MN-2026-0203",
    title: "Chargé de l’Urbanisme et des Permis de Construire",
    kind: "emploi",
    contractType: "CDD",
    workMode: "Présentiel",
    level: "Confirmé",
    institutionId: "inst-mairie-nseba",
    categoryId: "cat-ingenierie",
    regionId: "reg-cap",
    city: "Nseba",
    summary: "La Mairie de Nseba recherche un chargé de l'urbanisme pour instruire les demandes de permis de construire et accompagner le développement urbain.",
    missions: [
      "Instruire les demandes de permis de construire et d’aménager",
      "Contrôler la conformité des projets aux règles d’urbanisme",
      "Conseiller les porteurs de projets",
      "Participer à l’élaboration du plan d’urbanisme municipal"
    ],
    profile: [
      "Bac+4/5 en urbanisme, architecture ou génie civil",
      "Connaissance du droit de l’urbanisme",
      "Maîtrise des outils SIG et CAO"
    ],
    conditions: ["CDD de 24 mois renouvelable", "Temps plein"],
    benefits: ["Prime de fonction", "Tickets restaurant", "Formation SIG"],
    salaryMin: 48e4,
    salaryMax: 72e4,
    positions: 1,
    publishedDaysAgo: 6,
    deadlineInDays: 12,
    featured: false,
    urgent: true,
    views: 1880,
    applicants: 52
  },
  {
    ref: "ANEJ-STAGE-2026-019",
    title: "Stage — Chargé(e) de Communication Digitale",
    kind: "stage",
    contractType: "Stage",
    workMode: "Hybride",
    level: "Débutant",
    institutionId: "inst-agence-emploi",
    categoryId: "cat-comm",
    regionId: "reg-cap",
    city: "Nseba",
    summary: "L'Agence Nationale pour l'Emploi des Jeunes offre un stage de 6 mois en communication digitale au sein de sa direction de la communication.",
    missions: [
      "Animer les réseaux sociaux de l’agence",
      "Créer des contenus visuels et rédactionnels",
      "Participer à l’organisation des forums emploi",
      "Analyser les statistiques d’engagement"
    ],
    profile: [
      "Étudiant(e) en communication, marketing ou journalisme",
      "Maîtrise de Canva, Photoshop ou outils équivalents",
      "Excellente expression écrite",
      "Créativité et autonomie"
    ],
    conditions: ["Stage conventionné de 6 mois", "Indemnité mensuelle de stage"],
    benefits: ["Indemnité de stage", "Encadrement personnalisé", "Possibilité d’embauche"],
    salaryMin: 12e4,
    salaryMax: 12e4,
    positions: 2,
    publishedDaysAgo: 3,
    deadlineInDays: 9,
    featured: false,
    urgent: false,
    views: 3650,
    applicants: 178
  },
  {
    ref: "ONEA-2026-0027",
    title: "Technicien Supérieur en Hydraulique",
    kind: "emploi",
    contractType: "CDI",
    workMode: "Présentiel",
    level: "Junior",
    institutionId: "inst-eau",
    categoryId: "cat-ingenierie",
    regionId: "reg-centre",
    city: "Mballa",
    summary: "L'Office National de l'Eau recrute des techniciens supérieurs pour l'exploitation et la maintenance des réseaux d'adduction d'eau potable.",
    missions: [
      "Assurer la maintenance des réseaux et stations de pompage",
      "Réaliser les diagnostics et réparations",
      "Contrôler la qualité de l’eau distribuée",
      "Tenir à jour les rapports d’exploitation"
    ],
    profile: [
      "BTS/DUT en hydraulique, génie civil ou maintenance",
      "Première expérience appréciée",
      "Disponibilité et sens du service public"
    ],
    conditions: ["Travail en équipe et astreintes", "Poste basé à Mballa"],
    benefits: ["Prime d’astreinte", "Équipement de protection", "Mutuelle"],
    salaryMin: 32e4,
    salaryMax: 48e4,
    positions: 5,
    publishedDaysAgo: 7,
    deadlineInDays: 19,
    featured: false,
    urgent: false,
    views: 2940,
    applicants: 121
  },
  {
    ref: "ESPOIR-2026-0008",
    title: "Coordinateur de Projet Éducation",
    kind: "appel-candidature",
    contractType: "Mission",
    workMode: "Présentiel",
    level: "Senior",
    institutionId: "inst-ong-espoir",
    categoryId: "cat-admin",
    regionId: "reg-nord",
    city: "Garoua-Sud",
    summary: "Espoir & Développement lance un appel à candidatures pour coordonner son programme d'éducation des filles en milieu rural dans la région Nord.",
    missions: [
      "Piloter le programme éducation sur le terrain",
      "Gérer les équipes et les partenaires locaux",
      "Suivre le budget et les indicateurs de performance",
      "Rédiger les rapports aux bailleurs de fonds"
    ],
    profile: [
      "Master en sciences de l’éducation, développement ou gestion de projet",
      "Expérience confirmée en gestion de projet humanitaire",
      "Maîtrise du cycle de projet et des bailleurs internationaux",
      "Disponibilité pour des missions en zone rurale"
    ],
    conditions: ["Contrat de mission de 18 mois", "Basé à Garoua-Sud avec déplacements"],
    benefits: ["Per diem terrain", "Assurance rapatriement", "Logement fourni"],
    salaryMin: 6e5,
    salaryMax: 85e4,
    positions: 1,
    publishedDaysAgo: 9,
    deadlineInDays: 23,
    featured: false,
    urgent: false,
    views: 1560,
    applicants: 44
  },
  {
    ref: "ANAC-2026-0015",
    title: "Contrôleur de la Circulation Aérienne",
    kind: "concours",
    contractType: "Concours",
    workMode: "Présentiel",
    level: "Junior",
    institutionId: "inst-aviation",
    categoryId: "cat-transport",
    regionId: "reg-littoral",
    city: "Port-Akwa",
    summary: "L'Agence Nationale de l'Aviation Civile recrute par concours des contrôleurs de la circulation aérienne pour ses centres de contrôle.",
    missions: [
      "Assurer la sécurité et la fluidité du trafic aérien",
      "Guider les aéronefs au décollage, en vol et à l’atterrissage",
      "Communiquer avec les pilotes en anglais aéronautique",
      "Gérer les situations d’urgence"
    ],
    profile: [
      "Bac+2 scientifique minimum",
      "Excellente maîtrise de l’anglais",
      "Aptitude médicale de classe 3",
      "Sang-froid et capacité de concentration"
    ],
    conditions: [
      "Formation rémunérée de 18 mois",
      "Engagement de servir de 8 ans après formation",
      "Travail posté (3x8)"
    ],
    benefits: ["Salaire attractif", "Prime de risque", "Formation internationale certifiante"],
    positions: 12,
    publishedDaysAgo: 10,
    deadlineInDays: 28,
    featured: true,
    urgent: false,
    views: 14200,
    applicants: 523
  },
  {
    ref: "MFPRA-2026-0004",
    title: "Conseiller en Organisation et Réforme Administrative",
    kind: "emploi",
    contractType: "CDD",
    workMode: "Hybride",
    level: "Confirmé",
    institutionId: "inst-fonction-publique",
    categoryId: "cat-admin",
    regionId: "reg-cap",
    city: "Nseba",
    summary: "Le Ministère de la Fonction Publique recherche un conseiller pour accompagner la modernisation et la simplification des procédures administratives.",
    missions: [
      "Analyser et optimiser les processus administratifs",
      "Conduire des projets de transformation organisationnelle",
      "Accompagner le changement auprès des services",
      "Élaborer des tableaux de bord de pilotage"
    ],
    profile: [
      "Master en management public, conseil ou RH",
      "Expérience en conduite du changement",
      "Excellentes capacités d’analyse et de rédaction"
    ],
    conditions: ["CDD de 3 ans", "Télétravail partiel possible"],
    benefits: ["Prime de projet", "Formation certifiante", "Réseau interministériel"],
    salaryMin: 7e5,
    salaryMax: 1e6,
    positions: 2,
    publishedDaysAgo: 14,
    deadlineInDays: 30,
    featured: false,
    urgent: false,
    views: 1990,
    applicants: 63
  },
  {
    ref: "STP-2026-0006",
    title: "Infirmier(e) Diplômé(e) d’État — Clinique Mobile",
    kind: "emploi",
    contractType: "CDD",
    workMode: "Présentiel",
    level: "Junior",
    institutionId: "inst-ong-sante-pour-tous",
    categoryId: "cat-sante",
    regionId: "reg-est",
    city: "Ndelé",
    summary: "Santé Pour Tous recrute des infirmiers diplômés d'État pour ses cliniques mobiles intervenant dans les zones rurales enclavées de la région Est.",
    missions: [
      "Dispenser les soins infirmiers en clinique mobile",
      "Mener des campagnes de vaccination et de prévention",
      "Sensibiliser les populations à l’hygiène et à la santé",
      "Tenir les registres médicaux"
    ],
    profile: [
      "Diplôme d’État d’infirmier",
      "Goût du travail de terrain",
      "Permis de conduire apprécié",
      "Empathie et résilience"
    ],
    conditions: ["CDD de 12 mois renouvelable", "Déplacements fréquents en zone rurale"],
    benefits: ["Indemnité de terrain", "Assurance", "Hébergement en mission"],
    salaryMin: 28e4,
    salaryMax: 4e5,
    positions: 4,
    publishedDaysAgo: 1,
    deadlineInDays: 7,
    featured: false,
    urgent: true,
    views: 2670,
    applicants: 89
  },
  {
    ref: "SNP-2026-0011",
    title: "Chargé(e) de Clientèle Services Financiers",
    kind: "emploi",
    contractType: "CDI",
    workMode: "Présentiel",
    level: "Débutant",
    institutionId: "inst-poste",
    categoryId: "cat-finance",
    regionId: "reg-maritime",
    city: "Aného-Cité",
    summary: "La Société Nationale des Postes recrute des chargés de clientèle pour développer ses services financiers de proximité dans son réseau d'agences.",
    missions: [
      "Accueillir et conseiller la clientèle",
      "Réaliser les opérations financières courantes",
      "Promouvoir les produits d’épargne et de transfert",
      "Garantir la qualité de service"
    ],
    profile: [
      "Bac+2 en commerce, banque ou gestion",
      "Aisance relationnelle",
      "Rigueur dans la gestion des opérations"
    ],
    conditions: ["CDI après période d’essai", "Travail le samedi matin"],
    benefits: ["Primes commerciales", "Mutuelle", "Évolution interne"],
    salaryMin: 25e4,
    salaryMax: 38e4,
    positions: 8,
    publishedDaysAgo: 11,
    deadlineInDays: 15,
    featured: false,
    urgent: false,
    views: 4520,
    applicants: 203
  },
  {
    ref: "UPPA-2026-0009",
    title: "Ingénieur de Laboratoire — Génie Électrique",
    kind: "emploi",
    contractType: "CDI",
    workMode: "Présentiel",
    level: "Confirmé",
    institutionId: "inst-universite-portakwa",
    categoryId: "cat-ingenierie",
    regionId: "reg-littoral",
    city: "Port-Akwa",
    summary: "L'Université Polytechnique de Port-Akwa recrute un ingénieur de laboratoire pour ses plateaux techniques de génie électrique et d'automatique.",
    missions: [
      "Gérer et maintenir les équipements de laboratoire",
      "Encadrer les travaux pratiques des étudiants",
      "Appuyer les projets de recherche",
      "Garantir la sécurité des installations"
    ],
    profile: [
      "Diplôme d’ingénieur en génie électrique",
      "Maîtrise des bancs de mesure et de l’instrumentation",
      "Pédagogie et sens de l’organisation"
    ],
    conditions: ["Poste à temps plein", "Calendrier universitaire"],
    benefits: ["Congés universitaires", "Accès recherche", "Formation continue"],
    salaryMin: 52e4,
    salaryMax: 76e4,
    positions: 1,
    publishedDaysAgo: 16,
    deadlineInDays: 33,
    featured: false,
    urgent: false,
    views: 1320,
    applicants: 29
  },
  {
    ref: "MENTD-STAGE-2026-022",
    title: "Stage — Développeur(se) Front-End React",
    kind: "stage",
    contractType: "Stage",
    workMode: "Télétravail",
    level: "Débutant",
    institutionId: "inst-numerique",
    categoryId: "cat-tech",
    regionId: "reg-cap",
    city: "Nseba",
    summary: "Le Ministère de l'Économie Numérique propose un stage de fin d'études pour participer au développement des interfaces des services publics en ligne.",
    missions: [
      "Développer des interfaces React/TypeScript accessibles",
      "Intégrer les maquettes du design system de l’État",
      "Participer aux revues de code et aux tests",
      "Documenter les composants réutilisables"
    ],
    profile: [
      "Étudiant(e) en informatique (Bac+4/5)",
      "Bonnes bases en React, TypeScript et CSS",
      "Curiosité et autonomie"
    ],
    conditions: ["Stage de 6 mois", "Télétravail avec points hebdomadaires"],
    benefits: ["Gratification de stage", "Mentorat technique", "Pré-embauche possible"],
    salaryMin: 15e4,
    salaryMax: 15e4,
    positions: 3,
    publishedDaysAgo: 2,
    deadlineInDays: 11,
    featured: true,
    urgent: false,
    views: 6210,
    applicants: 287
  },
  {
    ref: "PA-2026-0044",
    title: "Agent de Développement Économique Local",
    kind: "emploi",
    contractType: "CDD",
    workMode: "Présentiel",
    level: "Junior",
    institutionId: "inst-mairie-portakwa",
    categoryId: "cat-admin",
    regionId: "reg-littoral",
    city: "Port-Akwa",
    summary: "La Mairie de Port-Akwa recrute un agent de développement économique pour soutenir l'entrepreneuriat et l'attractivité du territoire.",
    missions: [
      "Accompagner les porteurs de projets économiques",
      "Animer le réseau des acteurs locaux",
      "Promouvoir l’attractivité de la commune",
      "Suivre les indicateurs de développement local"
    ],
    profile: [
      "Bac+3 en économie, développement local ou gestion",
      "Sens du contact et de l’animation",
      "Esprit d’initiative"
    ],
    conditions: ["CDD de 2 ans", "Temps plein"],
    benefits: ["Prime de fonction", "Formation", "Réseau professionnel"],
    salaryMin: 36e4,
    salaryMax: 52e4,
    positions: 2,
    publishedDaysAgo: 13,
    deadlineInDays: 20,
    featured: false,
    urgent: false,
    views: 1740,
    applicants: 58
  },
  {
    ref: "MSPH-2026-0150",
    title: "Sage-Femme d’État",
    kind: "concours",
    contractType: "Concours",
    workMode: "Présentiel",
    level: "Junior",
    institutionId: "inst-sante",
    categoryId: "cat-sante",
    regionId: "reg-ouest",
    city: "Bantou",
    summary: "Le Ministère de la Santé organise un concours de recrutement de sages-femmes d'État pour les maternités des hôpitaux de district.",
    missions: [
      "Assurer le suivi des grossesses et les accouchements",
      "Dispenser les soins prénataux et postnataux",
      "Conseiller en planification familiale",
      "Participer aux programmes de santé maternelle"
    ],
    profile: [
      "Diplôme d’État de sage-femme",
      "Nationalité requise",
      "Aptitude médicale"
    ],
    conditions: ["Concours national", "Affectation dans les districts sanitaires"],
    benefits: ["Statut fonction publique", "Prime de garde", "Logement de fonction"],
    positions: 80,
    publishedDaysAgo: 6,
    deadlineInDays: 25,
    featured: false,
    urgent: false,
    views: 8830,
    applicants: 367
  },
  {
    ref: "MEF-2026-0095",
    title: "Analyste Statisticien — Institut National de la Statistique",
    kind: "emploi",
    contractType: "CDI",
    workMode: "Hybride",
    level: "Confirmé",
    institutionId: "inst-finances",
    categoryId: "cat-tech",
    regionId: "reg-cap",
    city: "Nseba",
    summary: "L'Institut National de la Statistique recrute un analyste pour la production et l'analyse des données économiques et sociales nationales.",
    missions: [
      "Collecter, traiter et analyser les données statistiques",
      "Produire les indicateurs économiques nationaux",
      "Réaliser des études et des prévisions",
      "Valoriser les données via des tableaux de bord"
    ],
    profile: [
      "Master en statistique, économétrie ou data science",
      "Maîtrise de R, Python ou SAS",
      "Rigueur analytique"
    ],
    conditions: ["CDI", "Télétravail partiel"],
    benefits: ["Prime de technicité", "Formation data", "Colloques internationaux"],
    salaryMin: 68e4,
    salaryMax: 98e4,
    positions: 2,
    publishedDaysAgo: 4,
    deadlineInDays: 17,
    featured: false,
    urgent: false,
    views: 3120,
    applicants: 74
  },
  {
    ref: "MEN-2026-0210",
    title: "Inspecteur Pédagogique du Primaire",
    kind: "emploi",
    contractType: "CDI",
    workMode: "Présentiel",
    level: "Senior",
    institutionId: "inst-education",
    categoryId: "cat-education",
    regionId: "reg-plateaux",
    city: "Sokodé-Ville",
    summary: "Le Ministère de l'Éducation Nationale recherche des inspecteurs pédagogiques pour l'encadrement et l'évaluation des enseignants du primaire.",
    missions: [
      "Évaluer et accompagner les enseignants",
      "Animer les formations continues",
      "Veiller à l’application des programmes officiels",
      "Rédiger les rapports d’inspection"
    ],
    profile: [
      "Enseignant titulaire avec expérience confirmée",
      "Diplôme d’inspectorat ou équivalent",
      "Leadership pédagogique"
    ],
    conditions: ["Poste statutaire", "Mobilité régionale"],
    benefits: ["Indemnité de fonction", "Véhicule de service", "Évolution hiérarchique"],
    salaryMin: 6e5,
    salaryMax: 88e4,
    positions: 6,
    publishedDaysAgo: 18,
    deadlineInDays: 36,
    featured: false,
    urgent: false,
    views: 2410,
    applicants: 41
  },
  {
    ref: "ESPOIR-STAGE-2026-003",
    title: "Stage — Suivi & Évaluation de Projets",
    kind: "stage",
    contractType: "Stage",
    workMode: "Présentiel",
    level: "Débutant",
    institutionId: "inst-ong-espoir",
    categoryId: "cat-admin",
    regionId: "reg-nord",
    city: "Garoua-Sud",
    summary: "Espoir & Développement offre un stage en suivi-évaluation pour appuyer le pilotage de ses programmes de développement communautaire.",
    missions: [
      "Appuyer la collecte de données terrain",
      "Mettre à jour les bases de suivi des indicateurs",
      "Participer à la rédaction des rapports",
      "Contribuer aux missions de terrain"
    ],
    profile: [
      "Étudiant(e) en statistiques, développement ou sciences sociales",
      "Maîtrise d’Excel",
      "Goût du terrain"
    ],
    conditions: ["Stage de 4 mois", "Basé à Garoua-Sud"],
    benefits: ["Indemnité de stage", "Expérience terrain", "Attestation"],
    salaryMin: 1e5,
    salaryMax: 1e5,
    positions: 1,
    publishedDaysAgo: 5,
    deadlineInDays: 8,
    featured: false,
    urgent: false,
    views: 1430,
    applicants: 67
  },
  {
    ref: "SONEL-2026-0061",
    title: "Juriste d’Entreprise — Contrats & Marchés",
    kind: "emploi",
    contractType: "CDI",
    workMode: "Présentiel",
    level: "Confirmé",
    institutionId: "inst-energie",
    categoryId: "cat-juridique",
    regionId: "reg-littoral",
    city: "Port-Akwa",
    summary: "La Société Nationale d'Électricité recrute un juriste pour sécuriser ses contrats, marchés publics et partenariats stratégiques.",
    missions: [
      "Rédiger et négocier les contrats et marchés",
      "Conseiller la direction sur les aspects juridiques",
      "Gérer les contentieux et précontentieux",
      "Assurer la veille réglementaire"
    ],
    profile: [
      "Master 2 en droit des affaires ou droit public",
      "Expérience en droit des marchés publics",
      "Rigueur et sens de la négociation"
    ],
    conditions: ["CDI", "Temps plein"],
    benefits: ["13e mois", "Mutuelle famille", "Formation juridique continue"],
    salaryMin: 7e5,
    salaryMax: 105e4,
    positions: 1,
    publishedDaysAgo: 9,
    deadlineInDays: 22,
    featured: false,
    urgent: false,
    views: 1980,
    applicants: 47
  },
  {
    ref: "MFPRA-CONC-2026-001",
    title: "Concours d’Entrée à l’École Nationale d’Administration",
    kind: "concours",
    contractType: "Concours",
    workMode: "Présentiel",
    level: "Junior",
    institutionId: "inst-fonction-publique",
    categoryId: "cat-admin",
    regionId: "reg-cap",
    city: "National",
    summary: "Ouverture du concours d'entrée à l'École Nationale d'Administration pour former les futurs hauts cadres de l'administration publique.",
    missions: [
      "Suivre la formation des cadres supérieurs de l’État",
      "Se préparer aux fonctions d’administrateur civil",
      "Réaliser des stages dans les administrations"
    ],
    profile: [
      "Licence minimum (cycle externe)",
      "Excellente culture générale et administrative",
      "Âge limite : 30 ans (cycle externe)"
    ],
    conditions: [
      "Épreuves écrites et orales",
      "Scolarité rémunérée de 2 ans",
      "Engagement décennal au service de l’État"
    ],
    benefits: ["Bourse de scolarité", "Carrière de haut fonctionnaire", "Réseau d’excellence"],
    positions: 60,
    publishedDaysAgo: 7,
    deadlineInDays: 45,
    featured: true,
    urgent: false,
    views: 22100,
    applicants: 1240
  }
];
const jobs = seeds.map((s, idx) => {
  const slug = `${slugify(s.title)}-${s.ref.toLowerCase()}`;
  return {
    id: `job-${String(idx + 1).padStart(3, "0")}`,
    reference: s.ref,
    title: s.title,
    slug,
    kind: s.kind,
    contractType: s.contractType,
    workMode: s.workMode,
    experienceLevel: s.level,
    institutionId: s.institutionId,
    categoryId: s.categoryId,
    regionId: s.regionId,
    city: s.city,
    summary: s.summary,
    description: s.summary,
    missions: s.missions,
    profile: s.profile,
    conditions: s.conditions,
    benefits: s.benefits,
    salary: s.salaryMin != null && s.salaryMax != null ? { min: s.salaryMin, max: s.salaryMax, currency: "FCFA", period: "mois" } : void 0,
    positions: s.positions,
    publishedAt: isoDaysFromNow(-s.publishedDaysAgo),
    deadline: isoDaysFromNow(s.deadlineInDays),
    featured: Boolean(s.featured),
    urgent: Boolean(s.urgent),
    views: s.views,
    applicants: s.applicants
  };
});
const jobById = (id) => jobs.find((j) => j.id === id);
const jobBySlug = (slug) => jobs.find((j) => j.slug === slug);
function iso(daysAgo) {
  const d = /* @__PURE__ */ new Date();
  d.setHours(10, 30, 0, 0);
  d.setDate(d.getDate() - daysAgo);
  return d.toISOString();
}
const applications = [
  {
    id: "app-001",
    reference: "CAND-2026-00841",
    jobId: "job-003",
    // Ingénieur DevOps
    userId: "user-001",
    status: "Entretien",
    submittedAt: iso(14),
    updatedAt: iso(3),
    coverLetter: "Madame, Monsieur, c'est avec un grand intérêt que je postule au poste d'Ingénieur DevOps...",
    cvFileName: "CV_Aicha_Diallo_2026.pdf",
    timeline: [
      { label: "Candidature envoyée", date: iso(14), done: true },
      { label: "Dossier reçu et accusé", date: iso(13), done: true },
      { label: "Présélection", date: iso(8), done: true },
      { label: "Entretien programmé", date: iso(3), done: true },
      { label: "Décision finale", date: "", done: false }
    ]
  },
  {
    id: "app-002",
    reference: "CAND-2026-00756",
    jobId: "job-016",
    // Stage Développeur Front-End
    userId: "user-001",
    status: "Présélectionné",
    submittedAt: iso(10),
    updatedAt: iso(5),
    coverLetter: "Madame, Monsieur, je vous soumets ma candidature pour le stage de développeur front-end...",
    cvFileName: "CV_Aicha_Diallo_2026.pdf",
    timeline: [
      { label: "Candidature envoyée", date: iso(10), done: true },
      { label: "Dossier reçu et accusé", date: iso(9), done: true },
      { label: "Présélection", date: iso(5), done: true },
      { label: "Entretien programmé", date: "", done: false },
      { label: "Décision finale", date: "", done: false }
    ]
  },
  {
    id: "app-003",
    reference: "CAND-2026-00689",
    jobId: "job-019",
    // Analyste Statisticien
    userId: "user-001",
    status: "En cours d’examen",
    submittedAt: iso(6),
    updatedAt: iso(6),
    coverLetter: "Madame, Monsieur, titulaire d'un Master en génie logiciel, je me permets de candidater...",
    cvFileName: "CV_Aicha_Diallo_2026.pdf",
    timeline: [
      { label: "Candidature envoyée", date: iso(6), done: true },
      { label: "Dossier reçu et accusé", date: iso(5), done: true },
      { label: "Présélection", date: "", done: false },
      { label: "Entretien programmé", date: "", done: false },
      { label: "Décision finale", date: "", done: false }
    ]
  },
  {
    id: "app-004",
    reference: "CAND-2026-00512",
    jobId: "job-001",
    // Médecin généraliste
    userId: "user-001",
    status: "Refusée",
    submittedAt: iso(30),
    updatedAt: iso(20),
    coverLetter: "Candidature exploratoire.",
    cvFileName: "CV_Aicha_Diallo_2026.pdf",
    timeline: [
      { label: "Candidature envoyée", date: iso(30), done: true },
      { label: "Dossier reçu et accusé", date: iso(29), done: true },
      { label: "Examen du dossier", date: iso(20), done: true },
      { label: "Décision finale — non retenue", date: iso(20), done: true }
    ]
  },
  {
    id: "app-005",
    reference: "CAND-2026-00903",
    jobId: "job-024",
    // Concours ENA
    userId: "user-001",
    status: "Envoyée",
    submittedAt: iso(1),
    updatedAt: iso(1),
    coverLetter: "Inscription au concours.",
    cvFileName: "CV_Aicha_Diallo_2026.pdf",
    timeline: [
      { label: "Inscription enregistrée", date: iso(1), done: true },
      { label: "Validation du dossier", date: "", done: false },
      { label: "Convocation aux épreuves", date: "", done: false },
      { label: "Résultats", date: "", done: false }
    ]
  }
];
const PAGE_SIZE = 8;
const defaultFilters = {
  query: "",
  institutionId: null,
  institutionType: null,
  regionId: null,
  contractType: null,
  categoryId: null,
  kind: null,
  datePosted: "all",
  sort: "recent",
  page: 1
};
function matchesDatePosted(job, filter) {
  if (filter === "all") return true;
  const ageDays = Math.abs(daysUntil(job.publishedAt));
  if (filter === "24h") return ageDays <= 1;
  if (filter === "7d") return ageDays <= 7;
  if (filter === "30d") return ageDays <= 30;
  return true;
}
function applyFilters(all, f) {
  const q = f.query.trim().toLowerCase();
  return all.filter((job) => {
    if (q) {
      const inst = institutionById(job.institutionId);
      const haystack = `${job.title} ${job.summary} ${job.reference} ${inst?.name ?? ""} ${job.city}`.toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    if (f.institutionId && job.institutionId !== f.institutionId) return false;
    if (f.institutionType) {
      const inst = institutionById(job.institutionId);
      if (inst?.type !== f.institutionType) return false;
    }
    if (f.regionId && job.regionId !== f.regionId) return false;
    if (f.contractType && job.contractType !== f.contractType) return false;
    if (f.categoryId && job.categoryId !== f.categoryId) return false;
    if (f.kind && job.kind !== f.kind) return false;
    if (!matchesDatePosted(job, f.datePosted)) return false;
    return true;
  });
}
function sortJobs(list, sort) {
  const copy = [...list];
  switch (sort) {
    case "recent":
      return copy.sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
    case "deadline":
      return copy.sort((a, b) => +new Date(a.deadline) - +new Date(b.deadline));
    case "popularity":
      return copy.sort((a, b) => b.views - a.views);
    case "relevance":
      return copy.sort((a, b) => Number(b.featured) - Number(a.featured) || b.applicants - a.applicants);
    default:
      return copy;
  }
}
async function fetchJobs(filters) {
  await delay(280);
  const filtered = sortJobs(applyFilters(jobs, filters), filters.sort);
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const page = Math.min(Math.max(1, filters.page), totalPages);
  const start = (page - 1) * PAGE_SIZE;
  const items = filtered.slice(start, start + PAGE_SIZE);
  return { items, total, page, pageSize: PAGE_SIZE, totalPages };
}
async function fetchFeaturedJobs(limit = 6) {
  await delay(200);
  return jobs.filter((j) => j.featured).sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt)).slice(0, limit);
}
async function fetchJob(slug) {
  await delay(220);
  return jobBySlug(slug) ?? jobById(slug);
}
async function fetchRelatedJobs(job, limit = 3) {
  await delay(180);
  return jobs.filter((j) => j.id !== job.id && (j.categoryId === job.categoryId || j.institutionId === job.institutionId)).slice(0, limit);
}
async function fetchInstitutions(query = "") {
  await delay(220);
  const q = query.trim().toLowerCase();
  const list = q ? institutions.filter(
    (i) => i.name.toLowerCase().includes(q) || i.sector.toLowerCase().includes(q) || i.type.toLowerCase().includes(q)
  ) : institutions;
  return [...list].sort((a, b) => b.jobCount - a.jobCount);
}
async function fetchInstitution(slug) {
  await delay(200);
  return institutions.find((i) => i.slug === slug) ?? institutionById(slug);
}
async function fetchInstitutionJobs(institutionId) {
  await delay(180);
  return jobs.filter((j) => j.institutionId === institutionId);
}
async function fetchUserApplications(userId) {
  await delay(240);
  return applications.filter((a) => a.userId === userId);
}
const queryKeys = {
  jobs: (filters) => ["jobs", filters],
  featuredJobs: ["jobs", "featured"],
  latestJobs: ["jobs", "latest"],
  job: (slug) => ["job", slug],
  relatedJobs: (id) => ["job", id, "related"],
  institutions: (q) => ["institutions", q],
  institution: (slug) => ["institution", slug],
  institutionJobs: (id) => ["institution", id, "jobs"],
  applications: (userId) => ["applications", userId]
};
function useJobs(filters) {
  return useQuery({
    queryKey: queryKeys.jobs(filters),
    queryFn: () => fetchJobs(filters),
    placeholderData: keepPreviousData
  });
}
function useFeaturedJobs(limit = 6) {
  return useQuery({ queryKey: queryKeys.featuredJobs, queryFn: () => fetchFeaturedJobs(limit) });
}
function useJob(slug) {
  return useQuery({ queryKey: queryKeys.job(slug), queryFn: () => fetchJob(slug), enabled: !!slug });
}
function useRelatedJobs(job) {
  return useQuery({
    queryKey: queryKeys.relatedJobs(job?.id ?? ""),
    queryFn: () => fetchRelatedJobs(job),
    enabled: !!job
  });
}
function useInstitutions(query = "") {
  return useQuery({
    queryKey: queryKeys.institutions(query),
    queryFn: () => fetchInstitutions(query),
    placeholderData: keepPreviousData
  });
}
function useInstitution(slug) {
  return useQuery({
    queryKey: queryKeys.institution(slug),
    queryFn: () => fetchInstitution(slug),
    enabled: !!slug
  });
}
function useInstitutionJobs(institutionId) {
  return useQuery({
    queryKey: queryKeys.institutionJobs(institutionId ?? ""),
    queryFn: () => fetchInstitutionJobs(institutionId),
    enabled: !!institutionId
  });
}
function useUserApplications(userId) {
  return useQuery({
    queryKey: queryKeys.applications(userId),
    queryFn: () => fetchUserApplications(userId)
  });
}
export {
  useUserApplications as a,
  regionName as b,
  currentUser as c,
  institutionById as d,
  useInstitutions as e,
  institutionTypes as f,
  defaultFilters as g,
  useJobs as h,
  institutions as i,
  jobById as j,
  useJob as k,
  useInstitution as l,
  useInstitutionJobs as m,
  useRelatedJobs as n,
  regions as r,
  useFeaturedJobs as u
};
