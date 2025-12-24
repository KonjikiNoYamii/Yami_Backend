import { Router } from "express";
import prismaInstance from "../prisma";

import { UserRepository } from "../repositories/user.repository";
import { UserService } from "../services/user.service";
import { UserController } from "../controller/user.controller";

const router = Router();

const userRepo = new UserRepository(prismaInstance);
const userService = new UserService(userRepo);
const userController = new UserController(userService);

/**
 * @swagger
 * tags:
 *   - name: User
 *     description: Manajemen user
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Ambil semua user
 *     tags:
 *       - User
 *     responses:
 *       200:
 *         description: User berhasil diambil
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 users:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *                 total:
 *                   type: integer
 *                   example: 10
 */
router.get("/", userController.getAll);

/**
 * @swagger
 * /users/stats:
 *   get:
 *     summary: Ambil statistik user
 *     tags:
 *       - User
 *     responses:
 *       200:
 *         description: Statistik user berhasil diambil
 */
router.get("/stats", userController.getStats)

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Buat user baru
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password_hash
 *             properties:
 *               username:
 *                 type: string
 *                 example: silica
 *               email:
 *                 type: string
 *                 example: silica@mail.com
 *               password_hash:
 *                 type: string
 *                 example: hashed_password
 *     responses:
 *       201:
 *         description: User berhasil dibuat
 *       400:
 *         description: Username atau email sudah digunakan
 */
router.post("/", userController.create);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Ambil user berdasarkan ID
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: User ditemukan
 *       404:
 *         description: User tidak ditemukan
 */
router.get("/:id", userController.getById);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update user
 *     tags:
 *       - User
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
 *               username:
 *                 type: string
 *                 example: silica_new
 *               email:
 *                 type: string
 *                 example: silica_new@mail.com
 *     responses:
 *       200:
 *         description: User berhasil diupdate
 *       404:
 *         description: User tidak ditemukan
 */
router.put("/:id", userController.update);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Hapus user (soft delete)
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: User berhasil dihapus
 *       404:
 *         description: User tidak ditemukan
 */
router.delete("/:id", userController.delete);

export default router;
