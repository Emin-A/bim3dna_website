/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      colors: {
        brand: {
          primary: '#050505',
          accent: '#15d4c4',
          accentSoft: '#0fbcad',
          slate: '#101820',
          banner: '#0b2628',
        },
      },
      boxShadow: {
        soft: '0 24px 60px -24px rgba(5, 5, 5, 0.3)',
        bevel: '18px 18px 0 rgba(21, 212, 196, 0.22)',
      },
    },
  },
  plugins: [],
}
