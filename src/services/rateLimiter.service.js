class RateLimiter {
    static checkLimit({ requestCount, policy }) {
        if (!policy) {
            return {
                allowed: false,
                reason: "No policy defined"
            };
        }

        if (requestCount > policy.maxRequests) {
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
