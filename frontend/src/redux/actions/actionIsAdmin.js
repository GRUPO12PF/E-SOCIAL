import clienteAxios from "../../config/clienteAxios"
import { IS_ADMIN } from "../utils/constants"

export function isAdmin() {
  return async function (dispatch) {
    const response = clienteAxios.get('/validate/admin') // chequear URL!
    const data = response.data

    console.log('🚀 — file: actionIsAdmin.js — line 7 — isAdmin — data', data) // true or false

    return dispatch({
      type: IS_ADMIN,
      payload: data
    })
  }
}
