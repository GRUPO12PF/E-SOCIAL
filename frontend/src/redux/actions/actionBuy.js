import clienteAxios from '../../config/clienteAxios.jsx'
import { BUY_BOOK } from '../utils/constants.js'

export const buyBook = (pago) => {
  return async function (dispatch) {
    try {
      const payload = await clienteAxios.post(`/create-payment-intent/`, pago) // TODO cambiar
      return dispatch({
        type: BUY_BOOK,
        payload
      })

    } catch (error) {
      console.log(error)
    }
  }
}

