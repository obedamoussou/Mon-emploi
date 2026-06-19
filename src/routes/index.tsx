import { createFileRoute } from '@tanstack/react-router'
import { PublicLayout } from '~/layouts/PublicLayout'
import { Hero } from '~/features/home/Hero'
import { FeaturedJobs } from '~/features/home/FeaturedJobs'
import { PopularCategories } from '~/features/home/PopularCategories'
import { PartnerInstitutions } from '~/features/home/PartnerInstitutions'
import { StatsSection } from '~/features/home/StatsSection'
import { HowItWorks } from '~/features/home/HowItWorks'
import { Testimonials } from '~/features/home/Testimonials'
import { FaqSection } from '~/features/home/FaqSection'
import { CtaSection } from '~/features/home/CtaSection'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <PublicLayout>
      <Hero />
      <FeaturedJobs />
      <PopularCategories />
      <StatsSection />
      <PartnerInstitutions />
      <HowItWorks />
      <Testimonials />
      <FaqSection />
      <CtaSection />
    </PublicLayout>
  )
}
