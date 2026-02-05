const rateLimitConfig = {
    FREE: {
        windowSize: 60,      // seconds
        maxRequests: 10
    },
    PREMIUM: {
        windowSize: 60,
        maxRequests: 100
    }
};

export default rateLimitConfig;
