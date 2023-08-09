import User from "../models/UsersModel.js";
import { hashPassword, comparePassword } from "../bcrypt/authPassword.js";   
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import slugify from "slugify";

dotenv.config()


// ----------------------------------------------------- CREATION DE COMPTE -------------------------------------------

export const RegisterSubmit = async (req, res, next) =>{
    
    try {

          // Destructuring les données reçu dans le front 
        
        const {login,email,password,adress} = req.body


        // Condition création de compte avec ou sans image

        let formDatabase;


        if (!req.file) {
            formDatabase = {
                login : req.body.login,
                email : req.body.email,
                adress : req.body.adress,
                password : req.body.password,
            }
    
        } else {
            formDatabase = {
                login : req.body.login,
                email : req.body.email,
                adress : req.body.adress,
                password : req.body.password,
                image : {
                    src : req.file.filename,
                    alt  : req.file.originalname
                }
            }
        }

        // Condition pour gérer les messages d'erreurs en cas de mauvaise saisie

        switch (true) {
            case !login.trim():
               return res.json({error : "Un login est requis"})
            case !email.trim():
                return res.json({error : "Une adresse email valide est requise"})
                case !adress.trim():
                    return res.json({ error : "Une adresse est requise"})
                        case (!password.trim() ):
                            return  res.json({ error: "Un mot de passe est requis"})
        }


        // Condition verification mail déjà existant et pour le mot de passe une MAJUSCULE, une minuscule, un chiffre et un caractère spéciaux

        const checkPwd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,30}$/

        const verifMail = await User.findOne({email});

        if(verifMail){
            return res.json({error : "Cette adresse mail est déjà utilisée"})
        }

        if((!checkPwd.test(password))){
            return res.json({error: "Un mot de passe est requis et doit avoir au moins une majuscule, une minuscule et un caractère spéciaux"})
        }
      
    
        // création de l'utilisateur

        const user = await new User({
           
            ...formDatabase, slug : slugify(login)

        }).save()

        // Création du Token
        
        const token = jwt.sign({_id : user._id},   process.env.JWT_SECRET_KEY, { expiresIn :"7d",})
        
        res.json({

            user:{
                login : user.login,
                email: user.email,
                role : user.role,
                adress : user.adress
            },

            token 
        });    

    } catch (error) {
        console.log(error);
        res.status(400).json(error.message)

    }   
};

// ----------------------------------------------------------------------------------------------------------------------  //
// ----------------------------------------------------- CONNEXION ------------------------------------------------- //
// ---------------------------------------------------------------------------------------------------------------------- //


export const LoginSubmit =  async (req, res) =>{

    try {
           const {email,password} = req.body
               
           if(!email){
            return res.json ({error : "Une adresse mail est requise"})
            }
        
            if(!password){
                return res.json({error : "Un mot de passe est requis"})
            }
        
           const user = await User.findOne({email});
        
           if(!user){
            return res.json({error : "Aucun utilisateur trouvé"})
           }
        
           const compare =  await comparePassword(password, user.password)
           if (!compare) {
                return res.json({ error: "Mot de passe incorrecte"})
           }
        
        
           const token = jwt.sign({_id : user._id},   process.env.JWT_SECRET_KEY, { expiresIn :"7d",})
           res.json({
        
               user:{
                   login : user.login,
                   email: user.email,
                   role : user.role
               },
        
               token,
           })  

    } catch (error) {
        console.log(error);
        res.status(400).json(error.message)
    }
};


// ----------------------------------------------------------------------------------------------------------------------  //
// --------------------------------- MODIFICATION PROFIL UTILISATEUR ------------------------------------------------- //
// ---------------------------------------------------------------------------------------------------------------------- //

export const profileUpdate = async (req,res)=>{


    try {

        const {login,password, adress} = req.body

        const user = await User.findById(req.user._id)

        const checkPwd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,30}$/

        if (password && (!checkPwd.test(password))) {
            return res.json({error: "le mot de passe doit contenir une majuscule, minuscule et un caractère spéciaux"})
        }

        // hash le password condition car pas obligatoirement un nouveau password

        const hash = password ? hashPassword(password) : undefined

        const userUpdate =  await User.findByIdAndUpdate(
      
            req.user._id,
            {

                login : login || user.login,
                hash : hash || user.password,
                adress : adress || user.adress
            },

            {new : true}

        )

        // On ne retourne pas le password dans le front
        userUpdate.password = undefined;

        res.json(userUpdate);


        
    } catch (error) {
        
    }
}





// -------------------------------------------- Affichez tous les utilisateurs page Admin -------------------------------------------------

export const userAll = async (req, res)=>{
    try {

        const user = await User.find({"role": "Utilisateur"})
        res.json(user)
        
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message)
    }
}


// -------------------------------------------- Affichez les informations détaillés d'un utilisateur page Admin -------------------------------------------------

export const userDetail = async (req,res)=>{
    try {

      
        const user = await User.findOne({slug: req.params.slug})
        res.json(user)
        
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message)
    }
}


//-------------------------------------------- Supprimer un utilisateur page Admin page Admin -------------------------------------------------

export const removeUser = async (req,res)=>{


    try {
        
        const {id} = req.params
    
        const user = await User.findByIdAndDelete(id)
        res.json(user)
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message) 
    }

}


