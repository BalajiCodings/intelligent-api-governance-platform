import { Router } from "express";
import testRoutes from "./test.routes.js";

const router = Router();

// Mount all v1 APIs
router.use("/test", testRoutes);

export default router;
