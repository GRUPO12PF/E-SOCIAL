import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {buyBook} from '../../redux/actions/actionBuy'
import { useDispatch} from 'react-redux'

function Book() {
    
    const { id } = useParams()
    const dispatch = useDispatch()
    const handleBuy = () => {
            dispatch(buyBook(id))
        }
        return (
            <div>
                <Link to= '/checkout'>
                            <button onClick={(e) => handleBuy(e)} >BUY NOW</button>
                </Link>
            </div>
        )
    }
    
    export default Book