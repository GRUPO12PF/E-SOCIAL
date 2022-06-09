import clienteAxios from '../../config/clienteAxios';

export function getBooks() {
    return async function (dispatch){
        const json = await clienteAxios.get(`/books`);
        return dispatch({
            type: 'GET_BOOKS',
            payload: json.data,
        })
    }
}

export function searchByName(name) {
    return async function (dispatch) {
        try {
            var json = await clienteAxios.get(`/books?name=${name}`)
            return dispatch({
                type: 'SEARCH_BY_NAME',
                payload: json.data
            })
        } catch (error) {
            dispatch({
                type: 'SEARCH_BY_NAME',
                payload: [],
            })
        }
    }
};

export function pagination(page) {
    return async function (dispatch) {
        try {
            var json = await clienteAxios.get(`/books/?page=${page}`)
            return dispatch({
                type: 'PAGINATION_BOOKS',
                payload: json.data
            })
        } catch (error) {
            dispatch({
                type: 'PAGINATION_BOOKS',
                payload: [],
            })
        }
    }
};

export function getTotalBooks() {
    return async function (dispatch){
        const json = await clienteAxios.get(`books/total`);
        console.log(json)
        return dispatch({
            type: 'GET_TOTAL',
            payload: json.data,
        })
    }
}



export function cleanData() {
    return function (dispatch) {
        dispatch({
            type: 'CLEAN_DATA',
            payload: {},
        })
    }
}
