import type { PrismaClient, User } from "../generated/client";

export interface IAuthRepository {
  findByEmail(email: string): Promise<User | null>;
  create(data: {
    username: string;
    email: string;
    password_hash: string;
    role: string;
  }): Promise<User>;
}

export class AuthRepository implements IAuthRepository {
  constructor(private prisma: PrismaClient) {}

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: {
        email,
        deletedAt: null,
      },
    });
  }

  async create(data: {
    username: string;
    email: string;
    password_hash: string;
    role: string;
  }): Promise<User> {
    return this.prisma.user.create({ data });
  }
}
