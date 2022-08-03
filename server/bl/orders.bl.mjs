import { addNewOrder, getTotalStoreOrders } from '../database/index.mjs';


const getStoreOrdersCountAsync = () => getTotalStoreOrders();

const addOrderAsync = (newOrder) => addNewOrder(newOrder);


export {
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