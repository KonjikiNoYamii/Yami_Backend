import type { PrismaClient, Prisma, Profile } from "../generated/client";

export interface IProfileRepository {
  findAll(
    skip: number,
    take: number,
    where: Prisma.ProfileWhereInput,
    orderBy: Prisma.ProfileOrderByWithRelationInput
  ): Promise<Profile[]>;

  count(where: Prisma.ProfileWhereInput): Promise<number>;

  findById(id: number): Promise<Profile | null>;

  create(data: Prisma.ProfileCreateInput): Promise<Profile>;

  update(id: number, data: Prisma.ProfileUpdateInput): Promise<Profile>;

  delete(id: number): Promise<Profile>;
}

export class ProfileRepository implements IProfileRepository {
  constructor(private prisma: PrismaClient) {}

  async findAll(
    skip: number,
    take: number,
    where: Prisma.ProfileWhereInput,
    orderBy: Prisma.ProfileOrderByWithRelationInput
  ) {
    return this.prisma.profile.findMany({
      skip,
      take,
      where,
      orderBy,
    });
  }

  async count(where: Prisma.ProfileWhereInput) {
    return this.prisma.profile.count({ where });
  }

  async findById(id: number) {
    return this.prisma.profile.findUnique({ where: { id } });
  }

  async create(data: Prisma.ProfileCreateInput) {
    return this.prisma.profile.create({ data });
  }

  async update(id: number, data: Prisma.ProfileUpdateInput) {
    return this.prisma.profile.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return this.prisma.profile.delete({ where: { id } });
  }
}
