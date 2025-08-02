# HelloCli Dashboard 🤖

Sistema completo de gerenciamento de chatbot inteligente para pequenos negócios.

## 🚀 Funcionalidades

### 🔐 Autenticação
- Login com JWT
- Proteção de rotas
- Controle de permissões (Admin/Superadmin)

### 📊 Dashboard
- KPIs em tempo real
- Gráficos de conversas
- Métricas de atendimento

### 🤖 Chatbot
- Configuração de personalidade
- Upload de FAQ (PDF)
- Teste em tempo real
- Integração com OpenAI

### 💬 Conversas
- Visualização de conversas
- Filtros avançados
- Exportação de dados

### 👥 Gestão
- Usuários e permissões
- Empresas (Superadmin)
- Configurações da empresa

## 🛠️ Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **shadcn/ui** - Componentes UI
- **React Query** - Gerenciamento de estado
- **Framer Motion** - Animações
- **Recharts** - Gráficos
- **React Hook Form** - Formulários
- **Zod** - Validação

## 📁 Estrutura do Projeto

\`\`\`
src/
├── app/                    # App Router (Next.js 14)
│   ├── login/             # Página de login
│   ├── dashboard/         # Dashboard principal
│   ├── users/             # Gestão de usuários (Superadmin)
│   ├── companies/         # Gestão de empresas (Superadmin)
│   ├── conversations/     # Visualização de conversas
│   ├── chatbot/           # Configuração do chatbot
│   └── settings/          # Configurações
├── components/            # Componentes reutilizáveis
│   ├── layout/           # Layout e navegação
│   ├── forms/            # Formulários
│   ├── charts/           # Gráficos
│   └── ui/               # Componentes shadcn/ui
├── hooks/                # Hooks personalizados
├── lib/                  # Utilitários
│   ├── auth.ts          # Autenticação
│   ├── api.ts           # Cliente API
│   └── validators.ts    # Schemas de validação
└── types/               # Tipos TypeScript
\`\`\`

## 🔧 Instalação

1. **Clone o repositório**
\`\`\`bash
git clone https://github.com/seu-usuario/hellocli-dashboard.git
cd hellocli-dashboard
\`\`\`

2. **Instale as dependências**
\`\`\`bash
npm install
\`\`\`

3. **Configure as variáveis de ambiente**
\`\`\`bash
cp .env.example .env.local
\`\`\`

4. **Execute o projeto**
\`\`\`bash
npm run dev
\`\`\`

## 🌐 Variáveis de Ambiente

\`\`\`env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_APP_URL=http://localhost:3000
OPENAI_API_KEY=sua_chave_openai
JWT_SECRET=seu_jwt_secret
DATABASE_URL=sua_url_do_banco
\`\`\`

## 🔐 Autenticação

### Fluxo de Login
1. Usuário faz login com email/senha
2. API retorna JWT token
3. Token é salvo em cookie httpOnly
4. Middleware protege rotas privadas

### Níveis de Permissão
- **SUPERADMIN**: Acesso total ao sistema
- **ADMIN**: Gestão da própria empresa
- **USER**: Visualização limitada

## 📊 APIs

### Autenticação
- \`POST /auth/login\` - Login
- \`POST /auth/logout\` - Logout
- \`GET /auth/me\` - Dados do usuário

### Dashboard
- \`GET /dashboard/stats\` - KPIs
- \`GET /dashboard/charts\` - Dados dos gráficos

### Usuários
- \`GET /users\` - Listar usuários
- \`POST /users\` - Criar usuário
- \`PUT /users/:id\` - Atualizar usuário
- \`DELETE /users/:id\` - Deletar usuário

### Empresas
- \`GET /companies\` - Listar empresas
- \`POST /companies\` - Criar empresa
- \`PUT /companies/:id\` - Atualizar empresa

### Conversas
- \`GET /conversations\` - Listar conversas
- \`GET /conversations/:id\` - Detalhes da conversa
- \`GET /messages/conversation/:id\` - Mensagens

### Chatbot
- \`GET /chat/settings\` - Configurações
- \`PUT /chat/settings\` - Atualizar configurações
- \`POST /chat/upload\` - Upload de PDF
- \`POST /openai/ask\` - Testar prompt

## 🎨 Componentes Principais

### Layout
- **Sidebar**: Navegação lateral com animações
- **Header**: Barra superior com perfil
- **ProtectedRoute**: Proteção de rotas

### Dashboard
- **StatsCards**: Cards de KPIs
- **ConversationChart**: Gráfico de conversas
- **QuickActions**: Ações rápidas

### Formulários
- **LoginForm**: Formulário de login
- **ChatbotForm**: Configuração do chatbot
- **UserForm**: Criação/edição de usuários

## 🔄 Fluxo de Dados

### React Query
- Cache automático de dados
- Refetch em background
- Otimistic updates
- Error handling

### Exemplo de Hook
\`\`\`typescript
const { data: stats, isLoading } = useQuery({
  queryKey: ['dashboard', 'stats'],
  queryFn: () => api.get('/dashboard/stats'),
  staleTime: 5 * 60 * 1000, // 5 minutos
})
\`\`\`

## 🧪 Testes

\`\`\`bash
# Testes unitários
npm run test

# Testes E2E
npm run test:e2e

# Coverage
npm run test:coverage
\`\`\`

## 🚀 Deploy

### Vercel (Recomendado)
\`\`\`bash
npm run build
vercel --prod
\`\`\`

### Docker
\`\`\`bash
docker build -t hellocli-dashboard .
docker run -p 3000:3000 hellocli-dashboard
\`\`\`

## 📝 Roadmap

- [ ] Notificações em tempo real
- [ ] Chat ao vivo
- [ ] Relatórios avançados
- [ ] Integração WhatsApp
- [ ] API pública
- [ ] Mobile app

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch (\`git checkout -b feature/nova-funcionalidade\`)
3. Commit suas mudanças (\`git commit -m 'Adiciona nova funcionalidade'\`)
4. Push para a branch (\`git push origin feature/nova-funcionalidade\`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

- 📧 Email: suporte@hellocli.com
- 💬 Discord: [HelloCli Community](https://discord.gg/hellocli)
- 📚 Docs: [docs.hellocli.com](https://docs.hellocli.com)

---

Feito com ❤️ pela equipe HelloCli
