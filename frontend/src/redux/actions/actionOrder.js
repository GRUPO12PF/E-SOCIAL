import clienteAxios from "../../config/clienteAxios";
import { GET_DETALLE_ORDER } from "../utils/constants";

export const historyOrders = (payload) => {
    return async function (dispatch) {
        const id = localStorage.getItem("token");
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${id}`,
            },
        };
        try {
            const json = await clienteAxios.get(`/orders/${payload}`, config);
            console.log(json.data)
            return dispatch({
                type: "HISTORY_ORDER",
                payload: json.data
            })
        } catch (error) {
            throw error
        }
    };
};

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
  