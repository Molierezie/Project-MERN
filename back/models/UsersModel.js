import mongoose from "mongoose";
import bcrypt from "bcrypt";


let userSchema = mongoose.Schema({


login : {

type : String,
required : true,
trim : true
},

// J'utilise Slug pour afficher le login plutôt que l'ID sur l'URL meilleur expérience client
slug : {
    type : String,
    lowercase : true
},

email: {

type: String,
trim : true,
unique: true, 
lowercase : true,
required: true,

},

adress: {

    type: String,
    trim : true, 
    lowercase : true,
    required: true,

    
    },

password : {
    type :String,
    min : 4,
    max: 64,
    required : true
},

role :{
type : String,
default : "Utilisateur",
required : true

},

image :{
    src : String,
    alt : String
}


},

{
timestamps: true
}

)

// Pour hasher password 
userSchema.pre("save", function (next){
if(!this.isModified("password")){ 
return (next);
}

this.password = bcrypt.hashSync(this.password, 10)
next()

})


let User = mongoose.model("User", userSchema) 


export default User