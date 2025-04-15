import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { initDb } from "./db";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Инициализируем соединение с базой данных
  try {
    await initDb();
    console.log("Database initialized successfully");
  } catch (error) {
    console.error("Failed to initialize database:", error);
    // Если не удалось подключиться к базе данных, продолжаем работу с MemStorage
  }

  // API для отправки сообщения через контактную форму
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Валидируем данные с помощью Zod схемы
      const validatedData = contactFormSchema.parse(req.body);
      
      // Сохраняем сообщение в базе данных
      const contactMessage = await storage.createContactMessage(validatedData);
      
      // Отправляем успешный ответ
      res.status(201).json({
        success: true,
        message: "Сообщение успешно отправлено",
        data: contactMessage
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      
      // Обрабатываем ошибки валидации
      if (error instanceof ZodError) {
        return res.status(400).json({
          success: false,
          message: "Ошибка валидации данных",
          errors: error.errors
        });
      }
      
      // Обрабатываем остальные ошибки
      res.status(500).json({
        success: false,
        message: "Произошла ошибка при обработке запроса"
      });
    }
  });

  // API для получения всех сообщений (например, для админ-панели)
  app.get("/api/contact", async (_req: Request, res: Response) => {
    try {
      const messages = await storage.getContactMessages();
      res.status(200).json({
        success: true,
        data: messages
      });
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({
        success: false,
        message: "Произошла ошибка при загрузке сообщений"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
