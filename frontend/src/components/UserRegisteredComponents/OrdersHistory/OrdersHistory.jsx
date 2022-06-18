import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { historyOrders } from '../../../redux/actions/actionOrder'
import Order from './Order'

export default function OrdersHistory() {
    const dispatch = useDispatch()
    const { id } = useParams();

    useEffect(() => {
        dispatch(historyOrders(id))
      }, [dispatch]);

     const allOrders = useSelector((state) => state.orders);
    console.log(allOrders)

    return(
        <>
          <h1>holissssss</h1>
          {  allOrders.map((e, i) => {
            return (
              <Link to={"/order/" + e._id}>
              <div key={i}>
                    <Order
                      id={e._id}
                    />
              </div>
              </Link>
            );
          })
        }
          </>
    )
}