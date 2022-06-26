import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { allQuestions, allQuestionsComprador } from '../../../redux/actions/actionQA';
import { useEffect } from 'react';
import QuestionDetail from './QuestionDetail';
import QuestionAnswer from './QuestionAnswer';
import QuestionForComprador from './QuestionForComprador';
import s from './questionDetail.module.css';
import NavBar from '../../CommonComponents/NavBar/NavBar';

export default function Questions() {
  const dispatch = useDispatch()
  const { id } = useParams();
  const questions = useSelector((state) => state.questions)
  const questionsComprador = useSelector(state => state.questionsComprador)
  const question = questions.filter(ele => !ele.answers.length > 0)
  const questionAnswer = questions.filter(ele => ele.answers.length > 0)
  console.log(questionsComprador)
  console.log(question)
  console.log(questionAnswer)


  useEffect(() => {
    dispatch(allQuestionsComprador(id))
    dispatch(allQuestions(id))
    dispatch(allQuestionsComprador(id))
  }, [dispatch]);

  return (
    <div className={s.containerTodo}>
      <NavBar />
      <h3 className={s.titulo}>Preguntas por responder </h3>
      {question?.map((e, i) => {
        return (

          <div _id={e?._id} key={i}>
            <QuestionDetail
             _id={e._id}
              mensaje={e.mensaje}
              book={e.book}
              idComprador={e.idComprador}
              idVendedor={e.idVendedor}
            />
          </div>
        );
      })}
      <h3 className={s.titulo}>Preguntas ya respondidas </h3>
      {questionAnswer?.map((e, i) => {
        return (

          <div _id={e._id} key={i}>
            <QuestionAnswer
              mensaje={e.mensaje}
              book={e.book}
              idComprador={e.idComprador}
              idVendedor={e.idVendedor}
              answers={e.answers}
            />
          </div>
        );
      })}
      <h3 className={s.titulo}>Preguntas realizadas a otros usuarios</h3>
      {questionsComprador?.map((e, i) => {
        return (

          <div _id={e._id} key={i}>
            <QuestionForComprador
              _id={e._id}
              mensaje={e.mensaje}
              book={e.book}
              idVendedor={e.idVendedor}
              idComprador={e.idComprador}
              answers={e.answers}
            />
          </div>
        );
      })}
    </div>
  )
}

