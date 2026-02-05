import RateLimiter from "../services/rateLimiter.service.js";

const rateLimiterMiddleware = (req, res, next) => {
    const { tier } = req.consumer;
    const { count } = req.usage;

    const decision = RateLimiter.checkLimit({
        tier,
        requestCount: count
    });

    if (!decision.allowed) {
        return res.status(429).json({
            message: "Too many requests",
            reason: decision.reason
        });
    }

    next();
};

export default rateLimiterMiddleware;
