import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getDetalleOrder } from '../../../redux/actions/actionOrder'
import { useState } from 'react'



const OrderDetail = () => {
    const {id}=useParams()
    console.log(id)
   

  
    const dispatch = useDispatch()

    const detalles = useSelector(state=> state.order)
    // const de = useSelector(state=> state.detail)
    // console.log(de)
    // console.log(detalles)
    

    useEffect(() => {
      dispatch( getDetalleOrder(id));
    
    }, []);
    
  return (
    <div>
        <h3>holaaaaa</h3>
        <h3>{}</h3>
    </div>
  )
}

export default OrderDetail