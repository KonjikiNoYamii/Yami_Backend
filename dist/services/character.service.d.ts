import { type Character, type CharacterStats } from "../generated/client";
export declare const getAllCharacters: () => Promise<{
    characters: Character[];
    total: number;
}>;
export declare const getCharacterById: (id: string) => Promise<Character>;
export declare const searchCharacter: (nama?: string, kelangkaan?: string, min_power?: string, max_power?: string) => Promise<Character[]>;
export declare const createCharacter: (data: {
    name: string;
    rarity: string;
    power: number;
    effect: string;
    description: string;
    stats: Partial<CharacterStats>;
}) => Promise<Character>;
type CharacterUpdateInput = {
    name?: string;
    rarity?: string;
    power?: number;
    effect?: string;
    description?: string;
    stats?: Partial<CharacterStats>;
};
export declare const updateCharacter: (id: string, data: CharacterUpdateInput) => Promise<Character>;
export declare const deletedCharacter: (id: string) => Promise<Character>;
export {};
//# sourceMappingURL=character.service.d.ts.map