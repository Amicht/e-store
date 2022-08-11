import { addProductAsync, deleteProductAsync, getAllProductsAsync, getFoodCategoriesAsync, getProdctsByNameSearchAsync,
    getProductsByCategoryAsync, updateProductAsync} from '../bl/products.bl.mjs';
import { removeItemByProductIdAsync } from '../bl/cart.bl.mjs'
import { Router } from 'express';
import ErrorModel from '../models/error.model.mjs';
import { addFileHelper } from '../helpers/fileUploadHelper.mjs';
import { authAdmin, authUser } from '../middleware/auth-middleware.mjs';


const productCtrl = Router();


productCtrl.get('/', async(req,res, next) => {
    try{
        const products = await getAllProductsAsync()
        .catch(() => { throw new ErrorModel(500, 'server errror') });
        res.send(products);
    }
    catch(err){ next(err)}
});

productCtrl.get('/search/:searchword',authUser, async(req,res, next) => {
    try{
        const searchword = req.params.searchword;
        if(!searchword) throw new ErrorModel(400, 'no word sent');
        const products = await getProdctsByNameSearchAsync(searchword).catch(() => null);
        if(!products) throw new ErrorModel(500, 'server errror');
        res.send(products);
    }
    catch(err){ next(err)}
});

productCtrl.get('/categories',authUser, async(req,res, next) => {
    try{
        const products = await getFoodCategoriesAsync().catch(() => null);
        if(!products) throw new ErrorModel(500, 'server errror');
        res.send(products);
    }
    catch(err){ next(err)}
});

productCtrl.get('/category/:categoryId',authUser, async(req,res, next) => {
    try{
        const categoryId = req.params.categoryId;
        if(!categoryId) throw new ErrorModel(400, 'no category sent');
        const products = await getProductsByCategoryAsync(categoryId).catch(() => {throw new Error});
        res.send(products);
    }
    catch(err){ next(err)}
});

productCtrl.post('/',authAdmin, async(req,res, next) => {
    try{
        const productToAdd = req.body;
        const imageFile = req.files.image;
        const image = addFileHelper(imageFile);
        if(!productToAdd) throw new ErrorModel(400, 'no product to add');
        await addProductAsync({...productToAdd, image}).catch((err) => {
            throw new ErrorModel(500, 'server errror')
        });
        res.status(201).send();
    }
    catch(err){ next(err) }
});

productCtrl.put('/',authAdmin, async(req,res, next) => {
    try{
        const productToUpdate = req.body;
        if(!productToUpdate) throw new ErrorModel(400, 'no product to update');
        await updateProductAsync(productToUpdate).catch(() => {
            throw new ErrorModel(500, 'server errror');
        });
        res.status(200).send();
    }
    catch(err){ next(err) }
});

productCtrl.delete('/:id',authAdmin, async(req,res, next) => {
    try{
        const id = +req.params.id;
        if(!id) throw new ErrorModel(404, 'no product to delete');
        await removeItemByProductIdAsync(id)
        .then(() => deleteProductAsync(id))
        .catch(() => {
            throw new ErrorModel(500, 'server errror');
        });
        res.status(204).send();
    }
    catch(err){ next(err) }
});



export { productCtrl };