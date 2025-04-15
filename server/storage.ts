import { users, type User, type InsertUser, contactMessages, type InsertContact, type Contact } from "@shared/schema";
import { eq } from "drizzle-orm";
import { getDb } from "./db";

// Интерфейс хранилища данных с методами CRUD

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactMessage(message: InsertContact): Promise<Contact>;
  getContactMessages(): Promise<Contact[]>;
}

// Реализация хранилища через базу данных MySQL
export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    try {
      const { db } = getDb();
      const [user] = await db.select().from(users).where(eq(users.id, id));
      return user;
    } catch (error) {
      console.error('Error getting user:', error);
      return undefined;
    }
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    try {
      const { db } = getDb();
      const [user] = await db.select().from(users).where(eq(users.username, username));
      return user;
    } catch (error) {
      console.error('Error getting user by username:', error);
      return undefined;
    }
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    try {
      const { db, connection } = getDb();
      
      // Вставляем запись
      await db.insert(users).values(insertUser);
      
      // Выполняем прямой SQL-запрос для получения последнего вставленного ID
      const [result] = await connection.query('SELECT LAST_INSERT_ID() as id');
      const lastId = (result as any)[0].id;
      
      // Получаем полную запись
      const [user] = await db.select().from(users).where(eq(users.id, Number(lastId)));
      
      return user;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  async createContactMessage(message: InsertContact): Promise<Contact> {
    try {
      const { db, connection } = getDb();
      
      // Вставляем сообщение
      await db.insert(contactMessages).values(message);
      
      // Выполняем прямой SQL-запрос для получения последнего вставленного ID
      const [result] = await connection.query('SELECT LAST_INSERT_ID() as id');
      const lastId = (result as any)[0].id;
      
      // Получаем полную запись
      const [contact] = await db.select().from(contactMessages).where(eq(contactMessages.id, Number(lastId)));
      
      return contact;
    } catch (error) {
      console.error('Error creating contact message:', error);
      throw error;
    }
  }

  async getContactMessages(): Promise<Contact[]> {
    try {
      const { db } = getDb();
      return await db.select().from(contactMessages).orderBy(contactMessages.createdAt);
    } catch (error) {
      console.error('Error getting contact messages:', error);
      return [];
    }
  }
}

// Запасной вариант: MemStorage для локальной разработки или тестирования
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  currentId: number;
  currentContactId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.currentId = 1;
    this.currentContactId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactMessage(message: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const now = new Date();
    const contact: Contact = { 
      ...message, 
      id, 
      createdAt: now 
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContactMessages(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort((a, b) => 
      a.createdAt.getTime() - b.createdAt.getTime()
    );
  }
}

// Используем реализацию хранилища в памяти для локальной разработки
export const storage = new MemStorage();
