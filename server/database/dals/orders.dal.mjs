import { queryAsync } from "../index.mjs"


const getTotalStoreOrders = () => {
    return queryAsync("SELECT COUNT(*) FROM `orders`")
}

const addNewOrder = ({client_id, cart_id, totalPrice, city, street, arrival, date, creditNumber}) => {
    const query = "INSERT INTO orders (`client_id`, `cart_id`, `totalPrice`, `city`, `street`, `arrival`, `date`, `creditNumber`) VALUES (?,?,?,?,?,?,?,?)"
    return queryAsync(query, [client_id, cart_id, totalPrice, city, street, arrival, date, creditNumber])
}

export {
    getTotalStoreOrders,
    addNewOrder
}