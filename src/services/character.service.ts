import { type Character, type CharacterStats } from "../generated/client";
import { getPrisma } from "../prisma";

const prisma = getPrisma();

export const getAllCharacters = async (): Promise<{characters:Character[], total:number}> => {
  const characters = await prisma.character.findMany();
  const total = characters.length

  return{
    characters,
    total
  }
}


export const getCharacterById = async (id: string): Promise<Character> => {
  const numid = parseInt(id);
  const character = await prisma.character.findUnique({
    where: { id: numid },
  });

  if (!character) {
    throw new Error("Character tidak ditemukan");
  }

  return character;
};

export const searchCharacter = async (
  nama?: string,
  kelangkaan?: string,
  min_power?: string,
  max_power?: string
): Promise<Character[]> => {

  return await prisma.character.findMany({
    where: {
      ...(nama && {
        name: { contains: nama, mode: "insensitive" }
      }),

      ...(kelangkaan && {
        rarity: { contains: kelangkaan, mode: "insensitive" }
      }),

      ...((min_power || max_power) && {
        power: {
          ...(min_power && { gte: Number(min_power) }),
          ...(max_power && { lte: Number(max_power) }),
        }
      })
    }
  });
};

  // let result = characters;

  // if (nama) {
  //   result = result.filter((c) =>
  //     c.name.toLowerCase().includes((nama as string).toLowerCase())
  //   );
  // }

  // if (kelangkaan) {
  //   result = result.filter((c) =>
  //     c.rarity.toLowerCase().includes((kelangkaan as string).toLowerCase())
  //   );
  // }

  // if (min_power) {
  //   result = result.filter((c) => c.power >= Number(min_power));
  // }

  // if (max_power) {
  //   result = result.filter((c) => c.power <= Number(max_power));
  // }
  // return result;

export const createCharacter = async (data: {
  name: string;
  rarity: string;
  power: number;
  effect: string;
  description: string;
  stats: Partial<CharacterStats>;
}): Promise<Character> => {
  return await prisma.character.create({
    data: {
      name: data.name,
      rarity: data.rarity,
      power: data.power,
      effect: data.effect,
      description: data.description,

      // ⬇⬇⬇ BAGIAN YANG SEHARUSNYA
      stats: {
        create: {
          attack: data.stats.attack ?? 0,
          critChance: data.stats.critChance ?? 0,
          element: data.stats.element ?? "",
          magic: data.stats.magic ?? 0,
          charm: data.stats.charm ?? 0,
          speed: data.stats.speed ?? 0,
          aggression: data.stats.aggression ?? 0,
          agility: data.stats.agility ?? 0,
          mana: data.stats.mana ?? 0,
          magicDefense: data.stats.magicDefense ?? 0,
          magicPower: data.stats.magicPower ?? 0,
          poisonDamage: data.stats.poisonDamage ?? 0,
        },
      },
    },
    include: {
      stats: true,
    },
  });
};


type CharacterUpdateInput = {
  name?: string;
  rarity?: string;
  power?: number;
  effect?: string;
  description?: string;
  stats?: Partial<CharacterStats>;
};

export const updateCharacter = async (
  id: string,
  data: CharacterUpdateInput
): Promise<Character> => {
  const numid = parseInt(id);
  await getCharacterById(id);

  const characterData: any = {};

  if (data.name !== undefined) characterData.name = data.name;
  if (data.rarity !== undefined) characterData.rarity = data.rarity;
  if (data.power !== undefined) characterData.power = data.power;
  if (data.effect !== undefined) characterData.effect = data.effect;
  if (data.description !== undefined) characterData.description = data.description;

  if (data.stats) {
    const statsUpdate: any = {};

    for (const key in data.stats) {
      const value = (data.stats as any)[key];
      if (value !== undefined) {
        statsUpdate[key] = value;
      }
    }

    characterData.stats = {
      upsert: {
        update: statsUpdate,
        create: statsUpdate,
      },
    };
  }

  return await prisma.character.update({
    where: { id: numid },
    data: characterData,
    include: { stats: true },
  });
};


export const deletedCharacter = async (id: string):Promise<Character> => {
  const numid = parseInt(id);

  return await prisma.character.delete({
    where: {id:numid},
  })
};
