import { addNewProduct,getAllProducts, getAllProductsByNameSearch,
    getProductsByCategory,updateProduct, getAllCategories
} from '../database/index.mjs';
import { ProductModel } from '../models/pruduct.model.mjs';


const getAllProductsAsync = () => getAllProducts();
const getFoodCategoriesAsync = () => getAllCategories();

const getProdctsByNameSearchAsync = (partialName) => {
    return getAllProductsByNameSearch(partialName);
}

const addProductAsync = (product) => {
    const newProduct = new ProductModel(product)
    return addNewProduct(newProduct);
}

const updateProductAsync = (updatedProduct) => {
    return updateProduct(updatedProduct)
};

const getProductsByCategoryAsync = (categoryId) => {
    return getProductsByCategory(categoryId);
}

export {
    getAllProductsAsync,
    getFoodCategoriesAsync,
    getProdctsByNameSearchAsync,
    addProductAsync,
    updateProductAsync,
    getProductsByCategoryAsync
}