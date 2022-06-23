import express from 'express';
import { nuevaReview, obtenerReview } from '../controllers/reviewControllers.js';
import checkAuth from '../middleware/checkAuth.js';

const router = express.Router();

router
  .route('/:id')
  .get(obtenerReview)
  .post(checkAuth, nuevaReview)


export default router;