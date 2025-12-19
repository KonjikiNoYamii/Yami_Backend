import type { Category, Prisma } from "../generated/client"
import * as categoryRepo from "../repositories/category.repository"

interface FindAllCategoryParams {
  page: number
  limit: number
  search?: {
    name?: string
  }
  sortBy?: string
  sortOrder?: "asc" | "desc"
}

interface CategoryListResponse {
  categories: Category[]
  total: number
  totalPages: number
  currentPage: number
}

export const getAllCategories = async (
  params: FindAllCategoryParams
): Promise<CategoryListResponse> => {
  const { page, limit, search, sortBy, sortOrder } = params

  const skip = (page - 1) * limit

  const whereClause: Prisma.CategoryWhereInput = {
    deletedAt: null
  }

  if (search?.name) {
    whereClause.name = {
      contains: search.name,
      mode: "insensitive"
    }
  }

  const orderBy: Prisma.CategoryOrderByWithRelationInput = sortBy
    ? { [sortBy]: sortOrder ?? "desc" }
    : { id: "desc" }

  const categories = await categoryRepo.findAll(
    skip,
    limit,
    whereClause,
    orderBy
  )

  const total = await categoryRepo.countAll(whereClause)

  return {
    categories,
    total,
    totalPages: Math.ceil(total / limit),
    currentPage: page
  }
}

export const getCategoryById = async (id: string): Promise<Category> => {
  const numId = parseInt(id)

  const category = await categoryRepo.findById(numId)

  if (!category) {
    throw new Error("Category tidak ditemukan")
  }

  return category
}

export const createCategory = async (name: string): Promise<Category> => {
  const exist = await categoryRepo.findByName(name)

  if (exist) {
    throw new Error("Nama category sudah digunakan")
  }

  return categoryRepo.create(name)
}

export const updateCategory = async (
  id: string,
  data: Prisma.CategoryUpdateInput
): Promise<Category> => {
  const numId = parseInt(id)
  return categoryRepo.update(numId, data)
}

export const deleteCategory = async (id: string): Promise<Category> => {
  const numId = parseInt(id)
  return categoryRepo.softDelete(numId)
}
