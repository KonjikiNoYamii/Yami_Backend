import { successResponse } from "../utils/response";
import { createCategory, deteledCategory, getAllCategories, getCategoryById, searchCategories, updateCategory } from "../services/categories.service";
export const getAll = (_req, res) => {
    const { categories, total } = getAllCategories();
    successResponse(res, "Kategori berhasil diambil!", {
        jumlah: total,
        data: categories
    });
};
export const search = (req, res) => {
    const { category } = req.query;
    const characters = Array.isArray(req.query.characters)
        ? req.query.characters.map(String)
        : req.query.characters
            ? [req.query.characters.toString()]
            : [];
    const result = searchCategories(category?.toString(), characters);
    successResponse(res, "Kategori berhasil ditemukan!", result, null, 200);
};
export const getById = (req, res) => {
    if (!req.params.id) {
        throw new Error("Tidak ditemukan!");
    }
    const category = getCategoryById(req.params.id);
    successResponse(res, "Id berhasil diambil!", category, null, 200);
};
export const create = (req, res) => {
    const { category, characters } = req.body;
    const newCategory = createCategory(category, characters);
    successResponse(res, "Kategori berhasil ditambahkan!", newCategory);
};
export const update = (req, res) => {
    if (!req.params.id) {
        throw new Error("Tidak ditemukan");
    }
    const category = updateCategory(req.params.id, req.body);
    successResponse(res, "Category berhasil di update!", category, null, 201);
};
export const deleted = (req, res) => {
    if (!req.params.id) {
        throw new Error("TIdak ditemukan!");
    }
    const deleted = deteledCategory(req.params.id);
    successResponse(res, "Kategori berhasil dihapus!", deleted[0], null, 200);
};
//# sourceMappingURL=categories.controller.js.map