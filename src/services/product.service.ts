import type { Category, Prisma, Product } from "../generated/client";
import type { IProductRepository } from "../repositories/product.repository";

export interface FindAllParams {
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
export interface ProductListResponse {
  products: Product[];
  total: number;
  totalPages: number;
  currenPage: number;
}

export interface IProductService {
  getAllProducts(params: FindAllParams): Promise<ProductListResponse>;
  getProductById(id: string): Promise<Category | (null & Product) | null>;
  createProduct(data: {
    name: string;
    description: string;
    price: number;
    stock: number;
    categoryId: number;
    image: string;
  }): Promise<Product>;
  updateProduct(id: string, data: {
    name?: string;
    description?: string;
    price?: number;
    stock?: number;
    categoryId?: number;
    image?: string;
  }): Promise<Product>;
  deleteProduct(id: string): Promise<Product>;
  exec():Promise<{overview:any,byCategory:any}>
}

export class ProductService implements IProductService {
  constructor(private productRepo: IProductRepository) {}

  getAllProducts = async (
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
      whereClause.price = {};
      if (search.min_price) {
        whereClause.price.gte = search.min_price;
      }
      if (search.max_price) {
        whereClause.price.lte = search.max_price;
      }
    }

    const sortCriteria: Prisma.ProductOrderByWithRelationInput = sortBy
      ? { [sortBy]: sortOrder || "desc" }
      : { createdAt: "desc" };

    const products = await this.productRepo.list(
      skip,
      limit,
      whereClause,
      sortCriteria
    );
    const total = await this.productRepo.countAll(whereClause);

    return {
      products,
      total,
      totalPages: Math.ceil(total / limit),
      currenPage: page,
    };
  };

  getProductById = async (
    id: string
  ): Promise<Category | (null & Product) | null> => {
    const numid = parseInt(id);

    const product = await this.productRepo.findById(numid);

    if (!product) {
      throw new Error("Product tidak ada!");
    }

    return product;
  };

  createProduct = async (data: {
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
    return await this.productRepo.create(product);
  };

  updateProduct = async (
    id: string,
    data: {
    name?: string,
    description?: string,
    price?: number,
    stock?: number,
    categoryId?: number,
    image?: string,
  }
  ): Promise<Product> => {
    const numid = parseInt(id);

    const products = {
      name:String(data.name),
      description:String(data.description),
      price:Number(data.price),
      stock:Number(data.stock),
      categoryId:Number(data.categoryId),
      image:String(data.image)
    }
    return await this.productRepo.update(numid, products);
  };

  deleteProduct = async (id: string): Promise<Product> => {
    const numid = parseInt(id);

    return await this.productRepo.softDelete(numid);
  };

  exec = async() =>{
    const stats = await this.productRepo.getStats()
    const categoryStats = await this.productRepo.getProductByCategoryStats()

    return{
      overview:stats,
      byCategory:categoryStats
    }
  }
}
