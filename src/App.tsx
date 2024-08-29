import AppRouter from 'routes'
import useThemeStore from 'store/useThemeStore'
import { classNames } from 'utils'
import { pdfjs } from 'react-pdf'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString()

function App() {
  const theme = useThemeStore((state) => state.theme)
  return (
    <div>
      
        <AppRouter />
        <ToastContainer />

    </div>
  )
}

export default App
