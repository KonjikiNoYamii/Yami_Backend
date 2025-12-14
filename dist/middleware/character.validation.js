import { body, param } from "express-validator";
export const createCharacterValidation = [
    body("name")
        .trim()
        .notEmpty()
        .withMessage("Nama Character wajib diisi")
        .isLength({ min: 3 })
        .withMessage("Nama Character minimal 3 karakter"),
    body("description")
        .optional()
        .trim()
        .isLength({ min: 3 })
        .withMessage("Deskripsi minimal 3 karakter"),
    body("elementId")
        .notEmpty()
        .withMessage("Element ID wajib diisi")
        .isInt({ gt: 0 })
        .withMessage("Element ID harus berupa angka dan lebih dari 0"),
    body("rarityId")
        .notEmpty()
        .withMessage("Rarity ID wajib diisi")
        .isInt({ gt: 0 })
        .withMessage("Rarity ID harus berupa angka dan lebih dari 0"),
];
export const updateCharacterValidation = [
    param("id").isInt({ gt: 0 }).withMessage("ID harus angka valid"),
    body("name")
        .optional()
        .trim()
        .isLength({ min: 3 })
        .withMessage("Nama Character minimal 3 karakter"),
    body("description")
        .optional()
        .trim()
        .isLength({ min: 3 })
        .withMessage("Deskripsi minimal 3 karakter"),
    body("elementId")
        .optional()
        .isInt({ gt: 0 })
        .withMessage("Element ID harus angka valid"),
    body("rarityId")
        .optional()
        .isInt({ gt: 0 })
        .withMessage("Rarity ID harus angka valid"),
];
// Validasi untuk GET by ID produk
export const getCharactersByIdValidation = [
    param("id").isNumeric().withMessage("ID harus angka"),
];
//# sourceMappingURL=character.validation.js.map