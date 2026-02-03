import express from "express";

const app = express();

// Middleware
app.use(express.json());

// Health check
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP",
        message: "API Governance Service is running"
    });
});

export default app;
