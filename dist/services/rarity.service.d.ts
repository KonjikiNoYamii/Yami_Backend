export declare const getAllRarities: () => Promise<{
    name: string;
    id: number;
}[]>;
export declare const getRarityById: (id: number) => Promise<{
    name: string;
    id: number;
} | null>;
export declare const createRarity: (data: any) => Promise<{
    name: string;
    id: number;
}>;
export declare const updateRarity: (id: number, data: any) => Promise<{
    name: string;
    id: number;
}>;
export declare const deleteRarity: (id: number) => Promise<{
    name: string;
    id: number;
}>;
export declare const searchRarity: (keyword: string) => Promise<{
    name: string;
    id: number;
}[]>;
//# sourceMappingURL=rarity.service.d.ts.map