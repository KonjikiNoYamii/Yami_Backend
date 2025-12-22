import type { Prisma, Profile } from "../generated/client";
import type { IProfileRepository } from "../repositories/profile.repository";

export interface FindAllProfileParams {
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

export interface ProfileListResponse {
  profiles: Profile[];
  total: number;
  totalPages: number;
  currentPage: number;
}

export interface IProfileService {
  getAll(params: FindAllProfileParams): Promise<ProfileListResponse>;
  getById(id: string): Promise<Profile>;
  create(data: {
    name: string;
    gender: string;
    address: string;
    profilePictureUrl: string;
    userId: number;
  }): Promise<Profile>;
  update(
    id: string,
    data: {
      name: string;
      gender: string;
      address: string;
      profilePictureUrl: string;
    }
  ): Promise<Profile>;
  delete(id: string): Promise<Profile>;
}

export class ProfileService implements IProfileService {
  constructor(private profileRepo: IProfileRepository) {}

  async getAll(params: FindAllProfileParams): Promise<ProfileListResponse> {
    const { page, limit, search, sortBy, sortOrder } = params;

    const skip = (page - 1) * limit;

    const where: Prisma.ProfileWhereInput = {};

    if (search?.name) {
      where.name = { contains: search.name, mode: "insensitive" };
    }
    if (search?.gender) {
      where.gender = search.gender;
    }
    if (search?.address) {
      where.address = { contains: search.address, mode: "insensitive" };
    }

    const orderBy: Prisma.ProfileOrderByWithRelationInput = sortBy
      ? { [sortBy]: sortOrder ?? "desc" }
      : { id: "desc" };

    const profiles = await this.profileRepo.findAll(
      skip,
      limit,
      where,
      orderBy
    );

    const total = await this.profileRepo.count(where);

    return {
      profiles,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
    };
  }

  async getById(id: string): Promise<Profile> {
    const profile = await this.profileRepo.findById(Number(id));

    if (!profile) {
      throw new Error("Profile tidak ditemukan");
    }

    return profile;
  }

  async create(data: {
    name: string;
    gender: string;
    address: string;
    profilePictureUrl: string;
    userId: number;
  }): Promise<Profile> {
    return this.profileRepo.create({
      name: data.name,
      gender: data.gender,
      address: data.address,
      profilePictureUrl: data.profilePictureUrl,
      user: {
        connect: { id: data.userId },
      },
    });
  }

  async update(
    id: string,
    data: {
      name: string;
      gender: string;
      address: string;
      profilePictureUrl: string;
    }
  ): Promise<Profile> {
    return this.profileRepo.update(Number(id), data);
  }

  async delete(id: string): Promise<Profile> {
    return this.profileRepo.delete(Number(id));
  }
}
