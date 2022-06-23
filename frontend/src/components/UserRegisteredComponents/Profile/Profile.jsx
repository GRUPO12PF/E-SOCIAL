import React from 'react'
import NavBar from '../../CommonComponents/NavBar/NavBar'
import {Link} from 'react-router-dom'
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

    function handleOnClickQuestions(){
      navigate(`/questions/${idUser}`)
    }

    return (
      <div>
        <NavBar />
        <div>

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
            <div>
                <Link to="/">Respuestas </Link>
            </div>
            <div>
                <Link to="/">Mensajes</Link>
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
    
    