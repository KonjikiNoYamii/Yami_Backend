import type { Character } from "../generated/client";
import { getPrisma } from "../prisma";

const prisma = getPrisma()

export const getAllCharacters = async (): Promise<{ chars: Character[]; total: number }> => {
  const chars = await prisma.character.findMany({
    include: {
      rarity: true,
      element: true,
    },
  });

  return { chars, total: chars.length };
};

export const getCharacterById = async (id: number) => {
  return prisma.character.findUnique({
    where: { id },
    include: {
      rarity: true,
      element: true,
    },
  });
};

export const searchCharacters = async (keyword: string) => {
  return prisma.character.findMany({
    where: {
      name: {
        contains: keyword,
        mode: "insensitive",
      },
    },
    include: {
      rarity: true,
      element: true,
    },
  });
};

export const createCharacter = async (data: any) => {
  return prisma.character.create({ data });
};

export const updateCharacter = async (id: number, data: any) => {
  return prisma.character.update({
    where: { id },
    data,
  });
};

export const deleteCharacter = async (id: number) => {
  return prisma.character.delete({
    where: { id },
  });
};
