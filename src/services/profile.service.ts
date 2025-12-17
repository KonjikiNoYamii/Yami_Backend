import type { Profile } from "../generated/client";
import { getPrisma } from "../prisma";

const prisma = getPrisma()

export const getAllProfile = async():Promise<{profile:Profile[], total:number}> =>{
    const profile = await prisma.profile.findMany()
    return {
        profile:profile, total:profile.length
    }
}

export const getProfileById = async(id:string) =>{
    const numId = parseInt(id) 
    
    return await prisma.profile.findUnique({
        where:{
            id:numId
        }
    })
}

export const searchProfile = async (data: {
  name?: string
  gender?: string
  address?: string
}) => {
  return await prisma.profile.findMany({
    where: {
      ...(data.name && {
        name: {
          contains: data.name,
          mode: "insensitive",
        },
      }),

      ...(data.gender && {
        gender: data.gender,
      }),

      ...(data.address && {
        address: {
          contains: data.address,
          mode: "insensitive",
        },
      }),
    },
  })
}

export const createProfile = async(data:{name:string, gender:string,address:string,profilePictureUrl:string, userId:number}) =>{
    return await prisma.profile.create({
        data:{
            name:data.name,
            gender:data.gender,
            address:data.address,
            profilePictureUrl:data.profilePictureUrl,
            userId:data.userId
        }
    })
}

export const updateProfile = async(id:string,data:{name:string, gender:string,address:string,profilePictureUrl:string}) =>{
    const numId = parseInt(id)

    return await prisma.profile.update({
        where:{
            id:numId
        },
        data:{
            name:data.name,
            gender:data.gender,
            address:data.address,
            profilePictureUrl:data.profilePictureUrl,
        }
    })
}

export const deleteProfile = async (id:string) =>{
    const numId = parseInt(id)
    return await prisma.profile.delete({
        where:{
            id:numId
        }
    })
}