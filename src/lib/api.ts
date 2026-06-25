// =====================================================================
//  Couche d'accès aux données — simule une API à partir des mocks.
//  Aucune requête réseau réelle : tout est résolu côté client.
// =====================================================================
import type { Job, JobFilters, Paginated, Institution, Application } from '~/types'
import { jobs } from '~/mocks/jobs'
import { institutions, institutionById } from '~/mocks/institutions'
import { applications } from '~/mocks/applications'
import { jobById, jobBySlug } from '~/mocks/jobs'
import { daysUntil, delay } from '~/lib/utils'

export const PAGE_SIZE = 8

export const defaultFilters: JobFilters = {
  query: '',
  institutionId: null,
  institutionType: null,
  regionId: null,
  contractType: null,
  categoryId: null,
  kind: null,
  datePosted: 'all',
  sort: 'recent',
  page: 1,
}

function matchesDatePosted(job: Job, filter: JobFilters['datePosted']): boolean {
  if (filter === 'all') return true
  const ageDays = Math.abs(daysUntil(job.publishedAt))
  if (filter === '24h') return ageDays <= 1
  if (filter === '7d') return ageDays <= 7
  if (filter === '30d') return ageDays <= 30
  return true
}

function applyFilters(all: Job[], f: JobFilters): Job[] {
  const q = f.query.trim().toLowerCase()
  return all.filter((job) => {
    if (q) {
      const inst = institutionById(job.institutionId)
      const haystack = `${job.title} ${job.summary} ${job.reference} ${inst?.name ?? ''} ${job.city}`.toLowerCase()
      if (!haystack.includes(q)) return false
    }
    if (f.institutionId && job.institutionId !== f.institutionId) return false
    if (f.institutionType) {
      const inst = institutionById(job.institutionId)
      if (inst?.type !== f.institutionType) return false
    }
    if (f.regionId && job.regionId !== f.regionId) return false
    if (f.contractType && job.contractType !== f.contractType) return false
    if (f.categoryId && job.categoryId !== f.categoryId) return false
    if (f.kind && job.kind !== f.kind) return false
    if (!matchesDatePosted(job, f.datePosted)) return false
    return true
  })
}

function sortJobs(list: Job[], sort: JobFilters['sort']): Job[] {
  const copy = [...list]
  switch (sort) {
    case 'recent':
      return copy.sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
    case 'deadline':
      return copy.sort((a, b) => +new Date(a.deadline) - +new Date(b.deadline))
    case 'popularity':
      return copy.sort((a, b) => b.views - a.views)
    case 'relevance':
      return copy.sort((a, b) => Number(b.featured) - Number(a.featured) || b.applicants - a.applicants)
    default:
      return copy
  }
}

export async function fetchJobs(filters: JobFilters): Promise<Paginated<Job>> {
  await delay(280)
  const filtered = sortJobs(applyFilters(jobs, filters), filters.sort)
  const total = filtered.length
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE))
  const page = Math.min(Math.max(1, filters.page), totalPages)
  const start = (page - 1) * PAGE_SIZE
  const items = filtered.slice(start, start + PAGE_SIZE)
  return { items, total, page, pageSize: PAGE_SIZE, totalPages }
}

export async function fetchFeaturedJobs(limit = 4): Promise<Job[]> {
  await delay(200)
  // Conserve l'ordre de déclaration (seeds) pour la sélection « à la une ».
  return jobs.filter((j) => j.featured).slice(0, limit)
}

export async function fetchLatestJobs(limit = 6): Promise<Job[]> {
  await delay(200)
  return [...jobs]
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
    .slice(0, limit)
}

export async function fetchJob(slug: string): Promise<Job | undefined> {
  await delay(220)
  return jobBySlug(slug) ?? jobById(slug)
}

export async function fetchRelatedJobs(job: Job, limit = 3): Promise<Job[]> {
  await delay(180)
  return jobs
    .filter((j) => j.id !== job.id && (j.categoryId === job.categoryId || j.institutionId === job.institutionId))
    .slice(0, limit)
}

export async function fetchInstitutions(query = ''): Promise<Institution[]> {
  await delay(220)
  const q = query.trim().toLowerCase()
  const list = q
    ? institutions.filter(
        (i) => i.name.toLowerCase().includes(q) || i.sector.toLowerCase().includes(q) || i.type.toLowerCase().includes(q),
      )
    : institutions
  return [...list].sort((a, b) => b.jobCount - a.jobCount)
}

export async function fetchInstitution(slug: string): Promise<Institution | undefined> {
  await delay(200)
  return institutions.find((i) => i.slug === slug) ?? institutionById(slug)
}

export async function fetchInstitutionJobs(institutionId: string): Promise<Job[]> {
  await delay(180)
  return jobs.filter((j) => j.institutionId === institutionId)
}

export async function fetchUserApplications(userId: string): Promise<Application[]> {
  await delay(240)
  return applications.filter((a) => a.userId === userId)
}
