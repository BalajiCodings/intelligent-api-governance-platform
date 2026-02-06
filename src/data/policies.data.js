const policies = [
    {
        tier: "FREE",
        endpoint: "/api/v1/test/test",
        windowSize: 60,
        maxRequests: 10,
        active: true
    },
    {
        tier: "PREMIUM",
        endpoint: "/api/v1/test/test",
        windowSize: 60,
        maxRequests: 100,
        active: true
    }
];

export default policies;
