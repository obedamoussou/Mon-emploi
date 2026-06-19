import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Bleu institutionnel — couleur de marque principale
        brand: {
          50: '#eef4ff',
          100: '#d9e6ff',
          200: '#bcd3ff',
          300: '#8eb6ff',
          400: '#598dff',
          500: '#3366ff',
          600: '#1f47e6',
          700: '#1736c4',
          800: '#192f9c',
          900: '#1a2d7a',
          950: '#111a4a',
        },
        // Accent moderne — vert civique / réussite
        accent: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        // Or institutionnel — distinctions, badges officiels
        gold: {
          400: '#f5c451',
          500: '#eab308',
          600: '#ca9a04',
        },
        ink: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d4d9e3',
          300: '#aeb8ca',
          400: '#8290ab',
          500: '#637191',
          600: '#4e5a78',
          700: '#404962',
          800: '#373e53',
          900: '#1f2436',
          950: '#13161f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(16,24,40,0.04), 0 8px 24px -12px rgba(16,24,40,0.12)',
        'card-hover': '0 4px 12px rgba(16,24,40,0.08), 0 20px 40px -16px rgba(16,24,40,0.18)',
        glow: '0 0 0 1px rgba(51,102,255,0.1), 0 12px 40px -12px rgba(51,102,255,0.35)',
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(17,26,74,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,26,74,0.05) 1px, transparent 1px)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out both',
        shimmer: 'shimmer 1.6s infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
