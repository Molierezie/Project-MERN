import mongoose from "mongoose";

const serviceCategorySchema = new mongoose.Schema({

    name : { 
        type : String,
        required : true,
        unique : true
            },

    slug : {
        type : String,
        unique : true,
        lowercase : true
    }

})

let ServicesCategory = mongoose.model("servicecategorie", serviceCategorySchema) // je convertis mon schéma qui est au dessus en model

export default ServicesCategory