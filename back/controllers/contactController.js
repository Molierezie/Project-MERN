import Contact from "../models/contactModel.js";

export const createContact = async (req,res)=>{

    try {

        const { lastname, firstname, email, number, discover, project} = req.body

        switch (true) {
                case !lastname:
                return res.json({error : "Votre nom est requis"})
                        case !firstname:
                            return res.json({ error : "Votre prénom est requis"})
                            case !email:
                                return res.json({ error : "Votre email est requis"})
                            case !number:
                                return res.json({error : "votre numéro de téléphone est requis"})
                                case !discover:
                                    return res.json({error : "Votre découverte de nos services est requise"})
                                        case !project:
                                            return res.json({error : "veuillez nous raconter votre projet"})
        }

        const contactCreate = await new Contact({ ...req.body }).save();
        
        res.json(contactCreate)

    } catch (error) {
        console.log(error);
        res.status(400).json(error.message)
    }
}