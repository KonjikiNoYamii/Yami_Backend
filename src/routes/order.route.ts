import { Router } from "express";
import * as userController from "../controller/order.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = Router();

router.post('/checkout', authenticate,userController.checkout)
router.get("/", authenticate,userController.getAll);
router.post("/", userController.create);
router.get("/:id", userController.getById);
router.put("/:id", userController.update);
router.delete("/:id", userController.deletedOrder);

export default router;
