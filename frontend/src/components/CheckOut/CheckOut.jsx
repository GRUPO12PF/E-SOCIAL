import React from 'react'
import { useDispatch } from 'react-redux'
import { buyBook } from '../../redux/actions/actionBuy'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, useStripe, useElements } from '@stripe/react-stripe-js'
import CheckoutForm from '../CheckoutForm/CheckoutForm'

export default function CheckOut({ id, image, price }) {
  console.log("🚀 ~ file: CheckOut.jsx ~ line 9 ~ CheckOut ~ id", id)
  const dispatch = useDispatch()
  const stripe = useStripe()
  const Elements = useElements()
  const stripePromise = loadStripe('pk_test_51LAg9hHDqRgCh1WMinPYGhVaxGp2m9Df26h0orDwuaSZJak0vVZl2rUcrvlbK14XVmWZ9kScsTCXMWiZLFA6Abek00ezDxZtwN')

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   dispatch(buyBook(id))

  return (
    <div>
      <Elements stripe={stripePromise}>
          <CheckoutForm />
          <button>BUY</button>
      </Elements>
    </div>
  )
}
