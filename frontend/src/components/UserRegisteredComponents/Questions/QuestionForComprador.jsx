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
    <div className={s.container}>
    <div className={s.flex}>
      <table className={s.usersTable}>
        <thead>
          <tr>
            <th className={s.no}>IMAGEN</th>
            <th className={s.no}>VENDEDOR</th>
            <th className={s.no}>IMAGEN</th>
            <th className={s.no}>LIBRO</th>
            <th className={s.no}>PREGUNTA</th>
            <th className={s.no}>RESPUESTA</th>
          </tr>
        </thead>
        <tbody>
          <tr className={s.containerInfo}>
            <td className={s.imageR}><img src={idVendedor?.image.url} alt="No disponible" height={50} width={50} /></td>
            <td className={s.name}><a onClick={(e) => handlePerfilVendedor(e)}>{idVendedor?.nombre}</a></td>
            <td className={s.imageR}><img src={book?.image} alt="No disponible" height={50} width={50} /></td>
            <td className={s.price}><a onClick={(e) => handleLibro(e)}>{book?.nombre}</a></td>
            <td className={s.blocked}>{mensaje}</td>
            <td className={s.moderator}><p>{answers.length > 0 ? answers[0].mensaje : 'EL VENDEDOR TODAVIA NO RESPONDIO SU CONSULTA'} </p> </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  );
}
/*
   <div className={s.container}>
      <div className={s.flex}>

        <table className={s.usersTable}>

          <thead>
            <tr>
              <th className={s.no}>IMAGEN</th>
              <th className={s.no}>VENDEDOR</th>
              <th className={s.no}>IMAGEN</th>
              <th className={s.no}>LIBRO</th>
              <th className={s.no}>PREGUNTA</th>
              <th className={s.no}>RESPUESTA</th>
            </tr>
          </thead>

          <tbody>
            <tr className={s.containerInfo}>
              <td className={s.imageR}><img src={idVendedor?.image.url} alt="No disponible" height={50} width={50} /></td>
              <td className={s.name}><a onClick={(e) => handlePerfilVendedor(e)}>{idVendedor?.nombre}</a></a></td>
              <td className={s.imageR}><img src={book?.image} alt="No disponible" height={50} width={50} /></td>
              <td className={s.price}><a onClick={(e) => handleLibro(e)}>{book?.nombre}</a></td>
              <td className={s.blocked}>{mensaje}</td>
              <td className={s.moderator}><p>{answers.length > 0 ? "Respuesta: " + answers[0].mensaje : 'EL VENDEDOR TODAVIA NO RESPONDIO SU CONSULTA'} </p> </td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
*/