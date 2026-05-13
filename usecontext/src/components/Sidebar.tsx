import { useTheme } from "../context/useTheme"

export default function Sidebar() {
  const { theme } = useTheme()

  return (
    <aside>
      Sidebar Theme: {theme}
    </aside>
  )
}