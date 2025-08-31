import { useMutation } from "@tanstack/react-query"
import type { AxiosError } from "axios"

import { api } from "@/lib/api"
import { queryClient } from "@/lib/tanstack-query"

import type { User } from "../users/type"

export const useClassAssignUser = () => {
  return useMutation<User, AxiosError<{ message: string }>, { classId: number; userEmail: string }>({
    mutationFn: async ({ classId, userEmail }) => {
      const res = await api.post(`/classes/${classId}/users`, { email: userEmail })
      return res.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["classes"] })
      queryClient.invalidateQueries({ queryKey: ["users"] })
      queryClient.invalidateQueries({ queryKey: ["courses"] })
    }
  })
}
