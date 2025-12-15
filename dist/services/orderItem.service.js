import { getPrisma } from "../prisma";
const prisma = getPrisma();
export const getAllOrderItem = async () => {
    const items = await prisma.orderItems.findMany({
        where: { deletedAt: null },
        include: {
            order: true,
            product: true
        }
    });
    return { items, total: items.length };
};
export const getOrderItemById = async (id) => {
    return prisma.orderItems.findUnique({
        where: { id: parseInt(id) },
        include: {
            order: true,
            product: true
        }
    });
};
export const createOrderItem = async (orderId, productId, quantity) => {
    return prisma.orderItems.create({
        data: {
            orderId,
            productId,
            quantity
        }
    });
};
export const updateOrderItem = async (id, data) => {
    return prisma.orderItems.update({
        where: { id: parseInt(id), deletedAt: null },
        data: {
            ...data,
            quantity: data.quantity ? data.quantity : undefined
        }
    });
};
export const deleteOrderItem = async (id) => {
    return prisma.orderItems.update({
        where: { id: parseInt(id), deletedAt: null },
        data: { deletedAt: new Date() }
    });
};
//# sourceMappingURL=orderItem.service.js.map