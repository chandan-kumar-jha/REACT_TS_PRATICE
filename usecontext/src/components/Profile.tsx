import { useApi } from "../context/useApi"

export default function Profile() {
  const api = useApi()

  const user = api.getUser()

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.role}</p>
    </div>
  )
}