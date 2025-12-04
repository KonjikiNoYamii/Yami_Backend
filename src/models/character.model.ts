export interface CharacterStats {
  attack?: number;
  critChance?: number;
  element?: string;
  magic?: number;
  charm?: number;
  speed?: number;
  aggression?: number;
  agility?: number;
  mana?: number;
  magicDefense?: number;
  magicPower?: number;
  poisonDamage?: number;
}

export interface Character {
  id: number;
  name: string;
  rarity: string;
  power: number;
  stats?: CharacterStats;
  effect?: string;
  description: string;
}

export let characters: Character[] = [
  {
    id: 1,
    name: "Saber",
    rarity: "Epic",
    power: 250000,
    stats: { attack: 120, critChance: 8, element: "Holy" },
    description: "Waifu ksatria dengan Excalibur yang penuh kehormatan.",
  },
  {
    id: 2,
    name: "Akeno Himejima",
    rarity: "Legendary",
    power: 420000,
    stats: { magic: 150, charm: 95, element: "Lightning" },
    description: "Waifu cantik dengan kekuatan petir yang menghancurkan.",
  },
  {
    id: 3,
    name: "Zero Two",
    rarity: "Rare",
    power: 150000,
    stats: { speed: 25, aggression: 30 },
    description: "Waifu oni merah muda dengan gaya tempur agresif.",
  },
  {
    id: 4,
    name: "Asuna Yuuki",
    rarity: "Epic",
    power: 270000,
    stats: { attack: 95, agility: 20, element: "Light" },
    description: "Waifu battle healer dengan kecepatan luar biasa.",
  },
  {
    id: 5,
    name: "Emilia",
    rarity: "Epic",
    power: 310000,
    stats: { mana: 200, magicDefense: 50 },
    description: "Waifu half-elf yang mahir sihir es.",
  },
  {
    id: 6,
    name: "Mikasa Ackerman",
    rarity: "Rare",
    power: 120000,
    stats: { attack: 70, speed: 40 },
    description: "Waifu badass dengan kecepatan manuver tak tertandingi.",
  },
  {
    id: 7,
    name: "Rias Gremory",
    rarity: "Legendary",
    power: 450000,
    stats: { magicPower: 200, charm: 300 },
    description:
      "Waifu berambut merah dengan kekuatan destruktif iblis bangsawan.",
  },
  {
    id: 8,
    name: "Shinobu Kochou",
    rarity: "Epic",
    power: 180000,
    stats: { poisonDamage: 30, speed: 20 },
    description: "Waifu kupu-kupu dengan teknik racun mematikan.",
  },
  {
    id: 9,
    name: "Rem",
    rarity: "Common",
    power: 8000,
    effect: "Buff atk 20% selama 60 detik",
    description: "Waifu oni biru yang selalu setia dan perhatian.",
  },
  {
    id: 10,
    name: "Kurumi Tokisaki",
    rarity: "Legendary",
    power: 95000,
    effect: "Skill kebangkitan 50% HP",
    description: "Waifu waktu yang misterius dan berbahaya.",
  },
];
