import express from "express";
import { LoginSubmit, RegisterSubmit, profileUpdate, removeUser, userAll, userDetail} from "../controllers/userController.js";
import { isAdmin, requireSignin } from "../middleware/auth.js";
import upload from "../middleware/multer.js";

const router = express.Router()

// -------------------------------- Connexion  ----------------------------------------

// Route pour réer un compte utilisateur
router.post("/register", upload.single("profile-image"), RegisterSubmit)

// Route pour se connecter
router.post("/login", LoginSubmit)


// -------------------------------- Route utilisateur ----------------------------------------

// Route pour afichez tous les utilisateurs
router.get("/utilisateurs",  userAll)

// Route pour afichez un seul utilisateur
router.get("/utilisateur/:slug",  userDetail)

router.put("/profile-modification", requireSignin, profileUpdate)

// Route pour donner autorisation pour les pages utilisateur
router.get("/auth-check", requireSignin, (req, res)=>{
   res.json({ connect : true})
})


// -------------------------------- Route Admin ----------------------------------------

// Route pour supprimer un utilisateur
router.delete("/utilisateur-supprime/:id", requireSignin, isAdmin, removeUser)

// Route pour donner autorisation pour les pages admin
router.get("/admin-check", requireSignin, isAdmin, (req, res)=>{
    res.json({ connect : true})
 })

export default router