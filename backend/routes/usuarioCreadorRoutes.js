import express from 'express';
import { obtenerLibrosUsuarios } from '../controllers/usuarioCreadorControllers.js';
import checkAuth from '../middleware/checkAuth.js';




const router = express.Router();

router
  .route('/:id')
  .get(checkAuth, obtenerLibrosUsuarios)


export default router;