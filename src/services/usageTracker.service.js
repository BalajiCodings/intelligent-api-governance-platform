import redisClient from "../config/redis.config.js";

class UsageTracker {
    static async trackRequest({ consumerId, endpoint, windowSize = 60 }) {
        const currentTime = Math.floor(Date.now() / 1000);
        const window = Math.floor(currentTime / windowSize);

        const redisKey = `usage:${consumerId}:${endpoint}:${window}`;

        // Increment request count
        const count = await redisClient.incr(redisKey);

        // Set expiry only once
        if (count === 1) {
            await redisClient.expire(redisKey, windowSize);
        }

        return count;
    }
}

export default UsageTracker;
