import type { Prisma, PrismaClient, OrderItems } from "../generated/client";

export interface IOrderItemRepository {
  findAll(
    skip: number,
    take: number,
    where: Prisma.OrderItemsWhereInput,
    orderBy: Prisma.OrderItemsOrderByWithRelationInput
  ): Promise<OrderItems[]>;

  countAll(where: Prisma.OrderItemsWhereInput): Promise<number>;

  findById(id: number): Promise<OrderItems | null>;

  create(data: Prisma.OrderItemsCreateInput): Promise<OrderItems>;

  update(id: number, data: Prisma.OrderItemsUpdateInput): Promise<OrderItems>;

  softDelete(id: number): Promise<OrderItems>;
}

export class OrderItemRepository implements IOrderItemRepository {
  constructor(private prisma: PrismaClient) {}

  findAll(skip: number, take: number, where: Prisma.OrderItemsWhereInput, orderBy: Prisma.OrderItemsOrderByWithRelationInput) {
    return this.prisma.orderItems.findMany({
      skip,
      take,
      where,
      orderBy,
      include: {
        order: true,
        product: true,
      },
    });
  }

  countAll(where: Prisma.OrderItemsWhereInput) {
    return this.prisma.orderItems.count({ where });
  }

  findById(id: number) {
    return this.prisma.orderItems.findUnique({
      where: { id },
      include: { order: true, product: true },
    });
  }

  create(data: Prisma.OrderItemsCreateInput) {
    return this.prisma.orderItems.create({ data });
  }

  update(id: number, data: Prisma.OrderItemsUpdateInput) {
    return this.prisma.orderItems.update({
      where: { id },
      data,
    });
  }

  softDelete(id: number) {
    return this.prisma.orderItems.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
