import express from "express";

import { requireSignin, isAdmin} from "../middleware/auth.js";
import { createOrderGift } from "../controllers/giftOrder.js";

const router = express.Router()


// -------------------------------- Route utilisateur ----------------------------------------

// Page pour que le client rentre ses informations afin de valider sa commande
router.post("/order-gift", requireSignin, createOrderGift)




export default router