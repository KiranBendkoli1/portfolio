import { create, StateCreator } from 'zustand'
import { persist, PersistOptions } from 'zustand/middleware'

interface AuthStoreState {
  isAuthenticated: boolean
  email: string
  clearIsAuthenticated: (email: string) => void
  setIsAuthenticated: () => void
}

type AuthPersist = (
  config: StateCreator<AuthStoreState>,
  options: PersistOptions<AuthStoreState>
) => StateCreator<AuthStoreState>

const useAuthStore = create<AuthStoreState>(
  (persist as AuthPersist)(
    (set) => ({
      isAuthenticated: false,
      email: '',
      setIsAuthenticated: (email: string) => {
        set({ isAuthenticated: true, email: email })
      },
      clearIsAuthenticated: () => {
        set({ isAuthenticated: false })
      }
    }),
    {
      name: 'auth-store',
      getStorage: () => localStorage
    }
  )
)

export default useAuthStore
