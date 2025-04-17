#!/bin/sh
set -e

# Ждем доступности PostgreSQL
echo "Waiting for PostgreSQL to start..."
until nc -z db 5432; do
  sleep 1
done
echo "PostgreSQL started"

# Применяем миграции базы данных
echo "Running database migrations..."
npm run db:push

# Запускаем приложение
echo "Starting the application..."
exec "$@"