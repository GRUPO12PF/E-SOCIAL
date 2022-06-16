import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import s from './CheckoutForm.module.css'
import { buyBook } from "../../../redux/actions/actionBuy"

const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const dispatch = useDispatch()
  const id = useSelector(state => state.detail._id)
  console.log("🚀 ~ file: CheckoutForm.jsx ~ line 14 ~ id", id)

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    })
    setLoading(true)

    if (!error) {
      // console.log(paymentMethod)
      const { id } = paymentMethod
      try {
        // const { data } = await axios.post( // TODO acá hay que hacer el dispatch de buyBook
        //   "http://localhost:3001/api/checkout",
        //   {
        //     id,
        //     amount: 10000, //cents
        //   }
        // )
        // console.log(data)

        dispatch(buyBook({
            id,
            qty: 1, //cents
        }))

        elements.getElement(CardElement).clear()
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
  }

  console.log(!stripe || loading)

  return (
    <div className={s.bigDiv}>
      <form className={s.form} onSubmit={handleSubmit}>
        {/* Product Information */}
        <img
          src="https://i.imgur.com/YoEVHEg.jpg" // TODO cambiar por imagen del libro
          alt="asfasgf" // TODO cambiar por texto acorde
          className={s.productImg}
        />

        <h3 className="text-center my-2">Price: 100$</h3> {/* TODO cambiar por price del libro */}

        {/* User Card Input */}
        <div className={s.cardElement}>
          <CardElement />
        </div>

        <button disabled={!stripe} className={s.butones}>
          {loading ? (
            <div className="spinner-border text-light" role="status">
              <span className="sr-only">Cargando...</span>
            </div>
          ) : (
            "Comprar"
          )}
        </button>
      </form>
    </div>
  )
}

export default CheckoutForm
