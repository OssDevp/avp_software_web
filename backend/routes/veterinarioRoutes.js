import express from "express";
import checkAuth from "../middleware/middleware.js";
import {
  registrar, perfil, confirmar,
  autenticar, olvidePassword,
  comprobarToken, nuevoPassword
} from "../controllers/veterinarioController.js";


const router = express.Router();

//publica
router.post("/", registrar);
router.get("/confirmar/:token", confirmar);
router.post("/login", autenticar);
router.post("/olvide-password", olvidePassword);
/* 
router.post("/api/veterinarios/olvide-password/:token", comprobarToken);
router.post("/api/veterinarios/olvide-password/:token", nuevoPassword);
 */ // estas dos lineas de codigo es lo mismo que la siguiente:
router.route("/api/veterinarios/olvide-password/:token").get(comprobarToken, nuevoPassword);
//privada
router.get("/api/veterinarios/perfil", checkAuth, perfil);

export default router;