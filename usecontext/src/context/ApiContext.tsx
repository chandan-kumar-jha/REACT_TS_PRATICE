import API from "../services/api"
import { createContext } from "react"


export const ApiContext = createContext<API | undefined>(undefined)
const apiInstance = new API()

export function ApiProvider({ children }: { children: React.ReactNode }) {
  return (
    <ApiContext.Provider value={apiInstance}>
      {children}
    </ApiContext.Provider>
  )
}