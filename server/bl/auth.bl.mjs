import { getClient, checkClientId, addClient } from '../database/index.mjs'
import { hashedPassword } from '../helpers/hmac-helper.mjs';
import { getNewToken } from '../helpers/jwt-helper.mjs'
import ErrorModel from '../models/error.model.mjs';


const loginAsync = (clientCredentials) => {
    const password = hashedPassword(clientCredentials.password);
    return getClient({...clientCredentials, password})
        .then(client => {
            if(client.length === 0) throw new ErrorModel(400, 'invalid id or password')
            return getNewToken(client[0]);
        });
};

const registerAsync = (clientCredentials) => {
    const password = hashedPassword(clientCredentials.password);
    return addClient({...clientCredentials, password});
};

const isValidIdAsync = (id) => checkClientId(id).then(res => {
    if(res[0].isIdExist > 0) return false;
    return true;
});


export { 
    loginAsync,
    registerAsync,
    isValidIdAsync
}