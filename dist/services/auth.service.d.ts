export declare const register: (data: {
    name: string;
    email: string;
    password_hash: string;
    role?: string;
}) => Promise<{
    email: string;
    name: {
        name: string;
        id: number;
        deletedAt: Date | null;
        email: string;
        password_hash: string;
        role: string;
    };
    user: {
        name: string;
        id: number;
        deletedAt: Date | null;
        email: string;
        password_hash: string;
        role: string;
    };
    role: string;
}>;
export declare const login: (data: {
    email: string;
    password: string;
}) => Promise<{
    userReturn: {
        email: string;
        name: string;
        role: string;
    };
    token: string;
}>;
//# sourceMappingURL=auth.service.d.ts.map