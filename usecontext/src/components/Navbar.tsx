import { useTheme } from "../context/useTheme"

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav>
      <h2>Current Theme: {theme}</h2>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </nav>
  )
}