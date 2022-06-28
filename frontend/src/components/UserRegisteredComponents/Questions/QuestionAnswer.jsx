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
    <div className={s.container}>
      <div className={s.flex}>
        <table className={s.usersTable}>
          <tbody>
            <tr className={s.containerInfo}>
              <td className={s.imageR}><img src={idComprador?.image.url} alt="No disponible" height={50} width={50} /></td>
              <td className={s.name}><a onClick={(e) => handlePerfil(e)}>{idComprador?.nombre}</a></td>
              <td className={s.imageR}><img src={book?.image} alt="No disponible" height={50} width={50} /></td>
              <td className={s.price}><a onClick={(e) => handleLibro(e)}>{book?.nombre}</a></td>
              <td className={s.blocked}>{mensaje}</td>
              <td className={s.moderator}>{answers[0]?.mensaje} </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
