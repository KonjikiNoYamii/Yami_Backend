import { getPrisma } from "../prisma";
const prisma = getPrisma();
export const getAllElements = async () => {
    return prisma.element.findMany();
};
export const getElementById = async (id) => {
    return prisma.element.findUnique({
        where: { id },
    });
};
export const createElement = async (data) => {
    return prisma.element.create({
        data,
    });
};
export const updateElement = async (id, data) => {
    return prisma.element.update({
        where: { id },
        data,
    });
};
export const deleteElement = async (id) => {
    return prisma.element.delete({
        where: { id },
    });
};
export const searchElements = async (keyword) => {
    return prisma.element.findMany({
        where: {
            name: {
                contains: keyword,
                mode: "insensitive",
            },
        },
    });
};
//# sourceMappingURL=element.service.js.map