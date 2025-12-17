import { Router } from "express";
import * as userController from "../controller/product.controller";
import { authenticate } from "../middleware/auth.middleware";
import { upload } from "../middleware/upload.middleware";
const router = Router();
router.get("/", userController.getAll);
router.get("/:id", userController.getById);
router.post("/", authenticate, upload.single('image'), userController.create);
router.put("/:id", userController.update);
router.delete("/:id", userController.deletedProduct);
export default router;
//# sourceMappingURL=product.route.js.map