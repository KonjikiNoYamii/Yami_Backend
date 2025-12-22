import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../utils/env";
import type { IAuthRepository } from "../repositories/auth.repository";

export interface RegisterInput {
  username: string;
  email: string;
  password: string;
  role?: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface IAuthService {
  register(data: RegisterInput): Promise<any>;
  login(data: LoginInput): Promise<any>;
}

export class AuthService implements IAuthService {
  constructor(private authRepo: IAuthRepository) {}

  async register(data: RegisterInput) {
    const existingUser = await this.authRepo.findByEmail(data.email);

    if (existingUser) {
      throw new Error("Email sudah terdaftar");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await this.authRepo.create({
      username: data.username,
      email: data.email,
      password_hash: hashedPassword,
      role: data.role ?? "USER",
    });

    return {
      email: user.email,
      username: user.username,
      role: user.role,
    };
  }

  async login(data: LoginInput) {
    const user = await this.authRepo.findByEmail(data.email);

    if (!user) {
      throw new Error("Email atau password salah!");
    }

    const isValid = await bcrypt.compare(data.password, user.password_hash);

    if (!isValid) {
      throw new Error("Email atau password salah!");
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      config.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return {
      user: {
        email: user.email,
        username: user.username,
        role: user.role,
      },
      token,
    };
  }
}
