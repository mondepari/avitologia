import { users, type User, type InsertUser, contactMessages, type InsertContact, type Contact } from "@shared/schema";
import { eq } from "drizzle-orm";
import { db } from "./db";

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
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createContactMessage(message: InsertContact): Promise<Contact> {
    const [contact] = await db.insert(contactMessages).values(message).returning();
    return contact;
  }

  async getContactMessages(): Promise<Contact[]> {
    return await db.select().from(contactMessages).orderBy(contactMessages.createdAt);
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

// Используем реализацию хранилища в базе данных MySQL
export const storage = new DatabaseStorage();
