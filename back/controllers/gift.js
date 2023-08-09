import slugify from "slugify";
import GiftModel from "../models/giftModels.js";




// ----------------------------------------------------------------------------------------------------------------------  //
// ----------------------------------------------------- CREER CADEAU ------------------------------------------------- //
// ---------------------------------------------------------------------------------------------------------------------- //

export const createGift = async (req,res)=>{

    try {
        
        console.log(req.body);
        const {name, description, category} = req.body


           const formData = {
                name : req.body.name,
             description : req.body.description,
             category : req.body.category,
             image : {
               src: req.file.filename,
               alt: req.file.originalname 
            }
            
        }
    

        switch (true) {
            case !name.trim():
                return res.json({error : "Un nom est requis"})
                case !description.trim():
                    return res.json({ error : "Une description est requise"})
                    case !category.trim():
                       return res.json({error : "Le choix d'une catégorie est requis"})
                      
                       
        }

        const createGift = await new GiftModel({ ...formData, slug : slugify(name)}).save();
        res.json(createGift)

    } catch (error) {
        console.log(error);
        res.status(400).json(error.message)
    }
}




// ----------------------------------------------------------------------------------------------------------------------  //
// --------------------------------------  AFFICHE TOUS LES CADEAUX --------------------------------------------- //
// ---------------------------------------------------------------------------------------------------------------------- //

export const allGift = async (req, res) =>{

    try {
        const gift = await GiftModel.find().sort({createdAt: 1})
        res.json(gift)
        
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message)
    }
}



// ----------------------------------------------------------------------------------------------------------------------  //
// --------------------------------------------AFFICHE UN CADEAU ------------------------------------------------- //
// ---------------------------------------------------------------------------------------------------------------------- //

export const oneGift = async (req,res) =>{

    try {

        const oneGift = await GiftModel.findOne({ slug : req.params.slug})
        res.json(oneGift)
        
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message)
    }
}



// ----------------------------------------------------------------------------------------------------------------------  //
// ----------------------------------------------  SUPPRIMER UN CADEAU ------------------------------------------------- //
// ---------------------------------------------------------------------------------------------------------------------- //

export const removeGift = async (req,res) =>{

    try {
        
        const {id} = req.params
        const removeGift = await GiftModel.findByIdAndDelete(id)
        res.json(removeGift)
        
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message)
    }
}



// ----------------------------------------------------------------------------------------------------------------------  //
// ------------------------------------------ MODIFIER UN CADEAU  ------------------------------------------------- //
// ---------------------------------------------------------------------------------------------------------------------- //


export const updateGift = async (req,res)=>{

    try {
        const {id} = req.params
        const { name, description, category } = req.body

        switch (true) {
            case !name.trim():
               return res.json({error : "Un nom est requis"})
                case !description.trim():
                   return res.json({ error : "Une description est requise"})
                    case !category.trim():
                       return res.json({error : "Le choix d'une catégorie est requis"})
        }

        const update = await GiftModel.findByIdAndUpdate(
            id,
            { 
            ...req.body , slug : slugify(name)
            },
            {new : true}
            )
            
            res.json(update)

    } catch (error) {
        console.log(error);
        res.status(400).json(error.message)
    }
}

