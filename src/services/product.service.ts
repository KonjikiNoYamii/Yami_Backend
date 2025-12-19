import type { Prisma, Product } from "../generated/client";
import * as productRepo from "../repositories/product.repository";

interface FindAllParams {
  page: number;
  limit: number;
  search?: {
    name?: string;
    min_price?: number;
    max_price?: number;
  };
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}
interface ProductListResponse {
  products: Product[];
  total: number;
  totalPages: number;
  currenPage: number;
}

export const getAllProducts = async (
  params: FindAllParams
): Promise<ProductListResponse> => {
  const { page, limit, search, sortBy, sortOrder } = params;

  const skip = (page - 1) * limit;

  const whereClause: Prisma.ProductWhereInput = {
    deletedAt: null,
  };

  if (search?.name) {
    whereClause.name = {
      contains: search.name,
      mode: "insensitive",
    };
  }

  if (search?.min_price || search?.max_price) {
    whereClause.price = {}
    if (search.min_price) {
        whereClause.price.gte = search.min_price
    }
    if (search.max_price) {
        whereClause.price.lte = search.max_price
    }
  }

  const sortCriteria: Prisma.ProductOrderByWithRelationInput = sortBy
    ? { [sortBy]: sortOrder || "desc" }
    : { createdAt: "desc" };

  const products = await productRepo.findAll(
    skip,
    limit,
    whereClause,
    sortCriteria
  );
  const total = await productRepo.countAll(whereClause);

  return {
    products,
    total,
    totalPages: Math.ceil(total / limit),
    currenPage: page,
  };
};

export const getProductById = async (id: string): Promise<Product> => {
  const numid = parseInt(id);

  const product = await productRepo.findById(numid);

  if (!product) {
    throw new Error("Product tidak ada!");
  }

  return product;
};

export const createProduct = async (data: {
  name: string;
  description: string;
  price: number;
  stock: number;
  categoryId: number;
  image: string;
}): Promise<Product> => {
  const product = {
    name: data.name,
    description: data.description ?? null,
    price: data.price,
    stock: data.stock,
    categoryId: data.categoryId,
    image: data.image,
  };
  return await productRepo.create(product);
};

export const updateProduct = async (
  id: string,
  data: Partial<Product>
): Promise<Product> => {
  const numid = parseInt(id);

  return await productRepo.update(numid, data);
};

export const deleteProduct = async (id: string): Promise<Product> => {
  const numid = parseInt(id);

  return await productRepo.deleted(
    numid
  );
};
