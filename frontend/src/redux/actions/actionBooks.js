import clienteAxios from '../../config/clienteAxios'
import { FILTER_BY_CATEGORIES, GET_CATEGORIES } from '../utils/constants'

export function getBooks() {
  return async function (dispatch) {
    const json = await clienteAxios.get(`/books`)
    return dispatch({
      type: 'GET_BOOKS',
      payload: json.data,
    })
  }
}

export function getCategories() {
  return async (dispatch) => {
    try {
      const categories = await get(`/api/categories/`)
      return dispatch({
        type: GET_CATEGORIES,
        payload: categories.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function filterByCategories(payload) {
  return {
    type: FILTER_BY_CATEGORIES,
    payload
  }
}