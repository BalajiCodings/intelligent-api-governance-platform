import mongoose from "mongoose";

const policySchema = new mongoose.Schema(
    {
        tier: { type: String, required: true },
        endpoint: { type: String, required: true },
        windowSize: { type: Number, required: true },
        maxRequests: { type: Number, required: true },
        active: { type: Boolean, default: true }
    },
    { timestamps: true }
);

export default mongoose.model("Policy", policySchema);
