import { Router } from "express";
import prismaInstance from "../prisma";

import { AuthRepository } from "../repositories/auth.repository";
import { AuthService } from "../services/auth.service";
import { AuthController } from "../controller/auth.controller";

const router = Router();

const authRepo = new AuthRepository(prismaInstance);
const authService = new AuthService(authRepo);
const authController = new AuthController(authService);

/**
 * @swagger
 * tags:
 *   - name: Auth
 *     description: Manajemen autentikasi pengguna
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login pengguna
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: rahasia123
 *     responses:
 *       200:
 *         description: Login berhasil
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
 *                   example: Login berhasil
 *                 data:
 *                   type: object
 *                 errors:
 *                   type: object
 *                   nullable: true
 *       401:
 *         description: Email atau password salah
 */
router.post("/login", authController.login);

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register pengguna
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: Yami123
 *               email:
 *                 type: string
 *                 format: email
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: rahasia123
 *               role:
 *                 type: string
 *                 example: USER
 *     responses:
 *       201:
 *         description: Register berhasil
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
 *                   example: Register berhasil
 *                 data:
 *                   type: object
 *                 errors:
 *                   type: object
 *                   nullable: true
 */
router.post("/register", authController.register);

export default router;
