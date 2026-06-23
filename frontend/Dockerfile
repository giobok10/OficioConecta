FROM node:20-alpine
WORKDIR /app
RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install
COPY --chown=node:node . .
USER node
EXPOSE 5173
# Comando para desarrollo con Vite
CMD ["pnpm", "dev", "--host"]