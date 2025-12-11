import { categories } from "../models/categories.model";
export const getAllCategories = () => {
    return {
        categories,
        total: categories.length,
    };
};
export const searchCategories = (category, characters) => {
    let result = categories;
    if (category) {
        result = result.filter((c) => c.category.toLowerCase().includes(category.toLowerCase()));
    }
    if (characters) {
        result = result.filter((c) => c.characters.some((char) => char.toLowerCase().includes(char.toLowerCase())));
    }
    return result;
};
export const getCategoryById = (id) => {
    const numId = parseInt(id);
    const category = categories.find((c) => c.id === numId);
    if (!category) {
        throw new Error("Kategori tidak ditemukan!");
    }
    return category;
};
export const createCategory = (category, characters) => {
    const newCategory = {
        id: categories.length,
        category,
        characters,
    };
    categories.push(newCategory);
    return newCategory;
};
export const updateCategory = (id, data) => {
    const numid = parseInt(id);
    const index = categories.findIndex((c) => c.id === numid);
    if (index !== -1) {
        throw new Error("Id tidak ditemukan");
    }
    categories[index] = {
        ...categories[index],
        ...data,
    };
    return categories[index];
};
export const deteledCategory = (id) => {
    const numId = parseInt(id);
    const index = categories.findIndex((c) => c.id === numId);
    const deleted = categories.splice(index, 1);
    return deleted;
};
//# sourceMappingURL=categories.service.js.map