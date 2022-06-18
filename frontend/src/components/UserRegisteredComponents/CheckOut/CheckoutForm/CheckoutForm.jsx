import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import s from './CheckoutForm.module.css'
import { buyBook } from "../../../../redux/actions/actionBuy.js"



const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const dispatch = useDispatch()
  const product = useSelector(state => state.detail)
  console.log(product)
  const bookId = product._id

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    })
    console.log("🚀 ~ file: CheckoutForm.jsx ~ line 23 ~ handleSubmit ~ paymentMethod", paymentMethod)
    setLoading(true)

    if (!error) {
      const pm = paymentMethod.id

      try {

        dispatch(buyBook(
          [{
            pm,
            qty: 1, //cents
            id: bookId
          }]
        ))

        elements.getElement(CardElement).clear()
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
  }

  // console.log(!stripe || loading)

  return (
    <div className={s.bigDiv}>
      <form className={s.form} onSubmit={handleSubmit}>
        
      

        <h3 className="text-center my-2">{product.nombre}</h3>

        <div className={s.flex}>
        <img
          src={product.image} // TODO cambiar por imagen del libro
          alt="not found" // TODO cambiar por texto acorde
          className={s.productImg}
        />
        <h3 className="text-center my-2">$ {product.price}</h3>
        </div>

        {/* User Card Input */}
        <div className={s.flex2}>
        <div className={s.cardElement}>
          <CardElement />
        </div>
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
     {/* <ConfirmacionPago/> */}
    </div>
  )
}

export default CheckoutForm
