import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowRight, Building2, UserPlus } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="container-page py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl bg-ink-950 px-6 py-14 text-center sm:px-12"
      >
        <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-10" />
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-600/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-accent-500/30 blur-3xl" />

        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Prêt à donner du sens à votre carrière ?
          </h2>
          <p className="mt-4 text-white/70">
            Rejoignez des centaines de milliers de citoyens qui construisent l’avenir du service
            public. Inscription gratuite, candidature en quelques clics.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/offres" className="btn-primary h-12 px-6 text-[15px]">
              <UserPlus className="h-5 w-5" />
              Trouver une opportunité
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/espace-organisme"
              className="btn h-12 border border-white/20 bg-white/5 px-6 text-[15px] text-white backdrop-blur hover:bg-white/10"
            >
              <Building2 className="h-5 w-5" />
              Je suis un organisme
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
