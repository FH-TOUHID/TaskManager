import express from "express";
import taskRoutes from "./Routes/taskRoutes.js";
import cors from "cors";
const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://taskmanager-a4v52u6gw-touhid-s-projects.vercel.app",
    ],
  })
);
app.use(express.json());

app.use("/api/tasks", taskRoutes);

export default app;