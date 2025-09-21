import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
interface usePersonalInfo{
  name:string
  email:string
  userName:string
  setName: (name:string) => void
  setEmail:(email:string) => void
  setUserName: (username:string) => void
}
  

const usePersonalInfo = create<usePersonalInfo,[["zustand/persist", usePersonalInfo]]>(
  persist(
  (set) => ({
    name: "",
    email: "",
    userName: "",
    setName: (name) => set({ name }),
    setEmail: (email) => set({ email }),
    setUserName: (userName) => set({ userName }),
  }),
  {
      name: "personal-info-storage",
      storage:createJSONStorage(() => localStorage),
  }
  )
)


export default usePersonalInfo