import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetalleOrder } from '../../../redux/actions/actionOrder';
import NavBar from '../../CommonComponents/NavBar/NavBar';
import Modal from 'react-modal';
import s from './OrderDetail.module.css';
import { Link } from 'react-router-dom';
import Review from '../Review/Review';
import Footer from '../../CommonComponents/Footer/Footer';


const OrderDetail = () => {
  const { id } = useParams()
  const [showModal, setShowModal] = useState(false)
  const [showModalNotification, setShowModalNotification] = useState(false)
  const detalles = useSelector(state => state.order)
  const review = detalles?.reviews

  const dispatch = useDispatch()

  let response
  if (review?.length !== 0) {
    response = '¡YA CALIFICASTE AL VENDEDOR!'
  }
  useEffect(() => {
    dispatch(getDetalleOrder(id));
  }, [dispatch]);


  function handleButton() {
    if (review?.length === 0) {
      setShowModal(true)
    } else {
      const btnReview = document.getElementById('review');
      btnReview.disabled = true;
    }
  }

  function closeModal() {
    showModalNotification && setShowModalNotification(false)
    showModal && setShowModal(false)
  }

  return (
    <div>
      <NavBar />
      <div className={s.containerGral} >
        <Link to='/profile'>
          <button className={s.btnHome}>VOLVER AL MENU</button>
        </Link>
        <div className={s.container}>
          <p className={s.texto}>{detalles.books?.nombre}</p>
          <img className={s.image} src={detalles.books?.image} />
          <p className={s.textoId}>ID orden: {detalles?._id}</p>
        </div >
        <div className={s.contenedorSecundario}>
          <p className={s.items}>{detalles.books?.nombre}</p>
          <p className={s.items}>{detalles.books?.price}</p>
          <p className={s.items}>{detalles.books?.descripcion}</p>
          <p className={s.items}>{detalles.books?.category}</p>
        </div>
        <div className={s.response}>{response ? response : null}</div>
        <button id='review' className={s.button} onClick={handleButton}>OPINAR SOBRE EL VENDEDOR</button>
      </div>
      <Modal isOpen={showModal} ariaHideApp={false}>
        <Review
          closeModal={closeModal}
          id={id}
        />
      </Modal>
      <Footer/>
    </div>
  )
}

export default OrderDetail
