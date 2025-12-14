import { getPrisma } from "../prisma"
const prisma = getPrisma()

export const getAllOrder = async () => {
    const orders = await prisma.order.findMany({
        where: { deletedAt: null },
        include: {
            user: true,
            orderItems: {
                include: { product: true }
            }
        }
    })

    return { orders, total: orders.length }
}

export const getOrderById = async (id: string) => {
    return prisma.order.findUnique({
        where: { id: parseInt(id) },
        include: {
            user: true,
            orderItems: {
                include: { product: true }
            }
        }
    })
}

export const createOrder = async (userId: number) => {
    return prisma.order.create({
        data: { userId }
    })
}

export const updateOrder = async (id: string, data: any) => {
    return prisma.order.update({
        where: { id: parseInt(id), deletedAt: null },
        data
    })
}

export const deleteOrder = async (id: string) => {
    return prisma.order.update({
        where: { id: parseInt(id), deletedAt: null },
        data: { deletedAt: new Date() }
    })
}
