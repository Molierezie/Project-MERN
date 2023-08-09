import express from "express";

const router = express.Router();

import { requireSignin, isAdmin } from "../middleware/auth.js";
import upload from "../middleware/multer.js";

import { allPrestation, createPrestation, famillePrestation, mariagePrestation, onePrestation, portraitPrestation, removePrestation, updatePrestation } from "../controllers/service.js";

// -------------------------------- Route Admin ----------------------------------------

// Créer une prestation
router.post("/prestation", requireSignin, isAdmin, upload.single("image-prestation"), createPrestation);

//modifier une prestation
router.put("/prestation/:id", requireSignin, isAdmin, updatePrestation)

// supprimer une prestation
router.delete("/prestation/:id", requireSignin, isAdmin, removePrestation)


// Affichez toutes les prestations
router.get("/prestations", allPrestation)

// Affichez une prestation
router.get("/prestation/:slug" , onePrestation)


// Affichez une prestaton par catégorie pour nos pages accesible aux clients dans le front
router.get("/portrait-prestation" , portraitPrestation)
router.get("/famille-prestation" , famillePrestation)
router.get("/mariage-prestation" , mariagePrestation)

export default router;