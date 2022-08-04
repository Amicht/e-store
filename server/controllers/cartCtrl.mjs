import { getClientCartAsync, startNewCartAsync, addItemToCartAsync, 
    removeItemFromCartAsync, deleteCartAsync } from '../bl/cart.bl.mjs'
import {Router} from 'express';
import ErrorModel from '../models/error.model.mjs';

const cartCtrl = Router();

cartCtrl.get('/:clientId', async(req,res, next)=>{
    try{
        const clientId = +req.params.clientId;
        const cart = await getClientCartAsync(clientId);
        res.send(cart);
    }
    catch(err){ next(err) }
});

cartCtrl.post('/', async(req,res, next)=>{
    try{
        const clientId = req.body.id;
        if(!clientId) throw new ErrorModel(400, 'cart not sent');
        const newCartId = await startNewCartAsync(clientId)
            .catch(() => {throw new ErrorModel(400,'unable to create new cart')});
        res.status(201).send(newCartId);
    }
    catch(err){ next(err) }
});

cartCtrl.post('/item', async(req,res, next)=>{
    try{
        const itemToAdd = req.body;
        console.log(itemToAdd);
        if(!itemToAdd) throw new ErrorModel(400, 'item not sent');
        await addItemToCartAsync(itemToAdd)
            .catch((err) => {throw new ErrorModel(400,'unable to add item to cart')});
        res.status(201).send(itemToAdd);
    }
    catch(err){ next(err) }
});

cartCtrl.delete('/item/:itemId', async(req,res, next)=>{
    try{
        const itemId = +req.params.itemId;
        await removeItemFromCartAsync(itemId);
        res.status(204).send();
    }
    catch(err){ next(err) }
});

cartCtrl.delete('/:cartId', async(req,res, next)=>{
    try{
        const cartId = +req.params.cartId;
        await deleteCartAsync(cartId);
        res.status(204).send();
    }
    catch(err){ next(err) }
});


export { cartCtrl };