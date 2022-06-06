import express from 'express';
import {
    obtenerBook,
    obtenerBooks,
    nuevoBook,
    editarBook,
    eliminarBook,
} from '../controllers/booksControllers.js';
import checkAuth from '../middleware/checkAuth.js';

const router = express.Router();

router
    .route('/')
    .get(checkAuth, obtenerBooks)
    .post(checkAuth, nuevoBook);

router
    .route('/:id')
    .get(checkAuth, obtenerBook)
    .put(checkAuth, editarBook)
    .delete(checkAuth, eliminarBook);


    console.log("prueba 2 para el pr ")
export default router;