import ConsumerService from "../services/consumer.service.js";

const apiGatewayMiddleware = async (req, res, next) => {
    const apiKey = req.headers["x-api-key"];

    const consumer = await ConsumerService.getConsumerByApiKey(apiKey);

    if (!consumer) {
        return res.status(401).json({
            message: "Invalid or missing API key"
        });
    }

    req.consumer = {
        consumerId: consumer.consumerId,
        tier: consumer.tier
    };

    next();
};

export default apiGatewayMiddleware;
