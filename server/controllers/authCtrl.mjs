import { loginAsync, registerAsync, isValidIdAsync } from '../bl/auth.bl.mjs';
import { Router } from 'express';
import ErrorModel from '../models/error.model.mjs';
import {authUser} from "../middleware/auth-middleware.mjs"
const authCtrl = Router();

// chack if ID is available
authCtrl.get('/register/:newId', async(req,res,next) => {
    try{
        const id = req.params.newId;
        const isValid = await isValidIdAsync(id).catch(() => {
                throw new ErrorModel(500, 'Server error on register chack');
            });
        res.send(isValid);
    }
    catch(err){ next(err) }
});

// get user details
authCtrl.get('/details', authUser, async(req,res)=>{
    try{
        const user = req.body.user;
        if(!user){
            throw new ErrorModel(401, "unauthorized");
        }
        res.send(user);
    }
    catch(err){ next(err) }
})
authCtrl.post('/login', async (req,res,next) => {
    try{
        if(!req.body) throw new ErrorModel(400, 'Baaaad request baby...');
        const token = await loginAsync(req.body).catch((err) => {
            throw new ErrorModel(400, err.message)
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
