import { Router } from "express";
import prismaInstance from "../prisma";

import { UserRepository } from "../repositories/user.repository";
import { UserService } from "../services/user.service";
import { UserController } from "../controller/user.controller";

const router = Router();

const userRepo = new UserRepository(prismaInstance);
const userService = new UserService(userRepo);
const userController = new UserController(userService);

router.get("/", userController.getAll);
router.post("/", userController.create);
router.get("/:id", userController.getById);
router.put("/:id", userController.update);
router.delete("/:id", userController.delete);

export default router;
