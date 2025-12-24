import { Router } from "express"

import { OrderItemService } from "../services/orderItem.service"
import { OrderItemRepository } from "../repositories/orderItem.repository"
import { OrderItemController } from "../controller/orderItem.controller"
import prismaInstance from "../prisma"

const router = Router()

const orderItemRepo = new OrderItemRepository(prismaInstance)
const orderItemService = new OrderItemService(orderItemRepo)
const orderItemController = new OrderItemController(orderItemService)

/**
 * @swagger
 * tags:
 *   - name: OrderItems
 *     description: Manajemen item dalam order
 */

/**
 * @swagger
 * /order-items:
 *   get:
 *     summary: Ambil semua order items
 *     tags:
 *       - OrderItems
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 10
 *       - in: query
 *         name: orderId
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: query
 *         name: productId
 *         schema:
 *           type: integer
 *           example: 2
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           example: createdAt
 *       - in: query
 *         name: sortOrder
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *     responses:
 *       200:
 *         description: Order items berhasil diambil
 */
router.get("/", orderItemController.getAll)

/**
 * @swagger
 * /order-items/{id}:
 *   get:
 *     summary: Ambil order item berdasarkan ID
 *     tags:
 *       - OrderItems
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Order item ditemukan
 *       404:
 *         description: Order item tidak ditemukan
 */
router.get("/:id", orderItemController.getById)

/**
 * @swagger
 * /order-items:
 *   post:
 *     summary: Tambah order item
 *     tags:
 *       - OrderItems
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - orderId
 *               - productId
 *               - quantity
 *             properties:
 *               orderId:
 *                 type: integer
 *                 example: 1
 *               productId:
 *                 type: integer
 *                 example: 2
 *               quantity:
 *                 type: integer
 *                 example: 3
 *     responses:
 *       201:
 *         description: Order item berhasil dibuat
 */
router.post("/", orderItemController.create)

/**
 * @swagger
 * /order-items/{id}:
 *   put:
 *     summary: Update order item
 *     tags:
 *       - OrderItems
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quantity:
 *                 type: integer
 *                 example: 5
 *     responses:
 *       200:
 *         description: Order item berhasil diupdate
 *       404:
 *         description: Order item tidak ditemukan
 */
router.put("/:id", orderItemController.update)

/**
 * @swagger
 * /order-items/{id}:
 *   delete:
 *     summary: Hapus order item (soft delete)
 *     tags:
 *       - OrderItems
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Order item berhasil dihapus
 *       404:
 *         description: Order item tidak ditemukan
 */
router.delete("/:id", orderItemController.delete)

export default router
