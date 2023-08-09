import { connectDB } from "../config/database.js";
import ServicesModel from "../models/servicesModel.js";
import slugify from "slugify";



// ----------------------------------------------------------------------------------------------------------------------  //
// -----------------------------------------------------  CREER SERVICE ------------------------------------------------- //
// ---------------------------------------------------------------------------------------------------------------------- //

export const createPrestation = async (req,res)=>{

    try {
        
        const { type, nameprestation, descriptionprestation, nameformule, descriptionformule, price, category } = req.body
       
         let form;

        if (!req.file) {
           
           form = {

            type : req.body.type,
         nameprestation : req.body.nameprestation,
         descriptionprestation : req.body.descriptionprestation,
         nameformule : req.body.nameformule,
         descriptionformule : req.body.descriptionformule,
         price : req.body.price,
         category : req.body.category,
               
        } 
        } else {

            form = {

                type : req.body.type,
                    nameprestation : req.body.nameprestation,
                    descriptionprestation : req.body.descriptionprestation,
                    nameformule : req.body.nameformule,
                    descriptionformule : req.body.descriptionformule,
                    price : req.body.price,
                    category : req.body.category,
                    image: {
                        src : req.file.filename,
                        alt : req.file.originalname

            }
            
        }
    }
        

        switch (true) {
            case !type:
               return res.json({error : "Un type est requis"})
            case !nameprestation:
                return res.json({error : "Un nom est requis"})
                case !descriptionprestation:
                 return res.json({ error : "Une description du format est requise"})
                        case !nameformule:
                         return res.json({ error : "Un nom de la formule est requis"})
                         case !descriptionformule:
                            return res.json({ error : "Un prix de la prestation est requis"})
                            case !price:
                            return res.json({ error : "Un prix de la prestation est requis"})
                            case !category:
                                return res.json({error : "Le choix d'une catégorie est requis"})
                            
        }

        const serviceCreate = await new ServicesModel({ ...form, slug : slugify(nameprestation)}).save();


        res.json(serviceCreate)

    } catch (error) {
        console.log(error);
        res.status(400).json(error.message)
    }
}


// ----------------------------------------------------------------------------------------------------------------------  //
// -----------------------------------------------------  AFFICHEZ TOUS LES SERVICES ------------------------------------------------- //
// ---------------------------------------------------------------------------------------------------------------------- //

export const allPrestation = async (req, res) =>{

    try {
        const service = await ServicesModel.find()
        res.json(service)
        
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message)
    }
}


// -----------------------------------------------------  AFFICHEZ UN SERVICE ------------------------------------------------- //

export const onePrestation = async (req,res) =>{

    try {

        const oneService = await ServicesModel.findOne({ slug : req.params.slug})
        res.json(oneService)
        
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message)
    }
}


// -----------------------------------------------------  SUPPRIMEZ UN SERVICE ------------------------------------------------- //

export const removePrestation = async (req,res) =>{

    try {
        
        const {id} = req.params
        const removeService = await ServicesModel.findByIdAndDelete(id)
        res.json(removeService)
        
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message)
    }
}


// -----------------------------------------------------  METTRE A JOUR UN SERVICE ------------------------------------------------- //

export const updatePrestation = async (req,res)=>{

    try {
        const {id} = req.params
           
        const { type, nameprestation, descriptionprestation, nameformule, descriptionformule, price, category } = req.body


    switch (true) {
        case !type:
           return res.json({error : "Un type est requis"})
        case !nameprestation:
            return res.json({error : "Un nom est requis"})
            case !descriptionprestation:
             return res.json({ error : "Une description du format est requise"})
                    case !nameformule:
                     return res.json({ error : "Un nom de la formule est requis"})
                     case !descriptionformule:
                        return res.json({ error : "Un prix de la prestation est requis"})
                        case !price:
                        return res.json({ error : "Un prix de la prestation est requis"})
                        case !category:
                            return res.json({error : "Le choix d'une catégorie est requis"})
                        
    }



        const update = await ServicesModel.findByIdAndUpdate(
            id,
            { 
            ...req.body , slug : slugify(nameprestation) 
            },
            {new : true}
            )
            
            res.json(update)

    } catch (error) {
        console.log(error);
        res.status(400).json(error.message)
    }
}


// -----------------------------------------------------  AFFICHEZ SERVICE PORTRAIT ------------------------------------------------- //

export const portraitPrestation = async (req,res) =>{

    
        const portrait = await ServicesModel.find({"type": "Portrait"}).sort({createdAt : 1})
    
    
        if (!portrait) {
            return   res.json({message: " Vous n'avez pas choisi la catégorie Portrait"})
        } 
        return res.json(portrait)
      
    }


    // -----------------------------------------------------  AFFICHEZ SERVICE FAMILLE ------------------------------------------------- //

    export const famillePrestation = async (req,res) =>{

    
        const famille = await ServicesModel.find({"type": "Famille"}).sort({createdAt : 1})
    
    
        if (!famille) {
            return   res.json({message: " Vous n'avez pas choisi la catégorie Portrait"})
        } 
        return res.json(famille)
      
    }


    // -----------------------------------------------------  AFFICHEZ SERVICE MARIAGE ------------------------------------------------- //

    export const mariagePrestation = async (req,res) =>{

    
        const mariage = await ServicesModel.find({"type": "Mariage"}).sort({createdAt : 1})
    
    
        if (!mariage) {
            return   res.json({message: " Vous n'avez pas choisi la catégorie Portrait"})
        } 
        return res.json(mariage)
      
    }