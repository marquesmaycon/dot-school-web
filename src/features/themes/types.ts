import type { Course } from "../courses/type"

export type Theme = {
  id: number
  title: string
  createAt: string
  updateAt: string

  courses: Course[]
}
