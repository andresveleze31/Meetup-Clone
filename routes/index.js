import express from "express";
import { home } from "../controllers/homeController.js";
import { crearCuenta } from "../controllers/usuariosController.js";
const router = express.Router();

router.get("/", home);

router.get("/crear-cuenta", crearCuenta )

export default router;