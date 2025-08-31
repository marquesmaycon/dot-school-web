import { useMutation, useQuery } from "@tanstack/react-query"

import { api } from "@/lib/api"
import { queryClient } from "@/lib/tanstack-query"

import type { User } from "./type"
import type { Course } from "../courses/type"

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await api.get<User[]>("/users")
      return res.data
    }
  })
}

export const useUserCourses = (userId: string) => {
  return useQuery({
    queryKey: ["users", userId, "courses"],
    queryFn: async () => {
      const res = await api.get<Course[]>(`/users/${userId}/courses`)
      return res.data
    }
  })
}

export const useCreateUser = () => {
  return useMutation({
    mutationFn: async (payload: { name: string; email: string }) => {
      const res = await api.post<User>("/users", payload)
      return res.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] })
    }
  })
}
