import { addNewProduct,getAllProducts, getAllProductsByNameSearch,
    getProductsByCategory,updateProduct, getAllCategories, deleteProduct
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

const deleteProductAsync = (productId) => {
    return deleteProduct(productId);
}

export {
    getAllProductsAsync,
    getFoodCategoriesAsync,
    getProdctsByNameSearchAsync,
    addProductAsync,
    updateProductAsync,
    deleteProductAsync,
    getProductsByCategoryAsync
}