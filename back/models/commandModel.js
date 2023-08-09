import mongoose from "mongoose";



let commandSchema = mongoose.Schema({
    

    nameprestation : { 
        type : String,
        required : true,
            },

    nameformule :{
        type: String,
        required : true
    },

    price : {
        type: Number,
        required : true,
    },


    lastname : {
        type : String,
        required : true
    },

    firstname : {
        type : String,
        required : true
    },

    prestationdate : {
        type : String,
        required : true
    },

    project : {
        type: String
    },

    recommandedBy: String,
    numberCommand : String,

    State: String,


    isValid : {
        type : Boolean,
        default: false
    },

 

},

{
timestamps: true
}
)


let Command = mongoose.model("command", commandSchema) // je convertis mon schéma qui est au dessus en model


export default Command