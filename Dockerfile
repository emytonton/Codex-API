# Dockerfile

# Estágio 1: Builder - Instala dependências e prepara o app
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Estágio 2: Production - Cria a imagem final e otimizada
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/src ./src
COPY --from=builder /app/prisma ./prisma

EXPOSE 3000

# Comando para iniciar a API com nodemon (para desenvolvimento)
CMD ["npx", "nodemon", "src/server.js"]