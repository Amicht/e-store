import { queryAsync } from "../index.mjs";


const getClient = ({id, password}) => {
    const query = "SELECT * FROM clients WHERE id =? AND password = ?";
    return queryAsync(query, [id,password]);
}

const addClient = (c) => {
    const query = "INSERT INTO clients(`firstName`, `lastName`, `email`, `id`, `password`, `city`, `street`, `role`) VALUES (?,?,?,?,?,?,?,?)"
    return queryAsync(query, [c.firstName, c.lastName, c.email, c.id, c.password, c. city, c.street,1])
}

const checkClientId = (clientId) => {
    const query = "SELECT COUNT(*) FROM clients WHERE id = ? LIMIT 1";
    return queryAsync(query, [id]);
}

export {
    getClient,
    addClient,
    checkClientId
}