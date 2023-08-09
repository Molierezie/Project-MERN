import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()


// export const connectDB = mongoose.connect("mongodb://localhost:27017/photography")
export const connectDB = mongoose.connect(process.env.DB_URL)
// si localhost ne marche pas remplacer par 0.0.0.0:

// On fait le message de bonne connexion ou erreur

mongoose.connection.on("open", ()=>{
    console.log("Connexion avec la BDD reussie");
})

mongoose.connection.on("error", ()=>{
    console.log("Erreur de connexion à la BDD");
})
