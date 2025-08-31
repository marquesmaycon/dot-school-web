import { useState } from "react"

import { useClassAssignUser } from "@/features/classes/server"
import { useUsers } from "@/features/users/server"

type DialogRegistrationProps = {
  open: boolean
  classId: number | null
  onClose: () => void
}

export const DialogRegistration = ({ open, classId, onClose }: DialogRegistrationProps) => {
  const { data: users } = useUsers()

  const [email, setEmail] = useState("")
  const [selectedEmail, setSelectedEmail] = useState<string | null>(null)

  const { mutateAsync: registerUser, isPending, isSuccess, isError, reset } = useClassAssignUser()

  const handleClose = () => {
    setEmail("")
    setSelectedEmail(null)
    reset()
    onClose()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!classId) {
      alert("Erro: Nenhuma classe selecionada")
      return
    }

    if (!email.trim() && !selectedEmail) {
      alert("Por favor, preencha o email ou selecione um usuário")
      return
    }

    await registerUser({ classId, userEmail: selectedEmail || email.trim() })

    setEmail("")
    setSelectedEmail(null)
  }

  if (!open) return null

  return (
    <div className="dialogOverlay">
      <div className="dialog">
        <form onSubmit={handleSubmit}>
          <div className="dialogHeader">
            <h3>Realizar Matrícula</h3>
            <button type="button" className="dialog-close" onClick={handleClose}>
              ×
            </button>
          </div>

          <div className="dialogContent">
            <div className="formGroup">
              <label htmlFor="registration-email">Email:</label>
              <input id="registration-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite o email do usuário" />
            </div>

            <div className="formGroup">
              <label htmlFor="registration-user">Ou selecione um usuário existente:</label>
              <select id="registration-user" value={selectedEmail || ""} onChange={(e) => setSelectedEmail(e.target.value)}>
                <option value="">Selecione um usuário</option>
                {users?.map((user) => (
                  <option key={user.id} value={user.email}>
                    {user.name} ({user.email})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="dialogActions">
            {isSuccess && <p className="successMessage">Usuário matriculado com sucesso!</p>}
            {isError && <p className="errorMessage">Erro ao matricular usuário. Tente novamente.</p>}
            <button type="button" className="buttonCancel" onClick={handleClose}>
              Cancelar
            </button>
            <button type="submit" className="buttonPrimary" disabled={(!email.trim() && !selectedEmail) || isPending}>
              {isPending ? "Aguarde..." : "Confirmar Matrícula"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
