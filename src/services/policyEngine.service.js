import policies from "../data/policies.data.js";

class PolicyEngine {
    static getPolicy({ tier, endpoint }) {
        const policy = policies.find(
            (p) =>
                p.tier === tier &&
                p.endpoint === endpoint &&
                p.active === true
        );

        return policy || null;
    }
}

export default PolicyEngine;
