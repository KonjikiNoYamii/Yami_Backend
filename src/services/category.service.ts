import type { Category } from "../generated/client"
import { getPrisma } from "../prisma"

const prisma = getPrisma()

interface FindAllCategoryParams {
  page: number
  limit: number
  search?: {
    name?: string
  }
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
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

  const whereClause: any = {
    deletedAt: null,
  }

  if (search?.name) {
    whereClause.name = {
      contains: search.name,
      mode: 'insensitive',
    }
  }

  const categories = await prisma.category.findMany({
    skip,
    take: limit,
    where: whereClause,
    orderBy: sortBy
      ? { [sortBy]: sortOrder ?? 'desc' }
      : { id: 'desc' },
    include: {
      products: true, // bisa dihapus kalau tidak perlu
    },
  })

  const total = await prisma.category.count({
    where: whereClause,
  })

  return {
    categories,
    total,
    totalPages: Math.ceil(total / limit),
    currentPage: page,
  }
}


export const getCategoryById = async (id:string) =>{
    const numid = parseInt(id)

    return await prisma.category.findUnique({
        where:{
            id:numid
        }
    })
}

export const createCategory = async (name:string) =>{
    const exist = await prisma.category.findFirst({
        where:{
            name,
            deletedAt:null
        }
    })
    if (exist) {
        throw new Error("Nama sudah dipakai")
    }

    return await prisma.category.create({
        data:{name}
    })
}

export const updateCategory = async(id:string, data:Category) =>{
    const numid = parseInt(id)
    return await prisma.category.update({
        where:{
            id: numid,
            deletedAt:null
        },
        data
    })
}

export const deleteCategory = async (id:string) =>{
    const numid = parseInt(id)

    return await prisma.category.update({
        where:{
            id:numid,
            deletedAt:null
        },
        data:{
            deletedAt: new Date()
        }
    })
}