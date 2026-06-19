import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    // Application 100 % front-end (données mockées, aucun backend) :
    // build en mode SPA statique, déployable tel quel sur Vercel.
    tanstackStart({ spa: { enabled: true } }),
    react(),
  ],
})
