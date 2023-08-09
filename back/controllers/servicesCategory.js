import slugify from "slugify";
import ServicesCategory from "../models/servicesCategoryModel.js";



// ----------------------------------------------------- CONTROLLER CREATION CATEGORIE SERVICE ------------------------------------------------- //


export const createServiceCategory = async (req,res) => {

    try {
        // console.log(req.body);
        const {name} = req.body

        if(!name){
            return res.json({error : "Un nom de catégorie est requis"});
        }

        const createService = await ServicesCategory.findOne({ name })

        if (createService) {
            return res.json({error: "Ce nom de catégorie existe déjà"})
        }

        const newServicecategory = await new ServicesCategory ({ name, slug : slugify(name)}).save();
        res.json(newServicecategory);
        

    } catch (error) {
        console.log(error);
        return res.status(400).json(error)
    }

}


// ----------------------------------------------------------------------------------------------------------------------  //
// ----------------------------------------------------- MODIFIER CATEGORIE SERVICE ------------------------------------------------- //
// ---------------------------------------------------------------------------------------------------------------------- //


export const updateServiceCategory = async (req, res) =>{

    try {

        const {id} = req.params
        const {name} = req.body

        if(!name){
            return res.json({error : "Un nom de catégorie est requis"});
        }

        const updateCategory = await ServicesCategory.findByIdAndUpdate(
            id,{
            name,
            slug : slugify(name)
            },
            { new : true} )
            res.json(updateCategory)
        
    } catch (error) {
        console.log(error);
    }

}


// ----------------------------------------------------------------------------------------------------------------------  //
// ----------------------------------------------------- SUPPRIMER CATEGORIE SERVICE  ------------------------------------------------- //
// ---------------------------------------------------------------------------------------------------------------------- //

export const removeServiceCategory = async (req, res) =>{

    try {

    const {id} = req.params
    const remove = await ServicesCategory.findByIdAndRemove(id)
    res.json(remove)
        
    } catch (error) {
        console.log(error);
    }
   
}



// ----------------------------------------------------------------------------------------------------------------------  //
// ------------------------------------------- AFFICHEZ LA LISTE DE TOUTES LES CATEGORIES DE SERVICES ------------------------------------------------- //
// ---------------------------------------------------------------------------------------------------------------------- //

export const listServiceCategory = async (req, res) =>{

    try {

    const listCategory = await ServicesCategory.find({});
    res.json(listCategory)
        
    } catch (error) {
        console.log(error);
        return res.status(401).json(error.message)
    }
    
}


// ----------------------------------------------------------------------------------------------------------------------  //
// --------------------------------------  AFFICHE UNE CATEGORIE DE SERVICE ----------------------------------------- //
// ---------------------------------------------------------------------------------------------------------------------- //

export const readServiceCategory = async (req, res) =>{

    try {
        // je get "slug" 
        const readCategory = await ServicesCategory.findOne({ slug: req.params.slug})
        res.json(readCategory)
        
    } catch (error) {
        console.log(error);
        return res.status(401).json(error.message)
    }
    
}