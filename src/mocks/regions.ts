import type { Region } from '~/types'

// Régions inspirées d'un grand pays d'Afrique de l'Ouest (noms réalistes,
// fictifs pour la plateforme nationale Mon Emploi).
export const regions: Region[] = [
  { id: 'reg-cap', name: 'District de la Capitale', chefLieu: 'Nseba', population: 2480000 },
  { id: 'reg-littoral', name: 'Littoral', chefLieu: 'Port-Akwa', population: 1920000 },
  { id: 'reg-centre', name: 'Centre', chefLieu: 'Mballa', population: 1340000 },
  { id: 'reg-nord', name: 'Nord', chefLieu: 'Garoua-Sud', population: 1110000 },
  { id: 'reg-ouest', name: 'Ouest', chefLieu: 'Bantou', population: 980000 },
  { id: 'reg-est', name: 'Est', chefLieu: 'Ndelé', population: 640000 },
  { id: 'reg-sud', name: 'Sud', chefLieu: 'Kribia', population: 720000 },
  { id: 'reg-plateaux', name: 'Plateaux', chefLieu: 'Sokodé-Ville', population: 860000 },
  { id: 'reg-savane', name: 'Savanes', chefLieu: 'Dapango', population: 540000 },
  { id: 'reg-maritime', name: 'Maritime', chefLieu: 'Aného-Cité', population: 1230000 },
]

export const regionById = (id: string): Region | undefined =>
  regions.find((r) => r.id === id)

export const regionName = (id: string): string =>
  regionById(id)?.name ?? 'National'
