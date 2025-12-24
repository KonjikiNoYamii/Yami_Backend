import Express, {
  type Application,
  type Request,
  type Response,
} from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import { errorHandler } from "./middleware/error.handler";
import swaggerUi from 'swagger-ui-express'
// import characterRouter from './routes/character.route'
// import routerElement from './routes/element.route'
// import routerRarity from './routes/rarity.routes'
import routerProduct from './routes/product.route'
import routerUser from './routes/user.route'
import routerOrder from './routes/order.route'
import routerOrderItem from './routes/orderItem.route'
import authRoutes from './routes/auth.route'
import routerCategory from './routes/category.route'
import profileCategory from './routes/profile.route'
import { successResponse } from "./utils/response";
import { requestLogger } from "./middleware/logger.middleware";
import swaggerSpec from "./utils/swagger";

const app: Application = Express();

 
app.use(helmet());
app.use(morgan("dev"));
app.use(cors());
app.use(Express.json());
app.set('query parser', 'extended')
app.use(Express.static("public"))

app.use(requestLogger);

app.get("/", (req: Request, res: Response) => {
  const waktuProses = Date.now() - (req.startTime || Date.now());
  successResponse(res, "Selamat datang di API saya", {
    hari: 4,
    status: "Server Hidup",
    waktuProses: `${waktuProses}ms`
  }, null, 200)
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.get("/api/error-test", () => {
  throw new Error("Ini error test");
});

// app.use('/api/characters', characterRouter)
// app.use('/api/element', routerElement)
// app.use('/api/rarity', routerRarity)
app.use('/api/products', routerProduct)
app.use('/api/users', routerUser)
app.use('/api/orders', routerOrder)
app.use('/api/order-items', routerOrderItem)
app.use('/api/category', routerCategory)
app.use('/api/profiles', profileCategory)
app.use('/api/auth', authRoutes);


app.use(/.*/, (req: Request, _res: Response) => {
  throw new Error(`Route ${req.originalUrl} tidak ada di API`);
});
app.use(errorHandler);

export default app