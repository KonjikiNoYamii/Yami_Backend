import {
  characters,
  type Character,
  type CharacterStats,
} from "../models/character.model";

export const getAllCharacters = () => {
  return {
    characters,
    total: characters.length,
  };
};

export const getCharacterById = (id: string) => {
  const numid = parseInt(id);
  const character = characters.find((c) => c.id === numid);

  if (!character) {
    throw new Error("Character tidak ditemukan");
  }

  return character;
};

export const searchCharacter = (
  nama?: string,
  kelangkaan?: string,
  min_power?: string,
  max_power?: string
) => {
  let result = characters;

  if (nama) {
    result = result.filter((c) =>
      c.name.toLowerCase().includes((nama as string).toLowerCase())
    );
  }

  if (kelangkaan) {
    result = result.filter((c) =>
      c.rarity.toLowerCase().includes((kelangkaan as string).toLowerCase())
    );
  }

  if (min_power) {
    result = result.filter((c) => c.power >= Number(min_power));
  }

  if (max_power) {
    result = result.filter((c) => c.power <= Number(max_power));
  }
  return result;
};

export const createCharacter = (
  name: string,
  rarity: string,
  power: number,
  effect: string,
  description: string,
  stats: Partial<CharacterStats> = {}
) => {
  const newCharacter: Character = {
    id: characters.length + 1,
    name,
    rarity,
    power,
    effect,
    description,
    stats: {
      attack: stats.attack ?? 0,
      critChance: stats.critChance ?? 0,
      element: stats.element ?? "",
      magic: stats.magic ?? 0,
      charm: stats.charm ?? 0,
      speed: stats.speed ?? 0,
      aggression: stats.aggression ?? 0,
      agility: stats.agility ?? 0,
      mana: stats.mana ?? 0,
      magicDefense: stats.magicDefense ?? 0,
      magicPower: stats.magicPower ?? 0,
      poisonDamage: stats.poisonDamage ?? 0,
    },
  };

  characters.push(newCharacter);
  return newCharacter;
};

export const updateCharacter = (id: string, data: any) => {
  const numid = parseInt(id);
  const index = characters.findIndex((c) => c.id === numid);

  if (index === -1) {
    throw new Error("Character tidak ditemukan");
  }
  characters[index] = {
    ...characters[index],
    ...data,
    stats: { ...characters[index]?.stats, ...data.stats },
  };

  return characters[index];
};

export const deletedCharacter = (id: string) => {
  const numid = parseInt(id);
  const index = characters.findIndex((c) => c.id === numid);

  if (index === -1) {
    throw new Error("Character tidak ditemukan");
  }

  const deleted = characters.splice(index, 1);

  return deleted;
};
