{ }
import { createProduct, deleteProduct, getAllProducts, getProductById, searchProducts, updateProduct } from "../services/product.service";
import { successResponse } from "../utils/response";
export const getAll = async (_req, res) => {
    const { products, total } = await getAllProducts();
    successResponse(res, "Produk berhasil diambil!", {
        jumlah: total,
        data: products
    }, null, 200);
};
export const getById = async (req, res) => {
    if (!req.params.id) {
        throw new Error("Parameter tidak ditemukan!");
    }
    const product = await getProductById(req.params.id);
    successResponse(res, "ID produk berhasil diambil", product, null, 200);
};
export const search = async (req, res) => {
    const { name, min_price, max_price } = req.query;
    const product = await searchProducts(name?.toString(), Number(min_price), Number(max_price));
    successResponse(res, "Produk tidak ditemukan!", product, null, 200);
};
export const create = async (req, res) => {
    const { name, description, price, stock, categoryId } = req.body;
    const newProduct = {
        name: String(name),
        description: String(description),
        price: Number(price),
        stock: Number(stock),
        categoryId: Number(categoryId)
    };
    const products = await createProduct(newProduct);
    successResponse(res, "Produk berhasil dibuat!", products, null, 201);
};
export const update = async (req, res) => {
    if (!req.params.id) {
        throw new Error("Parameter tidak ditemukan!");
    }
    const product = await updateProduct(req.params.id, req.body);
    successResponse(res, "Produk berhasil di update", product, null, 201);
};
export const deletedProduct = async (req, res) => {
    if (!req.params.id) {
        throw new Error("ID tidak ditemukan!");
    }
    const product = await deleteProduct(req.params.id);
    successResponse(res, "Produk berhasil dihapus!", product, null, 200);
};
//# sourceMappingURL=product.controller.js.map