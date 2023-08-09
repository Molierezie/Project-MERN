import express from "express"
import { createServiceCategory, listServiceCategory, readServiceCategory, removeServiceCategory, updateServiceCategory } from "../controllers/servicesCategory.js";

import { requireSignin, isAdmin } from "../middleware/auth.js";

const router = express.Router();

// -------------------------------- Route Admin ----------------------------------------

// Affichez toutes les catégories
router.get("/categories-services", requireSignin, isAdmin, listServiceCategory)

// Créer une catégorie
router.post("/categorie-service", requireSignin, isAdmin,  createServiceCategory);

// Modifier une catégorie
router.put("/categorie-service/:id", requireSignin, isAdmin,   updateServiceCategory);

// Supprimer une catégorie
router.delete( "/categorie-service/:id", requireSignin, isAdmin, removeServiceCategory);

// Affichez une catégorie
router.get("/categorie-service/:slug", readServiceCategory);



export default router // qui va exporter toutes les routes

