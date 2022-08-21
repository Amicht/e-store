import express from 'express';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import {config} from 'dotenv';
import { cartCtrl, authCtrl, productCtrl, ordersCtrl } from './controllers/index.mjs';

config();

const PORT = process.env.PORT;
const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(fileUpload({limits: { fileSize: 50 * 1024 * 1024 }}));

server.use('/',express.static('public'))
server.use('/auth', authCtrl);
server.use('/api/images', express.static('upload'));
server.use('/api/products', productCtrl);
server.use('/api/orders', ordersCtrl);
server.use('/api/cart', cartCtrl);

server.use((err,req, res,next) => {
    res.status(err.status || 500).send(err.message || 'ERROR')
});
server.get('*', (req,res) => {
    res.sendFile(process.cwd()+ "/public/index.html")
});


server.listen(PORT, () => console.log(`Listening to port ${PORT}`))