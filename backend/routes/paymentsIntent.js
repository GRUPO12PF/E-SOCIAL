import express from 'express'; 
import { paymentIntent } from '../controllers/paymentControllers.js';
import checkAuth from '../middleware/checkAuth.js';

const router = express.Router();

router
    .route('/')
        // .post(checkAuth, paymentIntent)
        .post(paymentIntent)

export default router;