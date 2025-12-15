import Express, {} from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import { errorHandler } from "./middleware/error.handler";
import characterRouter from './routes/character.route';
import routerElement from './routes/element.route';
import routerRarity from './routes/rarity.routes';
import routerProduct from './routes/product.route';
import routerUser from './routes/user.route';
import routerOrder from './routes/order.route';
import routerOrderItem from './routes/orderItem.route';
import routerCategory from './routes/category.route';
import { successResponse } from "./utils/response";
import { requestLogger } from "./middleware/logger.middleware";
import { apiKeyValidator } from "./middleware/apiKey.middleware";
const app = Express();
app.use(helmet());
app.use(morgan("dev"));
app.use(cors());
app.use(Express.json());
app.use(requestLogger);
app.use(apiKeyValidator);
app.get("/", (req, res) => {
    const waktuProses = Date.now() - (req.startTime || Date.now());
    successResponse(res, "Selamat datang di API saya", {
        hari: 4,
        status: "Server Hidup",
        waktuProses: `${waktuProses}ms`
    }, null, 200);
});
app.get("/api/error-test", () => {
    throw new Error("Ini error test");
});
app.use('/api/characters', characterRouter);
app.use('/api/element', routerElement);
app.use('/api/rarity', routerRarity);
app.use('/api/products', routerProduct);
app.use('/api/users', routerUser);
app.use('/api/orders', routerOrder);
app.use('/api/orderItems', routerOrderItem);
app.use('/api/category', routerCategory);
app.use(/.*/, (req, _res) => {
    throw new Error(`Route ${req.originalUrl} tidak ada di API`);
});
app.use(errorHandler);
export default app;
//# sourceMappingURL=app.js.map