import express from "express";
import { allCommand, createCommand, oneCommand, validationCommand } from "../controllers/commandController.js";

import { requireSignin, isAdmin } from "../middleware/auth.js";

const router = express.Router()

// -------------------------------- Route Admin ----------------------------------------

// Pour valider la commande d'un utilisateur sur la page admin
router.post("/commande-validation/:id", requireSignin, isAdmin, validationCommand)

// Page qui affiche toutes les commandes
router.get("/commandes", requireSignin, isAdmin, allCommand)

// -------------------------------- Route utilisateur ----------------------------------------
// Page pour que le client rentre ses informations afin de valider sa commande
router.post("/commande", createCommand)




export default router