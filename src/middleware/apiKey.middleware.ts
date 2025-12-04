import type { NextFunction, Request, Response } from "express";

export const apiKeyValidator = (req: Request, _res: Response, next: NextFunction) => {
  const apiKey = req.headers["x-api-key"];
  if (!apiKey) {
    throw new Error("API wajib dikirim");
  }

  if (apiKey !== "94326") {
    throw new Error("API key tidak valid!");
  }
  next();
}