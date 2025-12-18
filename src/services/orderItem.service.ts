import type { OrderItems } from "../generated/client"
import { getPrisma } from "../prisma"

const prisma = getPrisma()

interface FindAllOrderItemsParams {
  page: number
  limit: number
  search?: {
    orderId?: number
    productId?: number
  }
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

interface OrderItemsListResponse {
  orderItems: OrderItems[]
  total: number
  totalPages: number
  currentPage: number
}


export const getAllOrderItems = async (
  params: FindAllOrderItemsParams
): Promise<OrderItemsListResponse> => {
  const { page, limit, search, sortBy, sortOrder } = params

  const skip = (page - 1) * limit

  const whereClause: any = {
    deletedAt: null,
  }

  if (search?.orderId) {
    whereClause.orderId = search.orderId
  }

  if (search?.productId) {
    whereClause.productId = search.productId
  }

  const orderItems = await prisma.orderItems.findMany({
    skip,
    take: limit,
    where: whereClause,
    orderBy: sortBy
      ? { [sortBy]: sortOrder ?? 'desc' }
      : { createdAt: 'desc' },
    include: {
      order: true,
      product: true,
    },
  })

  const total = await prisma.orderItems.count({
    where: whereClause,
  })

  return {
    orderItems,
    total,
    totalPages: Math.ceil(total / limit),
    currentPage: page,
  }
}


export const getOrderItemById = async (id: string) => {
    return prisma.orderItems.findUnique({
        where: { id: parseInt(id) },
        include: {
            order: true,
            product: true
        }
    })
}

export const createOrderItem = async (
    orderId: number,
    productId: number,
    quantity:  number,
) => {
    return prisma.orderItems.create({
        data: {
            orderId,
            productId,
            quantity,
        }
    })
}

export const updateOrderItem = async (id: string, data: any) => {
    return prisma.orderItems.update({
        where: { id: parseInt(id), deletedAt: null },
        data: {
            ...data,
            quantity: data.quantity ? data.quantity : undefined
        }
    })
}

export const deleteOrderItem = async (id: string) => {
    return prisma.orderItems.update({
        where: { id: parseInt(id), deletedAt: null },
        data: { deletedAt: new Date() }
    })
}

