import express from 'express';
import {
    detailBook,
    obtenerBooks,
    nuevoBook,
    editarBook,
    eliminarBook
} from '../controllers/booksControllers.js';
import checkAuth from '../middleware/checkAuth.js';

const router = express.Router();

router
    .route('/')
    .get(obtenerBooks)
    .post(checkAuth, nuevoBook);

router
    .route('/:id')
    .get(checkAuth, detailBook)
    .get(obtenerBook)
    .put(checkAuth, editarBook)
    .delete(checkAuth, eliminarBook);


export default router;