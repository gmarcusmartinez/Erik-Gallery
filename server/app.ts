import "colors";
import cookieSession from "cookie-session";
import express from "express";
import "express-async-errors";

import { printRouter } from "./routes/prints";
import { authRouter } from "./routes/auth";
import { NotFoundError } from "./errors/not-found-error";
import { errorHandler } from "./middlewares/error-handler";

const app = express();

app.use(express.json());

app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
);

app.use("/api/prints", printRouter);
app.use("/api/auth", authRouter);

app.all("*", async () => {
  throw new NotFoundError();
});

app.use(errorHandler);
export { app };
