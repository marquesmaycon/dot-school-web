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

export const useAvailableCourses = (filters: { title: string; themes: number[] }) => {
  return useQuery({
    queryKey: ["courses", "available", filters],
    queryFn: async () => {
      const res = await api.get<Course[]>("/courses/available", { params: filters })
      return res.data
    }
  })
}
