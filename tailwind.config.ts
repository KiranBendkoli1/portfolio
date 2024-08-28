import { type Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{mjs,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        cardo: 'Cardo',
        bodyFont: ['Poppins', 'sans-serif'],
        titleFont: ['Montserrat', 'sans-serif']
      },
      colors: {
        bodyColor: '#212428',
        lightText: '#c4cfde',
        boxBg: 'linear-gradient(145deg, #1e2024, #23272b)',
        designColor: '#ff014f',
        backround: 'rgba(var(--background))',
        border: 'rgba(var(--border))',
        card: 'rgba(var(--card))',
        primary: 'rgba(var(--primary))',
        secondary: 'rgba(var(--secondary))',
        cta: 'rgba(var(--cta))',
        active: 'rgba(var(--active))',
        text: 'rgba(var(--cta-text))',
        grape: 'rgba(var(--grape))'
      },
      screens: {
        xs: '320px',
        sm: '375px',
        sml: '500px',
        md: '667px',
        mdl: '768px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px'
      },
      boxShadow: {
        shadowOne: '10px 10px 19px #1c1e22, -10px -10px 19px #262a2e'
      }
    }
  },
  plugins: [require('flowbite/plugin')]
}
export default config
