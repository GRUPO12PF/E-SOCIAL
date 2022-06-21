import express from 'express';
import {
    postQuestion,
    postAnswer,
    getQA,
    QAIdBook,
    eliminarAnswer
} from '../controllers/renderQAcontrollers.js';
import checkAuth from '../middleware/checkAuth.js';


const router = express.Router();

router
.route('/')
.get(getQA)

router
.route('/:id')
.get(QAIdBook)
.delete(checkAuth, eliminarAnswer)

router
  .route('/question/:id')
  .post(checkAuth, postQuestion)

router
.route('/answer/:id')
.post(checkAuth, postAnswer)



export default router;