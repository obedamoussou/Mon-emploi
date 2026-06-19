import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { BadgeCheck, Building2, Sparkles, TrendingUp } from 'lucide-react'
import { SearchBar } from '~/components/SearchBar'
import { compactNumber } from '~/lib/utils'
import { platformStats } from '~/mocks/content'

const popularSearches = [
  'Enseignant',
  'Médecin',
  'Concours fonction publique',
  'Ingénieur',
  'Stage',
  'Administration',
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950">
      {/* Décor */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:44px_44px] opacity-[0.18]" />
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-600/30 blur-3xl" />
      <div className="absolute -right-20 top-20 h-80 w-80 rounded-full bg-accent-500/20 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink-50 to-transparent" />

      <div className="container-page relative pb-28 pt-16 sm:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-gold-400" />
            Portail national officiel de l’emploi public
          </span> */}

          <h1 className="mt-6 text-balance font-display text-5xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Servez votre pays.
            <br />
            <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-accent-400 bg-clip-text text-transparent">
              Trouvez votre vocation.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-white/70 sm:text-lg">
            Toutes les offres d’emploi, stages, concours et appels à candidatures des ministères,
            mairies, entreprises publiques, ONG et universités — réunis sur une seule plateforme.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mx-auto mt-9 max-w-4xl"
        >
          <SearchBar variant="hero" />

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm text-white/60">
            <span className="font-medium text-white/80">Recherches fréquentes :</span>
            {popularSearches.map((s) => (
              <Link
                key={s}
                to="/offres"
                search={{ q: s }}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                {s}
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/70"
        >
          <span className="inline-flex items-center gap-2">
            <BadgeCheck className="h-4 w-4 text-accent-400" />
            {compactNumber(platformStats[2]?.value ?? 0)} candidats inscrits
          </span>
          <span className="inline-flex items-center gap-2">
            <Building2 className="h-4 w-4 text-brand-300" />
            {platformStats[1]?.value}+ organismes vérifiés
          </span>
          <span className="inline-flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-gold-400" />
            {compactNumber(platformStats[0]?.value ?? 0)} offres actives
          </span>
        </motion.div>
      </div>
    </section>
  )
}
