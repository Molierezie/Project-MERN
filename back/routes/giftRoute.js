import express from "express";

import { requireSignin, isAdmin } from "../middleware/auth.js";

import {createGift, allGift, oneGift, removeGift, updateGift } from "../controllers/gift.js";
import upload from "../middleware/multer.js";

const router = express.Router();

// -------------------------------- Route Admin ----------------------------------------

// Créer un nouveau cadeau avec une image grâce à multer
router.post("/cadeau", requireSignin, isAdmin, upload.single('img'), createGift);

// Supprimer un cadeau
router.delete("/cadeau/:id", requireSignin, isAdmin, removeGift)

// Modifier un cadeau
router.put("/cadeau/:id", requireSignin, isAdmin, updateGift)

// Affichez tous les cadeaux dans la page Admin
router.get("/cadeaux", allGift)

// Page pour afficher un cadeau lorsqu'on clic dessus sur la page Admin
router.get("/cadeau/:slug" , oneGift)




export default router;

