const log = ({ level, message, meta = {} }) => {
    const logEntry = {
        timestamp: new Date().toISOString(),
        level,
        message,
        ...meta
    };

    console.log(JSON.stringify(logEntry));
};

export const info = (message, meta) =>
    log({ level: "INFO", message, meta });

export const warn = (message, meta) =>
    log({ level: "WARN", message, meta });

export const error = (message, meta) =>
    log({ level: "ERROR", message, meta });
