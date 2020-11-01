import { Request, Response, NextFunction } from "express";
import { NotAdminError } from "../errors/not-admin-error";

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.currentUser?.role !== "admin") throw new NotAdminError();
  next();
};
