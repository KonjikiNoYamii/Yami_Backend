import { getPrisma } from "../prisma"

const prisma = getPrisma()

export interface CreateOrder {
  userId: number
  orderItem: OrderItemInput[]
}

export interface OrderItemInput {
  productId: number
  quantity: number
}

export const checkout = async (data: CreateOrder) => {
  return await prisma.$transaction(async (tx) => {

    let total = 0

    // 1️⃣ Ambil semua product SEKALIGUS (hindari N+1)
    const products = await tx.product.findMany({
      where: {
        deletedAt:null,
        id: {
          in: data.orderItem.map(i => i.productId)

        }
      },
      select: {
        id: true,
        price: true,
        stock: true
      },
    })

    // 2️⃣ Hitung total + validasi
    const orderItemsData = []

    for (const item of data.orderItem) {
      const product = products.find(p => p.id === item.productId)

      if (!product) {
        throw new Error(`Product ${item.productId} tidak ditemukan`)
      }

      if (product.stock < item.quantity) {
        throw new Error(`Stock produk ${item.productId} tidak cukup`)
      }

      const price = Number(product.price)
      total += price * item.quantity

      orderItemsData.push({
        productId: item.productId,
        quantity: item.quantity,
        priceAtTime: product.price
      })

      // optional tapi recommended
      await tx.product.update({
        where: { id: item.productId },
        data: {
          stock: { decrement: item.quantity }
        }
      })
    }

    // 3️⃣ Buat order + pivot SEKALIGUS (nested write)
    const newOrder = await tx.order.create({
      data: {
        userId: data.userId,
        total,
        orderItems: {
          create: orderItemsData
        }
      },
      include: {
        user:true,
        orderItems: {
          include: {
            product: true,
            order:true
          }
        }
      }
    })

    return newOrder
  })
}

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

export const createOrder = async (userId: number, total:number) => {
    return prisma.order.create({
        data: { userId, total }
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
