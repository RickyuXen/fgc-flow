import "dotenv/config";
import cors from "cors";
import express from "express";
import { connectDB } from "./config/db.js";
import apiRouter from "./routes/api.js";

const app = express();
const port = Number(process.env.PORT) || 3001;

const corsOrigins = (process.env.CORS_ORIGIN ?? "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: corsOrigins,
  })
);
app.use(express.json());
app.use("/api", apiRouter);

async function start() {
  await connectDB();
  app.listen(port, () => {
    console.log(`API listening on http://localhost:${port}`);
  });
}

start().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});
