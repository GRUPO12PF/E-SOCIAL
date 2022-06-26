import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { historyOrders } from '../../../redux/actions/actionOrder'
import Order from './Order'
import NavBar from '../../CommonComponents/NavBar/NavBar'
import s from './OrderHistory.module.css'
import Footer from '../../CommonComponents/Footer/Footer'

export default function OrdersHistory() {
  const dispatch = useDispatch()
  const { id } = useParams()

  const allOrders = useSelector((state) => state.orders)
  console.log(allOrders)

  useEffect(() => {
    dispatch(historyOrders(id))
  }, [dispatch])

  return (
    <>
      <NavBar />
      <div className={s.papa}>
      <Link to = '/profile'>
        <button class="bg-gray-600 text-white py-3 px-6 shadow-md rounded inline mt-8 mr-1 ml-1 font-semibold racking-wider">VOLVER AL MENU</button>
      </Link>
      
      <h3 className={s.titulo}>HISTORIAL DE COMPRAS</h3>
      
      <div className="contenedorGral">
      </div>
        <div className="contenedorBooks">
          {allOrders?.map((e, i) => {
            return (
              <Link to={"/order/" + e._id}>
                <div key={i}>
                  <Order
                    id={e._id}
                    nombre={e.books?.nombre}
                    image={e.books?.image}
                  />
                </div>
              </Link>
            )
          })}
        </div>
  {/* <Footer/> */}
      </div>
    </>
  )
}
