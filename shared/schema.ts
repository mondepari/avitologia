import { mysqlTable, text, serial, int, varchar, timestamp } from "drizzle-orm/mysql-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = mysqlTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Модель для контактной формы
export const contactMessages = mysqlTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 100 }).notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactSchema = createInsertSchema(contactMessages).pick({
  name: true,
  email: true,
  phone: true,
  message: true,
});

export const contactFormSchema = insertContactSchema.extend({
  email: z.string().email("Пожалуйста, введите корректный email"),
  phone: z.string().min(5, "Телефон должен содержать не менее 5 символов"),
  message: z.string().min(10, "Сообщение должно содержать не менее 10 символов"),
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contactMessages.$inferSelect;
