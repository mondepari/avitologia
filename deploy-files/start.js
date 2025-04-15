// Скрипт для запуска приложения на хостинге
const { spawn } = require('child_process');
const path = require('path');

// Путь к директории с проектом на хостинге
// Вам может потребоваться изменить этот путь в зависимости от структуры вашего хостинга
const APP_DIR = __dirname;

// Запуск сервера Node.js
const server = spawn('node', ['dist/index.js'], {
  cwd: APP_DIR,
  env: {
    ...process.env,
    NODE_ENV: 'production',
    PORT: process.env.PORT || 3000
  }
});

server.stdout.on('data', (data) => {
  console.log(`[Server]: ${data}`);
});

server.stderr.on('data', (data) => {
  console.error(`[Server Error]: ${data}`);
});

server.on('close', (code) => {
  console.log(`[Server]: процесс завершен с кодом ${code}`);
});

console.log('[Init]: Сервер запущен');