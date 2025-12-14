import { successResponse, errorResponse } from "../utils/response";
import { createRarity, deleteRarity, getAllRarities, getRarityById, searchRarity, updateRarity } from "../services/rarity.service";
export const getAll = async (_req, res) => {
    const rarities = await getAllRarities();
    return successResponse(res, "Rarities fetched successfully", rarities);
};
export const getById = async (req, res) => {
    const id = Number(req.params.id);
    const rarity = await getRarityById(id);
    if (!rarity) {
        return errorResponse(res, "Rarity not found", 404);
    }
    return successResponse(res, "Rarity fetched successfully", rarity);
};
export const created = async (req, res) => {
    const rarity = await createRarity(req.body);
    return successResponse(res, "Rarity created successfully", rarity, null, 201);
};
export const updated = async (req, res) => {
    const id = Number(req.params.id);
    const updated = await updateRarity(id, req.body);
    return successResponse(res, "Rarity updated successfully", updated);
};
export const deleted = async (req, res) => {
    const id = Number(req.params.id);
    const deleted = await deleteRarity(id);
    return successResponse(res, "Rarity deleted successfully", deleted);
};
export const search = async (req, res) => {
    const keyword = req.query.q?.toString() || "";
    const results = await searchRarity(keyword);
    return successResponse(res, "Search completed", results);
};
//# sourceMappingURL=rarity.controller.js.map