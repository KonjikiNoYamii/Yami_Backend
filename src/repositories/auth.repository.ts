import type { User } from "../generated/client"
import { getPrisma } from "../prisma"

const prisma = getPrisma()

export const findUserByEmail = async (email: string): Promise<User | null> => {
  return prisma.user.findFirst({
    where: {
      email,
      deletedAt: null
    }
  })
}

export const createUser = async (data: {
  username: string
  email: string
  password_hash: string
  role: string
}): Promise<User> => {
  return prisma.user.create({
    data
  })
}
