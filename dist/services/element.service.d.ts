export declare const getAllElements: () => Promise<{
    name: string;
    id: number;
}[]>;
export declare const getElementById: (id: number) => Promise<{
    name: string;
    id: number;
} | null>;
export declare const createElement: (data: any) => Promise<{
    name: string;
    id: number;
}>;
export declare const updateElement: (id: number, data: any) => Promise<{
    name: string;
    id: number;
}>;
export declare const deleteElement: (id: number) => Promise<{
    name: string;
    id: number;
}>;
export declare const searchElements: (keyword: string) => Promise<{
    name: string;
    id: number;
}[]>;
//# sourceMappingURL=element.service.d.ts.map