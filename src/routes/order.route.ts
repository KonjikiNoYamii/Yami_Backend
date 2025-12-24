import { Router } from "express";
import { OrderService } from "../services/order.service";
import { OrderRepository } from "../repositories/order.repository";
import prismaInstance from "../prisma";
import { OrderController } from "../controller/order.controller";
import { authenticate } from "../middleware/auth.middleware";
import { asyncHandler } from "../utils/async.hander";

const router = Router();

const orderRepository = new OrderRepository(prismaInstance);
const orderService = new OrderService(prismaInstance, orderRepository);
const orderController = new OrderController(orderService);

/**
 * @swagger
 * tags:
 *   - name: Order
 *     description: Manajemen pesanan (Order)
 */

/**
 * @swagger
 * /orders/checkout:
 *   post:
 *     summary: Checkout order (User)
 *     tags:
 *       - Order
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - orderItem
 *             properties:
 *               orderItem:
 *                 type: array
 *                 items:
 *                   type: object
 *                   required:
 *                     - productId
 *                     - quantity
 *                   properties:
 *                     productId:
 *                       type: integer
 *                       example: 1
 *                     quantity:
 *                       type: integer
 *                       example: 2
 *     responses:
 *       201:
 *         description: Order berhasil dibuat
 *       400:
 *         description: Stock tidak cukup atau product tidak ditemukan
 *       401:
 *         description: Unauthorized
 */
router.post(
  "/checkout",
  authenticate,
  asyncHandler(orderController.checkout)
);

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Ambil semua order (Admin / User)
 *     tags:
 *       - Order
 *     security:
 *       - bearerAuth: []
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
 *         name: userId
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: query
 *         name: minTotal
 *         schema:
 *           type: number
 *           example: 10000
 *       - in: query
 *         name: maxTotal
 *         schema:
 *           type: number
 *           example: 500000
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
 *         description: List order berhasil diambil
 *       401:
 *         description: Unauthorized
 */
router.get(
  "/",
  authenticate,
  asyncHandler(orderController.getAll)
);/**
 * @swagger
 * /orders/stats:
 *   get:
 *     summary: Statistik order
 *     tags:
 *       - Order
 *     responses:
 *       200:
 *         description: Statistik order berhasil diambil
 */

router.get(
  "/stats",
  orderController.getStats
)

/**
 * @swagger
 * /orders/{id}:
 *   get:
 *     summary: Ambil detail order berdasarkan ID
 *     tags:
 *       - Order
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Detail order berhasil diambil
 *       404:
 *         description: Order tidak ditemukan
 *       401:
 *         description: Unauthorized
 */
router.get(
  "/:id",
  authenticate,
  asyncHandler(orderController.getById)
);

/**
 * @swagger
 * /orders/{id}:
 *   delete:
 *     summary: Hapus order (soft delete)
 *     tags:
 *       - Order
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Order berhasil dihapus
 *       404:
 *         description: Order tidak ditemukan
 *       401:
 *         description: Unauthorized
 */
router.delete(
  "/:id",
  authenticate,
  asyncHandler(orderController.deleteOrder)
);

export default router;
