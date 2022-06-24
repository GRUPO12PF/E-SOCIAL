import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDetalleOrder } from '../../../redux/actions/actionOrder'
import NavBar from '../../CommonComponents/NavBar/NavBar'
import Footer from '../../CommonComponents/Footer/Footer'
import s from './OrderDetail.module.css'


const OrderDetail = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const detalles = useSelector(state => state.order)
  const review = detalles?.reviews
  console.log(review)

  const dispatch = useDispatch()

  let response
  if (review?.length !== 0) {
    response = 'YA CALIFICASTE AL VENDEDOR!'
  }
  useEffect(() => {
    dispatch(getDetalleOrder(id));
  }, [dispatch]);

  const handleClick = () => {
    if (review?. length === 0) {
      navigate(`/review/${id}`)
    } else {
      const btnReview = document.getElementById('review');
      btnReview.disabled = true;

    }
  }

  return (
    <div>
      <NavBar />
      <div className={s.containerGral} >
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
          {/* <p>{detalles.comprador.nombre}</p>
               <img src={detalles.comprador.image.url}/> */}
         
        </div> 
        <div className={s.response}>{response ? response : null}</div>
        <button id="review" className={s.button} onClick={handleClick}>OPINAR SOBRE EL VENDEDOR</button>
      </div>
    </div>
  )
}

export default OrderDetail
