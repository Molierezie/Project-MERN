import jwt from "jsonwebtoken"
import User from "../models/UsersModel.js";

// Middleware qui permet seulement à une personne connecté d'accéder à certaines pages

export const requireSignin = (req, res, next)=>{
  
    try {
        const decoded = jwt.verify
            (
            req.headers.authorization,
            process.env.JWT_SECRET_KEY
            );
        // console.log("decoded =>", decoded);
        req.user = decoded
        next();
        
    } catch (error) {
        res.status(401).json(error)
    }

}

// Middleware qui permet seulement à l'Admin d'accéder à certaines pages

export const isAdmin = async (req, res, next) =>{

    try {
        
        const connexionAdmin = await User.findById(req.user._id);
        if (connexionAdmin.role !== "Admin") {
            return res.status(401).send("Non autorisé")
        }else{
            next();
        }

    } catch (error) {
        console.log(error);
        res.status(401).json(error)
    }
};


