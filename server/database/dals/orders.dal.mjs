import { queryAsync } from "../index.mjs"


const getTotalStoreOrders = () => {
    return queryAsync("SELECT COUNT(*) AS `total` FROM `orders`")
}

const getOrderById = (orderId) => {
    return queryAsync("SELECT * FROM `orders` WHERE id = ? LIMIT 1", [orderId]);
}

const addNewOrder = ({client_id, cart_id, totalPrice, city, street, arrival, date, creditNumber}) => {
    const query = "INSERT INTO orders (`client_id`, `cart_id`, `totalPrice`, `city`, `street`, `arrival`, `date`, `creditNumber`) VALUES (?,?,?,?,?,?,?,?)"
    return queryAsync(query, [client_id, cart_id, totalPrice, city, street, arrival, date, creditNumber])
}

export {
    getOrderById,
    getTotalStoreOrders,
    addNewOrder
}