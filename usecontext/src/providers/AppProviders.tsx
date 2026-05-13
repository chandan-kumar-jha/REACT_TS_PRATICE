import { ThemeProvider } from "../context/ThemeContext"
import { ApiProvider } from "../context/ApiContext"

export default function AppProviders({ children }) {
  return (
    <ApiProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </ApiProvider>
  )
}