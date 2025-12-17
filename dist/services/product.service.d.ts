import type { Product } from "../generated/client";
export declare const getAllProducts: () => Promise<{
    products: Product[];
    total: number;
}>;
export declare const getProductById: (id: string) => Promise<{
    name: string;
    description: string | null;
    id: number;
    deletedAt: Date | null;
    price: import("@prisma/client-runtime-utils").Decimal;
    stock: number;
    image: string;
    categoryId: number | null;
    createdAt: Date;
    updatedAt: Date;
} | null>;
export declare const searchProducts: (name?: string, min_price?: number, max_price?: number) => Promise<Product[]>;
export declare const createProduct: (data: {
    name: string;
    description: string;
    price: number;
    stock: number;
    categoryId: number;
    image: string;
}) => Promise<Product>;
export declare const updateProduct: (id: string, data: Partial<Product>) => Promise<Product>;
export declare const deleteProduct: (id: string) => Promise<Product>;
//# sourceMappingURL=product.service.d.ts.map