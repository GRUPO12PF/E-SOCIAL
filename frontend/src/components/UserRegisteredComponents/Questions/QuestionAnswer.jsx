import React from 'react';
import { useNavigate } from 'react-router';
import s from './questionDetail.module.css';

export default function QuestionAnswer({ mensaje, book, idComprador, answers }) {

  const navigate = useNavigate()

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
          <p><a onClick={(e) => handlePerfil(e)}>{idComprador?.nombre}</a></p>
          <img className={s.imageR} src={idComprador?.image.url} />
          <p>pregunto por el libro <a onClick={(e) => handleLibro(e)}>{book?.nombre}</a></p>
          <img className={s.imageR} src={book?.image} />
          <p>Pregunta: {mensaje}</p>
          <p>Su respuesta: {answers[0]?.mensaje} </p>
        </div>
      </div>
    </div>
  );
}