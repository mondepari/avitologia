# Используем официальный образ Node.js
FROM node:20-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci

# Копируем исходный код
COPY . .

# Собираем приложение
RUN npm run build

# Создаем директорию для загрузок, если она используется
RUN mkdir -p /app/uploads && chmod 777 /app/uploads

# Открываем порт для доступа к приложению
EXPOSE 5000

# Запускаем приложение
CMD ["node", "deploy/server.js"]