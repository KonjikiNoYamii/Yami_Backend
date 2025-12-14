import { getPrisma } from "../prisma";
const prisma = getPrisma();
export const getAllRarities = async () => {
    return prisma.rarity.findMany();
};
export const getRarityById = async (id) => {
    return prisma.rarity.findUnique({
        where: { id },
    });
};
export const createRarity = async (data) => {
    return prisma.rarity.create({
        data,
    });
};
export const updateRarity = async (id, data) => {
    return prisma.rarity.update({
        where: { id },
        data,
    });
};
export const deleteRarity = async (id) => {
    return prisma.rarity.delete({
        where: { id },
    });
};
export const searchRarity = async (keyword) => {
    return prisma.rarity.findMany({
        where: {
            name: {
                contains: keyword,
                mode: "insensitive",
            },
        },
    });
};
//# sourceMappingURL=rarity.service.js.map