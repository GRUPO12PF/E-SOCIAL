import React from 'react'
import NavBar from '../../CommonComponents/NavBar/NavBar'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
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
    <div >
      <NavBar />

      <div className={s.containerPadre}>
        <div className={s.containerGral}>
          <div className={s.container}>

            <div clasName={s.containerMini}>

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

              <div onClick={() => (handleOnClickAnswers())}>
                <Link to="/"><p className={s.prueba}>RESPUESTAS</p></Link>

              </div>

              <div>
                <Link to="/"><p className={s.prueba}>MENSAJES</p></Link>
              </div>

            </div>
          </div>
        </div>
        <Footer />
      </div>
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
