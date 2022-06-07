import express from 'express';
import {
    getCategory,
    // postCategory
} from '../controllers/categoriesControllers.js';
import checkAuth from '../middleware/checkAuth.js';

const router = express.Router();

router
    .route('/')
    .get(checkAuth, getCategory)
    // .post(checkAuth, postCategory)

    console.log("last test")
export default router;