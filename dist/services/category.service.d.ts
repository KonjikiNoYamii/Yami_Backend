import type { Category } from "../generated/client";
export declare const getAllCategory: () => Promise<{
    categories: Category[];
    total: number;
}>;
export declare const getCategoryById: (id: string) => Promise<{
    name: string;
    id: number;
    deletedAt: Date | null;
} | null>;
export declare const createCategory: (name: string) => Promise<{
    name: string;
    id: number;
    deletedAt: Date | null;
}>;
export declare const updateCategory: (id: string, data: Category) => Promise<{
    name: string;
    id: number;
    deletedAt: Date | null;
}>;
export declare const deleteCategory: (id: string) => Promise<{
    name: string;
    id: number;
    deletedAt: Date | null;
}>;
//# sourceMappingURL=category.service.d.ts.map