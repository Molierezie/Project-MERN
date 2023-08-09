import express from "express";

const router = express.Router();

import { requireSignin, isAdmin } from "../middleware/auth.js";

import {
  createGiftCategory,
  updateGiftCategory,
  removeGiftCategory,
  listGiftCategory,
  readGiftCategory,
} from "../controllers/giftCategory.js";


// -------------------------------- Route Admin ----------------------------------------

// Créer une nouvelle catégorie
router.post("/categorie-cadeau", requireSignin, isAdmin,  createGiftCategory);

// Modifier une catégorie
router.put("/categorie-cadeau/:id", requireSignin, isAdmin, updateGiftCategory);

// supprimer une catégorie
router.delete( "/categorie-cadeau/:id", requireSignin, isAdmin, removeGiftCategory);

// Affichez toutes les catégorie dans la page Admin
router.get("/categories-cadeaux", listGiftCategory);

// Accéder à une catégorie au clic dans la page Admin
router.get("/categorie-cadeau/:slug", readGiftCategory);




export default router;
