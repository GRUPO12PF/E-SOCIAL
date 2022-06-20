import clienteAxios from '../../config/clienteAxios.jsx';
import { BUY_BOOK } from '../utils/constants.js'

export const buyBook = (pago) => {
  return async function (dispatch) {
    try {
      const payload = await clienteAxios.post(`/create-payment-intent/`, pago)
      return dispatch({
        type: BUY_BOOK,
        payload
      })
    } catch (error) {
      console.log(error)
    }
  }
}


export const orderPost = (payload) => {
  return async function (dispatch) {
      const id = localStorage.getItem("token");
      const config = {
          headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${id}`,
          },
      };
      try {
          const json = await clienteAxios.put(`/orders`, payload, config);
          return json.data;
      } catch (error) {
          throw error
      }
  };
};

