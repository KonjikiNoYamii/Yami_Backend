import type { NextFunction, Response, Request } from "express";
import { type ValidationChain } from "express-validator";
export declare const validate: (validations: ValidationChain[]) => (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
export declare const createCategoryValidation: ValidationChain[];
export declare const getCategoriesByIdValidation: ValidationChain[];
//# sourceMappingURL=categories.validation.d.ts.map