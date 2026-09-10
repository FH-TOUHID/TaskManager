import express from "express";
import taskRoutes from "./Routes/taskRoutes.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/tasks", taskRoutes);

export default app;