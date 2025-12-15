import { successResponse, errorResponse } from "../utils/response"; // sesuaikan path
import { createCharacter, deleteCharacter, getAllCharacters, getCharacterById, searchCharacters, updateCharacter } from "../services/character.service";
export const getAll = async (_req, res) => {
    const result = await getAllCharacters();
    return successResponse(res, "Characters fetched successfully", result);
};
export const getById = async (req, res) => {
    const id = Number(req.params.id);
    const char = await getCharacterById(id);
    if (!char) {
        return errorResponse(res, "Character not found", 404);
    }
    return successResponse(res, "Character fetched successfully", char);
};
export const search = async (req, res) => {
    const keyword = req.query.q?.toString() || "";
    const results = await searchCharacters(keyword);
    return successResponse(res, "Search completed", results);
};
export const created = async (req, res) => {
    const newChar = await createCharacter(req.body);
    return successResponse(res, "Character created successfully", newChar, null, 201);
};
export const updated = async (req, res) => {
    const id = Number(req.params.id);
    const updated = await updateCharacter(id, req.body);
    return successResponse(res, "Character updated successfully", updated);
};
export const deletedChar = async (req, res) => {
    if (!req.params.id) {
        throw new Error("Tidak ditemukanQ");
    }
    const deleted = await deleteCharacter(req.params.id);
    return successResponse(res, "Character deleted successfully", deleted);
};
//# sourceMappingURL=character.controller.js.map