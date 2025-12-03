import Express, {
  type Application,
  type Request,
  type Response,
  type NextFunction,
} from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import { characters } from "./character";
import {
  body,
  param,
  query,
  validationResult,
  type ValidationChain,
} from "express-validator";

dotenv.config();

const app: Application = Express();
const HOST = process.env.HOST;
const PORT = process.env.PORT;

interface CustomRequest extends Request {
  startTime?: number;
}

app.use(helmet());
app.use(morgan("dev"));
app.use(cors());
app.use(Express.json());

app.use((req: CustomRequest, _res: Response, next: NextFunction) => {
  console.log(`Request masuk: ${req.method} ${req.path}`);
  req.startTime = Date.now();
  next();
});

app.use((req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.headers["x-api-key"];
  if (!apiKey) {
    throw new Error("API wajib dikirim");
  }

  if (apiKey !== "94326") {
    throw new Error("API key tidak valid!");
  }
  next();
});

interface ApiResponse {
  success: boolean;
  message: string;
  data?: unknown;
  pagination?: {
    page: number;
    limit: number;
    total: number;
  };
  errors?:
    | Array<{
        field: string;
        message: string;
      }>
    | { stack?: string };
}

const successResponse = (
  res: Response,
  message: string,
  data: unknown = null,
  pagination: { page: number; limit: number; total: number } | null = null,
  statusCode: number = 200
) => {
  const response: ApiResponse = {
    success: true,
    message,
  };

  if (data !== null) response.data = data;
  if (pagination) response.pagination = pagination;

  return res.status(statusCode).json(response);
};

// Error Response Helper
const errorResponse = (
  res: Response,
  message: string,
  statusCode: number = 400,
  errors:
    | Array<{ field: string; message: string }>
    | { stack?: string }
    | null = null
) => {
  const response: ApiResponse = {
    success: false,
    message,
  };

  if (errors) response.errors = errors;

  return res.status(statusCode).json(response);
};

const validate = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    const errorList = errors.array().map((err) => ({
      field: err.type === "field" ? err.path : "unknown",
      message: err.msg,
    }));

    return errorResponse(res, "Validasi gagal", 400, errorList);
  };
};

// Validasi untuk CREATE & UPDATE produk
const createCharacterValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Nama Character wajib diisi")
    .isLength({ min: 3 })
    .withMessage("Nama Character minimal 3 karakter"),

  body("description").trim().notEmpty().withMessage("Deskripsi wajib diisi"),

  body("power")
    .isNumeric()
    .withMessage("power harus angka")
    .custom((value) => value > 0)
    .withMessage("power harus lebih dari 0"),
];

// Validasi untuk GET by ID produk
const getCharactersByIdValidation = [
  param("id").isNumeric().withMessage("ID harus angka"),
];

app.get("/", (req: CustomRequest, res: Response) => {
  const waktuProses = Date.now() - (req.startTime || Date.now());
  successResponse(res, "Selamat datang di API saya", {
    hari: 4,
    status: "Server Hidup",
    waktuProses: `${waktuProses}ms`
  }, null, 200)
});

app.get("/api/characters", (_req: Request, res: Response) => {
  res.json({
    status: true,
    jumlah: characters.length,
    data: characters,
  });
});

app.get(
  "/api/characters/:id",
  validate(getCharactersByIdValidation),
  (req: Request, res: Response) => {
    if (!req.params.id) {
      throw new Error("Parameter tidak ditemukan!")
    }
    const id = parseInt(req.params.id);
    const character = characters.find((c) => c.id === id);

    if (!character) {
      throw new Error("Character tidak ditemukan");
    }
    successResponse(res, "Character berhasil diambil", character, null,200);
  }
);

app.get("/api/search", (req: Request, res: Response) => {
  const { nama, kelangkaan, min_power, max_power } = req.query;

  let result = characters;

  if (nama) {
    result = result.filter((c) =>
      c.name.toLowerCase().includes((nama as string).toLowerCase())
    );
  }

  if (kelangkaan) {
    result = result.filter((c) =>
      c.rarity.toLowerCase().includes((kelangkaan as string).toLowerCase())
    );
  }

  if (min_power) {
    result = result.filter((c) => c.power >= Number(min_power));
  }

  if (max_power) {
    result = result.filter((c) => c.power <= Number(max_power));
  }

  res.json({
    succes: true,
    result: result,
  });
});

app.post(
  "/api/characters",
  validate(createCharacterValidation),
  (req: Request, res: Response) => {
    const {
      name,
      category,
      rarity,
      power,
      effect,
      stats: {
        attack,
        critChance,
        element,
        magic,
        charm,
        speed,
        aggression,
        agility,
        mana,
        magicDefense,
        magicPower,
        poisonDamage,
      } = {},
      description,
    } = req.body;

    const newCharacter = {
      id: characters.length + 1,
      name: name,
      category: category,
      rarity: rarity,
      power: power,
      effect: effect,
      description: description,
      stats: {
        attack,
        critChance,
        element,
        magic,
        charm,
        speed,
        aggression,
        agility,
        mana,
        magicDefense,
        magicPower,
        poisonDamage,
      },
    };

    characters.push(newCharacter);

    successResponse(
      res,
      "Character ditambahkan!",
      newCharacter,
      null,
      201
    )
  }
);

app.put("/api/characters/:id", (req: Request, res: Response) => {
  if (!req.params.id) {
    throw new Error("Parameter tidak ditemukan!")
  }

  const id = parseInt(req.params.id);
  const index = characters.findIndex((c) => c.id === id);

  if (index === -1) {
    throw new Error("Character tidak ditemukan")
  }
  characters[index] = {
    ...characters[index],
    ...req.body,
    stats: { ...characters[index]?.stats, ...req.body.stats },
  };

  successResponse(
    res,
    "Character berhasil di update!",
    characters[index],
    null,
    201
  )
});

app.delete("/api/characters/:id", (req: Request, res: Response) => {
  if (!req.params.id) {
    throw new Error("Tidak ditemukan!")
  }
  const id = parseInt(req.params.id);
  const index = characters.findIndex((c) => c.id === id);

  if (index === -1) {
    throw new Error("Character tidak ditemukan")
  }

  const deleted = characters.splice(index, 1);

  successResponse(
    res,
    "Character berhasil dihapus!",
    deleted[0],
    null,
    200
  )
});

const asyncHandler = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};
app.get("/api/error-test", () => {
  throw new Error("Ini error test");
});

app.get(
  "/api/async-test",
  asyncHandler(async (_req: Request, res: Response) => {
    await new Promise((resolve) => setTimeout(resolve, 100));
    successResponse(res, "Async berhasil!");
  })
);

app.use(/.*/, (req: Request, _res: Response) => {
  throw new Error(`Route ${req.originalUrl} tidak ada di API`);
});
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error("ERROR:", err.message);

  const statusCode = err.message.includes("tidak ditemukan") ? 404 : 400;

  errorResponse(
    res,
    err.message || "Terjadi kesalahan server",
    statusCode,
    process.env.NODE_ENV === "development"
      ? ({ stack: err.stack } as { stack: string })
      : null
  );
});

app.listen(PORT, () => {
  console.log(`Server running at ${HOST}:${PORT}`);
});
