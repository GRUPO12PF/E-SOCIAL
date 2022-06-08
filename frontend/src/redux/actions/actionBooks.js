import clienteAxios from "../../config/clienteAxios";

export function getBooks() {
    return async function (dispatch){
        const json = await clienteAxios.get(`/books`);
        return dispatch({
            type: "GET_BOOKS",
            payload: json.data,
        })
    }
}