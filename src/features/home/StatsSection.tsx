import { motion } from 'framer-motion'
import { Icon } from '~/components/Icon'
import { useCountUp } from '~/hooks/useCountUp'
import { platformStats } from '~/mocks/content'
import { compactNumber, formatNumber } from '~/lib/utils'

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-brand-700 py-16 sm:py-20">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-10" />
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-500/40 blur-3xl" />

      <div className="container-page relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            La plateforme de l’emploi public en chiffres
          </h2>
          <p className="mt-3 text-brand-100">
            Une communauté nationale qui grandit chaque jour, au service de l’emploi et de l’égalité
            des chances.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {platformStats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({
  stat,
  index,
}: {
  stat: (typeof platformStats)[number]
  index: number
}) {
  const { value, ref } = useCountUp(stat.value)
  const display = stat.value >= 10000 ? compactNumber(value) : formatNumber(value)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="rounded-2xl border border-white/15 bg-white/10 p-6 text-center backdrop-blur"
    >
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white">
        <Icon name={stat.icon} className="h-6 w-6" />
      </div>
      <p className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl">
        <span ref={ref}>{display}</span>
        <span className="text-brand-200">{stat.suffix}</span>
      </p>
      <p className="mt-1 text-sm font-medium text-brand-100">{stat.label}</p>
    </motion.div>
  )
}
