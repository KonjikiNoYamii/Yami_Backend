import { body, param, validationResult } from "express-validator";
import { errorResponse } from "../utils/response";
export const validate = (validations) => {
    return async (req, res, next) => {
        await Promise.all(validations.map((validation) => validation.run(req)));
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
        const errorList = errors.array().map((err) => ({
            field: err.type === "field" ? err.path : "unknown",
            message: err.msg,
        }));
        return errorResponse(res, "Validasi gagal", 400, errorList);
    };
};
// Validasi untuk CREATE & UPDATE produk
export const createCharacterValidation = [
    body("name")
        .trim()
        .notEmpty()
        .withMessage("Nama Character wajib diisi")
        .isLength({ min: 3 })
        .withMessage("Nama Character minimal 3 karakter"),
    body("description").trim().notEmpty().withMessage("Deskripsi wajib diisi"),
    body("power")
        .isNumeric()
        .withMessage("power harus angka")
        .custom((value) => value > 0)
        .withMessage("power harus lebih dari 0"),
];
// Validasi untuk GET by ID produk
export const getCharactersByIdValidation = [
    param("id").isNumeric().withMessage("ID harus angka"),
];
//# sourceMappingURL=character.validation.js.map