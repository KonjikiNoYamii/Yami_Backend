import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import config from "../utils/env"
import * as authRepo from "../repositories/auth.repository"

interface RegisterInput {
  username: string
  email: string
  password: string
  role?: string
}

interface LoginInput {
  email: string
  password: string
}

export const register = async (data: RegisterInput) => {
  const existingUser = await authRepo.findUserByEmail(data.email)

  if (existingUser) {
    throw new Error("Email sudah terdaftar")
  }

  const hashedPassword = await bcrypt.hash(data.password, 10)

  const user = await authRepo.createUser({
    username: data.username,
    email: data.email,
    password_hash: hashedPassword,
    role: data.role ?? "USER"
  })

  return {
    email: user.email,
    username: user.username,
    role: user.role
  }
}

export const login = async (data: LoginInput) => {
  const user = await authRepo.findUserByEmail(data.email)

  if (!user) {
    throw new Error("Email atau password salah!")
  }

  const isValid = await bcrypt.compare(data.password, user.password_hash)

  if (!isValid) {
    throw new Error("Email atau password salah!")
  }

  const token = jwt.sign(
    { id: user.id, role: user.role },
    config.JWT_SECRET,
    { expiresIn: "1h" }
  )

  return {
    user: {
      email: user.email,
      username: user.username,
      role: user.role
    },
    token
  }
}
