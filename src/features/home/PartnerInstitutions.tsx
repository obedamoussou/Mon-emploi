import { SectionHeading } from '~/components/SectionHeading'
import { InstitutionCard } from '~/components/InstitutionCard'
import { institutions } from '~/mocks/institutions'

export function PartnerInstitutions() {
  const top = [...institutions].sort((a, b) => b.jobCount - a.jobCount).slice(0, 8)

  return (
    <section className="container-page py-16 sm:py-20">
      <SectionHeading
        eyebrow="Ils recrutent"
        title="Organismes partenaires"
        description="Ministères, mairies, entreprises publiques, universités et ONG qui recrutent sur la plateforme."
        action={{ label: 'Tout l’annuaire', to: '/organismes' }}
      />

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {top.map((inst, i) => (
          <InstitutionCard key={inst.id} institution={inst} index={i} />
        ))}
      </div>
    </section>
  )
}
