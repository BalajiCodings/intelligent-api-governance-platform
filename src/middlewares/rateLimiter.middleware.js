import RateLimiter from "../services/rateLimiter.service.js";
import PolicyEngine from "../services/policyEngine.service.js";
import { info, warn } from "../utils/logger.js";

const rateLimiterMiddleware = async (req, res, next) => {
    const { tier, consumerId } = req.consumer;
    const endpoint = req.originalUrl;
    const { count } = req.usage;

    const policy = await PolicyEngine.getPolicy({ tier, endpoint });

    const decision = RateLimiter.checkLimit({
        requestCount: count,
        policy
    });

    if (!decision.allowed) {
        warn("Request blocked by policy", {
            consumerId,
            tier,
            endpoint,
            requestCount: count
        });

        MetricsService.increment("blockedRequests");

        return res.status(429).json({
            message: "Request blocked by policy",
            reason: decision.reason
        });
    }

    info("Request allowed", {
        consumerId,
        tier,
        endpoint,
        requestCount: count
    });

    MetricsService.increment("allowedRequests");

    next();
};

export default rateLimiterMiddleware;
