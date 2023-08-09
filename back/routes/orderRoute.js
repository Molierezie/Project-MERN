import express from "express";
import { AddOrder } from "../controllers/ordersController.js";

const router = express.Router()

// Pour accéder à la page validation
router.post("/validation", AddOrder)

export default router