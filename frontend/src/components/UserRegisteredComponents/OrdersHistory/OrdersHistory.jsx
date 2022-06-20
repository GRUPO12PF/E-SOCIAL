import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { historyOrders } from '../../../redux/actions/actionOrder'
import Order from './Order'
import NavBar from '../../CommonComponents/NavBar/NavBar'
import Footer from '../../CommonComponents/Footer/Footer'

export default function OrdersHistory() {
    const dispatch = useDispatch()
    const { id } = useParams();

    
    const allOrders = useSelector((state) => state.orders);
    console.log(allOrders)
    const hola = allOrders.map(e=>{
      return e.books._id
    })
    console.log (hola)
    
    useEffect(() => {
        dispatch(historyOrders(id))
      }, [dispatch]);
    return(
        <>
          <NavBar />
          {  allOrders?.map((e, i) => {
            return (
              <Link to={"/order/" + e._id}>
              <div key={i}>
                    <Order
                      id= {e._id}
                      nombre={e.books.nombre}
                      image={e.books.image}
                    />
              </div>
              </Link>
            );
            
          })
        }
          </>
    )
}