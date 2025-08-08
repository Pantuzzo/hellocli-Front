import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../../lib/api";
import { apiRoutes } from "../../../lib/apiRoutes";

const routes = apiRoutes("");

export function useDeleteUsuario() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => api.delete(routes.usuarios.delete(id)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["usuarios"] });
    },
  });
}
