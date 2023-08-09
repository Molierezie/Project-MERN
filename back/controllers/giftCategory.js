import slugify from "slugify";
import GiftCategory from "../models/giftCategoryModel.js";



// ----------------------------------------------------- FONCTION CREER CATEGORIE CADEAU ------------------------------------------------- //

export const createGiftCategory = async (req,res) => {

    try {
       
        const {name} = req.body

        if(!name){
            return res.json({error : "Un nom de catégorie est requis"});
        }

        const createCategory = await GiftCategory.findOne({name})

        if (createCategory) {
            return res.json({error: "Ce nom de catégorie existe déjà"})
        }

        const newGiftcategory = await new GiftCategory ({ name, slug : slugify(name)}).save();
        
        res.json(newGiftcategory);

    } catch (error) {
        console.log(error);
        return res.status(400).json(error)
    }

}

// ------------------------------------------ FONCTION MODIFIER CATEGORIE ------------------------------------------------- //

export const updateGiftCategory = async (req, res) =>{

    try {

        const {id} = req.params
        const {name} = req.body

        if(!name){
            return res.json({error : "Un nom de catégorie est requis"});
        }


        const updateCategory = await GiftCategory.findByIdAndUpdate(
            id,{
            name,
            slug : slugify(name)
            },
            { new : true} )
            res.json(updateCategory)
        
    } catch (error) {
        console.log(error);
        return res.status(400).json(error)
    }

}


// ----------------------------------------------------- FONCTION SUPPEIMER CADEAU ------------------------------------------------- //

export const removeGiftCategory = async (req, res) =>{

    try {

    const {id} = req.params
    const remove = await GiftCategory.findByIdAndRemove(id)
    res.json(remove)
        
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message)
    }
   
}


// -------------------------------------------- FONCTION AFFICHE TOUS LES CADEAUX ------------------------------------------------- //

export const listGiftCategory = async (req, res) =>{

    try {

    const listCategory = await GiftCategory.find({});
    res.json(listCategory)
        
    } catch (error) {
        console.log(error);
        return res.status(400).json(error.message)
    }
    
}


// ---------------------------------------- FONCTION AFFICHE 1 CADEAU ------------------------------------------------- //

export const readGiftCategory = async (req, res) =>{

    try {
      
    
        const readCategory = await GiftCategory.findOne({ slug: req.params.slug})
        res.json(readCategory)
        
    } catch (error) {
        console.log(error);
        return res.status(401).json(error.message)
    }
    
}