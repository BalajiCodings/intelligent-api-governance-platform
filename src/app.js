import express from "express";
import v1Routes from "./routes/v1/index.js";
import apiGatewayMiddleware from "./middlewares/apiGateway.middleware.js";

const app = express();

app.use(express.json());

// Health check
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP",
        message: "API Governance Service is running"
    });
});

// 🚪 Simulated API Gateway Entry Point
app.use("/api/v1", apiGatewayMiddleware, v1Routes);

export default app;
