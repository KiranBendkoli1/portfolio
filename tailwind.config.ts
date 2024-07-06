import { type Config } from 'tailwindcss'


const config: Config= {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        cardo:"Cardo"
      },
      colors:{
        backround:"rgba(var(--background))",
        border:"rgba(var(--border))",
        card: "rgba(var(--card))",
        primary: "rgba(var(--primary))",
        secondary:"rgba(var(--secondary))",
        cta: "rgba(var(--cta))",
        active: "rgba(var(--active))",
        text:"rgba(var(--cta-text))",
        grape:"rgba(var(--grape))"
      }
    }
  },
  plugins: []
} 
export default config;