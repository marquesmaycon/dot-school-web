import type { Class } from "../classes/type"
import type { Theme } from "../themes/types"

export type Course = {
  id: number
  title: string
  description: string
  imgUrl: string
  createdAt: string
  updatedAt: string

  classes?: Class[]
  themes?: Theme[]
}
