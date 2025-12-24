import type { IUserRepository } from "../repositories/user.repository";
import type { User } from "../generated/client";

export interface IUserService {
  getAllUsers(): Promise<{ users: User[]; total: number }>;
  getUserById(id: string): Promise<User>;
  createUser(
    username: string,
    email: string,
    password_hash: string
  ): Promise<User>;
  updateUser(id: string, data: Partial<User>): Promise<User>;
  deleteUser(id: string): Promise<User>;
  exec():Promise<{overview:any}>
}

export class UserService implements IUserService {
  constructor(private userRepo: IUserRepository) {}

  async getAllUsers() {
    const users = await this.userRepo.findAll();
    return { users, total: users.length };
  }

  async getUserById(id: string): Promise<User> {
    const user = await this.userRepo.findById(Number(id));
    if (!user) {
      throw new Error("User tidak ditemukan");
    }
    return user;
  }

  async createUser(
    username: string,
    email: string,
    password_hash: string
  ): Promise<User> {
    const exist = await this.userRepo.findByUsernameOrEmail(
      username,
      email
    );

    if (exist) {
      throw new Error("Username atau email sudah digunakan");
    }

    return this.userRepo.create({
      username,
      email,
      password_hash,
    });
  }

  async updateUser(id: string, data: Partial<User>): Promise<User> {
    return this.userRepo.update(Number(id), data);
  }

  async deleteUser(id: string): Promise<User> {
    return this.userRepo.softDelete(Number(id));
  }

  async exec(){
    const overview = await this.userRepo.getStats()

    return{
      overview
    }
  }
}
