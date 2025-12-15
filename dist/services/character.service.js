import { getPrisma } from "../prisma";
const prisma = getPrisma();
export const getAllCharacters = async () => {
    const chars = await prisma.character.findMany({
        include: {
            rarity: true,
            element: true,
        },
        where: {
            deletedAt: null
        }
    });
    return { chars, total: chars.length };
};
export const getCharacterById = async (id) => {
    return prisma.character.findUnique({
        where: { id, deletedAt: null },
        include: {
            rarity: true,
            element: true,
        },
    });
};
export const searchCharacters = async (keyword) => {
    return prisma.character.findMany({
        where: {
            deletedAt: null,
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
export const createCharacter = async (data) => {
    return prisma.character.create({ data });
};
export const updateCharacter = async (id, data) => {
    return prisma.character.update({
        where: { id,
            deletedAt: null
        },
        data,
    });
};
export const deleteCharacter = async (id) => {
    const numId = parseInt(id);
    return await prisma.character.update({
        where: {
            id: numId,
            deletedAt: null
        },
        data: {
            deletedAt: new Date()
        }
    });
};
//# sourceMappingURL=character.service.js.map