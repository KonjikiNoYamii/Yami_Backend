// import type { Request, Response } from "express";
// import { successResponse, errorResponse } from "../utils/response";
// import { createRarity, deleteRarity, getAllRarities, getRarityById, searchRarity, updateRarity } from "../services/rarity.service";

// export const getAll = async (_req: Request, res: Response) => {
//   const rarities = await getAllRarities();
//   return successResponse(res, "Rarities fetched successfully", rarities);
// };

// export const getById = async (req: Request, res: Response) => {
//   const id = Number(req.params.id);
//   const rarity = await getRarityById(id);

//   if (!rarity) {
//     return errorResponse(res, "Rarity not found", 404);
//   }

//   return successResponse(res, "Rarity fetched successfully", rarity);
// };

// export const created = async (req: Request, res: Response) => {
//   const rarity = await createRarity(req.body);
//   return successResponse(res, "Rarity created successfully", rarity, null, 201);
// };

// export const updated = async (req: Request, res: Response) => {
//   const id = Number(req.params.id);
//   const updated = await updateRarity(id, req.body);

//   return successResponse(res, "Rarity updated successfully", updated);
// };

// export const deleted = async (req: Request, res: Response) => {
//   const id = Number(req.params.id);
//   const deleted = await deleteRarity(id);

//   return successResponse(res, "Rarity deleted successfully", deleted);
// };

// export const search = async (req: Request, res: Response) => {
//   const keyword = req.query.q?.toString() || "";
//   const results = await searchRarity(keyword);

//   return successResponse(res, "Search completed", results);
// };
