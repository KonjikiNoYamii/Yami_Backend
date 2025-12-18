import type { Request, Response } from 'express'
import { createCategory, deleteCategory, getAllCategories, getCategoryById, updateCategory } from '../services/category.service'
import { successResponse } from '../utils/response'

export const getAll = async (req: Request, res: Response) => {
  const page = Number(req.query.page) || 1
  const limit = Number(req.query.limit) || 10
  const sortBy = req.query.sortBy as string
  const sortOrder = req.query.sortOrder as 'asc' | 'desc'

  const search = {
    name: req.query.name as string
  }

  const result = await getAllCategories({
    page,
    limit,
    search,
    sortBy,
    sortOrder,
  })

  successResponse(res, 'Category berhasil diambil!', result.categories, {
    page: result.currentPage,
    limit,
    total: result.total,
    totalPages: result.totalPages,
  })
}


export const getById = async (req:Request, res:Response) =>{
    if (!req.params.id) {
        throw new Error("Paramater tidak ada")
    }
    const category = await getCategoryById(req.params.id)

    successResponse(
        res,
        "Kategori ditemukan!",
        category,
        null,
        200
    )
}

export const create = async (req:Request, res:Response) =>{
    const category = await createCategory(req.body.name)

    successResponse(
        res,
        "Category berhasil dibuat",
        category,
        null,
        201
    )
}

export const update = async(req:Request, res:Response) => {
    if (!req.params.id) {
        throw new Error("Paramater tidak ditemukan!")
    }

    const updated = await updateCategory(req.params.id, req.body)

    successResponse(
        res,
        "Category berhasil diuba!h",
        updated,
        null,
        201
    )
}

export const deletedCategory = async(req:Request, res:Response) => {
    if (!req.params.id) {
        throw new Error("Parameter tidak ditemukan")
    }

    const remove = await deleteCategory(req.params.id)

    successResponse(
        res,
        "kategori telah dihapus!",
        remove,
        null,
        200
    )
}
