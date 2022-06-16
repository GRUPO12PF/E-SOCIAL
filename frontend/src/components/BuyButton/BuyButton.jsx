import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { buyBook } from '../../redux/actions/actionBuy'
import { useDispatch } from 'react-redux'

function BuyButton() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const handleBuy = () => {
        dispatch(buyBook(id))
    }    
    return (
        <div>
            <Link to='/checkout' id={id}>
                <button onClick={(e) => handleBuy(e)} >BUY NOW</button>
            </Link>
        </div>
    )
}

export default BuyButton