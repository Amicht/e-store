import { addOrderAsync, getStoreOrdersCountAsync } from '../bl/orders.bl.mjs'
import {Router} from 'express';
import ErrorModel from '../models/error.model.mjs';

const ordersCtrl = Router();

ordersCtrl.get('/', async (req,res,next) => {
    try{
        await getStoreOrdersCountAsync()
        .then(orderCount => {
            res.send((orderCount[0].total).toString());
        })
        .catch(err => { throw new ErrorModel(500, err.message) });
    }
    catch(err){ next(err) }
});

ordersCtrl.post('/', async (req,res,next) => {
    try{
        const newOrder = req.body;
        await addOrderAsync(newOrder)
        .catch(err => { throw new ErrorModel(400, err.message) });
        res.status(201).send(newOrder);
    }
    catch(err){ next(err) }
});


export { ordersCtrl }
