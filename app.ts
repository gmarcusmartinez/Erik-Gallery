import path from "path";
import express from "express";
import "express-async-errors";
import cookieSession from "cookie-session";
import cors from "cors";

import { authRouter } from "./routes/auth";

import { NotFoundError } from "./errors/not-found-error";
import { errorHandler } from "./middlewares/error-handler";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRouter);

app.use(cookieSession({ signed: false, secure: false }));

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
