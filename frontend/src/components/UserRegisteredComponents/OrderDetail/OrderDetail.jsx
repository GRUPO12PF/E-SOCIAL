import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getDetalleOrder } from '../../../redux/actions/actionOrder'
import { useState } from 'react'
import Loading from '../../CommonComponents/Loading/Loading'

const OrderDetail = () => {
    const {id}=useParams()
    const[loading,setLoading]=useState(true)

    const dispatch = useDispatch()

    const detalles = useSelector(state=> state.order)
    console.log(detalles)
    useEffect(() => {
      dispatch( getDetalleOrder(id))

    }, [id])
    
  return (
    <div>
        <h3>{detalles.book}</h3>
    </div>
  )
}

export default OrderDetail