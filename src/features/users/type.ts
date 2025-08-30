import type { Class } from "../classes/type"

export type User = {
  id: number
  name: string
  email: string
  createdAt: string
  updatedAt: string

  classes?: Class[]
}
