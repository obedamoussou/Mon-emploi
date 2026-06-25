import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { b as applications, c as jobBySlug, j as jobById, a as jobs } from "./applications-pkD4SWq_.js";
import { b as institutions, i as institutionById } from "./institutions-CeyynnsY.js";
import { e as delay, g as daysUntil } from "./Logo-Nf2y5-j_.js";
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
async function fetchFeaturedJobs(limit = 4) {
  await delay(200);
  return jobs.filter((j) => j.featured).slice(0, limit);
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
  useFeaturedJobs as u
};
