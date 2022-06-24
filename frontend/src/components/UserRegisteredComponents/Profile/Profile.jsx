import React from 'react'
import NavBar from '../../CommonComponents/NavBar/NavBar'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import estilos from '../Profile/Profile.module.css'

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

<<<<<<< HEAD
  function handleOnClickQuestions() {
    navigate(`/questions/${idUser}`)
  }

  return (
    <div>
      <NavBar />
=======
    function handleOnClickAnswers(){
      navigate(`/answers/${idUser}`)
    }

    function handleOnClickAnswers(){
      navigate(`/answers/${idUser}`)
    }

    return (
>>>>>>> bf4c3e6d8ee2d80cd640ec7bcd411191290401a6
      <div>

<<<<<<< HEAD
        <div onClick={() => handleOnClickBooks()}>
          <Link to="/">
            <p className={estilos.prueba}>LIBROS</p>
          </Link>
=======
            <div onClick={() => handleOnClickBooks()}>
                <Link to="/">
                    <p className={estilos.prueba}>libros</p>
                </Link>
            </div>
            <div onClick={() => (handleOnClickOrders())}>
                <Link to="/">
                    <p className={estilos.prueba}>ordenes</p>
                </Link>
            </div>
            <div onClick={() => (handleOnClickQuestions())}>
                <Link to="/">
                    <p className={estilos.prueba}>preguntas</p>
                </Link>
            </div>
            <div onClick={() => (handleOnClickAnswers())}>
                <Link to="/">
                  <p className={estilos.prueba}>respuestas</p>
                </Link>
            </div>
            <div>
                <Link to="/">Mensajes</Link>
            </div>
>>>>>>> bf4c3e6d8ee2d80cd640ec7bcd411191290401a6
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

        <div>
          <Link to="/">RESPUESTAS</Link>
        </div>

        <div>
          <Link to="/">MENSAJES</Link>
        </div>

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
