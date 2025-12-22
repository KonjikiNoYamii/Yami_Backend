import type { Request, Response } from "express";
import type { IProfileService } from "../services/profile.service";
import { successResponse } from "../utils/response";

export class ProfileController {
  constructor(private profileService: IProfileService) {}

  getAll = async (req: Request, res: Response) => {
    const result = await this.profileService.getAll({
      page: Number(req.query.page) || 1,
      limit: Number(req.query.limit) || 10,
      sortBy: req.query.sortBy as string,
      sortOrder: req.query.sortOrder as "asc" | "desc",
      search: {
        name: req.query.name as string,
        gender: req.query.gender as string,
        address: req.query.address as string,
      },
    });

    successResponse(res, "Profile berhasil diambil!", result.profiles, {
      page: result.currentPage,
      limit: Number(req.query.limit) || 10,
      total: result.total,
      totalPages: result.totalPages,
    });
  };

  getById = async (req: Request, res: Response) => {
    if (!req.params.id) {
      throw new Error("Paramter tidak ada!")      
    }
    const profile = await this.profileService.getById(req.params.id);
    successResponse(res, "Profile ditemukan!", profile);
  };

  create = async (req: Request, res: Response) => {
    const file = req.file;

    const result = await this.profileService.create({
      ...req.body,
      userId: Number(req.body.userId),
      profilePictureUrl: `/public/upload/${file?.filename}`,
    });

    successResponse(res, "Profile berhasil dibuat!", result, null, 201);
  };

  update = async (req: Request, res: Response) => {
    const file = req.file;

    if (!req.params.id) {
      throw new Error("Paramter tidak ada!")      
    }

    const result = await this.profileService.update(req.params.id, {
      ...req.body,
      profilePictureUrl: `/public/upload/${file?.filename}`,
    });

    successResponse(res, "Profile berhasil diupdate!", result, null, 201);
  };

  delete = async (req: Request, res: Response) => {
    if (!req.params.id) {
      throw new Error("Paramter tidak ada!")      
    }
    const result = await this.profileService.delete(req.params.id);
    successResponse(res, "Profile berhasil dihapus!", result);
  };
}
