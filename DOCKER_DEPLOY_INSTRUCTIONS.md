# Инструкция по развертыванию через Docker

## Предварительные требования

1. Установленный Docker и Docker Compose на сервере
2. Доступ к серверу через SSH или панель управления ISP Manager

## Шаги по развертыванию

### 1. Клонирование репозитория на сервер

```bash
git clone <ваш_репозиторий> /path/to/app
cd /path/to/app
```

### 2. Настройка переменных окружения

Создайте файл `.env` в корне проекта:

```bash
touch .env
```

Добавьте в него следующие переменные окружения:

```
NODE_ENV=production
DATABASE_URL=postgresql://postgres:postgres@db:5432/marketingdb
```

Примечание: Для продакшн-среды поменяйте пароли базы данных на более безопасные.

### 3. Сборка и запуск контейнеров

```bash
docker-compose up -d
```

Этой командой вы запустите приложение в фоновом режиме.

### 4. Проверка работы приложения

Проверьте, что контейнеры успешно запустились:

```bash
docker-compose ps
```

Проверьте логи приложения:

```bash
docker-compose logs -f app
```

### 5. Доступ к приложению

Приложение будет доступно по адресу: `http://ваш_сервер:5000`

Для настройки HTTPS рекомендуется использовать обратный прокси-сервер, например, Nginx с Let's Encrypt.

## Обновление приложения

Для обновления приложения:

```bash
# Получите последнюю версию кода
git pull

# Перезапустите контейнеры с пересборкой
docker-compose up -d --build
```

## Резервное копирование данных

Для резервного копирования базы данных:

```bash
docker exec marketing-site-db pg_dump -U postgres marketingdb > backup_$(date +%Y%m%d).sql
```

## Восстановление из резервной копии

```bash
cat backup_YYYYMMDD.sql | docker exec -i marketing-site-db psql -U postgres -d marketingdb
```

## Дополнительные команды

- Остановка контейнеров: `docker-compose down`
- Перезапуск приложения: `docker-compose restart app`
- Просмотр логов базы данных: `docker-compose logs -f db`