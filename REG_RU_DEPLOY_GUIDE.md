# Руководство по размещению проекта на хостинге Reg.ru с ISP Manager

Это руководство поможет вам развернуть ваше приложение на хостинге Reg.ru, используя Docker и ISP Manager.

## Шаг 1: Подготовка VPS сервера на Reg.ru

1. Войдите в панель управления Reg.ru
2. Выберите или закажите новый VPS сервер с OS Linux (рекомендуется Ubuntu 20.04/22.04)
3. Убедитесь, что выбранный тариф VPS имеет достаточно ресурсов:
   - Минимум 2 GB RAM
   - 2+ vCPU
   - 20+ GB SSD

## Шаг 2: Установка Docker и Docker Compose на сервер

1. Подключитесь к серверу через SSH:
   ```bash
   ssh user@ваш_ip_адрес
   ```

2. Обновите список пакетов:
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

3. Установите необходимые пакеты:
   ```bash
   sudo apt install -y apt-transport-https ca-certificates curl software-properties-common gnupg
   ```

4. Добавьте GPG ключ для Docker репозитория:
   ```bash
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/docker.gpg
   ```

5. Добавьте репозиторий Docker:
   ```bash
   sudo add-apt-repository "deb [arch=$(dpkg --print-architecture)] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
   ```

6. Установите Docker:
   ```bash
   sudo apt update
   sudo apt install -y docker-ce docker-ce-cli containerd.io
   ```

7. Установите Docker Compose:
   ```bash
   sudo curl -L "https://github.com/docker/compose/releases/download/v2.21.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
   sudo chmod +x /usr/local/bin/docker-compose
   ```

8. Добавьте текущего пользователя в группу docker:
   ```bash
   sudo usermod -aG docker $USER
   ```

9. Перезагрузите систему:
   ```bash
   sudo reboot
   ```

## Шаг 3: Настройка ISP Manager (если используется)

1. Войдите в ISP Manager через браузер, используя предоставленные вам данные

2. Создайте новый домен или настройте существующий:
   - Зайдите в раздел "WWW-домены"
   - Нажмите "Добавить домен"
   - Введите ваше доменное имя (например, yourdomain.com)
   - В качестве IP-адреса укажите адрес вашего сервера

3. Настройте DNS записи:
   - Перейдите в раздел "DNS-записи"
   - Создайте/проверьте записи A для вашего домена, указывающие на IP вашего сервера

## Шаг 4: Клонирование репозитория и подготовка файлов

1. Создайте директорию для проекта и перейдите в неё:
   ```bash
   mkdir -p /var/www/yourdomain
   cd /var/www/yourdomain
   ```

2. Клонируйте репозиторий:
   ```bash
   git clone https://your-repo-url.git .
   ```

3. Отредактируйте файлы конфигурации:
   
   - `nginx/nginx.conf`: замените "yourdomain.com" на ваш реальный домен
   - `init-letsencrypt.sh`: измените переменные domains, email и staging
   - `docker-compose.yml`: при необходимости измените пароли базы данных

## Шаг 5: Настройка SSL-сертификата

1. Запустите скрипт для получения сертификата:
   ```bash
   ./init-letsencrypt.sh
   ```

2. Если вы запускали скрипт с `staging=1`, то после успешного тестирования:
   - Измените `staging=0` в файле `init-letsencrypt.sh`
   - Запустите скрипт повторно для получения реального сертификата

## Шаг 6: Запуск приложения

1. Запустите контейнеры в режиме демона:
   ```bash
   docker-compose up -d
   ```

2. Проверьте, что все контейнеры успешно запущены:
   ```bash
   docker-compose ps
   ```

3. Просмотрите логи приложения:
   ```bash
   docker-compose logs -f app
   ```

## Шаг 7: Настройка автоматического обновления

1. Создайте скрипт для автоматического обновления:
   ```bash
   cat > /var/www/yourdomain/update.sh << 'EOL'
   #!/bin/bash
   cd /var/www/yourdomain
   git pull
   docker-compose up -d --build
   EOL
   ```

2. Сделайте скрипт исполняемым:
   ```bash
   chmod +x /var/www/yourdomain/update.sh
   ```

3. Настройте cron-задание для периодического обновления (если необходимо):
   ```bash
   (crontab -l 2>/dev/null; echo "0 3 * * * /var/www/yourdomain/update.sh >> /var/log/update.log 2>&1") | crontab -
   ```

## Шаг 8: Настройка брандмауэра

1. Настройте UFW (Uncomplicated Firewall):
   ```bash
   sudo ufw allow ssh
   sudo ufw allow http
   sudo ufw allow https
   sudo ufw enable
   ```

2. Проверьте статус брандмауэра:
   ```bash
   sudo ufw status
   ```

## Поиск и устранение неисправностей

### Проблемы с сертификатом SSL
- Проверьте, что DNS настроен правильно: `dig yourdomain.com`
- Проверьте логи certbot: `docker-compose logs certbot`

### Приложение не запускается
- Проверьте логи приложения: `docker-compose logs app`
- Проверьте доступность базы данных: `docker-compose logs db`

### Проблемы с Nginx
- Проверьте конфигурацию: `docker-compose exec nginx nginx -t`
- Проверьте логи: `docker-compose logs nginx`

## Рекомендации по безопасности

1. Используйте сильные пароли для базы данных
2. Регулярно обновляйте операционную систему и Docker
3. Настройте резервное копирование базы данных
4. Используйте защиту от DDoS (например, Cloudflare)

## Полезные команды

- Перезапуск контейнеров: `docker-compose restart`
- Остановка приложения: `docker-compose down`
- Обновление образов: `docker-compose pull`
- Просмотр логов: `docker-compose logs -f`
- Резервное копирование базы данных: `docker exec marketing-site-db pg_dump -U postgres marketingdb > backup_$(date +%Y%m%d).sql`