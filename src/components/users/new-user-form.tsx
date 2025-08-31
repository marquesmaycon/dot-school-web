import { useState } from "react"

import { useCreateUser } from "@/features/users/server"

export default function NewUserForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const { mutateAsync: createUser, isPending, isSuccess, isError, variables } = useCreateUser()
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await createUser(
      { name, email },
      {
        onSuccess: () => {
          setName("")
          setEmail("")
        }
      }
    )
  }

  return (
    <form className="newUserForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nome:</label>
        <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <button type="submit" disabled={isPending}>
        {isPending ? "Cadastrando..." : "Cadastrar"}
      </button>
      {isSuccess && !isPending && <p className="successMessage">Usuário {variables.email} cadastrado com sucesso!</p>}
      {isError && <p className="errorMessage">Erro ao cadastrar usuário</p>}
    </form>
  )
}
