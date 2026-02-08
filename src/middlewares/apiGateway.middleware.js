import ConsumerService from "../services/consumer.service.js";

/**
 * Simulated API Gateway with API key validation
 */
const apiGatewayMiddleware = (req, res, next) => {
    const apiKey = req.headers["x-api-key"];

    const consumer = ConsumerService.getConsumerByApiKey(apiKey);

    if (!consumer) {
        return res.status(401).json({
            message: "Invalid or missing API key"
        });
    }

    // Attach verified consumer
    req.consumer = {
        consumerId: consumer.consumerId,
        tier: consumer.tier
    };

    // Attach request metadata
    req.requestMeta = {
        path: req.originalUrl,
        method: req.method,
        timestamp: Date.now()
    };

    next();
};

export default apiGatewayMiddleware;
