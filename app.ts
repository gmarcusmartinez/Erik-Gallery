import path from "path";
import sslRedirect from "heroku-ssl-redirect";
import express, { Request, Response } from "express";
import "express-async-errors";
import cookieSession from "cookie-session";
import cors from "cors";
import dotenv from "dotenv";

import { authRouter } from "./routes/auth";
import { backgroundRouter } from "./routes/backgrounds";
import { orderRouter } from "./routes/orders";
import { printRouter } from "./routes/prints";
import { uploadRouter } from "./routes/upload";
import { zineRouter } from "./routes/zines";

import { NotFoundError } from "./errors/not-found-error";
import { errorHandler } from "./middlewares/error-handler";
import keys from "./config/keys";

dotenv.config();

const app = express();
// app.use(sslRedirect());
app.use(express.json());
app.use(cors());
app.use(cookieSession({ signed: false, secure: false }));

app.use("/api/auth", authRouter);
app.use("/api/uploads", uploadRouter);

app.use("/api/backgrounds", backgroundRouter);
app.use("/api/orders", orderRouter);
app.use("/api/prints", printRouter);
app.use("/api/zines", zineRouter);

app.get("/api/config/paypal", (req: Request, res: Response) =>
  res.send(keys.paypalClientID)
);

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

app.all("*", () => {
  throw new NotFoundError();
});

app.use(errorHandler);
export { app };
