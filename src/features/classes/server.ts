import { api } from "@/lib/api"
import { queryClient } from "@/lib/tanstack-query"
import { useMutation } from "@tanstack/react-query"

export const useClassAssignUser = () => {
  return useMutation({
    mutationFn: async ({ classId, userEmail }: { classId: number; userEmail: string }) => {
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
