export interface CreateOrder {
    userId: number;
    total: number;
    orderItem: orderitem[];
}
export interface orderitem {
    productId: number;
    quantity: number;
}
export declare const checkout: (data: CreateOrder) => Promise<{
    id: number;
    deletedAt: Date | null;
    total: import("@prisma/client-runtime-utils").Decimal;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
}>;
export declare const getAllOrder: () => Promise<{
    orders: ({
        orderItems: ({
            product: {
                name: string;
                description: string | null;
                id: number;
                deletedAt: Date | null;
                price: import("@prisma/client-runtime-utils").Decimal;
                stock: number;
                categoryId: number | null;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            quantity: number;
            orderId: number;
            productId: number;
        })[];
        user: {
            name: string;
            id: number;
            deletedAt: Date | null;
            email: string;
            password_hash: string;
        };
    } & {
        id: number;
        deletedAt: Date | null;
        total: import("@prisma/client-runtime-utils").Decimal;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    })[];
    total: number;
}>;
export declare const getOrderById: (id: string) => Promise<({
    orderItems: ({
        product: {
            name: string;
            description: string | null;
            id: number;
            deletedAt: Date | null;
            price: import("@prisma/client-runtime-utils").Decimal;
            stock: number;
            categoryId: number | null;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: number;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        quantity: number;
        orderId: number;
        productId: number;
    })[];
    user: {
        name: string;
        id: number;
        deletedAt: Date | null;
        email: string;
        password_hash: string;
    };
} & {
    id: number;
    deletedAt: Date | null;
    total: import("@prisma/client-runtime-utils").Decimal;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
}) | null>;
export declare const createOrder: (userId: number, total: number) => Promise<{
    id: number;
    deletedAt: Date | null;
    total: import("@prisma/client-runtime-utils").Decimal;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
}>;
export declare const updateOrder: (id: string, data: any) => Promise<{
    id: number;
    deletedAt: Date | null;
    total: import("@prisma/client-runtime-utils").Decimal;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
}>;
export declare const deleteOrder: (id: string) => Promise<{
    id: number;
    deletedAt: Date | null;
    total: import("@prisma/client-runtime-utils").Decimal;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
}>;
//# sourceMappingURL=order.service.d.ts.map