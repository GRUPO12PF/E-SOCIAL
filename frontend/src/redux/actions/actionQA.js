import clienteAxios from "../../config/clienteAxios";
import { GET_QA, POST_ANSWER, POST_QUESTION } from '../utils/constants';

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
            console.log("payload de las actionsssssss",payload)
            const json = await clienteAxios.post(`/qa/question/${payload.id}`, payload.mensaje, payload.idVendedor, payload.idBook, config);
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