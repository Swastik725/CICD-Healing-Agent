import type { Config } from 'tailwindcss'
import animationPlugin from 'tailwindcss-animate'

export default <Config>{
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#00ffff',
          purple: '#bb00ff',
          emerald: '#50c878',
          red: '#ff0055',
        },
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
      },
      boxShadow: {
        glass: '0 0 1px rgba(255,255,255,0.1), 0 4px 30px rgba(0,0,0,0.5)',
        neon: '0 0 5px var(--tw-shadow-color), 0 0 10px var(--tw-shadow-color), 0 0 20px var(--tw-shadow-color)'
      },
    },
  },
  plugins: [animationPlugin, require('@tailwindcss/forms')],
}
