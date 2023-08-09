import mongoose from "mongoose";



let ordergiftSchema = mongoose.Schema({
    

    name : { 
        type : String,
        required : true,
            },

    description :{
        type: String,
        required : true
    },

    login :{
        type: String,
        required : true
    },

    isValid : {
        type : Boolean,
        default: false
    },

 

},

{
timestamps: true
}
)


let OrderGift = mongoose.model("order", ordergiftSchema) // je convertis mon schéma qui est au dessus en model


export default OrderGift