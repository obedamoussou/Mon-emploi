// =====================================================================
//  Métadonnées d'affichage : libellés, couleurs et icônes par catégorie.
// =====================================================================
import type {
  ApplicationStatus,
  ContractType,
  OpportunityKind,
} from '~/types'

export const kindLabels: Record<OpportunityKind, string> = {
  emploi: 'Emploi',
  stage: 'Stage',
  concours: 'Concours',
  'appel-candidature': 'Appel à candidature',
}

type Variant = 'neutral' | 'brand' | 'accent' | 'gold' | 'danger' | 'outline'

export const kindVariant: Record<OpportunityKind, Variant> = {
  emploi: 'brand',
  stage: 'accent',
  concours: 'gold',
  'appel-candidature': 'neutral',
}

export const contractVariant: Record<ContractType, Variant> = {
  CDI: 'brand',
  CDD: 'neutral',
  Stage: 'accent',
  Concours: 'gold',
  Vacation: 'neutral',
  Apprentissage: 'accent',
  Mission: 'neutral',
}

export const statusVariant: Record<ApplicationStatus, Variant> = {
  'Envoyée': 'neutral',
  'En cours d’examen': 'brand',
  'Présélectionné': 'accent',
  'Entretien': 'gold',
  'Acceptée': 'accent',
  'Refusée': 'danger',
}
