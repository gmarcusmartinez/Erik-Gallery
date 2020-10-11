import express from "express";
import "colors";
import { printRouter } from "./routes/prints";

const app = express();
app.use(express.json());

app.use("/api/prints", printRouter);

export { app };
