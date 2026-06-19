import type { ReactNode } from 'react'
import { Navbar } from '~/components/Navbar'
import { Footer } from '~/components/Footer'

/** Gabarit des pages publiques : barre de navigation + contenu + pied. */
export function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-ink-50">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
