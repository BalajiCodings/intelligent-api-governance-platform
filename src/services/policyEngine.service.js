import Policy from "../models/policy.model.js";

class PolicyEngine {
    static async getPolicy({ tier, endpoint }) {
        return await Policy.findOne({
            tier,
            endpoint,
            active: true
        }).lean();
    }
}

export default PolicyEngine;
