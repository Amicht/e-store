import { loginAsync, registerAsync, isValidIdAsync } from '../bl/auth.bl.mjs';
import { Router } from 'express';
import ErrorModel from '../models/error.model.mjs';
import { getNewToken } from '../helpers/jwt-helper.mjs';

const authCtrl = Router();

authCtrl.get('/register/:newId', async(req,res,next) => {
    try{
        const id = req.params.newId;
        console.log(id);
        const isValid = await isValidIdAsync(id).catch(() => {
                throw new ErrorModel(500, 'Server error on register chack')
            })
        res.send(isValid);
    }
    catch(err){ next(err) }
});

authCtrl.post('/login', async (req,res,next) => {
    try{
        if(!req.body) throw new ErrorModel(400, 'Baaaad request baby...');
        const token = await loginAsync(req.body).catch((err) => {
            throw new ErrorModel(err.status || 500, err.message || 'Server error on login')
        });
        res.send(token);
    }
    catch(err){ next(err) }
});

authCtrl.post('/register', async (req,res,next) => {
    try{
        if(!req.body) throw new ErrorModel(400, 'Baaaad request baby...');
        const client = await registerAsync(req.body).catch(() => {
            throw new ErrorModel(400, 'id already exist or bad request')
        });
        res.status(201).send();
    }
    catch(err){ next(err) }
});

export { authCtrl };
