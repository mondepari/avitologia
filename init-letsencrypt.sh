#!/bin/bash

# Этот скрипт поможет вам настроить SSL для вашего домена с Let's Encrypt
# Перед запуском замените переменные DOMAIN, EMAIL и STAGING значениями для вашего проекта

if ! [ -x "$(command -v docker-compose)" ]; then
  echo 'Ошибка: docker-compose не установлен.' >&2
  exit 1
fi

# Домены для сертификата (первый домен указывается как основной)
domains=(yourdomain.com www.yourdomain.com)
# Адрес электронной почты для регистрации сертификата
email="your-email@example.com"
# Используйте 1 для тестирования (не создаёт реальный сертификат)
# и 0 для получения настоящего сертификата
staging=1 

# Создаём директории для certbot
mkdir -p ./certbot/conf
mkdir -p ./certbot/www

echo "### Создаём временные файлы..."
# Получаем данные для самоподписанного сертификата
if [ ! -e "./certbot/conf/live/$domains" ]; then
  echo "### Самоподписанные сертификаты не найдены, создаём..."
  mkdir -p "./certbot/conf/live/$domains"
  docker-compose run --rm --entrypoint "\
    openssl req -x509 -nodes -newkey rsa:4096 -days 1\
      -keyout '/etc/letsencrypt/live/$domains/privkey.pem' \
      -out '/etc/letsencrypt/live/$domains/fullchain.pem' \
      -subj '/CN=localhost'" certbot
fi

echo "### Запускаем nginx для валидации через HTTP-01 challenge..."
docker-compose up --force-recreate -d nginx

echo "### Ожидаем запуск nginx..."
sleep 5

echo "### Запрашиваем сертификат Let's Encrypt для $domains..."
# Если вам нужен staging сертификат, добавьте --staging
staging_arg=""
if [ $staging -eq 1 ]; then
  staging_arg="--staging"
fi

domain_args=""
for domain in "${domains[@]}"; do
  domain_args="$domain_args -d $domain"
done

# Получаем новый сертификат
docker-compose run --rm --entrypoint "\
  certbot certonly --webroot -w /var/www/certbot \
    $staging_arg \
    $domain_args \
    --email $email \
    --rsa-key-size 4096 \
    --agree-tos \
    --force-renewal" certbot

echo "### Перезапуск nginx с новыми сертификатами..."
docker-compose exec nginx nginx -s reload

echo "### Процесс настройки SSL завершен."
echo "### Если в процессе возникли ошибки, проверьте логи и исправьте их."
echo "### Примечание: если вы использовали staging=1, сертификат не будет доверенным."
echo "### Смените staging=0 и запустите скрипт снова, чтобы получить настоящий сертификат."