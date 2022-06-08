import clienteAxios from '../../config/clienteAxios'
import { GET_CATEGORIES, FILTER_BY_CATEGORY } from '../utils/constants'

export function getCategories() {
  return async (dispatch) => {
    try {
      const categories = await clienteAxios.get(`http://localhost:3001/api/categories`)
      return dispatch({
        type: GET_CATEGORIES,
        payload: categories.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function filterByCategory(filter) {
  return async (dispatch) => {
    try {
      let categories
      if (filter) {
        categories = await clienteAxios.get(`http://localhost:3001/api/books?category=${filter}`)
      } else {
        categories = await clienteAxios.get(`http://localhost:3001/api/books`)
      }
      return dispatch({
        type: FILTER_BY_CATEGORY,
        payload: categories.data
      })
    } catch (error) {
      console.log(error)
    }      
  }
}
