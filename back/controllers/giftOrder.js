import OrderGift from "../models/giftOrder.js";

export const createOrderGift = async (req,res)=>{

    try {

    
        
        const { name, description, login} = req.body

        switch (true) {
                case !login:
                return res.json({error : "Le nom de la prestation est requis"})
                case !name:
                    return res.json({error : "Le nom de la prestation est requis"})
                    case !description:
                        return res.json({error : "Le nom de la prestation est requis"})
        }

        const orderCreate = await new OrderGift({...req.body}).save();
        res.json(orderCreate)

    } catch (error) {
        console.log(error);
        res.status(400).json(error.message)
    }
}


