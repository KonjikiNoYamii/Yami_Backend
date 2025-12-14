import { Router } from "express";
import * as userController from "../controller/category.controller";

const router = Router();

router.get("/", userController.getAll);
router.post("/", userController.create);
router.get("/:id", userController.getById);
router.put("/:id", userController.update);
router.delete("/:id", userController.deletedCategory);

export default router;
