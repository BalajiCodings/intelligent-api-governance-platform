import Consumer from "../models/consumer.model.js";

class ConsumerService {
    static async getConsumerByApiKey(apiKey) {
        if (!apiKey) return null;

        return await Consumer.findOne({
            apiKey,
            active: true
        }).lean();
    }
}

export default ConsumerService;
