import express from 'express';
import {
  postQuestion,
  postAnswer,
  getQA,
  getQuestion,
  QAIdBook,
  eliminarAnswer,
  eliminarQuestion,
  getAnswers,
  getQuestions
} from '../controllers/renderQAcontrollers.js';
import checkAuth from '../middleware/checkAuth.js';


const router = express.Router();

router
  .route('/')
  .get(getQA)

router
  .route('/question')
  .get(getQuestion)

router
  .route('/:id')
  .get(QAIdBook)

router
  .route('/question/:id')
  .post(checkAuth, postQuestion)
  .delete(checkAuth, eliminarQuestion)

router
  .route('/answer/:id')
  .post(checkAuth, postAnswer)
  .delete(checkAuth, eliminarAnswer)

router
  .route('/questions/:id')
  .get(checkAuth, getQuestions)

router
  .route('/answers/:id')
  .get(checkAuth, getAnswers)
export default router;