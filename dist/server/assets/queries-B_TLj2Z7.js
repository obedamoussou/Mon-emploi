import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { s as slugify, e as delay, g as daysUntil } from "./Logo-B1bRgxRh.js";
import { b as institutions, i as institutionById } from "./institutions-CP_CKc0f.js";
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
  useInstitutions as b,
  useJobs as c,
  defaultFilters as d,
  useJob as e,
  useInstitution as f,
  useInstitutionJobs as g,
  useRelatedJobs as h,
  jobById as j,
  useFeaturedJobs as u
};
