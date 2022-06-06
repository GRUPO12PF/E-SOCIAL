import express from "express";
import { 
    registrar, 
    autenticar, 
    confirmar,
    olvidePassword,
    comprobarToken,
    nuevoPassword,
    perfil
} from "../controllers/usuarioControllers.js";

import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

//Autenticacion, Registro y Confirmacion de Usuarios
router.post('/', registrar); //registrar usuarios
router.post('/login', autenticar); //login de usuarios
router.get('/confirmar/:token', confirmar); //comfirmar usuario por token
router.post('/olvide-password', olvidePassword); //poder renovar password
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword); //modificar y guardar password

router.get('/perfil', checkAuth, perfil); //Ingresar al perfil solo si es el usuario


export default router;