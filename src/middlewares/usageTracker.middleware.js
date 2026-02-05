import UsageTracker from "../services/usageTracker.service.js";

const usageTrackerMiddleware = async (req, res, next) => {
    try {
        const consumerId = req.consumer.consumerId;
        const endpoint = req.originalUrl;

        const requestCount = await UsageTracker.trackRequest({
            consumerId,
            endpoint
        });

        // Attach usage info to request
        req.usage = {
            count: requestCount
        };

        next();
    } catch (error) {
        console.error("Usage tracking failed:", error);
        res.status(500).json({
            message: "Usage tracking error"
        });
    }
};

export default usageTrackerMiddleware;
