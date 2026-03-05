// MAF Machine — Tailwind Preset
// Drop this into your project and add to tailwind.config.js:
//
//   const mafPreset = require('./maf-tailwind-preset');
//   module.exports = { presets: [mafPreset], ... }
//
// Then use classes like: bg-maf-dark, text-maf-orange, glass-card, gradient-text, etc.

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      // ─── Colors ────────────────────────────────────
      colors: {
        maf: {
          // Backgrounds
          dark: '#0F0F13',
          elevated: 'rgba(255, 255, 255, 0.04)',

          // Brand
          strava: '#FC4C02',
          'strava-hover': '#E04400',
          orange: '#FF6B4A',
          pink: '#E040A0',
          purple: '#7B61FF',
          blue: '#38BDF8',
          green: '#34D399',
          yellow: '#FBBF24',
          red: '#EF4444',

          // Semantic
          'below-ceiling': '#34D399',
          'over-ceiling': '#EF4444',
          improving: '#34D399',
          declining: '#EF4444',
        },
      },

      // ─── Font Family ───────────────────────────────
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },

      // ─── Border Colors ─────────────────────────────
      borderColor: {
        'maf-subtle': 'rgba(255, 255, 255, 0.08)',
        'maf-medium': 'rgba(255, 255, 255, 0.12)',
        'maf-strong': 'rgba(255, 255, 255, 0.20)',
      },

      // ─── Background Opacity Variants ───────────────
      backgroundColor: {
        'maf-glass': 'rgba(255, 255, 255, 0.04)',
        'maf-glass-hover': 'rgba(255, 255, 255, 0.08)',
        'maf-input': 'rgba(255, 255, 255, 0.05)',
      },

      // ─── Box Shadow (glow effects) ─────────────────
      boxShadow: {
        'maf-glow-orange': '0 0 30px rgba(252, 76, 2, 0.15)',
        'maf-glow-purple': '0 0 30px rgba(123, 97, 255, 0.15)',
        'maf-glow-pink':   '0 0 30px rgba(224, 64, 160, 0.15)',
        'maf-glow-blue':   '0 0 30px rgba(56, 189, 248, 0.15)',
        'maf-glow-green':  '0 0 30px rgba(52, 211, 153, 0.15)',
      },

      // ─── Max Width ─────────────────────────────────
      maxWidth: {
        'maf-content': '80rem',
        'maf-text': '42rem',
        'maf-wide': '72rem',
      },
    },
  },

  plugins: [
    // ─── Custom Utilities ──────────────────────────
    function({ addUtilities }) {
      addUtilities({
        // Gradient text
        '.gradient-text': {
          background: 'linear-gradient(135deg, #FF6B4A, #E040A0, #7B61FF)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.gradient-text-warm': {
          background: 'linear-gradient(135deg, #FC4C02, #FF6B4A, #E040A0)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },

        // Glass card
        '.glass-card': {
          background: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          'backdrop-filter': 'blur(12px)',
        },
        '.glass-card-hover': {
          background: 'rgba(255, 255, 255, 0.08)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          'backdrop-filter': 'blur(12px)',
        },

        // Glow orb (decorative background blob)
        '.glow-orb': {
          position: 'absolute',
          'border-radius': '50%',
          filter: 'blur(120px)',
          opacity: '0.3',
          'pointer-events': 'none',
        },

        // Pill badge base style
        '.pill-badge': {
          'border-radius': '9999px',
          'backdrop-filter': 'blur(8px)',
          padding: '0.5rem 1rem',
          'font-size': '0.875rem',
          'font-weight': '500',
        },
      });
    },
  ],
};
