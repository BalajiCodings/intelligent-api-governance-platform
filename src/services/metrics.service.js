class MetricsService {
    static metrics = {
        totalRequests: 0,
        allowedRequests: 0,
        blockedRequests: 0
    };

    static increment(metric) {
        if (this.metrics[metric] !== undefined) {
            this.metrics[metric]++;
        }
    }

    static getMetrics() {
        return this.metrics;
    }
}

export default MetricsService;
