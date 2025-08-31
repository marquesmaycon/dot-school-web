import { useMutation, useQuery } from "@tanstack/react-query"

import { api } from "@/lib/api"
import { queryClient } from "@/lib/tanstack-query"

import type { User } from "./type"

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await api.get<User[]>("/users")
      return res.data
    }
  })
}

export const useUserCourses = (userSearch?: string) => {
  return useQuery({
    queryKey: ["users", userSearch, "courses"],
    queryFn: async () => {
      const res = await api.get<User[]>(`/users/courses`, { params: { search: userSearch } })
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
