import type { Request, Response } from "express";{}
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "../services/product.service";
import { successResponse } from "../utils/response";

export const getAll = async (req: Request, res: Response) => {
  const page = Number(req.query.page) || 1
  const limit = Number(req.query.limit) || 10
  const search = req.query.search
  const sortBy = req.query.sortBy as string
  const sortOrder = (req.query.sortOrder as 'asc' | 'desc') || 'desc'


  const data:any = { page, limit, search, sortBy, sortOrder }

  const result = await getAllProducts(data)

  successResponse(res, "Produk berhasil diambil!", result.products, {
    page: result.currenPage,
    limit,
    total: result.total,
    totalPages: result.totalPages
  })
}


export const getById = async(req:Request,res:Response) => {
    if (!req.params.id) {
        throw new Error("Parameter tidak ditemukan!")
    }
    const product = await getProductById(req.params.id)

    successResponse(
        res,
        "ID produk berhasil diambil",
        product,
        null,
        200
    )
}

export const create = async(req:Request,res:Response) =>{
    const file = req.file
    if (!file) {
        throw new Error("Image is required")
    }
    const {name, description, price, stock, categoryId} = req.body

    const imageurl = `/public/uploads/${file.filename}`

    const newProduct = {
        name:String(name),
        description:String(description),
        price:Number(price),
        stock:Number(stock),
        categoryId:Number(categoryId),
        image:imageurl
    }

    const products = await createProduct(newProduct)

    successResponse(
        res,
        "Produk berhasil dibuat!",
        products,
        null,
        201
    )
}

export const update = async (req:Request, res:Response) =>{
    if (!req.params.id) {
        throw new Error("Parameter tidak ditemukan!")
    }

    const product = await updateProduct(req.params.id, req.body)

    successResponse(
        res,
        "Produk berhasil di update",
        product,
        null,
        201
    )
}

export const deletedProduct = async(req:Request, res:Response) =>{
    if (!req.params.id) {
        throw new Error("ID tidak ditemukan!")
    }

    const product = await deleteProduct(req.params.id)

    successResponse(
        res,
        "Produk berhasil dihapus!",
        product,
        null,
        200
    )
}