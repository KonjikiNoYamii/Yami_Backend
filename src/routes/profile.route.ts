import { Router } from "express";
import prismaInstance from "../prisma";
import { upload } from "../middleware/upload.middleware";
import { validate } from "../utils/validator";
import {
  createProfileValidation,
  deleteProfileValidation,
  getProfileByIdValidation,
  updateProfileValidation,
} from "../middleware/profile.validation";

import { ProfileRepository } from "../repositories/profile.repository";
import { ProfileService } from "../services/profile.service";
import { ProfileController } from "../controller/profile.controller";

const router = Router();

const repo = new ProfileRepository(prismaInstance);
const service = new ProfileService(repo);
const controller = new ProfileController(service);

/**
 * @swagger
 * tags:
 *   - name: Profile
 *     description: Manajemen profile user
 */

/**
 * @swagger
 * /profiles:
 *   get:
 *     summary: Ambil semua profile
 *     tags:
 *       - Profile
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
 *         name: name
 *         schema:
 *           type: string
 *           example: silica
 *       - in: query
 *         name: gender
 *         schema:
 *           type: string
 *           example: female
 *       - in: query
 *         name: address
 *         schema:
 *           type: string
 *           example: Jakarta
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
 *           example: asc
 *     responses:
 *       200:
 *         description: Profile berhasil diambil
 */
router.get("/", controller.getAll);

/**
 * @swagger
 * /profiles/{id}:
 *   get:
 *     summary: Ambil profile berdasarkan ID
 *     tags:
 *       - Profile
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Profile ditemukan
 *       404:
 *         description: Profile tidak ditemukan
 */
router.get("/:id", validate(getProfileByIdValidation), controller.getById);

/**
 * @swagger
 * /profiles:
 *   post:
 *     summary: Buat profile user
 *     tags:
 *       - Profile
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - gender
 *               - address
 *               - userId
 *             properties:
 *               name:
 *                 type: string
 *                 example: Silica
 *               gender:
 *                 type: string
 *                 example: female
 *               address:
 *                 type: string
 *                 example: Kerajaan Backend
 *               userId:
 *                 type: integer
 *                 example: 1
 *               profilePictureUrl:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Profile berhasil dibuat
 */
router.post(
  "/",
  upload.single("profilePictureUrl"),
  validate(createProfileValidation),
  controller.create
);

/**
 * @swagger
 * /profiles/{id}:
 *   put:
 *     summary: Update profile
 *     tags:
 *       - Profile
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
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Silica Updated
 *               gender:
 *                 type: string
 *                 example: female
 *               address:
 *                 type: string
 *                 example: Backend Castle
 *               profilePicture:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Profile berhasil diupdate
 */
router.put(
  "/:id",
  upload.single("profilePicture"),
  validate(updateProfileValidation),
  controller.update
);

/**
 * @swagger
 * /profiles/{id}:
 *   delete:
 *     summary: Hapus profile
 *     tags:
 *       - Profile
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Profile berhasil dihapus
 */
router.delete("/:id", validate(deleteProfileValidation), controller.delete);

export default router;
