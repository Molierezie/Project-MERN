import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema // Pour les catégories j'aurais besoin de l'ID

const giftModelSchema = new mongoose.Schema({

    name : { 
        type : String,
        required : true,
        unique : true,

            },

            slug : {
                type : String,
                unique : true,
                lowercase : true
            },

    description : {
        type: String,
        required : true,
        unique : true,
    },

    category : {
        type : ObjectId,
        ref: "GiftCategory",
        required : true
    },

    image : [{
        src : String,
        alt : String
    }]

},

{
timestamps: true
}

)

let GiftModel = mongoose.model("gift", giftModelSchema) // je convertis mon schéma qui est au dessus en model

export default GiftModel