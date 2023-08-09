import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema // Pour les catégories j'aurais besoin de l'ID

const serviceModelSchema = new mongoose.Schema({

    type: {
        type : String,
        required : true
    },

    nameprestation : { 
        type : String,
        required : true,
            },
            // J'utilise Slug pour afficher le nameprestation plutôt que l'ID sur l'URL meilleur expérience client
            slug : {
                type : String,
                lowercase : true
            },

    descriptionprestation : { 
        type : String,
        required : true,
            },

    nameformule :{
        type: String,
        required : true
    },

   descriptionformule : {
       type: String,
       required : true,
   },

    price : {
        type: Number,
        required : true,
    },

    // ObjectId pour aller récupérer une donnée d'un autre document
    category : {
        type : ObjectId,
        ref: "ServicesCategory",
        required : true
    },

    image: {
        src : String,
        alt : String,
    },

},

{
timestamps: true
}

)

let ServicesModel = mongoose.model("prestation", serviceModelSchema) // je convertis mon schéma qui est au dessus en model

export default ServicesModel