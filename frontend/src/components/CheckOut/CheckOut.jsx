import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router";
import { useParams } from 'react-router-dom'
import { buyBook } from '../../redux/actions/actionBuy'
import {loadStripe} from '@stripe/stripe-js'
import {Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

export default function checkOut ({id,image,price})  {
    const dispatch = useDispatch()
    const stripe = useStripe();
    const stripePromise = loadStripe('pk_test_51LAg9hHDqRgCh1WMinPYGhVaxGp2m9Df26h0orDwuaSZJak0vVZl2rUcrvlbK14XVmWZ9kScsTCXMWiZLFA6Abek00ezDxZtwN')
    const elements = useElements();
    
    const handleSubmit = (e) => {
        e.preventDefault()
        stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        })
        
    }
    return(
        <div>
        <Elements stripe={stripePromise}>
            <form onSubmit={handleSubmit}>
                <CardElement/>
                <button>BUY</button>
            </form>
        </Elements>
        </div>
    )
}
