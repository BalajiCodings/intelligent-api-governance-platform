import consumers from "../data/consumers.data.js";

class ConsumerService {
    static getConsumerByApiKey(apiKey) {
        if (!apiKey) return null;

        return consumers.find(
            (consumer) =>
                consumer.apiKey === apiKey &&
                consumer.active === true
        );
    }
}

export default ConsumerService;
