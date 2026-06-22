import { createFileRoute } from '@tanstack/react-router'
import { PublicLayout } from '~/layouts/PublicLayout'
import { Hero } from '~/features/home/Hero'
import { FeaturedJobs } from '~/features/home/FeaturedJobs'
import { TrainingOpportunities } from '~/features/home/TrainingOpportunities'
import { FaqSection } from '~/features/home/FaqSection'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <PublicLayout>
      <Hero />
      <FeaturedJobs />
      <TrainingOpportunities />
      <FaqSection />
    </PublicLayout>
  )
}
