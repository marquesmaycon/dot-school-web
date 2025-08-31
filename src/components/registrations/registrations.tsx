import { useState } from "react"
import { useUserCourses, useUsers } from "@/features/users/server"

import "./registrations.css"

const Registrations = () => {
  const { data: users, isLoading: isLoadingUsers } = useUsers()

  const [selectedUser, setSelectedUser] = useState("")
  const [search, setSearch] = useState("")

  const [filter, setFilter] = useState("")

  const { data: registeredUsers, isLoading } = useUserCourses(filter)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFilter(selectedUser || search)
    if (selectedUser) setSearch("")
  }

  return (
    <div>
      <h2>Matrículas</h2>
      <form className="registrationsFilterBar surface" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="user-select">Usuário:</label>
          <select id="user-select" value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
            <option value="">Todos</option>
            {isLoadingUsers && (
              <option value="" disabled>
                Carregando...
              </option>
            )}
            {users?.map((user) => (
              <option key={user.id} value={user.email}>
                {user.name} ({user.email})
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="search">Buscar:</label>
          <input
            id="search"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por nome ou email..."
            className="registrationsFilterInput"
          />
        </div>
        <button type="submit" className="registrationsFilterBtn">
          Buscar
        </button>
      </form>
      <div className="usersContainer">
        <h4>Usuários Matriculados</h4>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Turma</th>
              <th>Curso</th>
            </tr>
          </thead>
          <tbody>
            {registeredUsers?.map((user) =>
              user.classes?.map((classItem) => (
                <tr key={`${user.id}-${classItem.id}`}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{classItem.title}</td>
                  <td>{classItem.course?.title || "-"}</td>
                </tr>
              ))
            )}
            {isLoading && (
              <tr>
                <td colSpan={4} className="loading">
                  Carregando...
                </td>
              </tr>
            )}
            {registeredUsers?.length === 0 && !isLoading && (
              <tr>
                <td colSpan={4} className="loading">
                  Nenhuma matrícula encontrada.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Registrations
