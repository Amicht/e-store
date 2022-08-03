import {createHmac} from 'crypto';

const hash =  "myHashString";

const hashedPassword = password => createHmac('sha256', hash).update(String(password)).digest('hex');


export { hashedPassword };