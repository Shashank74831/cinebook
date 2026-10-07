import express from "express";
import genreRoutes from "./routes/cineRoutes.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to CineBook Genre API 🎬"
    });
});

app.use("/api/genres", genreRoutes);

export default app;