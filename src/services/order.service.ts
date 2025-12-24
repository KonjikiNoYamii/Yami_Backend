import type { PrismaClient, Order, Prisma } from "../generated/client";
import type { IOrderRepository } from "../repositories/order.repository";

export interface CreateOrderInput {
  orderItem: {
    productId: number;
    quantity: number;
  }[];
}

export interface FindAllOrderParams {
  page: number;
  limit: number;
  search?: {
    userId?: number;
    minTotal?: number;
    maxTotal?: number;
  };
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export interface OrderListResponse {
  orders: Order[];
  total: number;
  totalPages: number;
  currentPage: number;
}

export class OrderService {
  constructor(
    private prisma: PrismaClient,
    private orderRepo: IOrderRepository

  ) {}

  // ✅ CHECKOUT YANG BENAR
  checkout = async (userId: number, data: CreateOrderInput) => {
    return this.prisma.$transaction(async (tx) => {
      let total = 0;

      const productIds = data.orderItem.map(i => i.productId);

      const products = await this.orderRepo.findProductsForCheckout(productIds, tx);

      const orderItems: Prisma.OrderItemsCreateWithoutOrderInput[] = [];

      for (const item of data.orderItem) {
        const product = products.find(p => p.id === item.productId);

        if (!product) {
          throw new Error(`Product ${item.productId} tidak ditemukan`);
        }

        if (product.stock < item.quantity) {
          throw new Error(`Stock produk ${item.productId} tidak cukup`);
        }

        total += Number(product.price) * item.quantity;

        orderItems.push({
          product:{
            connect:{
              id:product.id
            }
          },
          quantity: item.quantity,
          priceAtTime: product.price,
        });

        await this.orderRepo.decrementStock(product.id, item.quantity, tx);
      }

      return this.orderRepo.createOrderWithItems(
        {
          user: { connect: { id: userId } },
          total,
          orderItems: {
            create: orderItems,
          },
        },
        tx
      );
    });
  };

  getAllOrders = async (params: FindAllOrderParams): Promise<OrderListResponse> => {
    const { page, limit, search, sortBy, sortOrder } = params;

    const skip = (page - 1) * limit;

    const where: Prisma.OrderWhereInput = {
      deletedAt: null,
    };

    if (search?.userId) where.userId = search.userId;

    if (search?.minTotal || search?.maxTotal) {
      where.total = {};
      if (search.minTotal) where.total.gte = search.minTotal;
      if (search.maxTotal) where.total.lte = search.maxTotal;
    }

    const orderBy: Prisma.OrderOrderByWithRelationInput = sortBy
      ? { [sortBy]: sortOrder ?? "desc" }
      : { createdAt: "desc" };

    const orders = await this.orderRepo.findAll(skip, limit, where, orderBy);
    const total = await this.orderRepo.countAll(where);

    return {
      orders,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
    };
  };

  getOrderById = async (id: string) => {
    const order = await this.orderRepo.findById(parseInt(id));
    if (!order) throw new Error("Order tidak ditemukan");
    return order;
  };

  deleteOrder = async (id: string) => {
    return this.orderRepo.softDelete(parseInt(id));
  };

  exec = async () =>{
    const stats = await this.orderRepo.getStats()
    const userStats = await this.orderRepo.getOrderStatsByUser()

    return {
      overview:stats,
      byUser:userStats
    }

  }
}
