import { Router } from "express";
import { createBackground } from "../controllers/backgrounds";
import * as bgControllers from "../controllers/backgrounds";
import { currentUser } from "../middlewares/current-user";
import { isAdmin } from "../middlewares/is-admin";
import { requireAuth } from "../middlewares/require-auth";
import { validateRequest } from "../middlewares/validate-request";
import { createBackgroundValidation } from "../validation/background";

const router = Router();

// router.route("/").get(printControllers.getPrints);
// router.route("/:id").get(printControllers.getPrint);

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

// router
//   .route("/:id")
//   .put(
//     currentUser,
//     requireAuth,
//     isAdmin,
//     createPrintValidation,
//     validateRequest,
//     printControllers.updatePrint
//   );
// router
//   .route("/:id")
//   .delete(currentUser, requireAuth, isAdmin, printControllers.deletePrint);

export { router as backgroundRouter };
