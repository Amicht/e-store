import { addOrderAsync, getStoreOrdersCountAsync, getOrderAsync } from '../bl/orders.bl.mjs'
import {Router} from 'express';
import ErrorModel from '../models/error.model.mjs';
import { authUser } from '../middleware/auth-middleware.mjs';
import { deleteCartAsync } from '../bl/cart.bl.mjs';


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

ordersCtrl.post('/', authUser, async (req,res,next) => {
    try{
        const newOrder = await addOrderAsync(req.body)
        .then(async res => getOrderAsync(res.insertId))
        .catch(err => { throw new ErrorModel(400, err.message) });

        await deleteCartAsync(newOrder[0].cart_id)
        .catch(err => { throw new ErrorModel(400, err.message) });
        res.status(201).send(newOrder[0]);
    }
    catch(err){ next(err) }
});


export { ordersCtrl }
