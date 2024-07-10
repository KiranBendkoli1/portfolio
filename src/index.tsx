import App from 'App'
import { createRoot } from 'react-dom/client'
import 'flowbite/dist/flowbite'
import 'tailwindcss/tailwind.css'
import 'styles/globals.css'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(<App />)
