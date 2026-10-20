# 1. Этап сборки (Builder)
FROM node:20-alpine AS builder

WORKDIR /app

# Копируем манифесты зависимостей
COPY package*.json ./

# Чистая установка всех зависимостей
RUN npm ci

# Копируем исходники проекта
COPY . .

# Аргумент для передачи URL бэкенда во время сборки (если используется)
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

# Собираем production-бандл (tsc + vite build -> папка dist)
RUN npm run build

# 2. Этап раздачи статики (Runner на Nginx)
FROM nginx:alpine AS runner

# Копируем кастомный конфиг Nginx для поддержки SPA-роутинга
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Копируем собранный проект из билдера
COPY --from=builder /app/dist /usr/share/nginx/html

# Открываем порт HTTP
EXPOSE 80

# Запуск Nginx
CMD ["nginx", "-g", "daemon off;"]