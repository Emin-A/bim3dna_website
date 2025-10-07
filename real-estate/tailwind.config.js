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
          accent: '#00f7bf',
          slate: '#101010',
        },
      },
      boxShadow: {
        soft: '0 24px 60px -24px rgba(5, 5, 5, 0.3)',
      },
    },
  },
  plugins: [],
}
