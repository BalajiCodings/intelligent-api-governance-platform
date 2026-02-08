import { Router } from "express";
import testRoutes from "./test.routes.js";
import metricsRoutes from "./metrics.routes.js";

const router = Router();

// Mount all v1 APIs
router.use("/test", testRoutes);
router.use("/metrics", metricsRoutes);

export default router;
