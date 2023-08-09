import mongoose from "mongoose";



let contactSchema = mongoose.Schema({
    

    lastname : { 
        type : String,
        required : true,
            },

    firstname :{
        type: String,
        required : true
    },

    email : {
        type: String,
        required : true,
    },


    number : {
        type : String,
        required : true
    },

    discover : {
        type : String,
        required : true
    },

    project : {
        type: String
    },

},

{
timestamps: true
}
)


let Contact = mongoose.model("contact", contactSchema) // je convertis mon schéma qui est au dessus en model


export default Contact