import { create } from 'zustand'

interface themeStoreState {
  theme: 'dark' | 'light'
  toggleTheme: () => void
}

const useThemeStore = create<themeStoreState>((set) => ({
  theme: 'dark',
  toggleTheme: () =>
    set((state: { theme: 'dark' | 'light' }) => ({
      theme: state.theme === 'dark' ? 'light' : 'dark'
    }))
}))

export default useThemeStore
