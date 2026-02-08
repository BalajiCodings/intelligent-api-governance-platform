import { info, warn } from "../utils/logger.js";
import ConsumerService from "../services/consumer.service.js";
import MetricsService from "../services/metrics.service.js";

const apiGatewayMiddleware = (req, res, next) => {
    const apiKey = req.headers["x-api-key"];

    const consumer = ConsumerService.getConsumerByApiKey(apiKey);

    if (!consumer) {
        warn("Unauthorized request", {
            path: req.originalUrl,
            apiKey
        });

        return res.status(401).json({
            message: "Invalid or missing API key"
        });
    }

    req.consumer = {
        consumerId: consumer.consumerId,
        tier: consumer.tier
    };

    MetricsService.increment("totalRequests");

    info("Request received", {
        consumerId: consumer.consumerId,
        tier: consumer.tier,
        path: req.originalUrl
    });

    next();
};

export default apiGatewayMiddleware;
