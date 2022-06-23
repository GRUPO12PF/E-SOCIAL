import express from 'express';
import { nuevaReview } from '../controllers/reviewControllers.js';
import checkAuth from '../middleware/checkAuth.js';

const router = express.Router();

router
  .route('/:id')
  .post(checkAuth, nuevaReview)


export default router;