import mongoose from "mongoose";

let categorieSchema = mongoose.Schema({
    
    type: String,
    slug : {
        type : String,
        unique : true,
        lowercase : true
    },

    format: [{
        name: String,
        description: String,
        initialPrice : Number,
        formules: [
            {
            name: String,
            description: String,
            price: Number
            }], 
    }], 

    forms: [{
        Firstname: String,
        Lastname: String,
        email : String,
        tel : String,
        Message : String
    }], 


    images: [{
        src: String,
        alt: String
    }]
})


let Category = mongoose.model("Categorie", categorieSchema) // je convertis mon schéma qui est au dessus en model

export default Category


