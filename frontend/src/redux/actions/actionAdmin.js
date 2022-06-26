import clienteAxios from "../../config/clienteAxios";
import { GET_USUARIOS, GET_ORDERS, GET_REVIEW } from "../utils/constants";

export function getAllUsers() {
    return async function (dispatch) {
        const json = await clienteAxios.get(`/usuarios/traer-usuarios`);
        //console.log(json.data)
        return dispatch({
            type: GET_USUARIOS,
            payload: json.data,
        })
    }
}

export function getAllOrders() {
    return async function (dispatch) {
        const json = await clienteAxios.get(`/usuarios/traer-orders`);
        //console.log(json.data)
        return dispatch({
            type: GET_ORDERS,
            payload: json.data,
        })
    }
}

export function getAllReviews() {
    return async function (dispatch) {
        const json = await clienteAxios.get(`/review`);
        return dispatch({
            type: GET_REVIEW,
            payload: json.data,
        })
    }
}