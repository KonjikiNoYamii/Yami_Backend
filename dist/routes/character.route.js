import { Router } from "express";
import { create, getAll, getById, search, update, } from "../contoller/character.controller";
import { createCharacterValidation, getCharactersByIdValidation, validate } from "../middleware/character.validation";
import { deleted } from "../contoller/categories.controller";
const router = Router();
router.get("/", getAll);
router.get("/search", search);
router.get("/:id", validate(getCharactersByIdValidation), getById);
router.post("/", validate(createCharacterValidation), create);
router.put("/:id", update);
router.delete("/:id", deleted);
export default router;
//# sourceMappingURL=character.route.js.map