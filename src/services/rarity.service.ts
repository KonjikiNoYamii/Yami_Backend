// import { getPrisma } from "../prisma";

// const prisma = getPrisma()

// export const getAllRarities = async () => {
//   return prisma.rarity.findMany();
// };

// export const getRarityById = async (id: number) => {
//   return prisma.rarity.findUnique({
//     where: { id },
//   });
// };

// export const createRarity = async (data: any) => {
//   return prisma.rarity.create({
//     data,
//   });
// };

// export const updateRarity = async (id: number, data: any) => {
//   return prisma.rarity.update({
//     where: { id },
//     data,
//   });
// };

// export const deleteRarity = async (id: number) => {
//   return prisma.rarity.delete({
//     where: { id },
//   });
// };

// export const searchRarity = async (keyword: string) => {
//   return prisma.rarity.findMany({
//     where: {
//       name: {
//         contains: keyword,
//         mode: "insensitive",
//       },
//     },
//   });
// };
