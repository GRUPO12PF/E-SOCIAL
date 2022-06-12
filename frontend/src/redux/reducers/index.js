import { GET_CATEGORIES, FILTER_BY_CATEGORY } from '../utils/constants'

const initialState = {
  books: [],
  countBooks: [],
  allBooks: [],
  categories: [],
  usuario: [],
  usuarioActual: [],
  allUsuarios: [],
  confirmacion: {},
  email: [],
  invalidToken: true,
  loginUser: false,
  detail: [],
  delete: [],
  put: [],
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
        ...state,
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

    case 'POST_CREATE':
      return {
        ...state,

      }

    case 'GET_DETAIL':
      return {
        ...state,
        detail: action.payload
      }

    case 'SEARCH_BY_NAME':
      return {
        ...state,
        books: action.payload
      }

    case 'CLEAN_DATA':
      return {
        ...state,
        detail: [],
      }

    case 'ACTUAL':
      return {
        ...state,
        usuarioActual: action.payload,
      }

    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }

    case FILTER_BY_CATEGORY:      
      return {
        ...state,
        books: action.payload
      }

    case 'PAGINATION_BOOKS':
      return {
        ...state,
        books: action.payload
      }

    case 'GET_TOTAL':
      return {
        ...state,
        countBooks: action.payload
      }

    case 'DELETE_BOOK':
      console.log(action.payload)
      return {
        ...state,
        delete: action.payload
      }
    case 'PUT_BOOK':
      console.log(action.payload)
      return {
        ...state,
        put: action.payload
      }
      case 'PUT_BOOK_BODY':
        return {
          ...state,
        }
  
    default:
      return state
  }
}
export default rootReducer
