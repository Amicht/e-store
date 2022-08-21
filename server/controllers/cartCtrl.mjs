import { getClientCartAsync, startNewCartAsync, addItemToCartAsync, 
    removeItemFromCartAsync, deleteCartAsync } from '../bl/cart.bl.mjs'
import {Router} from 'express';
import ErrorModel from '../models/error.model.mjs';
import { authUser } from '../middleware/auth-middleware.mjs';

const cartCtrl = Router();

cartCtrl.get('/', authUser,async(req,res, next)=>{
    try{
        const clientId = +req.body.user.id;
        const cart = await getClientCartAsync(clientId).catch(() => null);
        if(!cart) throw new ErrorModel(500, "failed to load cart");
        res.send(cart);
    }
    catch(err){ next(err) }
});

cartCtrl.post('/',authUser, async(req,res, next)=>{
    try{
        const clientId = +req.body.user.id;
        if(!clientId) throw new ErrorModel(400, 'cart not sent');
        const newCartId = await startNewCartAsync(clientId)
            .catch(() => null);
        if(!newCartId) throw new ErrorModel(400,'unable to create new cart');
        res.status(201).send(newCartId);
    }
    catch(err){ next(err) }
});

cartCtrl.post('/item',authUser, async(req,res, next)=>{
    try{
        const itemToAdd = req.body;
        if(!itemToAdd) throw new ErrorModel(400, 'item not sent');
        const item = await addItemToCartAsync(itemToAdd).catch(() => null);
        if(!item) throw new ErrorModel(400,'unable to add item to cart');
        res.status(201).send(itemToAdd);
    }
    catch(err){ next(err) }
});

cartCtrl.delete('/item/:itemId',authUser, async(req,res, next)=>{
    try{
        const itemId = +req.params.itemId;
        const item = await removeItemFromCartAsync(itemId).catch(()=> null);
        if(!item) throw new ErrorModel(500,'Failed to remove item from cart');
        res.status(204).send();
    }
    catch(err){ next(err) }
});

cartCtrl.delete('/:cartId',authUser, async(req,res, next)=>{
    try{
        const cartId = +req.params.cartId;
        if(!cartId) throw new ErrorModel(400, "bad request");
        const deletetd = await deleteCartAsync(cartId);
        if(!deletetd) throw new ErrorModel(500,'Failed to delete cart')
        res.status(204).send();
    }
    catch(err){ next(err) }
});


export { cartCtrl };