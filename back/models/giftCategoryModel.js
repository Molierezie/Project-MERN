import mongoose from "mongoose";

const giftCategorySchema = new mongoose.Schema({

    name : { 
        type : String,
        required : true,
        unique : true
            },

    slug : {
        type : String,
        unique : true,
        lowercase : true
    },

})

let GiftCategory = mongoose.model("giftcategorie", giftCategorySchema) // je convertis mon schéma qui est au dessus en model

export default GiftCategory