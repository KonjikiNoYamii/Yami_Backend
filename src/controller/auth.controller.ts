import type { Request, Response } from "express";
import type { IAuthService } from "../services/auth.service";
import { successResponse } from "../utils/response";

export interface IAuthController {
  register(req: Request, res: Response): Promise<void>;
  login(req: Request, res: Response): Promise<void>;
}

export class AuthController implements IAuthController {
  constructor(private authService: IAuthService) {}

  register = async (req: Request, res: Response) => {
    const result = await this.authService.register(req.body);

    successResponse(
      res,
      "Register berhasil!!",
      result,
      null,
      201
    );
  };

  login = async (req: Request, res: Response) => {
    const result = await this.authService.login(req.body);

    successResponse(
      res,
      "Login berhasil!!",
      result,
      null,
      200
    );
  };
}
