import type { Request, Response } from "express"
import { successResponse } from "../utils/response"
import type { IOrderItemService } from "../services/orderItem.service"

export interface IOrderItemController {
  getAll(req: Request, res: Response): Promise<void>
  getById(req: Request, res: Response): Promise<void>
  create(req: Request, res: Response): Promise<void>
  update(req: Request, res: Response): Promise<void>
  delete(req: Request, res: Response): Promise<void>
}

export class OrderItemController implements IOrderItemController {
  constructor(private orderItemService: IOrderItemService) {}

  // ✅ GET ALL
getAll = async (req: Request, res: Response) => {
  const page = Number(req.query.page) || 1
  const limit = Number(req.query.limit) || 10
  const sortBy = req.query.sortBy as string | undefined
  const sortOrder = req.query.sortOrder as "asc" | "desc" | undefined

  let search: {
    orderId?: number
    productId?: number
  } | undefined

  if (req.query.orderId || req.query.productId) {
    search = {}

    if (req.query.orderId) {
      search.orderId = Number(req.query.orderId)
    }

    if (req.query.productId) {
      search.productId = Number(req.query.productId)
    }
  }

  const result = await this.orderItemService.getAll({
    page,
    limit,
    search,
    sortBy,
    sortOrder,
  })

  successResponse(res, "Order items berhasil diambil!", result.orderItems, {
    page: result.currentPage,
    limit,
    total: result.total,
    totalPages: result.totalPages,
  })
}


  // ✅ GET BY ID
  getById = async (req: Request, res: Response) => {
    if (!req.params.id) {
      throw new Error("ID tidak ditemukan!")
    }

    const item = await this.orderItemService.getById(req.params.id)

    successResponse(res, "Order item ditemukan!", item)
  }

  // ✅ CREATE
  create = async (req: Request, res: Response) => {
    const { orderId, productId, quantity } = req.body

    const newItem = await this.orderItemService.create({
      orderId: Number(orderId),
      productId: Number(productId),
      quantity: Number(quantity),
    })

    successResponse(res, "Order item berhasil dibuat!", newItem, null, 201)
  }

  // ✅ UPDATE
  update = async (req: Request, res: Response) => {
    if (!req.params.id) {
      throw new Error("ID tidak ditemukan!")
    }

    const updated = await this.orderItemService.update(req.params.id,req.body)

    successResponse(res, "Order item berhasil diperbarui!", updated)
  }

  // ✅ DELETE (SOFT DELETE)
  delete = async (req: Request, res: Response) => {
    if (!req.params.id) {
      throw new Error("ID tidak ditemukan!")
    }

    const removed = await this.orderItemService.delete(req.params.id)

    successResponse(res, "Order item berhasil dihapus!", removed)
  }
}
