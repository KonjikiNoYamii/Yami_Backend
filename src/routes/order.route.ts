import { Router } from "express";
import { OrderService } from "../services/order.service";
import { OrderRepository } from "../repositories/order.repository";
import prismaInstance from "../prisma";
import { OrderController } from "../controller/order.controller";
import { authenticate } from "../middleware/auth.middleware";
import { asyncHandler } from "../utils/async.hander";

const router = Router();

// 🔗 Dependency Injection
const orderRepository = new OrderRepository(prismaInstance);
const orderService = new OrderService(prismaInstance, orderRepository);
const orderController = new OrderController(orderService);

// ✅ CHECKOUT (USER)
router.post(
  "/checkout",
  authenticate,
  asyncHandler(orderController.checkout)
);

// ✅ GET ALL ORDERS (ADMIN / OPTIONAL USER)
router.get(
  "/",
  authenticate,
  asyncHandler(orderController.getAll)
);

router.get(
  "/stats",
  orderController.getStats
)

// ✅ GET ORDER BY ID
router.get(
  "/:id",
  authenticate,
  asyncHandler(orderController.getById)
);

// ✅ DELETE ORDER (SOFT DELETE)
router.delete(
  "/:id",
  authenticate,
  asyncHandler(orderController.deleteOrder)
);

export default router;
