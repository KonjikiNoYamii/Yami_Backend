// import type { Request, Response } from "express";
// import { successResponse, errorResponse } from "../utils/response"; // sesuaikan path
// import { createCharacter, deleteCharacter, getAllCharacters, getCharacterById, searchCharacters, updateCharacter } from "../services/character.service"

// export const getAll = async (_req: Request, res: Response)=> {
//   const result = await getAllCharacters();
//   return successResponse(res, "Characters fetched successfully", result);
// };

// export const getById = async (req: Request, res: Response) => {
//   const id = Number(req.params.id);
//   const char = await getCharacterById(id);

//   if (!char) {
//     return errorResponse(res, "Character not found", 404);
//   }

//   return successResponse(res, "Character fetched successfully", char);
// };

// export const search = async (req: Request, res: Response) => {
//   const keyword = req.query.q?.toString() || "";
//   const results = await searchCharacters(keyword);

//   return successResponse(res, "Search completed", results);
// };

// export const created = async (req: Request, res: Response) => {
//   const newChar = await createCharacter(req.body);
//   return successResponse(res, "Character created successfully", newChar, null, 201);
// };

// export const updated = async (req: Request, res: Response) => {
//   const id = Number(req.params.id);

//   const updated = await updateCharacter(id, req.body);
//   return successResponse(res, "Character updated successfully", updated);
// };

// export const deletedChar = async (req: Request, res: Response) => {
//   if (!req.params.id) {
//     throw new Error("Tidak ditemukanQ")
//   }

//   const deleted = await deleteCharacter(req.params.id);
//   return successResponse(res, "Character deleted successfully", deleted);
// };
