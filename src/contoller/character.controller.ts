import type { Request, Response } from "express";
import { successResponse } from "../utils/response";
import { createCharacter, deletedCharacter, getAllCharacters, getCharacterById, searchCharacter, updateCharacter } from "../services/character.service";

export const getAll = async(_req: Request, res: Response) => {
  const { characters, total } = await getAllCharacters()

  successResponse(
    res,
    "Character berhasil diambil!",
    {
      jumlah:total,
      data:characters
    }
  )
}

export const search = async (req: Request, res: Response) => {
  const { nama, kelangkaan, min_power, max_power } = req.query;

  const result = await searchCharacter( nama?.toString(), kelangkaan?.toString(), min_power?.toString(), max_power?.toString() )

  res.json({
    succes: true,
    result: result,
  });
}

export const getById = async (req: Request, res: Response) => {
    if (!req.params.id) {
      throw new Error("Parameter tidak ditemukan!")
    }
    const character = await getCharacterById(req.params.id)
    
    successResponse(res, "Character berhasil diambil", character, null,200);
  }

export const create = async (req: Request, res: Response) => {
  const { name, rarity, power, effect, description, stats } = req.body;
  const data = {
    name:name.toString(), rarity: rarity.toString(),power:Number(power), effect:effect.toString(), description:description.toString(), stats:stats
  }

  const newCharacter = await createCharacter(
    data
  );

  successResponse(res, "Character ditambahkan!", newCharacter, null, 201);
} 

  export const update = async (req: Request, res: Response) => {
  if (!req.params.id) {
    throw new Error("Parameter tidak ditemukan!")
  }
  const character= await updateCharacter(req.params.id, req.body)



  successResponse(
    res,
    "Character berhasil di update!",
    character,
    null,
    201
  )
}

export const deletedChar = async (req: Request, res: Response) => {
  if (!req.params.id) {
    throw new Error("Tidak ditemukan!")
  }

   const deleted = await deletedCharacter(req.params.id)
  successResponse(
    res,
    "Character berhasil dihapus!",
    deleted,
    null,
    200
  )
}

