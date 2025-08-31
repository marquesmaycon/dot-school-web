import type { Course } from "../courses/type"
import type { User } from "../users/type"

export type Class = {
  id: number
  title: string
  description: string
  vacancies: number
  status: ClassStatus
  startDate: string
  endDate: string
  courseId: number
  createdAt: string
  updatedAt: string

  course?: Course
  users?: User[]

  meta?: {
    users_count: number
  }
}

export type ClassStatus = "AVAILABLE" | "FINISHED"
