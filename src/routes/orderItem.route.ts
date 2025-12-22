import { Router } from "express"

import { OrderItemService } from "../services/orderItem.service"
import { OrderItemRepository } from "../repositories/orderItem.repository"
import { OrderItemController } from "../controller/orderItem.controller"
import prismaInstance from "../prisma"

const router = Router()

// dependency injection
const orderItemRepo = new OrderItemRepository(prismaInstance)
const orderItemService = new OrderItemService(orderItemRepo)
const orderItemController = new OrderItemController(orderItemService)

// GET ALL (pagination + search + sort)
router.get("/", orderItemController.getAll)

// GET BY ID
router.get("/:id", orderItemController.getById)

// CREATE
router.post("/", orderItemController.create)

// UPDATE
router.put("/:id", orderItemController.update)

// DELETE (soft delete)
router.delete("/:id", orderItemController.delete)

export default router
