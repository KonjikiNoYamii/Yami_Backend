import { Router } from "express";
import * as userController from "../controller/order.controller";
const router = Router();
router.post('/checkout', userController.checkout);
router.get("/", userController.getAll);
router.post("/", userController.create);
router.get("/:id", userController.getById);
router.put("/:id", userController.update);
router.delete("/:id", userController.deletedOrder);
export default router;
//# sourceMappingURL=order.route.js.map