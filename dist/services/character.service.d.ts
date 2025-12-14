import type { Character } from "../generated/client";
export declare const getAllCharacters: () => Promise<{
    chars: Character[];
    total: number;
}>;
export declare const getCharacterById: (id: number) => Promise<({
    element: {
        name: string;
        id: number;
    };
    rarity: {
        name: string;
        id: number;
    };
} & {
    name: string;
    description: string | null;
    elementId: number;
    rarityId: number;
    id: number;
    deletedAt: Date | null;
}) | null>;
export declare const searchCharacters: (keyword: string) => Promise<({
    element: {
        name: string;
        id: number;
    };
    rarity: {
        name: string;
        id: number;
    };
} & {
    name: string;
    description: string | null;
    elementId: number;
    rarityId: number;
    id: number;
    deletedAt: Date | null;
})[]>;
export declare const createCharacter: (data: any) => Promise<{
    name: string;
    description: string | null;
    elementId: number;
    rarityId: number;
    id: number;
    deletedAt: Date | null;
}>;
export declare const updateCharacter: (id: number, data: any) => Promise<{
    name: string;
    description: string | null;
    elementId: number;
    rarityId: number;
    id: number;
    deletedAt: Date | null;
}>;
export declare const deleteCharacter: (id: string) => Promise<Character>;
//# sourceMappingURL=character.service.d.ts.map