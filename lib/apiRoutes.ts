export const apiRoutes = (API_BASE_URL: string) => ({
  auth: {
    login: "/auth/login",
  },

  usuarios: {
    create: "/users",
    list: "/users",
    findOne: (id: string) => `/users/${id}`,
    update: (id: string) => `/users/${id}`,
    delete: (id: string) => `/users/${id}`,
  },

  chat: {
    createMessage: "/chat",
    listMessages: "/chat",
    findMessage: (id: string) => `/chat/${id}`,
    updateMessage: (id: string) => `/chat/${id}`,
    deleteMessage: (id: string) => `/chat/${id}`,
  },

  empresas: {
    create: "/companies",
    list: "/companies",
    findOne: (id: string) => `/companies/${id}`,
    update: (id: string) => `/companies/${id}`,
    delete: (id: string) => `/companies/${id}`,
  },

  conversas: {
    create: "/conversations",
    list: "/conversations",
    findOne: (id: string) => `/conversations/${id}`,
    update: (id: string) => `/conversations/${id}`,
    delete: (id: string) => `/conversations/${id}`,
    listByUser: (id: string) => `/conversations/user/${id}`,
  },

  mensagens: {
    create: "/messages",
    listByConversation: (conversationId: string) =>
      `/messages/conversation/${conversationId}`,
    list: "/messages",
    findOne: (id: string) => `/messages/${id}`,
    update: (id: string) => `/messages/${id}`,
    delete: (id: string) => `/messages/${id}`,
  },

  openai: {
    chat: "/openai/chat",
  },
});
