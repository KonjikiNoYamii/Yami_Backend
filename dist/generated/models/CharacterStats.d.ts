import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model CharacterStats
 *
 */
export type CharacterStatsModel = runtime.Types.Result.DefaultSelection<Prisma.$CharacterStatsPayload>;
export type AggregateCharacterStats = {
    _count: CharacterStatsCountAggregateOutputType | null;
    _avg: CharacterStatsAvgAggregateOutputType | null;
    _sum: CharacterStatsSumAggregateOutputType | null;
    _min: CharacterStatsMinAggregateOutputType | null;
    _max: CharacterStatsMaxAggregateOutputType | null;
};
export type CharacterStatsAvgAggregateOutputType = {
    id: number | null;
    attack: number | null;
    critChance: number | null;
    magic: number | null;
    charm: number | null;
    speed: number | null;
    aggression: number | null;
    agility: number | null;
    mana: number | null;
    magicDefense: number | null;
    magicPower: number | null;
    poisonDamage: number | null;
    characterId: number | null;
};
export type CharacterStatsSumAggregateOutputType = {
    id: number | null;
    attack: number | null;
    critChance: number | null;
    magic: number | null;
    charm: number | null;
    speed: number | null;
    aggression: number | null;
    agility: number | null;
    mana: number | null;
    magicDefense: number | null;
    magicPower: number | null;
    poisonDamage: number | null;
    characterId: number | null;
};
export type CharacterStatsMinAggregateOutputType = {
    id: number | null;
    attack: number | null;
    critChance: number | null;
    element: string | null;
    magic: number | null;
    charm: number | null;
    speed: number | null;
    aggression: number | null;
    agility: number | null;
    mana: number | null;
    magicDefense: number | null;
    magicPower: number | null;
    poisonDamage: number | null;
    characterId: number | null;
};
export type CharacterStatsMaxAggregateOutputType = {
    id: number | null;
    attack: number | null;
    critChance: number | null;
    element: string | null;
    magic: number | null;
    charm: number | null;
    speed: number | null;
    aggression: number | null;
    agility: number | null;
    mana: number | null;
    magicDefense: number | null;
    magicPower: number | null;
    poisonDamage: number | null;
    characterId: number | null;
};
export type CharacterStatsCountAggregateOutputType = {
    id: number;
    attack: number;
    critChance: number;
    element: number;
    magic: number;
    charm: number;
    speed: number;
    aggression: number;
    agility: number;
    mana: number;
    magicDefense: number;
    magicPower: number;
    poisonDamage: number;
    characterId: number;
    _all: number;
};
export type CharacterStatsAvgAggregateInputType = {
    id?: true;
    attack?: true;
    critChance?: true;
    magic?: true;
    charm?: true;
    speed?: true;
    aggression?: true;
    agility?: true;
    mana?: true;
    magicDefense?: true;
    magicPower?: true;
    poisonDamage?: true;
    characterId?: true;
};
export type CharacterStatsSumAggregateInputType = {
    id?: true;
    attack?: true;
    critChance?: true;
    magic?: true;
    charm?: true;
    speed?: true;
    aggression?: true;
    agility?: true;
    mana?: true;
    magicDefense?: true;
    magicPower?: true;
    poisonDamage?: true;
    characterId?: true;
};
export type CharacterStatsMinAggregateInputType = {
    id?: true;
    attack?: true;
    critChance?: true;
    element?: true;
    magic?: true;
    charm?: true;
    speed?: true;
    aggression?: true;
    agility?: true;
    mana?: true;
    magicDefense?: true;
    magicPower?: true;
    poisonDamage?: true;
    characterId?: true;
};
export type CharacterStatsMaxAggregateInputType = {
    id?: true;
    attack?: true;
    critChance?: true;
    element?: true;
    magic?: true;
    charm?: true;
    speed?: true;
    aggression?: true;
    agility?: true;
    mana?: true;
    magicDefense?: true;
    magicPower?: true;
    poisonDamage?: true;
    characterId?: true;
};
export type CharacterStatsCountAggregateInputType = {
    id?: true;
    attack?: true;
    critChance?: true;
    element?: true;
    magic?: true;
    charm?: true;
    speed?: true;
    aggression?: true;
    agility?: true;
    mana?: true;
    magicDefense?: true;
    magicPower?: true;
    poisonDamage?: true;
    characterId?: true;
    _all?: true;
};
export type CharacterStatsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CharacterStats to aggregate.
     */
    where?: Prisma.CharacterStatsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CharacterStats to fetch.
     */
    orderBy?: Prisma.CharacterStatsOrderByWithRelationInput | Prisma.CharacterStatsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CharacterStatsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CharacterStats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CharacterStats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CharacterStats
    **/
    _count?: true | CharacterStatsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: CharacterStatsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: CharacterStatsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CharacterStatsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CharacterStatsMaxAggregateInputType;
};
export type GetCharacterStatsAggregateType<T extends CharacterStatsAggregateArgs> = {
    [P in keyof T & keyof AggregateCharacterStats]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCharacterStats[P]> : Prisma.GetScalarType<T[P], AggregateCharacterStats[P]>;
};
export type CharacterStatsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CharacterStatsWhereInput;
    orderBy?: Prisma.CharacterStatsOrderByWithAggregationInput | Prisma.CharacterStatsOrderByWithAggregationInput[];
    by: Prisma.CharacterStatsScalarFieldEnum[] | Prisma.CharacterStatsScalarFieldEnum;
    having?: Prisma.CharacterStatsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CharacterStatsCountAggregateInputType | true;
    _avg?: CharacterStatsAvgAggregateInputType;
    _sum?: CharacterStatsSumAggregateInputType;
    _min?: CharacterStatsMinAggregateInputType;
    _max?: CharacterStatsMaxAggregateInputType;
};
export type CharacterStatsGroupByOutputType = {
    id: number;
    attack: number | null;
    critChance: number | null;
    element: string | null;
    magic: number | null;
    charm: number | null;
    speed: number | null;
    aggression: number | null;
    agility: number | null;
    mana: number | null;
    magicDefense: number | null;
    magicPower: number | null;
    poisonDamage: number | null;
    characterId: number;
    _count: CharacterStatsCountAggregateOutputType | null;
    _avg: CharacterStatsAvgAggregateOutputType | null;
    _sum: CharacterStatsSumAggregateOutputType | null;
    _min: CharacterStatsMinAggregateOutputType | null;
    _max: CharacterStatsMaxAggregateOutputType | null;
};
type GetCharacterStatsGroupByPayload<T extends CharacterStatsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CharacterStatsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CharacterStatsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CharacterStatsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CharacterStatsGroupByOutputType[P]>;
}>>;
export type CharacterStatsWhereInput = {
    AND?: Prisma.CharacterStatsWhereInput | Prisma.CharacterStatsWhereInput[];
    OR?: Prisma.CharacterStatsWhereInput[];
    NOT?: Prisma.CharacterStatsWhereInput | Prisma.CharacterStatsWhereInput[];
    id?: Prisma.IntFilter<"CharacterStats"> | number;
    attack?: Prisma.IntNullableFilter<"CharacterStats"> | number | null;
    critChance?: Prisma.IntNullableFilter<"CharacterStats"> | number | null;
    element?: Prisma.StringNullableFilter<"CharacterStats"> | string | null;
    magic?: Prisma.IntNullableFilter<"CharacterStats"> | number | null;
    charm?: Prisma.IntNullableFilter<"CharacterStats"> | number | null;
    speed?: Prisma.IntNullableFilter<"CharacterStats"> | number | null;
    aggression?: Prisma.IntNullableFilter<"CharacterStats"> | number | null;
    agility?: Prisma.IntNullableFilter<"CharacterStats"> | number | null;
    mana?: Prisma.IntNullableFilter<"CharacterStats"> | number | null;
    magicDefense?: Prisma.IntNullableFilter<"CharacterStats"> | number | null;
    magicPower?: Prisma.IntNullableFilter<"CharacterStats"> | number | null;
    poisonDamage?: Prisma.IntNullableFilter<"CharacterStats"> | number | null;
    characterId?: Prisma.IntFilter<"CharacterStats"> | number;
    character?: Prisma.XOR<Prisma.CharacterScalarRelationFilter, Prisma.CharacterWhereInput>;
};
export type CharacterStatsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    attack?: Prisma.SortOrderInput | Prisma.SortOrder;
    critChance?: Prisma.SortOrderInput | Prisma.SortOrder;
    element?: Prisma.SortOrderInput | Prisma.SortOrder;
    magic?: Prisma.SortOrderInput | Prisma.SortOrder;
    charm?: Prisma.SortOrderInput | Prisma.SortOrder;
    speed?: Prisma.SortOrderInput | Prisma.SortOrder;
    aggression?: Prisma.SortOrderInput | Prisma.SortOrder;
    agility?: Prisma.SortOrderInput | Prisma.SortOrder;
    mana?: Prisma.SortOrderInput | Prisma.SortOrder;
    magicDefense?: Prisma.SortOrderInput | Prisma.SortOrder;
    magicPower?: Prisma.SortOrderInput | Prisma.SortOrder;
    poisonDamage?: Prisma.SortOrderInput | Prisma.SortOrder;
    characterId?: Prisma.SortOrder;
    character?: Prisma.CharacterOrderByWithRelationInput;
};
export type CharacterStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    characterId?: number;
    AND?: Prisma.CharacterStatsWhereInput | Prisma.CharacterStatsWhereInput[];
    OR?: Prisma.CharacterStatsWhereInput[];
    NOT?: Prisma.CharacterStatsWhereInput | Prisma.CharacterStatsWhereInput[];
    attack?: Prisma.IntNullableFilter<"CharacterStats"> | number | null;
    critChance?: Prisma.IntNullableFilter<"CharacterStats"> | number | null;
    element?: Prisma.StringNullableFilter<"CharacterStats"> | string | null;
    magic?: Prisma.IntNullableFilter<"CharacterStats"> | number | null;
    charm?: Prisma.IntNullableFilter<"CharacterStats"> | number | null;
    speed?: Prisma.IntNullableFilter<"CharacterStats"> | number | null;
    aggression?: Prisma.IntNullableFilter<"CharacterStats"> | number | null;
    agility?: Prisma.IntNullableFilter<"CharacterStats"> | number | null;
    mana?: Prisma.IntNullableFilter<"CharacterStats"> | number | null;
    magicDefense?: Prisma.IntNullableFilter<"CharacterStats"> | number | null;
    magicPower?: Prisma.IntNullableFilter<"CharacterStats"> | number | null;
    poisonDamage?: Prisma.IntNullableFilter<"CharacterStats"> | number | null;
    character?: Prisma.XOR<Prisma.CharacterScalarRelationFilter, Prisma.CharacterWhereInput>;
}, "id" | "characterId">;
export type CharacterStatsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    attack?: Prisma.SortOrderInput | Prisma.SortOrder;
    critChance?: Prisma.SortOrderInput | Prisma.SortOrder;
    element?: Prisma.SortOrderInput | Prisma.SortOrder;
    magic?: Prisma.SortOrderInput | Prisma.SortOrder;
    charm?: Prisma.SortOrderInput | Prisma.SortOrder;
    speed?: Prisma.SortOrderInput | Prisma.SortOrder;
    aggression?: Prisma.SortOrderInput | Prisma.SortOrder;
    agility?: Prisma.SortOrderInput | Prisma.SortOrder;
    mana?: Prisma.SortOrderInput | Prisma.SortOrder;
    magicDefense?: Prisma.SortOrderInput | Prisma.SortOrder;
    magicPower?: Prisma.SortOrderInput | Prisma.SortOrder;
    poisonDamage?: Prisma.SortOrderInput | Prisma.SortOrder;
    characterId?: Prisma.SortOrder;
    _count?: Prisma.CharacterStatsCountOrderByAggregateInput;
    _avg?: Prisma.CharacterStatsAvgOrderByAggregateInput;
    _max?: Prisma.CharacterStatsMaxOrderByAggregateInput;
    _min?: Prisma.CharacterStatsMinOrderByAggregateInput;
    _sum?: Prisma.CharacterStatsSumOrderByAggregateInput;
};
export type CharacterStatsScalarWhereWithAggregatesInput = {
    AND?: Prisma.CharacterStatsScalarWhereWithAggregatesInput | Prisma.CharacterStatsScalarWhereWithAggregatesInput[];
    OR?: Prisma.CharacterStatsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CharacterStatsScalarWhereWithAggregatesInput | Prisma.CharacterStatsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"CharacterStats"> | number;
    attack?: Prisma.IntNullableWithAggregatesFilter<"CharacterStats"> | number | null;
    critChance?: Prisma.IntNullableWithAggregatesFilter<"CharacterStats"> | number | null;
    element?: Prisma.StringNullableWithAggregatesFilter<"CharacterStats"> | string | null;
    magic?: Prisma.IntNullableWithAggregatesFilter<"CharacterStats"> | number | null;
    charm?: Prisma.IntNullableWithAggregatesFilter<"CharacterStats"> | number | null;
    speed?: Prisma.IntNullableWithAggregatesFilter<"CharacterStats"> | number | null;
    aggression?: Prisma.IntNullableWithAggregatesFilter<"CharacterStats"> | number | null;
    agility?: Prisma.IntNullableWithAggregatesFilter<"CharacterStats"> | number | null;
    mana?: Prisma.IntNullableWithAggregatesFilter<"CharacterStats"> | number | null;
    magicDefense?: Prisma.IntNullableWithAggregatesFilter<"CharacterStats"> | number | null;
    magicPower?: Prisma.IntNullableWithAggregatesFilter<"CharacterStats"> | number | null;
    poisonDamage?: Prisma.IntNullableWithAggregatesFilter<"CharacterStats"> | number | null;
    characterId?: Prisma.IntWithAggregatesFilter<"CharacterStats"> | number;
};
export type CharacterStatsCreateInput = {
    attack?: number | null;
    critChance?: number | null;
    element?: string | null;
    magic?: number | null;
    charm?: number | null;
    speed?: number | null;
    aggression?: number | null;
    agility?: number | null;
    mana?: number | null;
    magicDefense?: number | null;
    magicPower?: number | null;
    poisonDamage?: number | null;
    character: Prisma.CharacterCreateNestedOneWithoutStatsInput;
};
export type CharacterStatsUncheckedCreateInput = {
    id?: number;
    attack?: number | null;
    critChance?: number | null;
    element?: string | null;
    magic?: number | null;
    charm?: number | null;
    speed?: number | null;
    aggression?: number | null;
    agility?: number | null;
    mana?: number | null;
    magicDefense?: number | null;
    magicPower?: number | null;
    poisonDamage?: number | null;
    characterId: number;
};
export type CharacterStatsUpdateInput = {
    attack?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    critChance?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    element?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    magic?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    charm?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    speed?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    aggression?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    agility?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mana?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    magicDefense?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    magicPower?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    poisonDamage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    character?: Prisma.CharacterUpdateOneRequiredWithoutStatsNestedInput;
};
export type CharacterStatsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    attack?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    critChance?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    element?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    magic?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    charm?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    speed?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    aggression?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    agility?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mana?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    magicDefense?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    magicPower?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    poisonDamage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    characterId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CharacterStatsCreateManyInput = {
    id?: number;
    attack?: number | null;
    critChance?: number | null;
    element?: string | null;
    magic?: number | null;
    charm?: number | null;
    speed?: number | null;
    aggression?: number | null;
    agility?: number | null;
    mana?: number | null;
    magicDefense?: number | null;
    magicPower?: number | null;
    poisonDamage?: number | null;
    characterId: number;
};
export type CharacterStatsUpdateManyMutationInput = {
    attack?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    critChance?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    element?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    magic?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    charm?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    speed?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    aggression?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    agility?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mana?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    magicDefense?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    magicPower?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    poisonDamage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type CharacterStatsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    attack?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    critChance?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    element?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    magic?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    charm?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    speed?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    aggression?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    agility?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mana?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    magicDefense?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    magicPower?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    poisonDamage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    characterId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CharacterStatsNullableScalarRelationFilter = {
    is?: Prisma.CharacterStatsWhereInput | null;
    isNot?: Prisma.CharacterStatsWhereInput | null;
};
export type CharacterStatsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    attack?: Prisma.SortOrder;
    critChance?: Prisma.SortOrder;
    element?: Prisma.SortOrder;
    magic?: Prisma.SortOrder;
    charm?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
    aggression?: Prisma.SortOrder;
    agility?: Prisma.SortOrder;
    mana?: Prisma.SortOrder;
    magicDefense?: Prisma.SortOrder;
    magicPower?: Prisma.SortOrder;
    poisonDamage?: Prisma.SortOrder;
    characterId?: Prisma.SortOrder;
};
export type CharacterStatsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    attack?: Prisma.SortOrder;
    critChance?: Prisma.SortOrder;
    magic?: Prisma.SortOrder;
    charm?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
    aggression?: Prisma.SortOrder;
    agility?: Prisma.SortOrder;
    mana?: Prisma.SortOrder;
    magicDefense?: Prisma.SortOrder;
    magicPower?: Prisma.SortOrder;
    poisonDamage?: Prisma.SortOrder;
    characterId?: Prisma.SortOrder;
};
export type CharacterStatsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    attack?: Prisma.SortOrder;
    critChance?: Prisma.SortOrder;
    element?: Prisma.SortOrder;
    magic?: Prisma.SortOrder;
    charm?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
    aggression?: Prisma.SortOrder;
    agility?: Prisma.SortOrder;
    mana?: Prisma.SortOrder;
    magicDefense?: Prisma.SortOrder;
    magicPower?: Prisma.SortOrder;
    poisonDamage?: Prisma.SortOrder;
    characterId?: Prisma.SortOrder;
};
export type CharacterStatsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    attack?: Prisma.SortOrder;
    critChance?: Prisma.SortOrder;
    element?: Prisma.SortOrder;
    magic?: Prisma.SortOrder;
    charm?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
    aggression?: Prisma.SortOrder;
    agility?: Prisma.SortOrder;
    mana?: Prisma.SortOrder;
    magicDefense?: Prisma.SortOrder;
    magicPower?: Prisma.SortOrder;
    poisonDamage?: Prisma.SortOrder;
    characterId?: Prisma.SortOrder;
};
export type CharacterStatsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    attack?: Prisma.SortOrder;
    critChance?: Prisma.SortOrder;
    magic?: Prisma.SortOrder;
    charm?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
    aggression?: Prisma.SortOrder;
    agility?: Prisma.SortOrder;
    mana?: Prisma.SortOrder;
    magicDefense?: Prisma.SortOrder;
    magicPower?: Prisma.SortOrder;
    poisonDamage?: Prisma.SortOrder;
    characterId?: Prisma.SortOrder;
};
export type CharacterStatsCreateNestedOneWithoutCharacterInput = {
    create?: Prisma.XOR<Prisma.CharacterStatsCreateWithoutCharacterInput, Prisma.CharacterStatsUncheckedCreateWithoutCharacterInput>;
    connectOrCreate?: Prisma.CharacterStatsCreateOrConnectWithoutCharacterInput;
    connect?: Prisma.CharacterStatsWhereUniqueInput;
};
export type CharacterStatsUncheckedCreateNestedOneWithoutCharacterInput = {
    create?: Prisma.XOR<Prisma.CharacterStatsCreateWithoutCharacterInput, Prisma.CharacterStatsUncheckedCreateWithoutCharacterInput>;
    connectOrCreate?: Prisma.CharacterStatsCreateOrConnectWithoutCharacterInput;
    connect?: Prisma.CharacterStatsWhereUniqueInput;
};
export type CharacterStatsUpdateOneWithoutCharacterNestedInput = {
    create?: Prisma.XOR<Prisma.CharacterStatsCreateWithoutCharacterInput, Prisma.CharacterStatsUncheckedCreateWithoutCharacterInput>;
    connectOrCreate?: Prisma.CharacterStatsCreateOrConnectWithoutCharacterInput;
    upsert?: Prisma.CharacterStatsUpsertWithoutCharacterInput;
    disconnect?: Prisma.CharacterStatsWhereInput | boolean;
    delete?: Prisma.CharacterStatsWhereInput | boolean;
    connect?: Prisma.CharacterStatsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CharacterStatsUpdateToOneWithWhereWithoutCharacterInput, Prisma.CharacterStatsUpdateWithoutCharacterInput>, Prisma.CharacterStatsUncheckedUpdateWithoutCharacterInput>;
};
export type CharacterStatsUncheckedUpdateOneWithoutCharacterNestedInput = {
    create?: Prisma.XOR<Prisma.CharacterStatsCreateWithoutCharacterInput, Prisma.CharacterStatsUncheckedCreateWithoutCharacterInput>;
    connectOrCreate?: Prisma.CharacterStatsCreateOrConnectWithoutCharacterInput;
    upsert?: Prisma.CharacterStatsUpsertWithoutCharacterInput;
    disconnect?: Prisma.CharacterStatsWhereInput | boolean;
    delete?: Prisma.CharacterStatsWhereInput | boolean;
    connect?: Prisma.CharacterStatsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CharacterStatsUpdateToOneWithWhereWithoutCharacterInput, Prisma.CharacterStatsUpdateWithoutCharacterInput>, Prisma.CharacterStatsUncheckedUpdateWithoutCharacterInput>;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type CharacterStatsCreateWithoutCharacterInput = {
    attack?: number | null;
    critChance?: number | null;
    element?: string | null;
    magic?: number | null;
    charm?: number | null;
    speed?: number | null;
    aggression?: number | null;
    agility?: number | null;
    mana?: number | null;
    magicDefense?: number | null;
    magicPower?: number | null;
    poisonDamage?: number | null;
};
export type CharacterStatsUncheckedCreateWithoutCharacterInput = {
    id?: number;
    attack?: number | null;
    critChance?: number | null;
    element?: string | null;
    magic?: number | null;
    charm?: number | null;
    speed?: number | null;
    aggression?: number | null;
    agility?: number | null;
    mana?: number | null;
    magicDefense?: number | null;
    magicPower?: number | null;
    poisonDamage?: number | null;
};
export type CharacterStatsCreateOrConnectWithoutCharacterInput = {
    where: Prisma.CharacterStatsWhereUniqueInput;
    create: Prisma.XOR<Prisma.CharacterStatsCreateWithoutCharacterInput, Prisma.CharacterStatsUncheckedCreateWithoutCharacterInput>;
};
export type CharacterStatsUpsertWithoutCharacterInput = {
    update: Prisma.XOR<Prisma.CharacterStatsUpdateWithoutCharacterInput, Prisma.CharacterStatsUncheckedUpdateWithoutCharacterInput>;
    create: Prisma.XOR<Prisma.CharacterStatsCreateWithoutCharacterInput, Prisma.CharacterStatsUncheckedCreateWithoutCharacterInput>;
    where?: Prisma.CharacterStatsWhereInput;
};
export type CharacterStatsUpdateToOneWithWhereWithoutCharacterInput = {
    where?: Prisma.CharacterStatsWhereInput;
    data: Prisma.XOR<Prisma.CharacterStatsUpdateWithoutCharacterInput, Prisma.CharacterStatsUncheckedUpdateWithoutCharacterInput>;
};
export type CharacterStatsUpdateWithoutCharacterInput = {
    attack?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    critChance?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    element?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    magic?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    charm?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    speed?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    aggression?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    agility?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mana?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    magicDefense?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    magicPower?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    poisonDamage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type CharacterStatsUncheckedUpdateWithoutCharacterInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    attack?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    critChance?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    element?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    magic?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    charm?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    speed?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    aggression?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    agility?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mana?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    magicDefense?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    magicPower?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    poisonDamage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type CharacterStatsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    attack?: boolean;
    critChance?: boolean;
    element?: boolean;
    magic?: boolean;
    charm?: boolean;
    speed?: boolean;
    aggression?: boolean;
    agility?: boolean;
    mana?: boolean;
    magicDefense?: boolean;
    magicPower?: boolean;
    poisonDamage?: boolean;
    characterId?: boolean;
    character?: boolean | Prisma.CharacterDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["characterStats"]>;
export type CharacterStatsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    attack?: boolean;
    critChance?: boolean;
    element?: boolean;
    magic?: boolean;
    charm?: boolean;
    speed?: boolean;
    aggression?: boolean;
    agility?: boolean;
    mana?: boolean;
    magicDefense?: boolean;
    magicPower?: boolean;
    poisonDamage?: boolean;
    characterId?: boolean;
    character?: boolean | Prisma.CharacterDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["characterStats"]>;
export type CharacterStatsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    attack?: boolean;
    critChance?: boolean;
    element?: boolean;
    magic?: boolean;
    charm?: boolean;
    speed?: boolean;
    aggression?: boolean;
    agility?: boolean;
    mana?: boolean;
    magicDefense?: boolean;
    magicPower?: boolean;
    poisonDamage?: boolean;
    characterId?: boolean;
    character?: boolean | Prisma.CharacterDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["characterStats"]>;
export type CharacterStatsSelectScalar = {
    id?: boolean;
    attack?: boolean;
    critChance?: boolean;
    element?: boolean;
    magic?: boolean;
    charm?: boolean;
    speed?: boolean;
    aggression?: boolean;
    agility?: boolean;
    mana?: boolean;
    magicDefense?: boolean;
    magicPower?: boolean;
    poisonDamage?: boolean;
    characterId?: boolean;
};
export type CharacterStatsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "attack" | "critChance" | "element" | "magic" | "charm" | "speed" | "aggression" | "agility" | "mana" | "magicDefense" | "magicPower" | "poisonDamage" | "characterId", ExtArgs["result"]["characterStats"]>;
export type CharacterStatsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    character?: boolean | Prisma.CharacterDefaultArgs<ExtArgs>;
};
export type CharacterStatsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    character?: boolean | Prisma.CharacterDefaultArgs<ExtArgs>;
};
export type CharacterStatsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    character?: boolean | Prisma.CharacterDefaultArgs<ExtArgs>;
};
export type $CharacterStatsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CharacterStats";
    objects: {
        character: Prisma.$CharacterPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        attack: number | null;
        critChance: number | null;
        element: string | null;
        magic: number | null;
        charm: number | null;
        speed: number | null;
        aggression: number | null;
        agility: number | null;
        mana: number | null;
        magicDefense: number | null;
        magicPower: number | null;
        poisonDamage: number | null;
        characterId: number;
    }, ExtArgs["result"]["characterStats"]>;
    composites: {};
};
export type CharacterStatsGetPayload<S extends boolean | null | undefined | CharacterStatsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CharacterStatsPayload, S>;
export type CharacterStatsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CharacterStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CharacterStatsCountAggregateInputType | true;
};
export interface CharacterStatsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CharacterStats'];
        meta: {
            name: 'CharacterStats';
        };
    };
    /**
     * Find zero or one CharacterStats that matches the filter.
     * @param {CharacterStatsFindUniqueArgs} args - Arguments to find a CharacterStats
     * @example
     * // Get one CharacterStats
     * const characterStats = await prisma.characterStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharacterStatsFindUniqueArgs>(args: Prisma.SelectSubset<T, CharacterStatsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CharacterStatsClient<runtime.Types.Result.GetResult<Prisma.$CharacterStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one CharacterStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CharacterStatsFindUniqueOrThrowArgs} args - Arguments to find a CharacterStats
     * @example
     * // Get one CharacterStats
     * const characterStats = await prisma.characterStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharacterStatsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CharacterStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CharacterStatsClient<runtime.Types.Result.GetResult<Prisma.$CharacterStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CharacterStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterStatsFindFirstArgs} args - Arguments to find a CharacterStats
     * @example
     * // Get one CharacterStats
     * const characterStats = await prisma.characterStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharacterStatsFindFirstArgs>(args?: Prisma.SelectSubset<T, CharacterStatsFindFirstArgs<ExtArgs>>): Prisma.Prisma__CharacterStatsClient<runtime.Types.Result.GetResult<Prisma.$CharacterStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CharacterStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterStatsFindFirstOrThrowArgs} args - Arguments to find a CharacterStats
     * @example
     * // Get one CharacterStats
     * const characterStats = await prisma.characterStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharacterStatsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CharacterStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CharacterStatsClient<runtime.Types.Result.GetResult<Prisma.$CharacterStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more CharacterStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CharacterStats
     * const characterStats = await prisma.characterStats.findMany()
     *
     * // Get first 10 CharacterStats
     * const characterStats = await prisma.characterStats.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const characterStatsWithIdOnly = await prisma.characterStats.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CharacterStatsFindManyArgs>(args?: Prisma.SelectSubset<T, CharacterStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CharacterStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a CharacterStats.
     * @param {CharacterStatsCreateArgs} args - Arguments to create a CharacterStats.
     * @example
     * // Create one CharacterStats
     * const CharacterStats = await prisma.characterStats.create({
     *   data: {
     *     // ... data to create a CharacterStats
     *   }
     * })
     *
     */
    create<T extends CharacterStatsCreateArgs>(args: Prisma.SelectSubset<T, CharacterStatsCreateArgs<ExtArgs>>): Prisma.Prisma__CharacterStatsClient<runtime.Types.Result.GetResult<Prisma.$CharacterStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many CharacterStats.
     * @param {CharacterStatsCreateManyArgs} args - Arguments to create many CharacterStats.
     * @example
     * // Create many CharacterStats
     * const characterStats = await prisma.characterStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CharacterStatsCreateManyArgs>(args?: Prisma.SelectSubset<T, CharacterStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many CharacterStats and returns the data saved in the database.
     * @param {CharacterStatsCreateManyAndReturnArgs} args - Arguments to create many CharacterStats.
     * @example
     * // Create many CharacterStats
     * const characterStats = await prisma.characterStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CharacterStats and only return the `id`
     * const characterStatsWithIdOnly = await prisma.characterStats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CharacterStatsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CharacterStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CharacterStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a CharacterStats.
     * @param {CharacterStatsDeleteArgs} args - Arguments to delete one CharacterStats.
     * @example
     * // Delete one CharacterStats
     * const CharacterStats = await prisma.characterStats.delete({
     *   where: {
     *     // ... filter to delete one CharacterStats
     *   }
     * })
     *
     */
    delete<T extends CharacterStatsDeleteArgs>(args: Prisma.SelectSubset<T, CharacterStatsDeleteArgs<ExtArgs>>): Prisma.Prisma__CharacterStatsClient<runtime.Types.Result.GetResult<Prisma.$CharacterStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one CharacterStats.
     * @param {CharacterStatsUpdateArgs} args - Arguments to update one CharacterStats.
     * @example
     * // Update one CharacterStats
     * const characterStats = await prisma.characterStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CharacterStatsUpdateArgs>(args: Prisma.SelectSubset<T, CharacterStatsUpdateArgs<ExtArgs>>): Prisma.Prisma__CharacterStatsClient<runtime.Types.Result.GetResult<Prisma.$CharacterStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more CharacterStats.
     * @param {CharacterStatsDeleteManyArgs} args - Arguments to filter CharacterStats to delete.
     * @example
     * // Delete a few CharacterStats
     * const { count } = await prisma.characterStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CharacterStatsDeleteManyArgs>(args?: Prisma.SelectSubset<T, CharacterStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CharacterStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CharacterStats
     * const characterStats = await prisma.characterStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CharacterStatsUpdateManyArgs>(args: Prisma.SelectSubset<T, CharacterStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CharacterStats and returns the data updated in the database.
     * @param {CharacterStatsUpdateManyAndReturnArgs} args - Arguments to update many CharacterStats.
     * @example
     * // Update many CharacterStats
     * const characterStats = await prisma.characterStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CharacterStats and only return the `id`
     * const characterStatsWithIdOnly = await prisma.characterStats.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends CharacterStatsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CharacterStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CharacterStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one CharacterStats.
     * @param {CharacterStatsUpsertArgs} args - Arguments to update or create a CharacterStats.
     * @example
     * // Update or create a CharacterStats
     * const characterStats = await prisma.characterStats.upsert({
     *   create: {
     *     // ... data to create a CharacterStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CharacterStats we want to update
     *   }
     * })
     */
    upsert<T extends CharacterStatsUpsertArgs>(args: Prisma.SelectSubset<T, CharacterStatsUpsertArgs<ExtArgs>>): Prisma.Prisma__CharacterStatsClient<runtime.Types.Result.GetResult<Prisma.$CharacterStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of CharacterStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterStatsCountArgs} args - Arguments to filter CharacterStats to count.
     * @example
     * // Count the number of CharacterStats
     * const count = await prisma.characterStats.count({
     *   where: {
     *     // ... the filter for the CharacterStats we want to count
     *   }
     * })
    **/
    count<T extends CharacterStatsCountArgs>(args?: Prisma.Subset<T, CharacterStatsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CharacterStatsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a CharacterStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CharacterStatsAggregateArgs>(args: Prisma.Subset<T, CharacterStatsAggregateArgs>): Prisma.PrismaPromise<GetCharacterStatsAggregateType<T>>;
    /**
     * Group by CharacterStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterStatsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends CharacterStatsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CharacterStatsGroupByArgs['orderBy'];
    } : {
        orderBy?: CharacterStatsGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CharacterStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacterStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CharacterStats model
     */
    readonly fields: CharacterStatsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for CharacterStats.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CharacterStatsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    character<T extends Prisma.CharacterDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CharacterDefaultArgs<ExtArgs>>): Prisma.Prisma__CharacterClient<runtime.Types.Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the CharacterStats model
 */
export interface CharacterStatsFieldRefs {
    readonly id: Prisma.FieldRef<"CharacterStats", 'Int'>;
    readonly attack: Prisma.FieldRef<"CharacterStats", 'Int'>;
    readonly critChance: Prisma.FieldRef<"CharacterStats", 'Int'>;
    readonly element: Prisma.FieldRef<"CharacterStats", 'String'>;
    readonly magic: Prisma.FieldRef<"CharacterStats", 'Int'>;
    readonly charm: Prisma.FieldRef<"CharacterStats", 'Int'>;
    readonly speed: Prisma.FieldRef<"CharacterStats", 'Int'>;
    readonly aggression: Prisma.FieldRef<"CharacterStats", 'Int'>;
    readonly agility: Prisma.FieldRef<"CharacterStats", 'Int'>;
    readonly mana: Prisma.FieldRef<"CharacterStats", 'Int'>;
    readonly magicDefense: Prisma.FieldRef<"CharacterStats", 'Int'>;
    readonly magicPower: Prisma.FieldRef<"CharacterStats", 'Int'>;
    readonly poisonDamage: Prisma.FieldRef<"CharacterStats", 'Int'>;
    readonly characterId: Prisma.FieldRef<"CharacterStats", 'Int'>;
}
/**
 * CharacterStats findUnique
 */
export type CharacterStatsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterStats
     */
    select?: Prisma.CharacterStatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CharacterStats
     */
    omit?: Prisma.CharacterStatsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CharacterStatsInclude<ExtArgs> | null;
    /**
     * Filter, which CharacterStats to fetch.
     */
    where: Prisma.CharacterStatsWhereUniqueInput;
};
/**
 * CharacterStats findUniqueOrThrow
 */
export type CharacterStatsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterStats
     */
    select?: Prisma.CharacterStatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CharacterStats
     */
    omit?: Prisma.CharacterStatsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CharacterStatsInclude<ExtArgs> | null;
    /**
     * Filter, which CharacterStats to fetch.
     */
    where: Prisma.CharacterStatsWhereUniqueInput;
};
/**
 * CharacterStats findFirst
 */
export type CharacterStatsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterStats
     */
    select?: Prisma.CharacterStatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CharacterStats
     */
    omit?: Prisma.CharacterStatsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CharacterStatsInclude<ExtArgs> | null;
    /**
     * Filter, which CharacterStats to fetch.
     */
    where?: Prisma.CharacterStatsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CharacterStats to fetch.
     */
    orderBy?: Prisma.CharacterStatsOrderByWithRelationInput | Prisma.CharacterStatsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CharacterStats.
     */
    cursor?: Prisma.CharacterStatsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CharacterStats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CharacterStats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CharacterStats.
     */
    distinct?: Prisma.CharacterStatsScalarFieldEnum | Prisma.CharacterStatsScalarFieldEnum[];
};
/**
 * CharacterStats findFirstOrThrow
 */
export type CharacterStatsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterStats
     */
    select?: Prisma.CharacterStatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CharacterStats
     */
    omit?: Prisma.CharacterStatsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CharacterStatsInclude<ExtArgs> | null;
    /**
     * Filter, which CharacterStats to fetch.
     */
    where?: Prisma.CharacterStatsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CharacterStats to fetch.
     */
    orderBy?: Prisma.CharacterStatsOrderByWithRelationInput | Prisma.CharacterStatsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CharacterStats.
     */
    cursor?: Prisma.CharacterStatsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CharacterStats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CharacterStats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CharacterStats.
     */
    distinct?: Prisma.CharacterStatsScalarFieldEnum | Prisma.CharacterStatsScalarFieldEnum[];
};
/**
 * CharacterStats findMany
 */
export type CharacterStatsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterStats
     */
    select?: Prisma.CharacterStatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CharacterStats
     */
    omit?: Prisma.CharacterStatsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CharacterStatsInclude<ExtArgs> | null;
    /**
     * Filter, which CharacterStats to fetch.
     */
    where?: Prisma.CharacterStatsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CharacterStats to fetch.
     */
    orderBy?: Prisma.CharacterStatsOrderByWithRelationInput | Prisma.CharacterStatsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CharacterStats.
     */
    cursor?: Prisma.CharacterStatsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CharacterStats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CharacterStats.
     */
    skip?: number;
    distinct?: Prisma.CharacterStatsScalarFieldEnum | Prisma.CharacterStatsScalarFieldEnum[];
};
/**
 * CharacterStats create
 */
export type CharacterStatsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterStats
     */
    select?: Prisma.CharacterStatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CharacterStats
     */
    omit?: Prisma.CharacterStatsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CharacterStatsInclude<ExtArgs> | null;
    /**
     * The data needed to create a CharacterStats.
     */
    data: Prisma.XOR<Prisma.CharacterStatsCreateInput, Prisma.CharacterStatsUncheckedCreateInput>;
};
/**
 * CharacterStats createMany
 */
export type CharacterStatsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many CharacterStats.
     */
    data: Prisma.CharacterStatsCreateManyInput | Prisma.CharacterStatsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * CharacterStats createManyAndReturn
 */
export type CharacterStatsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterStats
     */
    select?: Prisma.CharacterStatsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CharacterStats
     */
    omit?: Prisma.CharacterStatsOmit<ExtArgs> | null;
    /**
     * The data used to create many CharacterStats.
     */
    data: Prisma.CharacterStatsCreateManyInput | Prisma.CharacterStatsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CharacterStatsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * CharacterStats update
 */
export type CharacterStatsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterStats
     */
    select?: Prisma.CharacterStatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CharacterStats
     */
    omit?: Prisma.CharacterStatsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CharacterStatsInclude<ExtArgs> | null;
    /**
     * The data needed to update a CharacterStats.
     */
    data: Prisma.XOR<Prisma.CharacterStatsUpdateInput, Prisma.CharacterStatsUncheckedUpdateInput>;
    /**
     * Choose, which CharacterStats to update.
     */
    where: Prisma.CharacterStatsWhereUniqueInput;
};
/**
 * CharacterStats updateMany
 */
export type CharacterStatsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update CharacterStats.
     */
    data: Prisma.XOR<Prisma.CharacterStatsUpdateManyMutationInput, Prisma.CharacterStatsUncheckedUpdateManyInput>;
    /**
     * Filter which CharacterStats to update
     */
    where?: Prisma.CharacterStatsWhereInput;
    /**
     * Limit how many CharacterStats to update.
     */
    limit?: number;
};
/**
 * CharacterStats updateManyAndReturn
 */
export type CharacterStatsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterStats
     */
    select?: Prisma.CharacterStatsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CharacterStats
     */
    omit?: Prisma.CharacterStatsOmit<ExtArgs> | null;
    /**
     * The data used to update CharacterStats.
     */
    data: Prisma.XOR<Prisma.CharacterStatsUpdateManyMutationInput, Prisma.CharacterStatsUncheckedUpdateManyInput>;
    /**
     * Filter which CharacterStats to update
     */
    where?: Prisma.CharacterStatsWhereInput;
    /**
     * Limit how many CharacterStats to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CharacterStatsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * CharacterStats upsert
 */
export type CharacterStatsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterStats
     */
    select?: Prisma.CharacterStatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CharacterStats
     */
    omit?: Prisma.CharacterStatsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CharacterStatsInclude<ExtArgs> | null;
    /**
     * The filter to search for the CharacterStats to update in case it exists.
     */
    where: Prisma.CharacterStatsWhereUniqueInput;
    /**
     * In case the CharacterStats found by the `where` argument doesn't exist, create a new CharacterStats with this data.
     */
    create: Prisma.XOR<Prisma.CharacterStatsCreateInput, Prisma.CharacterStatsUncheckedCreateInput>;
    /**
     * In case the CharacterStats was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CharacterStatsUpdateInput, Prisma.CharacterStatsUncheckedUpdateInput>;
};
/**
 * CharacterStats delete
 */
export type CharacterStatsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterStats
     */
    select?: Prisma.CharacterStatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CharacterStats
     */
    omit?: Prisma.CharacterStatsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CharacterStatsInclude<ExtArgs> | null;
    /**
     * Filter which CharacterStats to delete.
     */
    where: Prisma.CharacterStatsWhereUniqueInput;
};
/**
 * CharacterStats deleteMany
 */
export type CharacterStatsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CharacterStats to delete
     */
    where?: Prisma.CharacterStatsWhereInput;
    /**
     * Limit how many CharacterStats to delete.
     */
    limit?: number;
};
/**
 * CharacterStats without action
 */
export type CharacterStatsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterStats
     */
    select?: Prisma.CharacterStatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CharacterStats
     */
    omit?: Prisma.CharacterStatsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CharacterStatsInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=CharacterStats.d.ts.map