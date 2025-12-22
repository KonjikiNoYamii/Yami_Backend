import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware";
import { upload } from "../middleware/upload.middleware";
import prismaInstance from "../prisma";
import { ProductService } from "../services/product.service";
import { ProductController } from "../controller/product.controller";
import { ProductRepository } from "../repositories/product.repository";

const router = Router();

const repo = new ProductRepository(prismaInstance)
const service = new ProductService(repo)
const controller = new ProductController(service)

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", authenticate,upload.single('image'),controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.deletedProduct);

export default router;
