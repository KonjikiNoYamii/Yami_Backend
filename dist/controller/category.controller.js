import { createCategory, deleteCategory, getAllCategory, getCategoryById, updateCategory } from '../services/category.service';
import { successResponse } from '../utils/response';
export const getAll = async (_req, res) => {
    const { categories, total } = await getAllCategory();
    successResponse(res, "Kategori telah diambil", {
        jumlah: total,
        data: categories
    });
};
export const getById = async (req, res) => {
    if (!req.params.id) {
        throw new Error("Paramater tidak ada");
    }
    const category = await getCategoryById(req.params.id);
    successResponse(res, "Kategori ditemukan!", category, null, 200);
};
export const create = async (req, res) => {
    const category = await createCategory(req.body.name);
    successResponse(res, "Category berhasil dibuat", category, null, 201);
};
export const update = async (req, res) => {
    if (!req.params.id) {
        throw new Error("Paramater tidak ditemukan!");
    }
    const updated = await updateCategory(req.params.id, req.body);
    successResponse(res, "Category berhasil diuba!h", updated, null, 201);
};
export const deletedCategory = async (req, res) => {
    if (!req.params.id) {
        throw new Error("Parameter tidak ditemukan");
    }
    const remove = await deleteCategory(req.params.id);
    successResponse(res, "kategori telah dihapus!", remove, null, 200);
};
//# sourceMappingURL=category.controller.js.map