# Руководство по работе с Docker

## Введение

Это руководство поможет вам запустить проект с использованием Docker. Проект настроен для запуска в контейнерах, что упрощает процесс установки и настройки.

## Предварительные требования

1. Установленный Docker: [Инструкция по установке Docker](https://docs.docker.com/get-docker/)
2. Установленный Docker Compose: [Инструкция по установке Docker Compose](https://docs.docker.com/compose/install/)

## Запуск проекта

### Шаг 1: Клонирование репозитория

```bash
git clone <url-репозитория>
cd <название-проекта>
```

### Шаг 2: Настройка переменных окружения

Создайте файл `.env` на основе примера:

```bash
cp .env.example .env
```

При необходимости отредактируйте параметры в созданном файле.

### Шаг 3: Запуск приложения

```bash
docker-compose up -d
```

Эта команда запустит два контейнера:
- `app`: Node.js приложение
- `db`: PostgreSQL база данных

### Шаг 4: Проверка работы приложения

После запуска приложение будет доступно по адресу: http://localhost:5000

Для проверки статуса контейнеров выполните:

```bash
docker-compose ps
```

## Основные команды

### Просмотр логов

```bash
# Все логи
docker-compose logs

# Логи конкретного сервиса
docker-compose logs app
docker-compose logs db

# Логи в реальном времени
docker-compose logs -f
```

### Остановка и запуск

```bash
# Остановка всех контейнеров
docker-compose down

# Запуск всех контейнеров
docker-compose up -d

# Перезапуск конкретного сервиса
docker-compose restart app
```

### Обновление проекта

Если вы внесли изменения в код или получили обновления из репозитория:

```bash
# Остановка контейнеров
docker-compose down

# Сборка новых образов
docker-compose build

# Запуск обновленных контейнеров
docker-compose up -d
```

Или используйте скрипт обновления:

```bash
./update.sh
```

## Работа с базой данных

### Доступ к PostgreSQL

```bash
docker-compose exec db psql -U postgres -d marketingdb
```

### Создание резервной копии

```bash
docker-compose exec db pg_dump -U postgres marketingdb > backup_$(date +%Y%m%d).sql
```

### Восстановление из резервной копии

```bash
cat backup_YYYYMMDD.sql | docker-compose exec -T db psql -U postgres -d marketingdb
```

## Использование в продакшн-среде

Для использования в продакшн-среде рекомендуется:

1. Изменить пароли в `.env` файле
2. Раскомментировать сервис nginx в docker-compose.yml
3. Настроить SSL-сертификаты (можно использовать init-letsencrypt.sh)

## Устранение неисправностей

### Недоступно приложение

1. Проверьте, что контейнеры запущены:
   ```bash
   docker-compose ps
   ```

2. Проверьте логи приложения:
   ```bash
   docker-compose logs app
   ```

### Проблемы с базой данных

1. Проверьте, что контейнер базы данных запущен:
   ```bash
   docker-compose ps db
   ```

2. Проверьте логи базы данных:
   ```bash
   docker-compose logs db
   ```

3. Проверьте переменную окружения DATABASE_URL в файле .env

## Дополнительно

Для получения более подробной информации о Docker и Docker Compose обратитесь к официальной документации:

- [Docker документация](https://docs.docker.com/)
- [Docker Compose документация](https://docs.docker.com/compose/)