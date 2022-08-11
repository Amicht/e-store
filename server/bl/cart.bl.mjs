import ErrorModel from '../models/error.model.mjs';
import { 
    getActiveCart, getCartItems, updateCartItem, 
    addNewCart, addProductToCart, deleteCart, deleteAllProductFromCart, 
    deleteOneProductFromCart, getCartItem, getOneProductById, 
} from '../database/index.mjs';
import { deleteItemByProductId } from '../database/dals/cart.dal.mjs';



const startNewCartAsync = (clientId) => {
    const date = new Date();
    return addNewCart({clientId, date}).then(res => res.insertId);
}

const getClientCartAsync = (clientId) => {
    return getActiveCart(clientId).then(async cart => {
        if(cart.length === 0){
            cart = await startNewCartAsync(clientId)
            .then(res => getActiveCart(res));
        }
        else{
            cart = cart[0];
            cart.items = await getCartItems(cart.id);
        }
        return cart;
    });
}

const addItemToCartAsync = ({product_id, amount, cart_id}) => {
    return getOneProductById(product_id)
        .then(product => amount * product[0].price)
        .then(totalPrice => addProductToCart({product_id, amount, cart_id, totalPrice}))
};

// const updateCartAmountAsync = ({id, amount}) => {
//     return getCartItem(id).then(item => {
//         const totalPrice = amount * item.price;
//         return updateCartItem({id, amount, totalPrice})
//     })
// }

const removeItemFromCartAsync = (itemId) => deleteOneProductFromCart(itemId);

const removeItemByProductIdAsync = (productId) => deleteItemByProductId(productId);

const deleteCartAsync = (cartId) => {
    return deleteAllProductFromCart(cartId).then(() => deleteCart(cartId));
}

export {
    getClientCartAsync,
    startNewCartAsync,
    addItemToCartAsync,
    removeItemFromCartAsync,
    deleteCartAsync,
    removeItemByProductIdAsync
}