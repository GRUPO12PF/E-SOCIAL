import React, { useState } from 'react';
import NavBar from '../../CommonComponents/NavBar/NavBar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';
import profile from '../../../assets/images/avatar.png';
import s from './Profile.module.css';
import ProfileImage from './ProfileImage';
import ProfilePassword from './ProfilePassword';
import Footer from '../../CommonComponents/Footer/Footer';
import ProfileChangeName from './ProfileChangeName';

function Profile() {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)
  const [showModalNotification, setShowModalNotification] = useState(false)
  const [showModalP, setShowModalP] = useState(false)
  const [showModalNotificationP, setShowModalNotificationP] = useState(false)
  const [showModalN, setShowModalN] = useState(false)
  const [showModalNotificationN, setShowModalNotificationN] = useState(false)
  const user = useSelector(state => state.usuarioActual)
  const idUser = user._id

  const customStyls = {
    overlay: {
      backgroundColor: "rgba(11,12,41,0.48)",
    },
  }

  function handleButtonImage() {
    setShowModal(true)
  }
  function closeModalImage() {
    showModalNotification && setShowModalNotification(false)
    showModal && setShowModal(false)
  }
  function handleButtonPassword() {
    setShowModalP(true)
  }
  function closeModalPassword() {
    showModalNotificationP && setShowModalNotificationP(false)
    showModalP && setShowModalP(false)
  }
  function handleOnClickBooks() {
    navigate(`/bookCreated/${idUser}`)
  }
  function handleOnClickOrders() {
    navigate(`/historyOrders/${idUser}`)
  }
  function handleOnClickQuestions() {
    navigate(`/questions/${idUser}`)
  }
  function handleButtonNombre() {
    setShowModalN(true)
  }
  function closeModalNombre() {
    showModalNotificationN && setShowModalNotificationN(false)
    showModalN && setShowModalN(false)
  }

  return (
    <div>
      <NavBar />
      <div className={s.todo}>
        <div className={s.containerPerfil}>
          <img className={s.img} src={user?.image?.url ? user?.image?.url : profile} alt='Imagen de usuario' />
          <h1 className={s.h1}>{user.nombre}</h1>
          <p>{user?.email}</p>
          <div className={s.btn}><button onClick={handleButtonImage}>CAMBIAR IMAGEN</button></div>
          <div className={s.btn}><button onClick={handleButtonPassword}>CAMBIAR CONTRASEÑA</button></div>
          <div className={s.btn}><button onClick={handleButtonNombre}>CAMBIAR NOMBRE</button></div>
          <div className={s.btn}><button onClick={handleButtonPassword}>ELIMINAR CUENTA</button></div>
        </div>
        <br />
        <div className={s.containerPerfil}>
          <div onClick={() => handleOnClickBooks()}>
            <Link to='/'>
              <p className={s.prueba}>MIS LIBROS</p>
            </Link>
          </div>
          <div onClick={() => (handleOnClickOrders())}>
            <Link to='/'>
              <p className={s.prueba}>MIS COMPRAS</p>
            </Link>
          </div>
          <div onClick={() => (handleOnClickQuestions())}>
            <Link to='/'>
              <p className={s.prueba}>PREGUNTAS Y RESPUESTAS</p>
            </Link>
          </div>
        </div>
        <Modal isOpen={showModal} style={customStyls} ariaHideApp={false} className={s.probando}>
          <ProfileImage
            closeModalImage={closeModalImage}
          />
        </Modal>
        <Modal isOpen={showModalP} style={customStyls} ariaHideApp={false} className={s.probando}>
          <ProfilePassword
            closeModalPassword={closeModalPassword}
          />
        </Modal>
        <Modal style={customStyls} isOpen={showModalN} ariaHideApp={false} className={s.probando}>
          <ProfileChangeName
            closeModalNombre={closeModalNombre}
            idUser={idUser}
          />
        </Modal>
      </div>
    </div>
  )
}

export default Profile





