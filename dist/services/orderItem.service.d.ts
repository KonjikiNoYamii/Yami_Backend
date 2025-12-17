export declare const getAllOrderItem: () => Promise<{
    items: ({
        product: {
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
        };
        order: {
            id: number;
            deletedAt: Date | null;
            total: import("@prisma/client-runtime-utils").Decimal;
            createdAt: Date;
            updatedAt: Date;
            userId: number;
        };
    } & {
        id: number;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        quantity: number;
        priceAtTime: import("@prisma/client-runtime-utils").Decimal | null;
        productId: number;
        orderId: number;
    })[];
    total: number;
}>;
export declare const getOrderItemById: (id: string) => Promise<({
    product: {
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
    };
    order: {
        id: number;
        deletedAt: Date | null;
        total: import("@prisma/client-runtime-utils").Decimal;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    };
} & {
    id: number;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    quantity: number;
    priceAtTime: import("@prisma/client-runtime-utils").Decimal | null;
    productId: number;
    orderId: number;
}) | null>;
export declare const createOrderItem: (orderId: number, productId: number, quantity: number) => Promise<{
    id: number;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    quantity: number;
    priceAtTime: import("@prisma/client-runtime-utils").Decimal | null;
    productId: number;
    orderId: number;
}>;
export declare const updateOrderItem: (id: string, data: any) => Promise<{
    id: number;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    quantity: number;
    priceAtTime: import("@prisma/client-runtime-utils").Decimal | null;
    productId: number;
    orderId: number;
}>;
export declare const deleteOrderItem: (id: string) => Promise<{
    id: number;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    quantity: number;
    priceAtTime: import("@prisma/client-runtime-utils").Decimal | null;
    productId: number;
    orderId: number;
}>;
//# sourceMappingURL=orderItem.service.d.ts.map