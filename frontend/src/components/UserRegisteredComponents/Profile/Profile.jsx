import React from 'react'
import NavBar from '../../CommonComponents/NavBar/NavBar'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import estilos from '../Profile/Profile.module.css'

// import Books from '../BooksCreated/Books';

function Profile() {
  const navigate = useNavigate()
  const user = useSelector(state => state.usuarioActual)
  const idUser = user._id
  console.log(idUser)
  function handleOnClickBooks() {
    navigate(`/bookCreated/${idUser}`);
  }

  function handleOnClickOrders() {
    navigate(`/historyOrders/${idUser}`);
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
      <div>

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
          <Link to="/">MENSAJES</Link>
        </div>

      </div>
    </div>
  );
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




    //   

