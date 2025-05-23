import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schema from '@shared/schema';

// Для локальной разработки
const connectionConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306', 10),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'marketing_site',
};

// Вместо top-level await используем функцию для инициализации
let connection: mysql.Connection;
let db: ReturnType<typeof drizzle>;

// Инициализация подключения к базе данных
export async function initDb() {
  try {
    connection = await mysql.createConnection(connectionConfig);
    db = drizzle(connection);
    console.log('Database connection established');
    await migrateSchema();
    return { connection, db };
  } catch (error) {
    console.error('Error connecting to database:', error);
    // Если не удалось подключиться к БД, вернем информацию об ошибке
    return { error };
  }
}

// Функция для миграции схемы (создания таблиц)
export async function migrateSchema() {
  try {
    if (!connection) return;
    
    // Создаем таблицу пользователей если она отсутствует
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
      );
    `);

    // Создаем таблицу сообщений контактной формы если она отсутствует
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS contact_messages (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log('Database schema migrated successfully');
  } catch (error) {
    console.error('Error migrating database schema:', error);
    throw error;
  }
}

// Гетер для доступа к соединению с базой данных
export function getDb() {
  if (!db) {
    throw new Error('Database not initialized. Call initDb() first.');
  }
  return { connection, db };
}