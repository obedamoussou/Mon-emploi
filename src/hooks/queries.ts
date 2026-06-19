import { useQuery, keepPreviousData } from '@tanstack/react-query'
import type { Job, JobFilters } from '~/types'
import {
  fetchJobs,
  fetchFeaturedJobs,
  fetchLatestJobs,
  fetchJob,
  fetchRelatedJobs,
  fetchInstitutions,
  fetchInstitution,
  fetchInstitutionJobs,
  fetchUserApplications,
} from '~/lib/api'

export const queryKeys = {
  jobs: (filters: JobFilters) => ['jobs', filters] as const,
  featuredJobs: ['jobs', 'featured'] as const,
  latestJobs: ['jobs', 'latest'] as const,
  job: (slug: string) => ['job', slug] as const,
  relatedJobs: (id: string) => ['job', id, 'related'] as const,
  institutions: (q: string) => ['institutions', q] as const,
  institution: (slug: string) => ['institution', slug] as const,
  institutionJobs: (id: string) => ['institution', id, 'jobs'] as const,
  applications: (userId: string) => ['applications', userId] as const,
}

export function useJobs(filters: JobFilters) {
  return useQuery({
    queryKey: queryKeys.jobs(filters),
    queryFn: () => fetchJobs(filters),
    placeholderData: keepPreviousData,
  })
}

export function useFeaturedJobs(limit = 6) {
  return useQuery({ queryKey: queryKeys.featuredJobs, queryFn: () => fetchFeaturedJobs(limit) })
}

export function useLatestJobs(limit = 6) {
  return useQuery({ queryKey: queryKeys.latestJobs, queryFn: () => fetchLatestJobs(limit) })
}

export function useJob(slug: string) {
  return useQuery({ queryKey: queryKeys.job(slug), queryFn: () => fetchJob(slug), enabled: !!slug })
}

export function useRelatedJobs(job: Job | undefined) {
  return useQuery({
    queryKey: queryKeys.relatedJobs(job?.id ?? ''),
    queryFn: () => fetchRelatedJobs(job as Job),
    enabled: !!job,
  })
}

export function useInstitutions(query = '') {
  return useQuery({
    queryKey: queryKeys.institutions(query),
    queryFn: () => fetchInstitutions(query),
    placeholderData: keepPreviousData,
  })
}

export function useInstitution(slug: string) {
  return useQuery({
    queryKey: queryKeys.institution(slug),
    queryFn: () => fetchInstitution(slug),
    enabled: !!slug,
  })
}

export function useInstitutionJobs(institutionId: string | undefined) {
  return useQuery({
    queryKey: queryKeys.institutionJobs(institutionId ?? ''),
    queryFn: () => fetchInstitutionJobs(institutionId as string),
    enabled: !!institutionId,
  })
}

export function useUserApplications(userId: string) {
  return useQuery({
    queryKey: queryKeys.applications(userId),
    queryFn: () => fetchUserApplications(userId),
  })
}
