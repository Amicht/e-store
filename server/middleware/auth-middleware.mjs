import { getUserFromToken, verifyToken } from "../helpers/jwt-helper.mjs";


const authAdmin = async(req,res,next) => {
    try{
        const isAdmin = await verifyToken(req.headers.authorization, 2);
        if(!isAdmin) return res.status(403).send("you are not authorized");
        const user = await getUserFromToken(req.headers.authorization);
        req.body.user = user;
        next();
    }
    catch(err){
        res.status(403).send(err.message);
    };
};

const authUser = async(req,res,next) => {
    try{
        const isregistered = await verifyToken(req.headers.authorization, 1);
        if(!isregistered) return res.status(401).send("unauthorized");
        const user = await getUserFromToken(req.headers.authorization);
        req.body.user = user;
        next();
    }
    catch(err){
        res.status(403).send(err.message);
    };
};

export {
    authAdmin,
    authUser
};