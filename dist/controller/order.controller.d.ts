import type { Request, Response } from "express";
export declare const checkout: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getAll: (_req: Request, res: Response) => Promise<void>;
export declare const getById: (req: Request, res: Response) => Promise<void>;
export declare const create: (req: Request, res: Response) => Promise<void>;
export declare const update: (req: Request, res: Response) => Promise<void>;
export declare const deletedOrder: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=order.controller.d.ts.map