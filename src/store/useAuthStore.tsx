import { create, StateCreator } from 'zustand'
import { persist, PersistOptions } from 'zustand/middleware'

interface AuthStoreState {
  isAuthenticated: boolean
  clearIsAuthenticated: () => void
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
      clearIsAuthenticated: () => {
        set({ isAuthenticated: false })
      },
      setIsAuthenticated: () => {
        set({ isAuthenticated: true })
      }
    }),
    {
      name: 'auth-store',
      getStorage: () => localStorage
    }
  )
)

export default useAuthStore
