# 🔧 Configuração de Ambiente

## Variáveis de Ambiente Necessárias

### 🏠 Desenvolvimento Local

Crie um arquivo `.env.local` na raiz do projeto:

\`\`\`bash
cp .env.example .env.local
\`\`\`

Edite o arquivo com suas configurações:

\`\`\`bash
# Obrigatórias
NEXT_PUBLIC_API_URL=http://localhost:3001/api
JWT_SECRET=mude-esta-chave-secreta-123456

# Opcionais
ANALYZE=false
CI=false
\`\`\`

### 🚀 Produção (Vercel)

1. Acesse [vercel.com](https://vercel.com)
2. Vá no seu projeto → **Settings** → **Environment Variables**
3. Adicione as variáveis:

| Nome | Valor | Ambiente |
|------|-------|----------|
| `NEXT_PUBLIC_API_URL` | `https://sua-api.com/api` | Production |
| `JWT_SECRET` | `sua-chave-super-secreta` | Production |
| `ANALYZE` | `false` | All |

### 🔐 GitHub Secrets

Para o CI/CD funcionar, adicione no GitHub:

1. Vá no repositório → **Settings** → **Secrets and variables** → **Actions**
2. Adicione os secrets:

\`\`\`bash
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_org_id  
VERCEL_PROJECT_ID=your_project_id
CODECOV_TOKEN=your_codecov_token
\`\`\`

### 🧪 Testes

Para os testes E2E, as variáveis são definidas automaticamente:

\`\`\`bash
CI=true  # Definido pelo GitHub Actions
NODE_ENV=test  # Definido pelo Playwright
\`\`\`

## 🔍 Como Obter os Tokens

### Vercel Token
1. Acesse [vercel.com/account/tokens](https://vercel.com/account/tokens)
2. Crie um novo token
3. Copie e adicione nos GitHub Secrets

### Codecov Token
1. Acesse [codecov.io](https://codecov.io)
2. Conecte seu repositório
3. Copie o token do projeto

### Org ID e Project ID (Vercel)
\`\`\`bash
# Instale a CLI da Vercel
npm i -g vercel

# Faça login
vercel login

# No diretório do projeto
vercel link

# Os IDs aparecerão no arquivo .vercel/project.json
\`\`\`

## ✅ Verificação

Para verificar se tudo está configurado:

\`\`\`bash
# Desenvolvimento
pnpm dev

# Build
pnpm build

# Testes
pnpm test

# Análise do bundle
pnpm build:analyze
