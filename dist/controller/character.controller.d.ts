import type { Request, Response } from "express";
export declare const getAll: (_req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const search: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const created: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const updated: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deletedChar: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=character.controller.d.ts.map