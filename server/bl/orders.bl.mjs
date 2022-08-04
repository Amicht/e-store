import { addNewOrder, getOrderById, getTotalStoreOrders } from '../database/index.mjs';


const getStoreOrdersCountAsync = () => getTotalStoreOrders();

const addOrderAsync = (newOrder) => {
    newOrder.date = new Date();
    return addNewOrder(newOrder);
}

const getOrderAsync = (orderId) => getOrderById(orderId);

export {
    getOrderAsync,
    addOrderAsync,
    getStoreOrdersCountAsync
}

const order = {
    "client_id": 7,
    "cart_id": 8,
    "totalPrice": 456.8,
    "city": "Tel-Aviv",
    "street": "Hamasger",
    "arrival": new Date(),
    "date": new Date(),
    "creditNumber": 1234
}