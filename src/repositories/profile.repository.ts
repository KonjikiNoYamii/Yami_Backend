import { Prisma } from "../generated/client";
import { getPrisma } from "../prisma";

const prisma = getPrisma();

/**
 * Find all profiles with pagination & filter
 */
export const findAll = async (
  skip: number,
  take: number,
  where: Prisma.ProfileWhereInput,
  orderBy: Prisma.ProfileOrderByWithRelationInput
) => {
  return await prisma.profile.findMany({
    skip,
    take,
    where,
    orderBy,
  });
};

/**
 * Count profiles
 */
export const countAll = async (
  where: Prisma.ProfileWhereInput
) => {
  return await prisma.profile.count({
    where,
  });
};

/**
 * Find profile by ID
 */
export const findById = async (id: number) => {
  return await prisma.profile.findUnique({
    where: {
      id,
    },
  });
};

/**
 * Create profile
 */
export const create = async (
  data: Prisma.ProfileCreateInput
) => {
  return await prisma.profile.create({
    data,
  });
};

/**
 * Update profile
 */
export const update = async (
  id: number,
  data: Prisma.ProfileUpdateInput
) => {
  return await prisma.profile.update({
    where: {
      id,
    },
    data,
  });
};

/**
 * Delete profile (hard delete)
 */
export const deleted = async (id: number) => {
  return await prisma.profile.delete({
    where: {
      id,
    },
  });
};
