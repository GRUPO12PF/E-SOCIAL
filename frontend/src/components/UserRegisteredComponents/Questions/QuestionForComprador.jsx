import React from 'react';
import { useNavigate } from 'react-router';
import s from './questionDetail.module.css';

export default function QuestionForComprado({ mensaje, book, idComprador, idVendedor, answers }) {
  const navigate = useNavigate()
  function handleLibro(e) {
    if (!book?.order.length > 0) {
      navigate(`/details/${book?._id}`)
    } else {
      alert('Lo siento este libro ya fue comprado!')
    }
  }

  function handlePerfilVendedor(e) {
    navigate(`/profile/${idVendedor?._id}`)
  }

  return (
    <div>
      <div>
        <div>
          <p >Vendedor <a onClick={(e) => handlePerfilVendedor(e)}>{idVendedor?.nombre}</a></p>
          <img className={s.imageR} src={idVendedor?.image.url} />
          <p>Libro <a onClick={(e) => handleLibro(e)}>{book?.nombre}</a></p>
          <img className={s.imageR} src={book?.image} />
          <p>Pregunta: {mensaje}</p>
          <p>{answers.length > 0 ? "Respuesta: " + answers[0].mensaje : 'EL VENDEDOR TODAVIA NO RESPONDIO SU CONSULTA'} </p>
        </div>
      </div>
    </div>
  );
}