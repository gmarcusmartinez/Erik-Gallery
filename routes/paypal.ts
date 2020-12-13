import { Router, Request, Response } from "express";
import keys from "../config/keys";
const router = Router();

router.get("/paypal", (req: Request, res: Response) => {
  res.send(keys.paypalClientID);
});

export { router as paypalRouter };
