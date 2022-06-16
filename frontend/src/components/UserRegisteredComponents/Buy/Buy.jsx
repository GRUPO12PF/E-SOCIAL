import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router";
import { useParams, Link } from 'react-router-dom'
import { buyBook } from '../../../redux/actions/actionBuy'

const buy = () => {
    const buy = useSelector((state) => state.buy)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { id } = useParams()

    const handleBuy = () => {
          dispatch(buyBook(id))
        }
    return(
        <div>
            <Link id="checkout" to= '/checkout'>
            <button onClick={(e) => handleBuy(e)} >BUY NOW</button>
            </Link>
        </div>
    )
}

export default buy;