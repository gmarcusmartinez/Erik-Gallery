import path from "path";
import express from "express";
import "colors";
import "express-async-errors";
import cookieSession from "cookie-session";
import cors from "cors";

import { authRouter } from "./routes/auth";
import { printRouter } from "./routes/prints";
import { uploadRouter } from "./routes/upload";

import { NotFoundError } from "./errors/not-found-error";
import { errorHandler } from "./middlewares/error-handler";

const app = express();
app.use(express.json());
app.use(cors());

app.use(cookieSession({ signed: false, secure: false }));

app.use("/api/auth", authRouter);
app.use("/api/prints", printRouter);
app.use("/api/upload", uploadRouter);

const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname)));
}

app.all("*", () => {
  throw new NotFoundError();
});

app.use(errorHandler);
export { app };
