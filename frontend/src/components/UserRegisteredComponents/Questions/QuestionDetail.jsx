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
      book: book?._id,
      question: idQuestion
    }))
    alert('su respuesta ha sido enviada con exito!')

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
          <tbody>
            <tr className={s.containerInfo}>
              <td className={s.imageR}><img src={idComprador?.image.url} alt="No disponible" height={50} width={50} /></td>
              <td className={s.name}><a onClick={(e) => handlePerfil(e)}>{idComprador?.nombre}</a></td>
              <td className={s.imageR}><img src={book?.image} alt="No disponible" height={50} width={50} /></td>
              <td className={s.price}><a onClick={(e) => handleLibro(e)}>{book?.nombre}</a></td>
              <td className={s.blocked}>{mensaje}</td>
              <td className={s.moderator}><div> <form onSubmit={(e) => handleSubmitSendAnswer(e)}>
                <input type="text" placeholder='Acá va su respuesta' name="mensaje" value={input.mensaje} onChange={(e) => handleInputChange(e)} />
                <button>enviar</button> </form></div> </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}