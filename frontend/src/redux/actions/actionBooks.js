import clienteAxios from "../../config/clienteAxios";

export function getBooks() {
    return async function (dispatch) {
        const json = await clienteAxios.get(`/books`);
        return dispatch({
            type: "GET_BOOKS",
            payload: json.data,
        })
    }
}

export function searchByName(name) {
    return async function (dispatch) {
        try {
            var json = await clienteAxios.get(`/books?name=${name}`)
            return dispatch({
                type: "SEARCH_BY_NAME",
                payload: json.data
            })
        } catch (error) {
            dispatch({
                type: "SEARCH_BY_NAME",
                payload: [],
            })
        }
    }
};


export function cleanData() {
    return function (dispatch) {
        dispatch({
            type: "CLEAN_DATA",
            payload: {},
        })
    }
}

export const deleteBook = (payload) => {
    return async function (dispatch) {
        const id = localStorage.getItem("token");
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${id}`,
            },
        };
        console.log(payload)
        try {
            const json = await clienteAxios.delete(`/books/${payload}`, config);
            console.log(json)
            return json;
        } catch (error) {
            throw error
        }
    };
};


export const putBookBody = (payload) => {
    return async function (dispatch) {
        console.log("a veeeeeer", payload)
        const id = localStorage.getItem("token");
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${id}`,
            },
        };
        try {
            const json = await clienteAxios.put(`/books/${payload._id}`, payload, config);
            dispatch({
                type: "PUT_BOOK_BODY",
                payload: json.data,
            });
            return json.data;
        } catch (error) {
            throw error
        }
    };
};
