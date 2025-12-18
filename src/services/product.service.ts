import type { Product } from "../generated/client";
import { getPrisma } from "../prisma";

const prisma = getPrisma()

interface FindAllParams {
    page:number
    limit:number
    search?:{
        name?:string, 
        min_price?:number,
        max_price?:number
    }
    sortBy?:string
 sortOrder?:'asc'|'desc'
}
interface ProductListResponse{
    products:Product[], total:number, totalPages:number, currenPage:number 
}

export const getAllProducts = async(params:FindAllParams):Promise<ProductListResponse> => {
    const {page, limit, search, sortBy, sortOrder} = params

    const skip = (page - 1) * limit

    const whereClause:any = {
        deletedAt: null
    }

    if (search?.name) {
        whereClause.name = {
            contains:search.name, mode:'insensitive'
        }
    }
    if (search?.min_price) {
        whereClause.min_price = {
            gte:search.min_price
        }
    }
    if (search?.max_price) {
        whereClause.max_price={
            lte: search.max_price
        }
    }
const products = await prisma.product.findMany({
  skip,
  take: limit,
  where: whereClause,
  orderBy: sortBy
    ? { [sortBy]: sortOrder }
    : { createdAt: 'desc' },
  include: { category: true }
})

    const total = await prisma.product.count({
        where:whereClause
    })

    return {products, total, totalPages:Math.ceil(total/limit), currenPage:page}

}

export const getProductById = async(id:string) =>{
    const numid = parseInt(id)

    return await prisma.product.findUnique({
        where:{
            id:numid,
            deletedAt:null
        }
    })
}

export const createProduct = async(data:{ name: string,description:string,price: number, stock: number, categoryId: number, image:string }):Promise<Product>=>{
    return await prisma.product.create({
        data:{
            name:data.name,
            description:data.description ?? null,
            price:data.price,
            stock:data.stock,
            categoryId:data.categoryId,
            image:data.image
        }
    })
}

export const updateProduct = async (id: string, data:Partial<Product>):Promise<Product>=>{
    const numid = parseInt(id)

    return await prisma.product.update({
        where:{id:numid, deletedAt:null},
        data
    })
}

export const deleteProduct = async (id:string):Promise<Product> =>{
    const numid = parseInt(id)

    return await prisma.product.update({
        where:{
            id:numid, deletedAt:null
        },
        data:{
            deletedAt: new Date()
        }
    })
}