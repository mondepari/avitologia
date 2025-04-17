# Используем официальный образ Node.js
FROM node:20-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Устанавливаем необходимые утилиты
RUN apk add --no-cache netcat-openbsd

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci

# Копируем исходный код
COPY . .

# Делаем скрипт исполняемым
COPY docker-entrypoint.sh .
RUN chmod +x docker-entrypoint.sh

# Собираем приложение
RUN npm run build

# Создаем директорию для загрузок, если она используется
RUN mkdir -p /app/uploads && chmod 777 /app/uploads

# Открываем порт для доступа к приложению
EXPOSE 5000

# Используем скрипт запуска
ENTRYPOINT ["/app/docker-entrypoint.sh"]
CMD ["node", "deploy/server.js"]