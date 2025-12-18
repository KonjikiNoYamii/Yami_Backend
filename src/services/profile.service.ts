import type { Profile } from "../generated/client";
import { getPrisma } from "../prisma";

const prisma = getPrisma()

interface FindAllProfileParams {
  page: number
  limit: number
  search?: {
    name?: string
    gender?: string
    address?: string
  }
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

interface ProfileListResponse {
  profiles: Profile[]
  total: number
  totalPages: number
  currenPage: number
}

export const getAllProfiles = async (
  params: FindAllProfileParams
): Promise<ProfileListResponse> => {
  const { page, limit, search, sortBy, sortOrder } = params

  const skip = (page - 1) * limit

  const whereClause: any = {}

  if (search?.name) {
    whereClause.name = {
      contains: search.name,
      mode: 'insensitive',
    }
  }

  if (search?.gender) {
    whereClause.gender = search.gender
  }

  if (search?.address) {
    whereClause.address = {
      contains: search.address,
      mode: 'insensitive',
    }
  }

  const profiles = await prisma.profile.findMany({
    skip,
    take: limit,
    where: whereClause,
    orderBy: sortBy
      ? { [sortBy]: sortOrder ?? 'desc' }
      : { id: 'desc' },
  })

  const total = await prisma.profile.count({
    where: whereClause,
  })

  return {
    profiles,
    total,
    totalPages: Math.ceil(total / limit),
    currenPage: page,
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