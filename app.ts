import express from "express";
import "express-async-errors";
import cookieSession from "cookie-session";
import cors from "cors";

import { authRouter } from "./routes/auth";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRouter);

app.use(cookieSession({ signed: false, secure: false }));

export { app };
