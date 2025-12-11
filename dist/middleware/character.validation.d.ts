import type { NextFunction, Response, Request } from "express";
import { type ValidationChain } from "express-validator";
export declare const validate: (validations: ValidationChain[]) => (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
export declare const createCharacterValidation: ValidationChain[];
export declare const getCharactersByIdValidation: ValidationChain[];
//# sourceMappingURL=character.validation.d.ts.map