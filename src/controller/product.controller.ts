import type { Request, Response } from "express";{}
import { successResponse } from "../utils/response";
import type { IProductService } from "../services/product.service";

 interface IProductController{
    getAll(req:Request , res:Response):Promise<void>;
    getById(req:Request, res:Response):Promise<void>;
    create(req:Request, res:Response):Promise<void>;
    update(req:Request, res:Response):Promise<void>;
    deletedProduct(req:Request, res:Response):Promise<void>
}

 export class ProductController implements IProductController{
    constructor(private productService:IProductService){

    }


 getAll = async (req: Request, res: Response) => {
  const page = Number(req.query.page) || 1
  const limit = Number(req.query.limit) || 10
  const search = req.query.search
  const sortBy = req.query.sortBy as string
  const sortOrder = (req.query.sortOrder as 'asc' | 'desc') || 'desc'


  const data:any = { page, limit, search, sortBy, sortOrder }

  const result = await this.productService.getAllProducts(data)

  successResponse(res, "Produk berhasil diambil!", result.products, {
    page: result.currenPage,
    limit,
    total: result.total,
    totalPages: result.totalPages
  })
}


 getById = async(req:Request,res:Response) => {
    if (!req.params.id) {
        throw new Error("Parameter tidak ditemukan!")
    }
    const product = await this.productService.getProductById(req.params.id)

    successResponse(
        res,
        "ID produk berhasil diambil",
        product,
        null,
        200
    )
}

 create = async(req:Request,res:Response) =>{
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

    const products = await this.productService.createProduct(newProduct)

    successResponse(
        res,
        "Produk berhasil dibuat!",
        products,
        null,
        201
    )
}

 update = async (req:Request, res:Response) =>{
    if (!req.params.id) {
        throw new Error("Parameter tidak ditemukan!")
    }

    const product = await this.productService.updateProduct(req.params.id, req.body)

    successResponse(
        res,
        "Produk berhasil di update",
        product,
        null,
        200
    )
}

 deletedProduct = async(req:Request, res:Response) =>{
    if (!req.params.id) {
        throw new Error("ID tidak ditemukan!")
    }

    const product = await this.productService.deleteProduct(req.params.id)

    successResponse(
        res,
        "Produk berhasil dihapus!",
        product,
        null,
        200
    )
}
    getStats = async (_req:Request,res:Response) =>{
        const stats = await this.productService.exec()

        successResponse(
            res,
            "Produk berhasil diambil",
            stats,
            null,
            200
        )
    }
}