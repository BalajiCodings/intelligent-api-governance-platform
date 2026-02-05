import express from "express";
import v1Routes from "./routes/v1/index.js";
import apiGatewayMiddleware from "./middlewares/apiGateway.middleware.js";
import usageTrackerMiddleware from "./middlewares/usageTracker.middleware.js";
import rateLimiterMiddleware from "./middlewares/rateLimiter.middleware.js";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP",
        message: "API Governance Service is running"
    });
});

app.use(
    "/api/v1",
    apiGatewayMiddleware,
    usageTrackerMiddleware,
    rateLimiterMiddleware,
    v1Routes
);

export default app;
