import React from 'react'
import NavBar from '../../CommonComponents/NavBar/NavBar'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import s from './Profile.module.css'

function Profile() {
  const navigate = useNavigate()
  const user = useSelector(state => state.usuarioActual)
  const idUser = user._id
  console.log(idUser)
  function handleOnClickBooks() {
    navigate(`/bookCreated/${idUser}`)
  }

  function handleOnClickOrders() {
    navigate(`/historyOrders/${idUser}`)
  }

  function handleOnClickQuestions() {
    navigate(`/questions/${idUser}`)
  }



  return (
    <div>
      <NavBar />

      <div className={s.containerPadre}>
        <div className={s.containerGral}>
          <div className={s.container}>
            <div className={s.containerMini}>
              <div onClick={() => handleOnClickBooks()}>
                <Link to="/">
                  <p className={s.prueba}>LIBROS</p>
                </Link>
              </div>
              <div onClick={() => (handleOnClickOrders())}>
                <Link to="/">
                  <p className={s.prueba}>ÓRDENES</p>
                </Link>
              </div>
              <div onClick={() => (handleOnClickQuestions())}>
                <Link to="/">
                  <p className={s.prueba}>PREGUNTAS</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile





