export declare const register: (data: {
    username: string;
    email: string;
    password_hash: string;
    role?: string;
}) => Promise<{
    email: string;
    username: {
        id: number;
        deletedAt: Date | null;
        username: string;
        email: string;
        password_hash: string;
        role: string;
    };
    user: {
        id: number;
        deletedAt: Date | null;
        username: string;
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
        username: string;
        role: string;
    };
    token: string;
}>;
//# sourceMappingURL=auth.service.d.ts.map