import clienteAxios from "../../config/clienteAxios";
import { GET_USUARIOS } from "../utils/constants";

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