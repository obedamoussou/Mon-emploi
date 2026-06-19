import { motion } from 'framer-motion'
import { FileText, Search, Send, UserPlus } from 'lucide-react'
import { SectionHeading } from '~/components/SectionHeading'

const steps = [
  {
    icon: UserPlus,
    title: 'Créez votre profil',
    text: 'Inscrivez-vous gratuitement et complétez votre profil candidat en quelques minutes.',
  },
  {
    icon: Search,
    title: 'Trouvez l’opportunité',
    text: 'Recherchez et filtrez parmi les offres, stages et concours de tout le secteur public.',
  },
  {
    icon: FileText,
    title: 'Préparez votre dossier',
    text: 'Déposez votre CV et votre lettre de motivation, réutilisables pour toutes vos candidatures.',
  },
  {
    icon: Send,
    title: 'Postulez & suivez',
    text: 'Candidatez en ligne et suivez l’avancement de chaque dossier en temps réel.',
  },
]

export function HowItWorks() {
  return (
    <section className="border-y border-ink-100 bg-white py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="Simple & transparent"
          title="Postulez en 4 étapes"
          description="Un parcours entièrement dématérialisé, de l’inscription au suivi de candidature."
        />

        <div className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent lg:block" />
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative text-center"
            >
              <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-glow">
                <step.icon className="h-6 w-6" />
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-gold-400 text-xs font-extrabold text-ink-900 ring-2 ring-white">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-base font-bold text-ink-900">{step.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm text-ink-500">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
