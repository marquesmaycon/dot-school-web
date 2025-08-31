import { useQuery } from "@tanstack/react-query"

import { api } from "@/lib/api"

import type { Theme } from "./types"

export const useThemes = () => {
  return useQuery({
    queryKey: ["themes"],
    queryFn: async () => {
      const res = await api.get<Theme[]>("/themes")
      return res.data
    }
  })
}
