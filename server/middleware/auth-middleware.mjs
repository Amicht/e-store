import { getUserFromToken, verifyToken } from "../helpers/jwt-helper.mjs";
import ErrorModel from "../models/error.model.mjs";


const authAdmin = async(req,res,next) => {
    try{
        if(!req.headers.authorization) throw new ErrorModel(403, "bad request");
        const isAdmin = await verifyToken(req.headers.authorization, 2);
        if(!isAdmin) throw new ErrorModel(403,"you are not authorized");
        const user = await getUserFromToken(req.headers.authorization);
        if(!user) throw new ErrorModel(403, "unauthorized")
        req.body.user = user;
        next();
    }
    catch(err){
        res.status(403).send(err.message || "unauthorized");
    };
};

const authUser = async(req,res,next) => {
    try{
        if(!req.headers.authorization) throw new ErrorModel(403, "bad request");
        const isregistered = await verifyToken(req.headers.authorization, 1);
        if(!isregistered) throw new ErrorModel(403, "unauthorized");
        const user = await getUserFromToken(req.headers.authorization);
        req.body.user = {
            id:user.id, 
            role: user.role, 
            firstName: user.firstName,
            lastName: user.lastName};
        next();
    }
    catch(err){
        res.status(403).send(err.message || "unauthorized");
    };
};

export {
    authAdmin,
    authUser
};