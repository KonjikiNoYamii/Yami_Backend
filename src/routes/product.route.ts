import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware";
import { upload } from "../middleware/upload.middleware";
import prismaInstance from "../prisma";
import { ProductService } from "../services/product.service";
import { ProductController } from "../controller/product.controller";
import { ProductRepository } from "../repositories/product.repository";

const router = Router();

const repo = new ProductRepository(prismaInstance);
const service = new ProductService(repo);
const controller = new ProductController(service);

/**
 * @swagger
 * tags:
 *   - name: Product
 *     description: Manajemen data produk
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Ambil semua produk
 *     tags:
 *       - Product
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
 *         name: sortBy
 *         schema:
 *           type: string
 *           example: price
 *       - in: query
 *         name: sortOrder
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *           example: desc
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *           example: Laptop
 *     responses:
 *       200:
 *         description: Produk berhasil diambil
 */
router.get("/", controller.getAll);

/**
 * @swagger
 * /products/stats:
 *   get:
 *     summary: Statistik produk
 *     tags:
 *       - Product
 *     responses:
 *       200:
 *         description: Statistik produk berhasil diambil
 */
router.get("/stats", controller.getStats);

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Ambil produk berdasarkan ID
 *     tags:
 *       - Product
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Produk ditemukan
 *       404:
 *         description: Produk tidak ditemukan
 */
router.get("/:id", controller.getById);

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Tambah produk baru
 *     tags:
 *       - Product
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - price
 *               - categoryId
 *             properties:
 *               name:
 *                 type: string
 *                 example: Laptop Gaming
 *               description:
 *                 type: string
 *                 example: Laptop performa tinggi
 *               price:
 *                 type: number
 *                 example: 15000000
 *               stock:
 *                 type: integer
 *                 example: 10
 *               categoryId:
 *                 type: integer
 *                 example: 1
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Produk berhasil dibuat
 */
router.post(
  "/",
  authenticate,
  upload.single("image"),
  controller.create
);

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Update produk
 *     tags:
 *       - Product
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               stock:
 *                 type: integer
 *               categoryId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Produk berhasil diupdate
 */
router.put("/:id",  authenticate,
  upload.single("image"), controller.update);

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Hapus produk (soft delete)
 *     tags:
 *       - Product
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Produk berhasil dihapus
 */
router.delete("/:id", controller.deletedProduct);

export default router;
