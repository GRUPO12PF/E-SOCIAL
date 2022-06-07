import express from 'express';
import {
    obtenerBook,
    obtenerBooks,
    nuevoBook,
    editarBook,
    eliminarBook,
    getCategory
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

router
    .route('/category')
    .get(checkAuth, getCategory )

    console.log("last test")
export default router;