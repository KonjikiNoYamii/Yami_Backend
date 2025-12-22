import type { Request, Response } from "express";
import type { ICategoryService } from "../services/category.service";
import { successResponse } from "../utils/response";

export class CategoryController {
  constructor(private categoryService: ICategoryService) {}

  getAll = async (req: Request, res: Response) => {
    const result = await this.categoryService.getAll({
      page: Number(req.query.page) || 1,
      limit: Number(req.query.limit) || 10,
      sortBy: req.query.sortBy as string,
      sortOrder: req.query.sortOrder as "asc" | "desc",
      search: {
        name: req.query.name as string,
      },
    });

    successResponse(res, "Category berhasil diambil!", result.categories, {
      page: result.currentPage,
      limit: Number(req.query.limit) || 10,
      total: result.total,
      totalPages: result.totalPages,
    });
  };

  getById = async (req: Request, res: Response) => {
    if (!req.params.id) {
        throw new Error("Parameter tidak ditemukan!!")
    }
    const category = await this.categoryService.getById(req.params.id);
    successResponse(res, "Kategori ditemukan!", category);
  };

  create = async (req: Request, res: Response) => {
    const category = await this.categoryService.create(req.body.name);

    successResponse(res, "Category berhasil dibuat!", category, null, 201);
  };

  update = async (req: Request, res: Response) => {
    if (!req.params.id) {
        throw new Error("Parameter tidak ditemukan!!")
    }
    const updated = await this.categoryService.update(
      req.params.id,
      req.body
    );

    successResponse(res, "Category berhasil diupdate!", updated, null, 201);
  };

  delete = async (req: Request, res: Response) => {
    if (!req.params.id) {
        throw new Error("Parameter tidak ditemukan!!")
    }
    const removed = await this.categoryService.delete(req.params.id);

    successResponse(res, "Category berhasil dihapus!", removed);
  };
}
