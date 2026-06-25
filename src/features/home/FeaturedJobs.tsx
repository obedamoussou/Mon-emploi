import { SectionHeading } from '~/components/SectionHeading'
import { JobCard } from '~/components/JobCard'
import { JobListSkeleton } from '~/components/LoadingSkeleton'
import { useFeaturedJobs } from '~/hooks/queries'

export function FeaturedJobs() {
  const { data, isLoading } = useFeaturedJobs(4)

  return (
    <section className="container-page py-16 sm:py-20">
      <SectionHeading
        // eyebrow="Sélection officielle"
        title="Opportunités à la une"
        description="Les offres et concours mis en avant par les institutions partenaires cette semaine."
        // action={{ label: 'Voir toutes les offres', to: '/offres' }}
      />

      <div className="mt-8">
        {isLoading ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <JobListSkeleton count={4} />
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {data?.map((job, i) => (
              <JobCard key={job.id} job={job} index={i} minimal />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
