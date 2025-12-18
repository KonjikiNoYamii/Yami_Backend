// controllers/orderitem.controller.ts
import type { Request, Response } from "express"
import { successResponse } from "../utils/response"
import {
    createOrderItem,
    deleteOrderItem,
    getAllOrderItems,
    getOrderItemById,
    updateOrderItem
} from "../services/orderItem.service"

export const getAll = async (req: Request, res: Response) => {
  const page = Number(req.query.page) || 1
  const limit = Number(req.query.limit) || 10
  const sortBy = req.query.sortBy as string
  const sortOrder = req.query.sortOrder as 'asc' | 'desc'

  const search:any = {
    orderId: req.query.orderId
      ? Number(req.query.orderId)
      : undefined,
    productId: req.query.productId
      ? Number(req.query.productId)
      : undefined,
  }

  const result = await getAllOrderItems({
    page,
    limit,
    search,
    sortBy,
    sortOrder,
  })

  successResponse(res, 'Order items berhasil diambil!', result.orderItems, {
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
    const item = await getOrderItemById(req.params.id)
    successResponse(res, "Order item ditemukan!", item)
}

export const create = async (req: Request, res: Response) => {
    const { orderId, productId, quantity } = req.body
    const newItem = await createOrderItem(orderId, productId, quantity)

    successResponse(res, "Order item berhasil dibuat!", newItem, null, 201)
}

export const update = async (req: Request, res: Response) => {
    if (!req.params.id) {
        throw new Error("Parameter tidak ditemukan!")
    }
    const updated = await updateOrderItem(req.params.id, req.body)
    successResponse(res, "Order item berhasil diperbarui!", updated)
}

export const deletedOrderItem = async (req: Request, res: Response) => {
    if (!req.params.id) {
        throw new Error("Parameter tidak ditemukan!")
    }
    const removed = await deleteOrderItem(req.params.id)
    successResponse(res, "Order item berhasil dihapus!", removed)
}
