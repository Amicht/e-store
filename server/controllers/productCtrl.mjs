import { addProductAsync, getAllProductsAsync, getFoodCategoriesAsync, getProdctsByNameSearchAsync,
    getProductsByCategoryAsync, updateProductAsync} from '../bl/products.bl.mjs';
import { Router } from 'express';
import ErrorModel from '../models/error.model.mjs';
import { addFileHelper } from '../helpers/fileUploadHelper.mjs';


const productCtrl = Router();


productCtrl.get('/', async(req,res, next) => {
    try{
        const products = await getAllProductsAsync().catch(() => null);
        if(!products) throw new ErrorModel(500, 'server errror');
        res.send(products);
    }
    catch(err){ next(err)}
});

productCtrl.get('/search/:searchword', async(req,res, next) => {
    try{
        const searchword = req.params.searchword;
        if(!searchword) throw new ErrorModel(400, 'no word sent');
        const products = await getProdctsByNameSearchAsync(searchword).catch(() => null);
        if(!products) throw new ErrorModel(500, 'server errror');
        res.send(products);
    }
    catch(err){ next(err)}
});

productCtrl.get('/categories/', async(req,res, next) => {
    try{
        const products = await getFoodCategoriesAsync().catch(() => null);
        if(!products) throw new ErrorModel(500, 'server errror');
        res.send(products);
    }
    catch(err){ next(err)}
});

productCtrl.get('/category/:categoryId', async(req,res, next) => {
    try{
        const categoryId = req.params.categoryId;
        if(!categoryId) throw new ErrorModel(400, 'no category sent');
        const products = await getProductsByCategoryAsync(categoryId).catch(() => null);
        if(!products || products.length === 0) throw new ErrorModel(404, 'no items found');
        res.send(products);
    }
    catch(err){ next(err)}
});

productCtrl.post('/', async(req,res, next) => {
    try{
        const productToAdd = req.body;
        const imageFile = req.files.image;
        const image = addFileHelper(imageFile);
        if(!productToAdd) throw new ErrorModel(400, 'no product to add');
        await addProductAsync({...productToAdd, image}).catch((err) => {
            throw new ErrorModel(500, 'server errror')
        });
        res.status(201).send(productToAdd);
    }
    catch(err){ next(err) }
});

productCtrl.put('/', async(req,res, next) => {
    try{
        const productToUpdate = req.body;
        if(!productToUpdate) throw new ErrorModel(400, 'no product to update');
        await updateProductAsync(productToUpdate).catch(() => {
            throw new ErrorModel(500, 'server errror');
        });
        res.status(200).send(productToUpdate);
    }
    catch(err){ next(err) }
});


export { productCtrl };