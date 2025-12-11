import { body, param } from "express-validator";

export const createRarityValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Nama Rarity wajib diisi")
    .isLength({ min: 1 })
    .withMessage("Nama Rarity minimal 1 karakter")
];
export const updateRarityValidation = [
  param("id")
    .isInt({ gt: 0 })
    .withMessage("ID harus angka valid"),

  body("name")
    .optional()
    .trim()
    .isLength({ min: 1 })
    .withMessage("Nama Rarity minimal 1 karakter"),
];
export const getRarityByIdValidation = [
  param("id").isInt({ gt: 0 }).withMessage("ID harus angka valid"),
];
