import express from 'express';
import { obtenerLibrosUsuarios } from '../controllers/usuarioCreadorControllers.js'



const router = express.Router();

router
  .route('/:id')
  .get( obtenerLibrosUsuarios)


export default router;