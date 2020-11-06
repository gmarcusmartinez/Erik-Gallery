import { Router } from "express";
import * as printControllers from "../controllers/prints";
import { currentUser } from "../middlewares/current-user";
import { isAdmin } from "../middlewares/is-admin";
import { requireAuth } from "../middlewares/require-auth";
import { validateRequest } from "../middlewares/validate-request";
import { createPrintValidation } from "../validation/print";

const router = Router();

router.route("/").get(printControllers.getPrints);
router.route("/:id").get(printControllers.getPrint);

router
  .route("/")
  .post(
    currentUser,
    requireAuth,
    isAdmin,
    createPrintValidation,
    validateRequest,
    printControllers.createPrint
  );

router
  .route("/:id")
  .put(
    currentUser,
    requireAuth,
    isAdmin,
    createPrintValidation,
    validateRequest,
    printControllers.updatePrint
  );
router
  .route("/:id")
  .delete(currentUser, requireAuth, isAdmin, printControllers.deletePrint);

export { router as printRouter };
