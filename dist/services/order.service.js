import { getPrisma } from "../prisma";
const prisma = getPrisma();
export const checkout = async (data) => {
    //hitung harga total
    let total = 0;
    const productIds = data.orderItem.map(i => i.productId);
    for (const id of productIds) {
        const price = await prisma.product.findUnique({
            where: { id },
            select: { price: true }
        });
        total += Number(price);
    }
    //database transaction 
    try {
        const result = await prisma.$transaction(async (tx) => {
            const newOrder = await prisma.order.create({
                data: {
                    userId: data.userId,
                    total
                }
            });
            for (const items of data.orderItem) {
                await tx.orderItems.create({
                    data: {
                        orderId: newOrder.id,
                        productId: items.productId,
                        quantity: items.quantity
                    }
                });
            }
            return newOrder;
        });
        return result;
    }
    catch (error) {
        throw new Error("gagal membuat order!!");
    }
};
export const getAllOrder = async () => {
    const orders = await prisma.order.findMany({
        where: { deletedAt: null },
        include: {
            user: true,
            orderItems: {
                include: { product: true }
            }
        }
    });
    return { orders, total: orders.length };
};
export const getOrderById = async (id) => {
    return prisma.order.findUnique({
        where: { id: parseInt(id) },
        include: {
            user: true,
            orderItems: {
                include: { product: true }
            }
        }
    });
};
export const createOrder = async (userId, total) => {
    return prisma.order.create({
        data: { userId, total }
    });
};
export const updateOrder = async (id, data) => {
    return prisma.order.update({
        where: { id: parseInt(id), deletedAt: null },
        data
    });
};
export const deleteOrder = async (id) => {
    return prisma.order.update({
        where: { id: parseInt(id), deletedAt: null },
        data: { deletedAt: new Date() }
    });
};
//# sourceMappingURL=order.service.js.map