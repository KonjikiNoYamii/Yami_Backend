// controllers/orderitem.controller.ts
import type { Request, Response } from "express"
import { successResponse } from "../utils/response"
import {
    createOrderItem,
    deleteOrderItem,
    getAllOrderItem,
    getOrderItemById,
    updateOrderItem
} from "../services/orderItem.service"

export const getAll = async (_req: Request, res: Response) => {
    const data = await getAllOrderItem()
    successResponse(res, "Semua order item berhasil diambil", data)
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
