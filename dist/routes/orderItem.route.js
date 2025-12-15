import { Router } from "express";
import * as userController from "../controller/orderItem.controller";
const router = Router();
router.get("/", userController.getAll);
router.post("/", userController.create);
router.get("/:id", userController.getById);
router.put("/:id", userController.update);
router.delete("/:id", userController.deletedOrderItem);
export default router;
//# sourceMappingURL=orderItem.route.js.map