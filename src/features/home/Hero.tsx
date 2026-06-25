import { motion } from 'framer-motion'
import { ArrowRight, LogIn, UserPlus } from 'lucide-react'
import { useState } from 'react'
import { CandidateRegisterModal } from '~/components/CandidateRegisterModal'
import { AdminLoginModal } from '~/components/AdminLoginModal'

export function Hero() {
  const [registerOpen, setRegisterOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)

  return (
    <section className="relative overflow-hidden bg-ink-950">
      {/* Décor */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:44px_44px] opacity-[0.18]" />
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-600/30 blur-3xl" />
      <div className="absolute -right-20 top-20 h-96 w-80 rounded-full bg-accent-500/20 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-50 to-transparent" />

      <div className="container-page relative pb-28 pt-16 sm:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="mt-6 text-balance font-display text-5xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Plateforme nationale
            <br />
            <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-accent-400 bg-clip-text text-transparent">
              de mobilisation des talents.
            </span>
          </h1>

          {/* <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-white/70 sm:text-lg">
            Toutes les offres d’emploi, stages, concours et appels à candidatures des ministères,
            mairies, entreprises publiques, ONG et universités — réunis sur une seule plateforme.
          </p> */}
        </motion.div>

        {/* Boutons d'action */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mx-auto mt-20 flex max-w-md flex-col items-center gap-3"
        >
          <button
            onClick={() => setRegisterOpen(true)}
            className="btn-primary h-14 w-full text-base"
          >
            <UserPlus className="h-5 w-5" />
            Talent - J'enregitrer mon profil
            <ArrowRight className="h-4 w-4" />
          </button>

          <button
            onClick={() => setLoginOpen(true)}
            className="btn h-12 w-full border border-white/20 bg-white/5 text-[15px] text-white backdrop-blur transition hover:bg-white/10"
          >
            <LogIn className="h-5 w-5" />
            Entité publique - Je formule un besoin
          </button>
        </motion.div>
      </div>

      <CandidateRegisterModal open={registerOpen} onClose={() => setRegisterOpen(false)} />
      <AdminLoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </section>
  )
}
