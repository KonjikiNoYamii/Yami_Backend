import type { Request, Response } from "express";
import { successResponse } from "../utils/response";
import { createCharacter, deletedCharacter, getAllCharacters, getCharacterById, searchCharacter, updateCharacter } from "../services/character.service";

export const getAll =  (_req: Request, res: Response) => {
  const { characters, total } = getAllCharacters()

  successResponse(
    res,
    "Character berhasil diambil!",
    {
      jumlah:total,
      data:characters
    }
  )
}

export const search = (req: Request, res: Response) => {
  const { nama, kelangkaan, min_power, max_power } = req.query;

  const result = searchCharacter( nama?.toString(), kelangkaan?.toString(), min_power?.toString(), max_power?.toString() )

  res.json({
    succes: true,
    result: result,
  });
}

export const getById = (req: Request, res: Response) => {
    if (!req.params.id) {
      throw new Error("Parameter tidak ditemukan!")
    }
    const character = getCharacterById(req.params.id)
    
    successResponse(res, "Character berhasil diambil", character, null,200);
  }

export const create = (req: Request, res: Response) => {
  const { name, rarity, power, effect, description, stats } = req.body;

  const newCharacter = createCharacter(
    name,
    rarity,
    Number(power),
    effect,
    description,
    stats
  );

  successResponse(res, "Character ditambahkan!", newCharacter, null, 201);
} 

  export const update = (req: Request, res: Response) => {
  if (!req.params.id) {
    throw new Error("Parameter tidak ditemukan!")
  }
  const character= updateCharacter(req.params.id, req.body)



  successResponse(
    res,
    "Character berhasil di update!",
    character,
    null,
    201
  )
}

export const deleted = (req: Request, res: Response) => {
  if (!req.params.id) {
    throw new Error("Tidak ditemukan!")
  }

   const deleted = deletedCharacter(req.params.id)
  successResponse(
    res,
    "Character berhasil dihapus!",
    deleted[0],
    null,
    200
  )
}

