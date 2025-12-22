import type { Prisma, PrismaClient, Order } from "../generated/client";

export interface IOrderRepository {
  findProductsForCheckout(
    productIds: number[],
    tx: Prisma.TransactionClient
  ): Promise<
    {
      id: number;
      price: Prisma.Decimal;
      stock: number;
    }[]
  >;

  createOrderWithItems(
    data: Prisma.OrderCreateInput,
    tx: Prisma.TransactionClient
  ): Promise<Order>;

  decrementStock(
    productId: number,
    qty: number,
    tx: Prisma.TransactionClient
  ): Promise<void>;

  findAll(
    skip: number,
    take: number,
    where: Prisma.OrderWhereInput,
    orderBy: Prisma.OrderOrderByWithRelationInput
  ): Promise<Order[]>;

  countAll(where: Prisma.OrderWhereInput): Promise<number>;

  findById(id: number): Promise<Order | null>;

  softDelete(id: number): Promise<Order>;
}

export class OrderRepository implements IOrderRepository {
  constructor(private prisma: PrismaClient) {}

  async findProductsForCheckout(productIds: number[], tx: Prisma.TransactionClient) {
    return tx.product.findMany({
      where: {
        deletedAt: null,
        id: { in: productIds },
      },
      select: {
        id: true,
        price: true,
        stock: true,
      },
    });
  }

  async decrementStock(productId: number, qty: number, tx: Prisma.TransactionClient) {
    await tx.product.update({
      where: { id: productId },
      data: {
        stock: { decrement: qty },
      },
    });
  }

  async createOrderWithItems(data: Prisma.OrderCreateInput, tx: Prisma.TransactionClient) {
    return tx.order.create({
      data,
      include: {
        user: true,
        orderItems: {
          include: { product: true },
        },
      },
    });
  }

  async findAll(skip: number, take: number, where: Prisma.OrderWhereInput, orderBy: Prisma.OrderOrderByWithRelationInput) {
    return this.prisma.order.findMany({
      skip,
      take,
      where,
      orderBy,
      include: {
        user: true,
        orderItems: true,
      },
    });
  }

  async countAll(where: Prisma.OrderWhereInput) {
    return this.prisma.order.count({ where });
  }

  async findById(id: number) {
    return this.prisma.order.findUnique({
      where: { id },
      include: {
        user: true,
        orderItems: { include: { product: true } },
      },
    });
  }

  async softDelete(id: number) {
    return this.prisma.order.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
