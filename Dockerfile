FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copie os arquivos necessários
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Verifica se é build standalone ou normal
RUN if [ -d /app/.next/standalone ]; then \
      cp -r /app/.next/standalone ./ && \
      cp -r /app/.next/static ./.next/static; \
    else \
      cp -r /app/.next ./.next && \
      cp -r /app/node_modules ./node_modules; \
    fi

EXPOSE 3000

# Comando adaptável
CMD if [ -f server.js ]; then \
      node server.js; \
    else \
      npm start; \
    fi