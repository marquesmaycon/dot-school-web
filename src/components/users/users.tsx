import { useUsers } from "@/features/users/server"

import "./users.css"
import NewUserForm from "./new-user-form"

const NewUser = () => {
  const { data: users } = useUsers()
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
                  <td>{name}</td>
                  <td>{email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default NewUser
