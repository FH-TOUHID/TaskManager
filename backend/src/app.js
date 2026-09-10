import express from "express";
import taskRoutes from "./Routes/taskRoutes.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://taskmanager-zeta-lac.vercel.app",
    ],
  })
);

app.use(express.json());

app.use("/api/tasks", taskRoutes);

export default app;