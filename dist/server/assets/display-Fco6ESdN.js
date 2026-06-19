const kindLabels = {
  emploi: "Emploi",
  stage: "Stage",
  concours: "Concours",
  "appel-candidature": "Appel à candidature"
};
const kindVariant = {
  emploi: "brand",
  stage: "accent",
  concours: "gold",
  "appel-candidature": "neutral"
};
const contractVariant = {
  CDI: "brand",
  CDD: "neutral",
  Stage: "accent",
  Concours: "gold",
  Vacation: "neutral",
  Apprentissage: "accent",
  Mission: "neutral"
};
const statusVariant = {
  "Envoyée": "neutral",
  "En cours d’examen": "brand",
  "Présélectionné": "accent",
  "Entretien": "gold",
  "Acceptée": "accent",
  "Refusée": "danger"
};
export {
  kindVariant as a,
  contractVariant as c,
  kindLabels as k,
  statusVariant as s
};
