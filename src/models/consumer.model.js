import mongoose from "mongoose";

const consumerSchema = new mongoose.Schema(
    {
        consumerId: { type: String, required: true, unique: true },
        apiKey: { type: String, required: true, unique: true },
        tier: {
            type: String,
            enum: ["FREE", "PREMIUM"],
            required: true
        },
        active: { type: Boolean, default: true }
    },
    { timestamps: true }
);

export default mongoose.model("Consumer", consumerSchema);
