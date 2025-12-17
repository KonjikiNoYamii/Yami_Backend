import { getPrisma } from "../prisma"
import bcrypt from 'bcrypt'
import config from "../utils/env";
import jwt from 'jsonwebtoken';

const prisma = getPrisma()

export const register = async(data:{username:string,email:string,password_hash:string,role?:string}) =>{
    const existingUser = await prisma.user.findUnique({
        where:{
            email:data.email
        }
    })
    if (existingUser) {
        throw new Error("Email sudah terdaftar")
    }

    const hashedPassword = await bcrypt.hash(data.password_hash, 10)

    const user = await prisma.user.create({
        data:{
            username:data.username,
            email:data.email,
            password_hash:hashedPassword,
            role:data.role || "USER"
        }
    })
    return {
        email: user.email,
        username:user,user,
        role:user.role
    }

}

export const login = async(data:{email:string, password:string}) =>{
    const user = await prisma.user.findUnique({
        where:{
            email:data.email,
        }
    })
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
    { expiresIn: '1h' }
  );

  const userReturn = {
    email:user.email,
    username:user.username,
    role:user.role
  }

  return { userReturn, token };
}