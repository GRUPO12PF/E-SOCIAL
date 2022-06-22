import clienteAxios from "../../config/clienteAxios";
import { GET_QA } from '../utils/constants';

export const postQuestion = (payload) => {
    return async function (dispatch) {
        const id = localStorage.getItem("token");
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${id}`,
            },
        }
        try {
           const json = await clienteAxios.post(`/qa/question/${payload.idComprador}`, payload, config);
            console.log("a ver qué trae el jsoonnn ",json)
            return json.data;
        } catch (error) {
            // console.log(error)
            throw error
        }
    }
}

export const postAnswer = (payload) => {
    return async function (dispatch) {
        const id = localStorage.getItem("token");
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${id}`,
            },
        }
        try {
            const json = await clienteAxios.post(`/qa/answer/${payload.idVendedor}`, payload, config);
            return json.data;
        } catch (error) {
            throw error
        }
    }
}

export const getQA = (id) => {
    try {
        return async function(){
        const QA = await clienteAxios.get(`/qa/${id}`)
      return dispatch({
        type: GET_QA,
        payload: QA
      }) 
    }
    } catch (error) {
        console.log(error)
    }
}