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
export {
  regions as a,
  regionName as r
};
