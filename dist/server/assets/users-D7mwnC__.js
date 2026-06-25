const currentUser = {
  id: "user-001",
  firstName: "Aïcha",
  lastName: "Diallo",
  title: "Ingénieure Logicielle",
  email: "aicha.diallo@email.tl",
  phone: "+229 90 12 34 56",
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
const users = [
  currentUser,
  {
    id: "user-002",
    firstName: "Koffi",
    lastName: "Mensah",
    title: "Gestionnaire Administratif",
    email: "koffi.mensah@email.tl",
    phone: "+229 91 22 33 44",
    regionId: "reg-littoral",
    city: "Port-Akwa",
    avatarColor: "#059669",
    bio: "Gestionnaire administratif rigoureux avec 6 ans d’expérience dans le secteur public.",
    skills: ["Gestion administrative", "Comptabilité", "Marchés publics", "Excel"],
    languages: [
      { name: "Français", level: "Langue maternelle" },
      { name: "Anglais", level: "Intermédiaire (B1)" }
    ],
    experiences: [
      {
        title: "Gestionnaire Administratif",
        organization: "Mairie de Port-Akwa",
        startYear: 2019,
        endYear: null,
        description: "Gestion des dossiers administratifs et suivi des marchés publics."
      }
    ],
    education: [{ degree: "Master en Management Public", school: "Université Nationale de Nseba", year: 2018 }],
    cvFileName: "CV_Koffi_Mensah.pdf",
    completion: 72,
    savedJobs: []
  },
  {
    id: "user-003",
    firstName: "Fatou",
    lastName: "Camara",
    title: "Médecin Généraliste",
    email: "fatou.camara@email.tl",
    phone: "+229 92 55 66 77",
    regionId: "reg-centre",
    city: "Mballa",
    avatarColor: "#dc2626",
    bio: "Médecin généraliste engagée dans la santé publique et la médecine de proximité.",
    skills: ["Médecine générale", "Urgences", "Santé publique", "Pédiatrie"],
    languages: [{ name: "Français", level: "Langue maternelle" }],
    experiences: [
      {
        title: "Médecin Vacataire",
        organization: "Centre Hospitalier de Mballa",
        startYear: 2021,
        endYear: null,
        description: "Consultations et gardes au service des urgences."
      }
    ],
    education: [{ degree: "Doctorat en Médecine", school: "Université Nationale de Nseba", year: 2021 }],
    cvFileName: "CV_Fatou_Camara.pdf",
    completion: 90,
    savedJobs: []
  }
];
const userById = (id) => users.find((u) => u.id === id);
export {
  currentUser as c,
  userById as u
};
