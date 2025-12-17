import { body, param, query } from "express-validator";

/* ======================
   CREATE PROFILE
====================== */
export const createProfileValidation = [
  body("name")
    .notEmpty().withMessage("Name wajib diisi")
    .isString().withMessage("Name harus berupa string")
    .isLength({ min: 2 }).withMessage("Name minimal 2 karakter"),

  body("gender")
    .notEmpty().withMessage("Gender wajib diisi"),

  body("address")
    .optional()
    .isString().withMessage("Address harus berupa string"),

  body("userId")
    .notEmpty().withMessage("UserId wajib diisi")
    .isInt({ gt: 0 }).withMessage("UserId harus berupa angka"),
];

/* ======================
   UPDATE PROFILE
====================== */
export const updateProfileValidation = [
  param("id")
    .notEmpty().withMessage("ID wajib diisi")
    .isInt().withMessage("ID harus berupa angka"),

  body("name")
    .optional()
    .isString().withMessage("Name harus berupa string")
    .isLength({ min: 2 }).withMessage("Name minimal 2 karakter"),

  body("gender")
    .optional()
    .isIn(["Male", "Female"]).withMessage("Gender harus Male atau Female"),

  body("address")
    .optional()
    .isString().withMessage("Address harus berupa string"),
];

/* ======================
   GET BY ID
====================== */
export const getProfileByIdValidation = [
  param("id")
    .notEmpty().withMessage("ID wajib diisi")
    .isInt().withMessage("ID harus berupa angka"),
];

/* ======================
   DELETE PROFILE
====================== */
export const deleteProfileValidation = [
  param("id")
    .notEmpty().withMessage("ID wajib diisi")
    .isInt().withMessage("ID harus berupa angka"),
];

/* ======================
   SEARCH PROFILE
====================== */
export const searchProfileValidation = [
  query("name")
    .optional()
    .isString().withMessage("Name harus berupa string"),

  query("gender")
    .optional()
    .isIn(["Male", "Female"]).withMessage("Gender harus Male atau Female"),

  query("address")
    .optional()
    .isString().withMessage("Address harus berupa string"),
];
