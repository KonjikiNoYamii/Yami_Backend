import { getPrisma } from "../prisma";
const prisma = getPrisma();
export const getAllCategory = async () => {
    const categories = await prisma.category.findMany({
        where: { deletedAt: null }
    });
    const total = categories.length;
    return { categories, total };
};
export const getCategoryById = async (id) => {
    const numid = parseInt(id);
    return await prisma.category.findUnique({
        where: {
            id: numid
        }
    });
};
export const createCategory = async (name) => {
    const exist = await prisma.category.findFirst({
        where: {
            name,
            deletedAt: null
        }
    });
    if (exist) {
        throw new Error("Nama sudah dipakai");
    }
    return await prisma.category.create({
        data: { name }
    });
};
export const updateCategory = async (id, data) => {
    const numid = parseInt(id);
    return await prisma.category.update({
        where: {
            id: numid,
            deletedAt: null
        },
        data
    });
};
export const deleteCategory = async (id) => {
    const numid = parseInt(id);
    return await prisma.category.update({
        where: {
            id: numid,
            deletedAt: null
        },
        data: {
            deletedAt: new Date()
        }
    });
};
//# sourceMappingURL=category.service.js.map