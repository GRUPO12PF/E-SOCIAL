import clienteAxios from "../../config/clienteAxios";
import { GET_DETALLE_ORDER } from "../utils/constants";



export const getDetalleOrder = (id) =>{
    return async function (dispatch){
        const json = await clienteAxios.get(`/orders/detail/${id}`);
        console.log(json)
        return dispatch({
            type: GET_DETALLE_ORDER,
            payload:json.data
        })
    }
}