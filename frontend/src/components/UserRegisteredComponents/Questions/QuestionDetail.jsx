import React from 'react';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { postAnswer } from '../../../redux/actions/actionQA';
import s from './questionDetail.module.css';

export default function QuestionDetail({ _id, mensaje, book, idComprador }) {
  const { id } = useParams(); //id del vendedor 
  const idQuestion = _id //id de la pregunta 
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [input, setInput] = useState({
    mensaje: ''
  })

  const handleSubmitSendAnswer = async (e) => {
    e.preventDefault()
    setInput({
      mensaje: input.mensaje
    })
    dispatch(postAnswer({
      mensaje: input.mensaje,
      book: book._id,
      question: idQuestion
    }))

    setInput({
      mensaje: ''
    })
  }

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }


  function handleLibro(e) {
    if (!book?.order.length > 0) {
      navigate(`/details/${book?._id}`)
    } else {
      alert('Lo siento este libro ya fue comprado!')
    }
  }

  function handlePerfil(e) {
    navigate(`/profile/${idComprador?._id}`)
  }

  return (
    <div>
      <div>
        <div>
          <p ><a onClick={(e) => handlePerfil(e)}>{idComprador?.nombre}</a></p>
          <img className={s.imageR} src={idComprador?.image.url} />
          <p >pregunta por el libro <a onClick={(e) => handleLibro(e)}>{book?.nombre}</a> </p>
          <img className={s.imageR} src={book?.image} />
          <p>{mensaje}</p>
        </div>
        <form onSubmit={(e) => handleSubmitSendAnswer(e)}>
          <input type="text" placeholder='Acá va su respuesta' name="mensaje" value={input.mensaje} onChange={(e) => handleInputChange(e)} />
          <button>enviar</button>
        </form>
      </div>
    </div>
  );
}