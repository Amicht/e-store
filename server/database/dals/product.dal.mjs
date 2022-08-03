import { queryAsync } from "../index.mjs";


const getAllProducts = () => {
    const query = 'SELECT * FROM products';
    return queryAsync(query);
}

const getAllProductsByNameSearch = (searchName) => {
    const query = "SELECT * FROM products WHERE `name` LIKE ?";
    return queryAsync(query, [`%${searchName}%`]);
}

const getProductsByCategory = (categoryId) => {
    const query = "SELECT * FROM `products` WHERE `category_id` = ?";
    return queryAsync(query, [categoryId]);
}

const addNewProduct = ({name,category_id, price, image}) => {
    const query = "INSERT INTO products (`name`, `category_id`, `price`, `image`) VALUES = (?,?,?,?)";
    return queryAsync(query, [name, category_id, price, image]);
}

const updateProduct = ({id, name, category_id, price}) => {
    const query = "UPDATE products SET `name`=?,`category_id`=?,`price`=? WHERE id = ?";
    return queryAsync(query, [name, category_id, price, id]);
}


export {
    getAllProducts,
    getAllProductsByNameSearch,
    getProductsByCategory,
    addNewProduct,
    updateProduct
}