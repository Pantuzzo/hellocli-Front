import { useQuery } from "@tanstack/react-query";
import { api } from "../../../lib/api";
import { apiRoutes } from "../../../lib/apiRoutes";

const routes = apiRoutes("");

export function useUsuarios() {
  return useQuery({
    queryKey: ["usuarios"],
    queryFn: () => api.get(routes.usuarios.list),
    staleTime: 5 * 60 * 1000, // opcional
  });
}
