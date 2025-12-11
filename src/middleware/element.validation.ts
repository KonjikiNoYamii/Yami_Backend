import { body, param } from "express-validator";

export const createElementValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Nama Element wajib diisi")
    .isLength({ min: 3 })
    .withMessage("Nama Element minimal 3 karakter")
];
export const updateElementValidation = [
  param("id")
    .isInt({ gt: 0 })
    .withMessage("ID harus angka valid"),

  body("name")
    .optional()
    .trim()
    .isLength({ min: 3 })
    .withMessage("Nama Element minimal 3 karakter"),
];
export const getElementByIdValidation = [
  param("id").isInt({ gt: 0 }).withMessage("ID harus angka valid"),
];
