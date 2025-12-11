export const apiKeyValidator = (req, _res, next) => {
    const apiKey = req.headers["x-api-key"];
    if (!apiKey) {
        throw new Error("API wajib dikirim");
    }
    if (apiKey !== "94326") {
        throw new Error("API key tidak valid!");
    }
    next();
};
//# sourceMappingURL=apiKey.middleware.js.map