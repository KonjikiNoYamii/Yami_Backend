import { getPrisma } from "../prisma";
const prisma = getPrisma();
export const getAllProducts = async () => {
    const products = await prisma.product.findMany({
        where: {
            deletedAt: null
        },
        include: {
            category: true
        }
    });
    const total = products.length;
    return { products, total };
};
export const getProductById = async (id) => {
    const numid = parseInt(id);
    return await prisma.product.findUnique({
        where: {
            id: numid,
            deletedAt: null
        }
    });
};
export const searchProducts = async (name, min_price, max_price) => {
    return await prisma.product.findMany({
        where: {
            ...(name && {
                name: {
                    contains: name,
                    mode: 'insensitive'
                }
            }),
            price: {
                ...(min_price && { gte: min_price }),
                ...(max_price && { lte: max_price })
            },
            deletedAt: null
        },
        include: { category: true }
    });
};
export const createProduct = async (data) => {
    return await prisma.product.create({
        data: {
            name: data.name,
            description: data.description ?? null,
            price: data.price,
            stock: data.stock,
            categoryId: data.categoryId
        }
    });
};
export const updateProduct = async (id, data) => {
    const numid = parseInt(id);
    return await prisma.product.update({
        where: { id: numid, deletedAt: null },
        data
    });
};
export const deleteProduct = async (id) => {
    const numid = parseInt(id);
    return await prisma.product.update({
        where: {
            id: numid, deletedAt: null
        },
        data: {
            deletedAt: new Date()
        }
    });
};
//# sourceMappingURL=product.service.js.map