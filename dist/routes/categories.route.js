import { Router } from "express";
import { create, getAll, getById, search, update } from "../contoller/categories.controller";
import { createCategoryValidation, getCategoriesByIdValidation, validate } from "../middleware/categories.validation";
import { deteledCategory } from "../services/categories.service";
const router = Router();
router.get("/", getAll);
router.get("/search", search);
router.get("/:id", validate(getCategoriesByIdValidation), getById);
router.post("/", validate(createCategoryValidation), create);
router.put("/:id", update);
router.delete("/:id", deteledCategory);
export default router;
//# sourceMappingURL=categories.route.js.map