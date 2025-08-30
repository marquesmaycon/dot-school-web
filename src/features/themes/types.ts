import type { Course } from "../courses/type"

export type Theme = {
  id: string
  title: string
  createAt: string
  updateAt: string

  courses: Course[]
}
