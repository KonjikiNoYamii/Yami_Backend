import type { Prisma, Category } from "../generated/client"
import { getPrisma } from "../prisma"

const prisma = getPrisma()

export const findAll = async (
  skip: number,
  take: number,
  where: Prisma.CategoryWhereInput,
  orderBy: Prisma.CategoryOrderByWithRelationInput
): Promise<Category[]> => {
  return prisma.category.findMany({
    skip,
    take,
    where,
    orderBy,
    include: {
      products: true
    }
  })
}

export const countAll = async (
  where: Prisma.CategoryWhereInput
): Promise<number> => {
  return prisma.category.count({ where })
}

export const findById = async (id: number): Promise<Category | null> => {
  return prisma.category.findUnique({
    where: { id }
  })
}

export const findByName = async (name: string): Promise<Category | null> => {
  return prisma.category.findFirst({
    where: {
      name,
      deletedAt: null
    }
  })
}

export const create = async (name: string): Promise<Category> => {
  return prisma.category.create({
    data: { name }
  })
}

export const update = async (
  id: number,
  data: Prisma.CategoryUpdateInput
): Promise<Category> => {
  return prisma.category.update({
    where: { id },
    data
  })
}

export const softDelete = async (id: number): Promise<Category> => {
  return prisma.category.update({
    where: { id },
    data: { deletedAt: new Date() }
  })
}
