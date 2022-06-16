import clienteAxios from '../../config/clienteAxios.jsx';
import {loadStripe} from '@stripe/stripe-js'
import { CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import axios from 'axios';

const stripe = useStripe();
const stripePromise = loadStripe('pk_test_51LAg9hHDqRgCh1WMinPYGhVaxGp2m9Df26h0orDwuaSZJak0vVZl2rUcrvlbK14XVmWZ9kScsTCXMWiZLFA6Abek00ezDxZtwN')
export const buyBook = () => {
    const elements = useElements();
    const{error,paymentMethod}=await stripe.createPaymentMethod({
          type:"card",
          card:elements.getElement(CardElement),
      });


    if (!error){
          const {id} = paymentMethod
          const {data} = await axios.post(`/orders/${id}`, {
          paymentMethodId: id,
          amount: json.data.price
  })
  console.log(data)
  consolee.log(error)
}

}

   export const checkOut = (id) => {
    return async function (dispatch) {
      try {
          const json = await clienteAxios.get(`/orders/${id}`);
          return dispatch({
             type:"CHECK_OUT",
             payload: json.data
         })
 
        } catch (error) {
          console.log(error)
        }
      };
    };

