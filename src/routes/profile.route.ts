import { Router } from "express";
import {
  getAll,
  getById,
  search,
  create,
  update,
  deleted,
} from "../controller/profile.controller";
import { upload } from "../middleware/upload.middleware";
import { validate } from "../utils/validator";
import { createProfileValidation, deleteProfileValidation, getProfileByIdValidation, searchProfileValidation, updateProfileValidation } from "../middleware/profile.validation";

const router = Router()

router.get("/", getAll);
router.get("/search", validate(searchProfileValidation),search);
router.get("/:id", validate(getProfileByIdValidation),getById);       
router.post(
  "/",
  upload.single("profilePicture"),
  validate(createProfileValidation),
  create
);

router.put(
  "/:id",
  upload.single("profilePicture"),
  validate(updateProfileValidation),
  update
);

router.delete("/:id", validate(deleteProfileValidation),deleted);

export default router;
