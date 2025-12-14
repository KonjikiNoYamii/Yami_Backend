import { successResponse, errorResponse } from "../utils/response";
import { createElement, deleteElement, getAllElements, getElementById, searchElements, updateElement } from "../services/element.service";
export const getAll = async (_req, res) => {
    const elements = await getAllElements();
    return successResponse(res, "Elements fetched successfully", elements);
};
export const getById = async (req, res) => {
    const id = Number(req.params.id);
    const element = await getElementById(id);
    if (!element) {
        return errorResponse(res, "Element not found", 404);
    }
    return successResponse(res, "Element fetched successfully", element);
};
export const created = async (req, res) => {
    const newElement = await createElement(req.body);
    return successResponse(res, "Element created successfully", newElement, null, 201);
};
export const updated = async (req, res) => {
    const id = Number(req.params.id);
    const updated = await updateElement(id, req.body);
    return successResponse(res, "Element updated successfully", updated);
};
export const deleted = async (req, res) => {
    const id = Number(req.params.id);
    const deleted = await deleteElement(id);
    return successResponse(res, "Element deleted successfully", deleted);
};
export const search = async (req, res) => {
    const keyword = req.query.q?.toString() || "";
    const results = await searchElements(keyword);
    return successResponse(res, "Search completed", results);
};
//# sourceMappingURL=element.controller.js.map