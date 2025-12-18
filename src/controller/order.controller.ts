import type { Request, Response } from "express"
import { successResponse } from "../utils/response"
import {
    createOrder,
    deleteOrder,
    getAllOrders,
    getOrderById,
    updateOrder,
    type CreateOrder
} from "../services/order.service"

import { checkout as checkoutOrder } from "../services/order.service"

export const checkout = async (req: Request, res: Response) => {
  const data: CreateOrder = req.body
  if (!req.user?.id) {
    throw new Error("Id tidak ditemukan!")
  }
  const result = await checkoutOrder(data, req.user?.id)

  return successResponse(
    res,
    "Order berhasil dibuat!!",
    result,
    null,
    201
  )
}

export const getAll = async (req: Request, res: Response) => {
  const page = Number(req.query.page) || 1
  const limit = Number(req.query.limit) || 10
  const sortBy = req.query.sortBy as string
  const sortOrder = req.query.sortOrder as 'asc' | 'desc'

  const search:any = {
    userId: req.query.userId ? Number(req.query.userId) : undefined,
    minTotal: req.query.minTotal
      ? Number(req.query.minTotal)
      : undefined,
    maxTotal: req.query.maxTotal
      ? Number(req.query.maxTotal)
      : undefined,
  }

  const result = await getAllOrders({
    page,
    limit,
    search,
    sortBy,
    sortOrder,
  })

  successResponse(res, 'Order berhasil diambil!', result.orders, {
    page: result.currentPage,
    limit,
    total: result.total,
    totalPages: result.totalPages,
  })
}


export const getById = async (req: Request, res: Response) => {
    if (!req.params.id) {
        throw new Error("Parameter tidak ditemukan!")
    }
    const order = await getOrderById(req.params.id)
    successResponse(res, "Order ditemukan!", order)
}

export const create = async (req: Request, res: Response) => {
    const { userId, total } = req.body
    const order = await createOrder(userId, total)

    successResponse(res, "Order berhasil dibuat!", order, null, 201)
}

export const update = async (req: Request, res: Response) => {
    if (!req.params.id) {
        throw new Error("Parameter tidak ditemukan!")
    }
    const updated = await updateOrder(req.params.id, req.body)
    successResponse(res, "Order berhasil diperbarui!", updated)
}

export const deletedOrder = async (req: Request, res: Response) => {
    if (!req.params.id) {
        throw new Error("Parameter tidak ditemukan!")
    }
    const removed = await deleteOrder(req.params.id)
    successResponse(res, "Order berhasil dihapus!", removed)
}
