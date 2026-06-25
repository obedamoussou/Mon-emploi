import { Link } from '@tanstack/react-router'
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import { Logo } from '~/components/Logo'

const columns = [
  {
    title: 'Candidats',
    links: [
      { label: 'Rechercher une offre', to: '/offres' },
      { label: 'Concours publics', to: '/offres' },
      { label: 'Opportunités de formation', to: '/' },
      { label: 'Annuaire des organismes', to: '/organismes' },
    ],
  },
  {
    title: 'Administrations',
    links: [
      { label: 'Espace administration', to: '/espace-organisme' },
      { label: 'Publier une offre', to: '/espace-organisme' },
      { label: 'Annuaire des organismes', to: '/organismes' },
      { label: 'Devenir partenaire', to: '/organismes' },
    ],
  },
  {
    title: 'La plateforme',
    links: [
      { label: 'À propos', to: '/' },
      { label: 'Aide & FAQ', to: '/' },
      { label: 'Mentions légales', to: '/' },
      { label: 'Protection des données', to: '/' },
    ],
  },
] as const

export function Footer() {
  return (
    <footer className="mt-20 border-t border-ink-100 bg-white">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-500">
              Le portail national officiel de l’emploi public. Toutes les offres, formations
              et appels à candidatures des institutions de la République, au même endroit.
            </p>
            <div className="mt-5 space-y-2 text-sm text-ink-500">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-500" /> Cité Administrative, Cotonou
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-500" /> +229 21 00 00 00
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-500" /> contact@mon-emploi.bj
              </p>
            </div>
          </div>

          {/* {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold text-ink-900">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-ink-500 transition hover:text-brand-600"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))} */}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-100 pt-6 sm:flex-row">
          <p className="text-xs text-ink-400">
            © {new Date().getFullYear()} Mon Emploi — République du Bénin. Tous droits réservés.
          </p>
          <div className="flex items-center gap-2">
            {[Twitter, Linkedin, Facebook].map((I, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink-50 text-ink-500 transition hover:bg-brand-50 hover:text-brand-600"
                aria-label="Réseau social"
              >
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
