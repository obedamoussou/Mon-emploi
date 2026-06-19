// =====================================================================
//  Utilitaires généraux
// =====================================================================

/** Concatène des classes conditionnelles sans dépendance externe. */
export function cn(...inputs: Array<string | false | null | undefined>): string {
  return inputs.filter(Boolean).join(' ')
}

/** Formatte un nombre avec séparateur de milliers (espace insécable, fr). */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat('fr-FR').format(value)
}

/** Abrège les grands nombres : 12 400 → 12,4 k. */
export function compactNumber(value: number): string {
  return new Intl.NumberFormat('fr-FR', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(value)
}

/** Formatte une fourchette salariale. */
export function formatSalary(min: number, max: number, currency = 'FCFA', period = 'mois'): string {
  const fmt = (n: number) => new Intl.NumberFormat('fr-FR').format(n)
  return `${fmt(min)} – ${fmt(max)} ${currency} / ${period}`
}

/** Date longue en français : "15 mars 2026". */
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

/** Date courte : "15/03/2026". */
export function formatDateShort(iso: string): string {
  return new Date(iso).toLocaleDateString('fr-FR')
}

const MS_DAY = 1000 * 60 * 60 * 24

/** "il y a 3 jours" relativement à aujourd'hui. */
export function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime()
  const days = Math.floor(diff / MS_DAY)
  if (days <= 0) return "aujourd'hui"
  if (days === 1) return 'hier'
  if (days < 7) return `il y a ${days} jours`
  if (days < 30) return `il y a ${Math.floor(days / 7)} sem.`
  if (days < 365) return `il y a ${Math.floor(days / 30)} mois`
  return `il y a ${Math.floor(days / 365)} an(s)`
}

/** Nombre de jours restants avant une échéance. */
export function daysUntil(iso: string): number {
  return Math.ceil((new Date(iso).getTime() - Date.now()) / MS_DAY)
}

/** Libellé d'échéance lisible + criticité. */
export function deadlineLabel(iso: string): { text: string; urgent: boolean; expired: boolean } {
  const days = daysUntil(iso)
  if (days < 0) return { text: 'Clôturée', urgent: false, expired: true }
  if (days === 0) return { text: "Dernier jour !", urgent: true, expired: false }
  if (days === 1) return { text: 'Expire demain', urgent: true, expired: false }
  if (days <= 5) return { text: `${days} jours restants`, urgent: true, expired: false }
  return { text: `${days} jours restants`, urgent: false, expired: false }
}

/** Initiales à partir d'un nom complet. */
export function initials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('')
}

/** Tronque un texte proprement. */
export function truncate(text: string, max: number): string {
  if (text.length <= max) return text
  return text.slice(0, max).trimEnd() + '…'
}

/** Slugify simple compatible accents français. */
export function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/** Pause utilitaire pour simuler la latence réseau des mocks. */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
