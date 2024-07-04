import AppRouter from 'routes'
import useThemeStore from 'store/useThemeStore'
import { classNames } from 'utils'

function App() {
  const theme = useThemeStore((state) => state.theme)
  return (
    <div className={classNames(theme, 'bg-backround h-svh')}>
      <div className="h-full">
        <AppRouter />
      </div>
    </div>
  )
}

export default App
