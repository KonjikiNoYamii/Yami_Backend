import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Character: "Character";
    readonly CharacterStats: "CharacterStats";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const CharacterScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly rarity: "rarity";
    readonly power: "power";
    readonly effect: "effect";
    readonly description: "description";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CharacterScalarFieldEnum = (typeof CharacterScalarFieldEnum)[keyof typeof CharacterScalarFieldEnum];
export declare const CharacterStatsScalarFieldEnum: {
    readonly id: "id";
    readonly attack: "attack";
    readonly critChance: "critChance";
    readonly element: "element";
    readonly magic: "magic";
    readonly charm: "charm";
    readonly speed: "speed";
    readonly aggression: "aggression";
    readonly agility: "agility";
    readonly mana: "mana";
    readonly magicDefense: "magicDefense";
    readonly magicPower: "magicPower";
    readonly poisonDamage: "poisonDamage";
    readonly characterId: "characterId";
};
export type CharacterStatsScalarFieldEnum = (typeof CharacterStatsScalarFieldEnum)[keyof typeof CharacterStatsScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map