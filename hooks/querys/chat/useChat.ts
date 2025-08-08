import { useQuery } from "@tanstack/react-query";
import { api } from "../../../lib/api";
import { apiRoutes } from "../../../lib/apiRoutes";

const routes = apiRoutes("");

interface ChatMessage {
  id: string;
  content: string;
  senderId: string;
  createdAt: string;
  // Add any other fields from your backend
}

export function useChat(id: string) {
  return useQuery<ChatMessage>({
    queryKey: ["chat", id],
    queryFn: () => api.get(routes.chat.findMessage(id)),
    enabled: !!id, // ensures the query only runs if id is truthy
  });
}
