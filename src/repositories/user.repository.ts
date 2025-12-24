import type { Prisma, PrismaClient, User } from "../generated/client";

export interface IUserRepository {
  findAll(): Promise<User[]>;
  findById(id: number): Promise<User | null>;
  findByUsernameOrEmail(
    username: string,
    email: string
  ): Promise<User | null>;
  create(data: {
    username: string;
    email: string;
    password_hash: string;
  }): Promise<User>;
  update(id: number, data: Partial<User>): Promise<User>;
  softDelete(id: number): Promise<User>;
  getStats():Promise<Prisma.GetUserAggregateType<{
    _count:{
      id:true
    }
  }>>
}

export class UserRepository implements IUserRepository {
  constructor(private prisma: PrismaClient) {}

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany({
      where: { deletedAt: null },
      include: { profile:true,orders: true },
    });
  }

  async findById(id: number): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: { id, deletedAt: null },
      include: { profile:true ,orders: true },
    });
  }

  async findByUsernameOrEmail(
    username: string,
    email: string
  ): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: {
        OR: [{ username }, { email }],
        deletedAt: null,
      },
    });
  }

  async create(data: {
    username: string;
    email: string;
    password_hash: string;
  }): Promise<User> {
    return this.prisma.user.create({ data });
  }

  async update(id: number, data: Partial<User>): Promise<User> {
    return this.prisma.user.update({
      where: { id, deletedAt: null },
      data,
    });
  }

  async softDelete(id: number): Promise<User> {
    return this.prisma.user.update({
      where: { id, deletedAt: null },
      data: { deletedAt: new Date() },
    });
  }

  async getStats() {
  return this.prisma.user.aggregate({
    _count: { id: true },
  });
}


}
