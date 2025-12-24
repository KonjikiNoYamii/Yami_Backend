import { Router } from "express";
import prismaInstance from "../prisma";

import { CategoryRepository } from "../repositories/category.repository";
import { CategoryService } from "../services/category.service";
import { CategoryController } from "../controller/category.controller";

const router = Router();

const repo = new CategoryRepository(prismaInstance);
const service = new CategoryService(repo);
const controller = new CategoryController(service);

/**
 * @swagger
 * tags:
 *   - name: Category
 *     description: Manajemen data kategori
 */

/**
 * @swagger
 * /category:
 *   get:
 *     summary: Ambil semua kategori
 *     tags:
 *       - Category
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
 *           example: name
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
 *           example: Novel
 *     responses:
 *       200:
 *         description: Category berhasil diambil
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Category berhasil diambil!
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                 meta:
 *                   type: object
 *                   properties:
 *                     page:
 *                       type: integer
 *                     limit:
 *                       type: integer
 *                     total:
 *                       type: integer
 *                     totalPages:
 *                       type: integer
 */
router.get("/", controller.getAll);

/**
 * @swagger
 * /category/{id}:
 *   get:
 *     summary: Ambil kategori berdasarkan ID
 *     tags:
 *       - Category
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Kategori ditemukan
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *       404:
 *         description: Kategori tidak ditemukan
 */
router.get("/:id", controller.getById);

/**
 * @swagger
 * /category:
 *   post:
 *     summary: Membuat kategori baru
 *     tags:
 *       - Category
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: Komik
 *     responses:
 *       201:
 *         description: Category berhasil dibuat
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 */
router.post("/", controller.create);

/**
 * @swagger
 * /category/{id}:
 *   put:
 *     summary: Update kategori
 *     tags:
 *       - Category
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
 *                 example: Majalah
 *     responses:
 *       201:
 *         description: Category berhasil diupdate
 */
router.put("/:id", controller.update);

/**
 * @swagger
 * /category/{id}:
 *   delete:
 *     summary: Hapus kategori
 *     tags:
 *       - Category
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Category berhasil dihapus
 */
router.delete("/:id", controller.delete);

export default router;
