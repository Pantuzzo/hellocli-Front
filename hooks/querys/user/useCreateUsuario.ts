import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../../lib/api";
import { apiRoutes } from "../../../lib/apiRoutes";

const routes = apiRoutes("");

export function useCreateUsuario() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: { name: string; email: string }) =>
      api.post(routes.usuarios.create, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["usuarios"] });
    },
  });
}
