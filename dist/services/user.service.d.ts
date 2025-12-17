export declare const getAllUser: () => Promise<{
    users: ({
        orders: {
            id: number;
            deletedAt: Date | null;
            total: import("@prisma/client-runtime-utils").Decimal;
            createdAt: Date;
            updatedAt: Date;
            userId: number;
        }[];
    } & {
        id: number;
        deletedAt: Date | null;
        username: string;
        email: string;
        password_hash: string;
        role: string;
    })[];
    total: number;
}>;
export declare const getUserById: (id: string) => Promise<({
    orders: {
        id: number;
        deletedAt: Date | null;
        total: import("@prisma/client-runtime-utils").Decimal;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    }[];
} & {
    id: number;
    deletedAt: Date | null;
    username: string;
    email: string;
    password_hash: string;
    role: string;
}) | null>;
export declare const createUser: (username: string, email: string, password_hash: string) => Promise<{
    id: number;
    deletedAt: Date | null;
    username: string;
    email: string;
    password_hash: string;
    role: string;
}>;
export declare const updateUser: (id: string, data: any) => Promise<{
    id: number;
    deletedAt: Date | null;
    username: string;
    email: string;
    password_hash: string;
    role: string;
}>;
export declare const deleteUser: (id: string) => Promise<{
    id: number;
    deletedAt: Date | null;
    username: string;
    email: string;
    password_hash: string;
    role: string;
}>;
//# sourceMappingURL=user.service.d.ts.map