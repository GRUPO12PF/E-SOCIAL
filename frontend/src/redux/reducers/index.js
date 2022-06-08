import { FILTER_BY_CATEGORIES, GET_CATEGORIES } from '../utils/constants'

const initialState = {
  books: [],
  allBooks: [],
  categories: [],
  usuario: [],
  usuarioActual: [],
  allUsuarios: [],
  confirmacion: {},
  email: [],
  invalidToken: true,
  loginUser: false,
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_BOOKS':
      return {
        ...state,
        books: action.payload,
        allBooks: action.payload,
      }
    case 'GOOGLE_LOGIN':
      return {
        ...state,
        usuario: action.payload,
      }

    case 'LOGIN_USER':
      return {
        ...state,
        usuario: !action.payload.error ? action.payload : null,
        email: action.payload.error ? action.payload.error : null,
        loginUser: action.payload._id && true,
      }
    case 'LOGOUT_USER':
      return {
        usuario: [],
        usuarioActual: [],
        allUsuarios: [],
        confirmacion: {},
        email: [],
        invalidToken: true,
        loginUser: false,
      }

    case 'AUTH_USER':
      return {
        ...state,
        usuario: action.payload,
      }

    case 'RESET_ERROR_LOGUIN_USER':
      return {
        ...state,
        email: action.payload,
      }
    case 'VALIDATE_USER':
      return {
        ...state,
        confirmacion: action.payload,
      }

    case 'SEND_EMAIL_TO_RESET_PASSWORD':
      return {
        ...state,
        email: action.payload,
      }

    case 'RESET_PASSWORD':
      return {
        ...state,
        email: action.payload,
      }

    case 'RESET_ERROR':
      return {
        ...state,
        email: [],
      }

    case GET_CATEGORIES:
      const mappedPayload = action.payload.map(cat => cat.nombre)
      return {
        ...state,
        categories: mappedPayload
      }

    case FILTER_BY_CATEGORIES:
      const toFilter = action.payload === 'All Categories'
        ? state.allBooks
        : state.allBooks.filter(g => g.categories.includes(action.payload))
      const filteredCategory = toFilter.length
        ? toFilter
        : [{ error_msg: '¡El filtro no encontró ningún libro!' }]
      return {
        ...state,
        books: filteredCategory
      }

    default:
      return state
  }
}
export default rootReducer
