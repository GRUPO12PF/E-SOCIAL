import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { allQuestions, allQuestionsComprador } from '../../../redux/actions/actionQA';
import { useEffect } from 'react';
import QuestionDetail from './QuestionDetail';
import QuestionAnswer from './QuestionAnswer';
import QuestionForComprador from './QuestionForComprador';
import s from './questionDetail.module.css';
import NavBar from '../../CommonComponents/NavBar/NavBar';
import { Link } from 'react-router-dom';
import Footer from '../../CommonComponents/Footer/Footer';

export default function Questions() {
  const dispatch = useDispatch()
  const { id } = useParams();
  const questions = useSelector((state) => state.questions)
  const questionsComprador = useSelector(state => state.questionsComprador)
  const question = questions.filter(ele => !ele.answers.length > 0)
  const questionAnswer = questions.filter(ele => ele.answers.length > 0)

  useEffect(() => {
    dispatch(allQuestionsComprador(id))
    dispatch(allQuestions(id))
    dispatch(allQuestionsComprador(id))
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <Link to='/profile'>
        <button className={s.btnBook}>VOLVER AL MENU</button>
      </Link>
      <br /> <br />
      <div className={s.containerTodo}>
        <h3 className={s.titulo}>Preguntas por responder </h3>
        <div className={s.container}>
          <div className={s.flex}>
            <table className={s.usersTable}>
              <thead>
                <tr>
                  <th className={s.no}>IMAGEN</th>
                  <th className={s.no}>COMPRADOR</th>
                  <th className={s.no}>IMAGEN</th>
                  <th className={s.no}>LIBRO</th>
                  <th className={s.no}>PREGUNTA</th>
                  <th className={s.no}>RESPONDER</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
        {question.length > 0 ? (
          question?.map((e, i) => {
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
          })
        ) : (
          <h3 className={s.h3}>TODAVIA NO HAY PREGUNTAS PARA RESPONDER...</h3>
        )
        }
        <h3 className={s.titulo}>Preguntas ya respondidas </h3>
        <div className={s.container}>
          <div className={s.flex}>
            <table className={s.usersTable}>
              <thead>
                <tr className={s.containerInfo}>
                  <th className={s.no}>IMAGEN</th>
                  <th className={s.no}>COMPRADOR</th>
                  <th className={s.no}>IMAGEN</th>
                  <th className={s.no}>LIBRO</th>
                  <th className={s.no}>PREGUNTA</th>
                  <th className={s.no}>RESPUESTA</th>
                </tr>
              </thead></table> </div>
        </div>
        {questionAnswer.length > 0 ? (
          questionAnswer?.map((e, i) => {
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
          })
        ) : (
          <h3 className={s.h3}>TODAVIA NO RESPONDISTE NINGUNA PREGUNTA...</h3>
        )}
        <h3 className={s.titulo}>Preguntas realizadas a otros usuarios</h3>
        <div className={s.container}>
          <div className={s.flex}>
            <table className={s.usersTable}>
              <thead>
                <tr className={s.containerInfo}>
                  <th className={s.no}>IMAGEN</th>
                  <th className={s.no}>VENDEDOR</th>
                  <th className={s.no}>IMAGEN</th>
                  <th className={s.no}>LIBRO</th>
                  <th className={s.no}>PREGUNTA</th>
                  <th className={s.no}>RESPUESTA</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
        {questionsComprador.length > 0 ? (
          questionsComprador?.map((e, i) => {
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
          })
        ) : (
          <h3 className={s.h3}>TODAVIA NO HICISTE NINGUNA PREGUNTA A OTROS USUARIOS...</h3>
        )
        }
      </div>
      <br />
      <Footer/>
      </div>
  )
}

