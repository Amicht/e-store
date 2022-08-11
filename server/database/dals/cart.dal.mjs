import { queryAsync } from "../index.mjs";


const getActiveCart = (clientID) => {
    const query = "SELECT a.* , b.firstName AS name FROM carts a JOIN clients b ON a.client_id = b.id WHERE `client_id` = ? LIMIT 1;";
    return queryAsync(query,[clientID]);
};

const getCartItems = (cartId) => {
    const query = "SELECT a.* , b.name AS `name`, b.image AS image FROM `cart_items` a JOIN `products` b ON a.product_id = b.id WHERE a.cart_id = ?";
    return queryAsync(query, [cartId]);
};

const getCartItem = (itemId) => {
    const query = "SELECT * FROM `cart_items` WHERE id = ? LIMIT 1";
    return queryAsync(query, [itemId]);
};

const addNewCart = ({ clientId, date }) => {
    const query = "INSERT INTO `carts`(`client_id`, `date`) VALUES (?,?)";
    return queryAsync(query,[clientId,date]);
};

const addProductToCart = ({product_id, amount, totalPrice,cart_id}) => {
    const query = "INSERT INTO `cart_items`(`product_id`, `amount`, `totalPrice`, `cart_id`) VALUES (?,?,?,?)";
    return queryAsync(query,[product_id,amount,totalPrice, cart_id]);
};

const updateCartItem = ({id, amount, totalPrice}) => {
    const query = "UPDATE `cart_items` SET `amount`= ?, `totalPrice`= ? WHERE `id` = ?";
    return queryAsync(query,[amount, totalPrice, id]);
};

const deleteOneProductFromCart = (id) => {
    const query = "DELETE FROM `cart_items` WHERE id = ?";
    return queryAsync(query, [id])
}
const deleteItemByProductId = (productId) => {
    const query = "DELETE FROM `cart_items` WHERE product_id = ?";
    return queryAsync(query, [productId])
}

const deleteAllProductFromCart = (cartId) => {
    const query = "DELETE FROM `cart_items` WHERE cart_id = ?";
    return queryAsync(query, [cartId])
}

const deleteCart = (cartId) => {
    const query = "DELETE FROM `carts` WHERE id = ?";
    return queryAsync(query, [cartId])
}


export {
    getActiveCart,
    getCartItem,
    getCartItems,
    addNewCart,
    addProductToCart,
    updateCartItem,
    deleteOneProductFromCart,
    deleteAllProductFromCart,
    deleteCart,
    deleteItemByProductId,
}