import React from "react"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import Checkoutform from "./CheckoutForm/CheckoutForm"

// import { buyBook } from '../../redux/actions/actionBuy'

const stripePromise = loadStripe('pk_test_51LAg9hHDqRgCh1WMinPYGhVaxGp2m9Df26h0orDwuaSZJak0vVZl2rUcrvlbK14XVmWZ9kScsTCXMWiZLFA6Abek00ezDxZtwN') // TODO cambiar por la variable con la secret key!

const CheckOut = () => {
  // useEffect(() => {
  //     dispatch(buyBook(id))
  // }, [dispatch])

  return (
    <Elements stripe={stripePromise}>
      <div>
        <Checkoutform />
      </div>
    </Elements>
  )
}

export default CheckOut