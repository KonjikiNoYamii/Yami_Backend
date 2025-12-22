import type { Prisma, Category } from "../generated/client";
import type { ICategoryRepository } from "../repositories/category.repository";

export interface FindAllCategoryParams {
  page: number;
  limit: number;
  search?: {
    name?: string;
  };
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export interface CategoryListResponse {
  categories: Category[];
  total: number;
  totalPages: number;
  currentPage: number;
}

export interface ICategoryService {
  getAll(params: FindAllCategoryParams): Promise<CategoryListResponse>;
  getById(id: string): Promise<Category>;
  create(name: string): Promise<Category>;
  update(id: string, data: Prisma.CategoryUpdateInput): Promise<Category>;
  delete(id: string): Promise<Category>;
}

export class CategoryService implements ICategoryService {
  constructor(private categoryRepo: ICategoryRepository) {}

  async getAll(
    params: FindAllCategoryParams
  ): Promise<CategoryListResponse> {
    const { page, limit, search, sortBy, sortOrder } = params;

    const skip = (page - 1) * limit;

    const where: Prisma.CategoryWhereInput = {
      deletedAt: null,
    };

    if (search?.name) {
      where.name = {
        contains: search.name,
        mode: "insensitive",
      };
    }

    const orderBy: Prisma.CategoryOrderByWithRelationInput =
      sortBy
        ? { [sortBy]: sortOrder ?? "desc" }
        : { id: "desc" };

    const categories = await this.categoryRepo.findAll(
      skip,
      limit,
      where,
      orderBy
    );

    const total = await this.categoryRepo.count(where);

    return {
      categories,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
    };
  }

  async getById(id: string): Promise<Category> {
    const category = await this.categoryRepo.findById(Number(id));

    if (!category) {
      throw new Error("Category tidak ditemukan");
    }

    return category;
  }

  async create(name: string): Promise<Category> {
    const exist = await this.categoryRepo.findByName(name);

    if (exist) {
      throw new Error("Nama category sudah digunakan");
    }

    return this.categoryRepo.create(name);
  }

  async update(
    id: string,
    data: Prisma.CategoryUpdateInput
  ): Promise<Category> {
    return this.categoryRepo.update(Number(id), data);
  }

  async delete(id: string): Promise<Category> {
    return this.categoryRepo.softDelete(Number(id));
  }
}
