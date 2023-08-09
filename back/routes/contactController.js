import express from "express";
import { createContact } from "../controllers/contactController.js";

const router = express.Router()

// -------------------------------- Route accesible à tous les visiteurs ----------------------------------------

router.post("/contact", createContact)


export default router