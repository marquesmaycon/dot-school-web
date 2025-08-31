import { useUsers } from "@/features/users/server"

import "./users.css"
import NewUserForm from "./new-user-form"

const NewUser = () => {
  const { data: users, isLoading } = useUsers()
  return (
    <div>
      <h2>Novo Usuário</h2>
      <NewUserForm />
      <div>
        <div className="usersContainer">
          <h4>Usuários</h4>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>E-mail</th>
              </tr>
            </thead>
            <tbody>
              {users?.map(({ id, email, name }) => (
                <tr key={id}>
                  <td>
                    <span>Nome: </span> {name}
                  </td>
                  <td>
                    <span>E-mail: </span> {email}
                  </td>
                </tr>
              ))}
              {isLoading && (
                <tr>
                  <td colSpan={4}>Carregando...</td>
                </tr>
              )}
              {users?.length === 0 && !isLoading && (
                <tr>
                  <td colSpan={4}>Nenhum usuário encontrado.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default NewUser
