import { Router } from "express";

const router = Router();

/**
 * Simulated backend API
 * This represents a real business API
 */
router.get("/test", (req, res) => {
    res.status(200).json({
        message: "Test API response",
        timestamp: new Date().toISOString()
    });
});

export default router;
