# Usamos una imagen ligera de Node (Seguridad: superficie de ataque reducida)
FROM node:18-alpine

# Directorio de trabajo
WORKDIR /app

# Instalamos pnpm globalmente
RUN npm install -g pnpm

# Copiamos solo los archivos de dependencias para aprovechar el caché de capas
COPY package.json pnpm-lock.yaml* ./

# Instalamos dependencias
RUN pnpm install

# Copiamos el resto del código
COPY . .

# Exponemos el puerto que definimos en app.js
EXPOSE 3000

# Comando para iniciar
CMD ["pnpm", "start"]
