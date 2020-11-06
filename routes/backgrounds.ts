import { Router } from "express";
import * as bgControllers from "../controllers/backgrounds";
import { currentUser } from "../middlewares/current-user";
import { isAdmin } from "../middlewares/is-admin";
import { requireAuth } from "../middlewares/require-auth";
import { validateRequest } from "../middlewares/validate-request";
import { createBackgroundValidation } from "../validation/background";

const router = Router();

router.route("/").get(bgControllers.getBackgrounds);

router
  .route("/")
  .post(
    currentUser,
    requireAuth,
    isAdmin,
    createBackgroundValidation,
    validateRequest,
    bgControllers.createBackground
  );

router
  .route("/:id")
  .put(
    currentUser,
    requireAuth,
    isAdmin,
    validateRequest,
    bgControllers.setActive
  );

router
  .route("/:id")
  .delete(currentUser, requireAuth, isAdmin, bgControllers.deleteBackground);

export { router as backgroundRouter };
