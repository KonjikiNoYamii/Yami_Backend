import { Router } from "express";
import prismaInstance from "../prisma";
import { upload } from "../middleware/upload.middleware";
import { validate } from "../utils/validator";
import {
  createProfileValidation,
  deleteProfileValidation,
  getProfileByIdValidation,
  updateProfileValidation,
} from "../middleware/profile.validation";

import { ProfileRepository } from "../repositories/profile.repository";
import { ProfileService } from "../services/profile.service";
import { ProfileController } from "../controller/profile.controller";

const router = Router();

const repo = new ProfileRepository(prismaInstance);
const service = new ProfileService(repo);
const controller = new ProfileController(service);

router.get("/", controller.getAll);
router.get("/:id", validate(getProfileByIdValidation), controller.getById);
router.post(
  "/",
  upload.single("profilePictureUrl"),
  validate(createProfileValidation),
  controller.create
);
router.put(
  "/:id",
  upload.single("profilePicture"),
  validate(updateProfileValidation),
  controller.update
);
router.delete("/:id", validate(deleteProfileValidation), controller.delete);

export default router;
