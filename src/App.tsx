import AppRouter from 'routes'
import useThemeStore from 'store/useThemeStore'

function App() {
  const theme = useThemeStore((state) => state.theme)
  return (
    <div className={theme}>
      <AppRouter />
    </div>
  )
}

export default App
