import type { PrismaClient, Prisma, Category } from "../generated/client";

export interface ICategoryRepository {
  findAll(
    skip: number,
    take: number,
    where: Prisma.CategoryWhereInput,
    orderBy: Prisma.CategoryOrderByWithRelationInput
  ): Promise<Category[]>;

  count(where: Prisma.CategoryWhereInput): Promise<number>;

  findById(id: number): Promise<Category | null>;

  findByName(name: string): Promise<Category | null>;

  create(name: string): Promise<Category>;

  update(id: number, data: Prisma.CategoryUpdateInput): Promise<Category>;

  softDelete(id: number): Promise<Category>;
}

export class CategoryRepository implements ICategoryRepository {
  constructor(private prisma: PrismaClient) {}

  async findAll(
    skip: number,
    take: number,
    where: Prisma.CategoryWhereInput,
    orderBy: Prisma.CategoryOrderByWithRelationInput
  ) {
    return this.prisma.category.findMany({
      skip,
      take,
      where,
      orderBy,
      include: { products: true },
    });
  }

  async count(where: Prisma.CategoryWhereInput) {
    return this.prisma.category.count({ where });
  }

  async findById(id: number) {
    return this.prisma.category.findUnique({ where: { id } });
  }

  async findByName(name: string) {
    return this.prisma.category.findFirst({
      where: { name, deletedAt: null },
    });
  }

  async create(name: string) {
    return this.prisma.category.create({
      data: { name },
    });
  }

  async update(id: number, data: Prisma.CategoryUpdateInput) {
    return this.prisma.category.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: number) {
    return this.prisma.category.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }

}
