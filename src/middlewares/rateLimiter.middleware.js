import RateLimiter from "../services/rateLimiter.service.js";
import PolicyEngine from "../services/policyEngine.service.js";

const rateLimiterMiddleware = (req, res, next) => {
    const { tier } = req.consumer;
    const endpoint = req.originalUrl;
    const { count } = req.usage;

    const policy = PolicyEngine.getPolicy({
        tier,
        endpoint
    });

    const decision = RateLimiter.checkLimit({
        requestCount: count,
        policy
    });

    if (!decision.allowed) {
        return res.status(429).json({
            message: "Request blocked by policy",
            reason: decision.reason
        });
    }

    next();
};

export default rateLimiterMiddleware;
