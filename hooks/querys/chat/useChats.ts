import { useQuery } from "@tanstack/react-query";
import { api } from "../../../lib/api";
import { apiRoutes } from "../../../lib/apiRoutes";

const routes = apiRoutes("");

interface ChatMessage {
  id: string;
  content: string;
  senderId: string;
  createdAt: string;
}

export function useChats() {
  return useQuery<ChatMessage[]>({
    queryKey: ["chats"],
    queryFn: () => api.get(routes.chat.listMessages),
  });
}
