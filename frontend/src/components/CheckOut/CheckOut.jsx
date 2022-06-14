import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router";
import { useParams } from 'react-router-dom'
import { buyBook } from '../../redux/actions/actionBuy'

const checkOut = () => {
    useEffect(() => {
    
        dispatch(buyBook(id))
            
    }, [dispatch])

    return(
        <div>
        </div>
    )
}

export default checkOut;