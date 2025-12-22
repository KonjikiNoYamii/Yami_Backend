import type { Prisma, OrderItems } from "../generated/client";
import type { IOrderItemRepository } from "../repositories/orderItem.repository";

export interface FindAllOrderItemsParams {
  page: number;
  limit: number;
  search?: {
  orderId?: number;
  productId?: number;
} | undefined;
  sortBy?: string | undefined;
  sortOrder?: "asc" | "desc" | undefined;
}

export interface OrderItemsListResponse {
  orderItems: OrderItems[];
  total: number;
  totalPages: number;
  currentPage: number;
}

export interface IOrderItemService {
  getAll(params: FindAllOrderItemsParams): Promise<OrderItemsListResponse>;
  getById(id: string): Promise<OrderItems>;
  create(data: { orderId: number; productId: number; quantity: number }): Promise<OrderItems>;
  update(id: string, data: Partial<OrderItems>): Promise<OrderItems>;
  delete(id: string): Promise<OrderItems>;
}

export class OrderItemService implements IOrderItemService {
  constructor(private orderItemRepo: IOrderItemRepository) {}

  getAll = async (params: FindAllOrderItemsParams): Promise<OrderItemsListResponse> => {
    const { page, limit, search, sortBy, sortOrder } = params;
    const skip = (page - 1) * limit;

    const where: Prisma.OrderItemsWhereInput = { deletedAt: null };

    if (search?.orderId) where.orderId = search.orderId;
    if (search?.productId) where.productId = search.productId;

    const orderBy: Prisma.OrderItemsOrderByWithRelationInput = sortBy
      ? { [sortBy]: sortOrder ?? "desc" }
      : { createdAt: "desc" };

    const orderItems = await this.orderItemRepo.findAll(skip, limit, where, orderBy);
    const total = await this.orderItemRepo.countAll(where);

    return {
      orderItems,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
    };
  };

  getById = async (id: string) => {
    const item = await this.orderItemRepo.findById(Number(id));
    if (!item) throw new Error("Order item tidak ditemukan!");
    return item;
  };

  create = async (data: {
  orderId: number;
  productId: number;
  quantity: number;
}) => {
  return this.orderItemRepo.create({
    quantity: data.quantity,
    order: {
      connect: { id: data.orderId },
    },
    product: {
      connect: { id: data.productId },
    },
  });
};


  update = async (id: string, data: Partial<OrderItems>) => {
    return this.orderItemRepo.update(Number(id), data);
  };

  delete = async (id: string) => {
    return this.orderItemRepo.softDelete(Number(id));
  };
}
