import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDetalleOrder } from '../../../redux/actions/actionOrder'
import NavBar from '../../CommonComponents/NavBar/NavBar'
import Footer from '../../CommonComponents/Footer/Footer'


const OrderDetail = () => {
  const { id } = useParams()
  console.log(id)

  const dispatch = useDispatch()


  const detalles = useSelector(state => state.order)

  useEffect(() => {
    dispatch(getDetalleOrder(id));

  }, []);

  return (
    <div>
                <NavBar />
      <h3>holaaaaa</h3>
      <p>id de la orden: {detalles._id}</p>
      <p>nombre del libro: {detalles.book}</p>
             
          
    </div >
  )
}

export default OrderDetail