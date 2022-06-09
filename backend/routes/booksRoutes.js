import express from 'express';
import {
    detailBook,
    obtenerBooks,
    nuevoBook,
    editarBook,
    eliminarBook,
    obternerTodosLosLibros
} from '../controllers/booksControllers.js';
import checkAuth from '../middleware/checkAuth.js';

const router = express.Router();

router
    .route('/')
    .get(obtenerBooks)
    .get(obternerTodosLosLibros)
    .post(checkAuth, nuevoBook);

    
router
.route('/total')
.get(obternerTodosLosLibros)


router
    .route('/:id')
    // .get(checkAuth, detailBook)
    .get(detailBook)
    .put(editarBook)
    .delete(eliminarBook);


export default router;
