export const requestLogger = (req, _res, next) => {
    console.log(`Request masuk: ${req.method} ${req.path}`);
    req.startTime = Date.now();
    next();
};
//# sourceMappingURL=logger.middleware.js.map