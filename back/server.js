import express from "express"

// autorisation connexion port back et front
import cors from "cors"


import morgan from "morgan"
import dotenv from "dotenv"

dotenv.config()


// Connexion base de donnée
import {connectDB} from "./config/database.js"

// Les routes

import serviceCategorieRouter from "./routes/serviceCategorieRoute.js"
import userRouter from "./routes/userRoute.js"
import giftRouter from "./routes/giftRoute.js"
import giftCategoryRouter from "./routes/giftCategoryRoute.js"
import commandRouter from "./routes/commandRoute.js"
import orderGiftRouter from "./routes/orderGiftRoute.js"
import servicesRouter from "./routes/serviceRoute.js"
import contactRouter from "./routes/contactController.js"


	const app = express() // je crée mon appli


	app.use(express.json())
	app.use(express.urlencoded({ extended : true})) // sans ces 2 je ne peux pas gérer mon formulaire
	app.use(express.static("public/img")) // pour générer des liens static de tout ce qu'il y aura dans mon dossier public
    app.use(cors())


    // lancement de connexion à la base de donnée
    connectDB

    app.use(morgan("dev"))

    // Les routes Controller

    app.use("/api", serviceCategorieRouter)
    app.use("/api", userRouter)
    app.use("/api", giftRouter)
    app.use("/api", giftCategoryRouter)
    app.use("/api", commandRouter)
    app.use("/api", orderGiftRouter)
    app.use("/api", servicesRouter)
    app.use("/api", contactRouter)


   


    app.listen(process.env.PORT || 5800, ()=> {
        console.log(`Le serveur est exécuté sur http://localhost:${process.env.PORT}`);
    })


    
  