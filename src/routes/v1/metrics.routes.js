import { Router } from "express";
import MetricsService from "../../services/metrics.service.js";

const router = Router();

router.get("/", (req, res) => {
    res.status(200).json({
        metrics: MetricsService.getMetrics()
    });
});

export default router;
