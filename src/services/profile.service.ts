import type { Prisma, Profile } from "../generated/client";
import * as profileRepo from "../repositories/profile.repository";

interface FindAllProfileParams {
  page: number;
  limit: number;
  search?: {
    name?: string;
    gender?: string;
    address?: string;
  };
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

interface ProfileListResponse {
  profiles: Profile[];
  total: number;
  totalPages: number;
  currenPage: number;
}

/**
 * Get all profiles
 */
export const getAllProfiles = async (
  params: FindAllProfileParams
): Promise<ProfileListResponse> => {
  const { page, limit, search, sortBy, sortOrder } = params;

  const skip = (page - 1) * limit;

  const whereClause: Prisma.ProfileWhereInput = {};

  if (search?.name) {
    whereClause.name = {
      contains: search.name,
      mode: "insensitive",
    };
  }

  if (search?.gender) {
    whereClause.gender = search.gender;
  }

  if (search?.address) {
    whereClause.address = {
      contains: search.address,
      mode: "insensitive",
    };
  }

  const orderBy: Prisma.ProfileOrderByWithRelationInput =
    sortBy
      ? { [sortBy]: sortOrder ?? "desc" }
      : { id: "desc" };

  const profiles = await profileRepo.findAll(
    skip,
    limit,
    whereClause,
    orderBy
  );

  const total = await profileRepo.countAll(whereClause);

  return {
    profiles,
    total,
    totalPages: Math.ceil(total / limit),
    currenPage: page,
  };
};

/**
 * Get profile by ID
 */
export const getProfileById = async (
  id: string
): Promise<Profile> => {
  const numId = parseInt(id);

  const profile = await profileRepo.findById(numId);

  if (!profile) {
    throw new Error("Profile tidak ditemukan");
  }

  return profile;
};

/**
 * Create profile
 */
export const createProfile = async (
  data: {
    name: string;
    gender: string;
    address: string;
    profilePictureUrl: string;
    userId: number;
  }
): Promise<Profile> => {
  return await profileRepo.create({
    name: data.name,
    gender: data.gender,
    address: data.address,
    profilePictureUrl: data.profilePictureUrl,
    user: {
      connect: { id: data.userId },
    },
  });
};

/**
 * Update profile
 */
export const updateProfile = async (
  id: string,
  data: {
    name: string;
    gender: string;
    address: string;
    profilePictureUrl: string;
  }
): Promise<Profile> => {
  const numId = parseInt(id);

  return await profileRepo.update(numId, {
    name: data.name,
    gender: data.gender,
    address: data.address,
    profilePictureUrl: data.profilePictureUrl,
  });
};

/**
 * Delete profile
 */
export const deleteProfile = async (
  id: string
): Promise<Profile> => {
  const numId = parseInt(id);

  return await profileRepo.deleted(numId);
};
