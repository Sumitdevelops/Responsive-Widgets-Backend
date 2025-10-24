import express from "express";
import dotenv from "dotenv";
import uploadRoutes from "./src/routes/upload.routes.js";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/upload", uploadRoutes);

app.listen(4000, () => console.log("Server running on port 4000"));
