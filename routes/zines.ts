import { Router } from "express";
import * as zineControllers from "../controllers/zines";
import { currentUser } from "../middlewares/current-user";
import { isAdmin } from "../middlewares/is-admin";
import { requireAuth } from "../middlewares/require-auth";
import { validateRequest } from "../middlewares/validate-request";
import { createZineValidation } from "../validation/zine";
import { advancedResults } from "../middlewares/advanced-results";
import { Product, ProductType } from "../models/Product";

const router = Router();

router
  .route("/")
  .get(advancedResults(Product, ProductType.Zine), zineControllers.getZines);

router.route("/:id").get(zineControllers.getZine);

router
  .route("/")
  .post(
    currentUser,
    requireAuth,
    isAdmin,
    createZineValidation,
    validateRequest,
    zineControllers.createZine
  );

router
  .route("/:id")
  .put(
    currentUser,
    requireAuth,
    isAdmin,
    createZineValidation,
    validateRequest,
    zineControllers.updateZine
  );
router
  .route("/:id")
  .delete(currentUser, requireAuth, isAdmin, zineControllers.deleteZine);

export { router as zineRouter };