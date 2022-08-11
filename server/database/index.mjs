import {createConnection} from 'mysql';
import {promisify} from 'util';

const con = createConnection({
    host: 'localhost',
    user:'root',
    password: '',
    database: 'e-store'
});

export const queryAsync = promisify(con.query).bind(con);

export { getClient, addClient, checkClientId } from './dals/clients.dal.mjs'
export { addNewOrder, getTotalStoreOrders, getOrderById } from './dals/orders.dal.mjs'

export {
    getActiveCart, 
    getCartItems, 
    addNewCart, 
    addProductToCart, 
    updateCartItem, 
    deleteCart, 
    deleteAllProductFromCart, 
    deleteOneProductFromCart,
    getCartItem,
} from './dals/cart.dal.mjs'

export {
    getAllProducts, 
    getAllCategories,
    getOneProductById,
    getAllProductsByNameSearch, 
    getProductsByCategory,
    addNewProduct, 
    updateProduct,
    deleteProduct
} from './dals/product.dal.mjs'
