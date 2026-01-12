# --- ETAPA 1: Construcción (Build) ---
FROM node:18-alpine as build

WORKDIR /app

# Copiamos package.json e instalamos dependencias
COPY package.json package-lock.json ./
RUN npm ci

# Copiamos el código y construimos la app (crea la carpeta dist)
COPY . .
RUN npm run build

# --- ETAPA 2: Servidor (Production) ---
FROM nginx:alpine

# Copiamos los archivos construidos en la etapa anterior a la carpeta de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copiamos una configuración básica de Nginx para React (Router)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]