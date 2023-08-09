import Command from "../models/commandModel.js";

export const createCommand = async (req,res)=>{

    try {

       

        // Fonction pour obtenir un nombre aléatoire pour le numéro de commande
    
        const newCommandNumber = Math.floor(1000+Math.random()*800000)

      
        
        const { nameprestation, nameformule, price, lastname, firstname, prestationdate,project} = req.body

        switch (true) {
                case !nameprestation:
                return res.json({error : "Le nom de la prestation est requis"})
                        case !nameformule:
                            return res.json({ error : "Un nom de la formule est requis"})
                            case !price:
                                return res.json({ error : "Un prix de la prestation est requis"})
                            case !lastname:
                                return res.json({error : "votre nom doit être rentrer dans le formulaire"})
                                case !firstname:
                                    return res.json({error : "votre prénom doit être rentrer dans le formulaire"})
                                    case !prestationdate:
                                        return res.json({error : "veuillez choisir une date pour la prestation"})
                                        case !project:
                                            return res.json({error : "veuillez nous raconter votre projet"})
        }

        const commandCreate = await new Command({ ...req.body, numberCommand : newCommandNumber }).save();
        console.log(newCommandNumber);
        res.json(commandCreate)

    } catch (error) {
        console.log(error);
        res.status(400).json(error.message)
    }
}


// ----------------------------------------- FONCTION POUR VALIDER LA MODIFICATION DE STATUT D'UNE COMMANDE -----------------------------


export const validationCommand = async (req, res)=>{

        try {
            
            const {id} =  req.params
            const {isValid} = req.body
            console.log(typeof(isValid));
            let valid="";

            if (isValid == true) {
                
                valid = await Command.findByIdAndUpdate(id, {"isValid": true})
            }else{
                valid = await Command.findByIdAndUpdate(id, {"isValid": false})
            }

        //    const valid = await Command.findByIdAndUpdate(id, {"isValid": true})

            if (!valid) {
                return res.json({ error: "Message erreur"})
            }

            res.json(valid)


        } catch (error) {
            console.log(error);
            res.status(400).json(error.message)
        }


}


// ----------------------------------------- FONCTION POUR AFFICHER TOUTES LES COMMANDES -----------------------------

export const allCommand = async (req,res)=>{

    try {

        const commands = await Command.find({})
            res.json(commands)
        
    } catch (error) {
        console.log(error);
            res.status(400).json(error.message)
    }
}


// ----------------------------------------- FONCTION POUR AFFICHER UNE COMMANDE -----------------------------

export const oneCommand = async (req,res) =>{

    try {
        const {id} = req.params

        const oneCommand = await Command.findOne({id})
        res.json(oneCommand)
        
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message)
    }
}