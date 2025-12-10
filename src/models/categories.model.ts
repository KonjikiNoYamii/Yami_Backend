export interface CategoryGroup {
  id: number;
  category: string;
  characters: string[];
}

export const categories: CategoryGroup[] = [
  {
    id: 1,
    category: "Weapon",
    characters: ["Saber", "Asuna Yuuki", "Mikasa Ackerman"],
  },
  {
    id: 2,
    category: "Support",
    characters: ["Akeno Himejima", "Rem"],
  },
  {
    id: 3,
    category: "DPS",
    characters: ["Zero Two"],
  },
  {
    id: 4,
    category: "Mage",
    characters: ["Emilia", "Rias Gremory"],
  },
  {
    id: 5,
    category: "Assassin",
    characters: ["Shinobu Kochou"],
  },
  {
    id: 6,
    category: "Mage / Time",
    characters: ["Kurumi Tokisaki"],
  },
];