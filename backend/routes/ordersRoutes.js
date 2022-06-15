import express from 'express';
import {
    nuevaOrder,
    obtenerOrders,
    eliminarOrder,
    detailOrder
} from '../controllers/orderControllers.js';
import checkAuth from '../middleware/checkAuth.js';


const router = express.Router();

router
    .route('/')
    .get(obtenerOrders)
    .post(checkAuth, nuevaOrder)

router
   .route('/:id')
    .get(detailOrder)
    .delete(eliminarOrder);


export default router;