import express from 'express';
import {obtenerUsuario} from '../controllers/profileControllers.js';


const router = express.Router();

router
  .route('/')
  .get(obtenerUsuario)


export default router;