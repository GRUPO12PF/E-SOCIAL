import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDetalleOrder } from '../../../redux/actions/actionOrder'
import NavBar from '../../CommonComponents/NavBar/NavBar'
import Footer from '../../CommonComponents/Footer/Footer'


const OrderDetail = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  console.log(id)
  const detalles = useSelector(state => state.order)
  const idCreador = detalles.books?.creador

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDetalleOrder(id));
  }, [dispatch]);

  const handleClick = () => {
    navigate(`/review/${idCreador}`)
  }

  return (
    <div>
      <NavBar />
      <p>ID orden: {detalles?._id}</p>
      <p>{detalles.books?.nombre}</p>
      <img src={detalles.books?.image} />
      <p>{detalles.books?.nombre}</p>
      <p>{detalles.books?.price}</p>
      <p>{detalles.books?.descripcion}</p>
      <p>{detalles.books?.category}</p>
      {/* <p>{detalles.comprador.nombre}</p>
               <img src={detalles.comprador.image.url}/> */}
      <button onClick={handleClick}>OPINAR SOBRE EL VENDEDOR</button>

    </div >
  )
}

export default OrderDetail