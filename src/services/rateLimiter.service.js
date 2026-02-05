import rateLimitConfig from "../config/rateLimit.config.js";

class RateLimiter {
    static checkLimit({ tier, requestCount }) {
        const config = rateLimitConfig[tier];

        if (!config) {
            return {
                allowed: false,
                reason: "Invalid consumer tier"
            };
        }

        if (requestCount > config.maxRequests) {
            return {
                allowed: false,
                reason: "Rate limit exceeded"
            };
        }

        return {
            allowed: true
        };
    }
}

export default RateLimiter;
