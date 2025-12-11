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
export const createCategoryValidation = [
    body("category")
        .trim()
        .notEmpty()
        .withMessage("Kategori wajib diisi")
        .isLength({ min: 3 })
        .withMessage("Nama Kategori minimal 3 karakter"),
    body("characters")
        .trim()
        .notEmpty()
        .withMessage("Nama Character wajib diisi!")
];
export const getCategoriesByIdValidation = [
    param("id").isNumeric().withMessage("ID harus angka"),
];
//# sourceMappingURL=categories.validation.js.map