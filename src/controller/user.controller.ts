import type { Request, Response } from "express";
import type { IUserService } from "../services/user.service";
import { successResponse } from "../utils/response";

export interface IUserController {
  getAll(req: Request, res: Response): Promise<void>;
  getById(req: Request, res: Response): Promise<void>;
  create(req: Request, res: Response): Promise<void>;
  update(req: Request, res: Response): Promise<void>;
  delete(req: Request, res: Response): Promise<void>;
}

export class UserController implements IUserController {
  constructor(private userService: IUserService) {}

  getAll = async (_req: Request, res: Response) => {
    const result = await this.userService.getAllUsers();
    successResponse(res, "Semua user berhasil diambil", result);
  };

  getById = async (req: Request, res: Response) => {
    if (!req.params.id) {
      throw new Error("Parameter tidak ditemukan!");
    }
    const user = await this.userService.getUserById(req.params.id);
    successResponse(res, "User ditemukan", user);
  };

  create = async (req: Request, res: Response) => {
    const { username, email, password_hash } = req.body;
    const user = await this.userService.createUser(
      username,
      email,
      password_hash
    );
    successResponse(res, "User berhasil dibuat", user, null, 201);
  };

  update = async (req: Request, res: Response) => {
    if (!req.params.id) {
        throw new Error("Paramater tidak ditemukan!")
    }
    const user = await this.userService.updateUser(
      req.params.id,
      req.body
    );
    successResponse(res, "User berhasil diperbarui", user);
  };

  delete = async (req: Request, res: Response) => {
    if (!req.params.id) {
        throw new Error("Paramater tidak ditemukan!")
    }
    const user = await this.userService.deleteUser(req.params.id);
    successResponse(res, "User berhasil dihapus", user);
  };

  getStats = async (_req:Request, res:Response) =>{
    const stats = await this.userService.exec()

    successResponse(
      res,
      "User berhasil diambil!",
      stats,
      null,
      200
    )
  }
}
