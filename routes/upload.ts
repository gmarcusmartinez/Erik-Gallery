import { Router } from "express";
import { createUpload } from "../controllers/upload";

import { currentUser } from "../middlewares/current-user";
import { isAdmin } from "../middlewares/is-admin";
import { requireAuth } from "../middlewares/require-auth";

const router = Router();

router.route("/").get(currentUser, requireAuth, isAdmin, createUpload);

export { router as uploadRouter };
