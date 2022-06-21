import express from 'express';
import {
    postQuestion,
    postAnswer,
    getQA
} from '../controllers/renderQAcontrollers.js';
import checkAuth from '../middleware/checkAuth.js';


const router = express.Router();

router
.route('/')
.get(getQA)

router
  .route('/question/:id')
  .post(checkAuth, postQuestion)

router
.route('/answer/:id')
.post(checkAuth, postAnswer)



export default router;