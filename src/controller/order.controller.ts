import type { Request, Response } from "express"
import { successResponse } from "../utils/response"
import {
    createOrder,
    deleteOrder,
    getAllOrder,
    getOrderById,
    updateOrder
} from "../services/order.service"

export const getAll = async (_req: Request, res: Response) => {
    const result = await getAllOrder()
    successResponse(res, "Semua order berhasil diambil", result)
}

export const getById = async (req: Request, res: Response) => {
    if (!req.params.id) {
        throw new Error("Parameter tidak ditemukan!")
    }
    const order = await getOrderById(req.params.id)
    successResponse(res, "Order ditemukan!", order)
}

export const create = async (req: Request, res: Response) => {
    const { userId } = req.body
    const order = await createOrder(userId)

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
