import React from 'react'
import NavBar from '../../CommonComponents/NavBar/NavBar'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import estilos from './Profile.module.css'
import s from './Profile.module.css'
import Footer from '../../CommonComponents/Footer/Footer'

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

  function handleOnClickAnswers() {
    navigate(`/answers/${idUser}`)
  }

  return (
    <div>
      <NavBar />
      <div className={s.containerGral}>
        <div className={s.container}>
          <div className={s.containerMini}>

            <div onClick={() => handleOnClickBooks()}>
              <Link to="/">
                <p className={estilos.prueba}>LIBROS</p>
              </Link>
            </div>

            <div onClick={() => (handleOnClickOrders())}>
              <Link to="/">
                <p className={estilos.prueba}>ÓRDENES</p>
              </Link>
            </div>

            <div onClick={() => (handleOnClickQuestions())}>
              <Link to="/">
                <p className={estilos.prueba}>PREGUNTAS</p>
              </Link>
            </div>

            <div onClick={() => (handleOnClickAnswers())}>
              <Link to="/">
                <p className={estilos.prueba}>RESPUESTAS</p>
              </Link>
            </div>

            <div>
              <Link to="/" className={estilos.prueba}>MENSAJES</Link>
            </div>

          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  )
}

export default Profile





{/* <div className="divModalPerfil" >
        <Link to="/" >
          <h3>Perfil</h3>
        </Link>
      </div>
      
      <div className="divModalPerfil" >
        <Link to="" >
        <Order />
        <h3>Orders</h3>
        </Link>
      </div> */}
