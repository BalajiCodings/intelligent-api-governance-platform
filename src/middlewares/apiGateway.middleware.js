/**
 * Simulated API Gateway Middleware
 * This represents AWS API Gateway behavior
 */
const apiGatewayMiddleware = (req, res, next) => {
    // Simulate API consumer identity
    req.consumer = {
        consumerId: req.headers["x-api-key"] || "anonymous",
        tier: "FREE"
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
