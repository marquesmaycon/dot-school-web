import { useQuery } from "@tanstack/react-query"

import { api } from "@/lib/api"

import type { Course } from "./type"

export const useCourses = () => {
  return useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await api.get<Course[]>("/courses")
      return res.data
    }
  })
}

export const useAvailableCourses = () => {
  return useQuery({
    queryKey: ["courses", "available"],
    queryFn: async () => {
      const res = await api.get<Course[]>("/courses/available")
      return res.data
    }
  })
}
