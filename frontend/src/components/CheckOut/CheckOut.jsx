import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router";
import { useParams } from 'react-router-dom'
import { buyBook } from '../../redux/actions/actionBuy'

export default function checkOut ({id,image,price})  {
    useEffect(() => {
        dispatch(buyBook(id))
            
    }, [dispatch])

    return(
        <div>
            <img src={image}/>
            <h5>{price}</h5>


        </div>
    )
}
