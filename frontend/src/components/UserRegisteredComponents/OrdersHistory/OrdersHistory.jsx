import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { historyOrders } from '../../../redux/actions/actionOrder'
import Order from './Order'
import NavBar from '../../CommonComponents/NavBar/NavBar'
import Footer from '../../CommonComponents/Footer/Footer'
import s from './OrderHistory.module.css'

export default function OrdersHistory() {
    const dispatch = useDispatch()
    const { id } = useParams();

    
    const allOrders = useSelector((state) => state.orders);
    console.log(allOrders)
  
    
    useEffect(() => {
        dispatch(historyOrders(id))
      }, [dispatch]);
    return(
        <>
          <NavBar />
          <h3 className={s.titulo}>HISTORIAL DE COMPRAS</h3>
          <div className="contenedorGral">
          <div className="contenedorBooks">
          {  allOrders?.map((e, i) => {
            return (
              <Link to={"/order/" + e._id}>
              <div key={i}>
                    <Order
                      id= {e._id}
                      nombre={e.books?.nombre}
                      image={e.books?.image}
                    />
              </div>
              </Link>
            );
            
          })
        }
        </div>
        </div>
          </>
    )
}