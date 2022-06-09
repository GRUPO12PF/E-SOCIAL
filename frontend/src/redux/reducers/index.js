import { GET_CATEGORIES, FILTER_BY_CATEGORY, GET_BOOKS, GOOGLE_LOGIN, LOGIN_USER, LOGOUT_USER, AUTH_USER, RESET_ERROR_LOGIN_USER, VALIDATE_USER, SEND_EMAIL_TO_RESET_PASSWORD, RESET_PASSWORD, RESET_ERROR_MAIL, POST_CREATE, GET_DETAIL, SEARCH_BY_NAME, CLEAN_DATA, CURRENT_USER, PAGINATION_BOOKS, GET_TOTAL } from '../utils/constants'

const initialState = {
  // books
  books: [],
  allBooks: [],
  countBooks:[],
  categories: [],
  detail: [],

  //users
  usuarioActual: [], // perfil de usuario
  email: [], // para passwords
  confirmacion: {}, // registro
  loginUser: false, // Se está usando?

  usuario: [], // No se está usando!
  allUsuarios: [], // No se está usando!
  invalidToken: true, // No se está usando!
}

function rootReducer(state = initialState, action) {
  switch (action.type) {

    case GET_BOOKS:
      return {
        ...state,
        books: action.payload,
        allBooks: action.payload,
      }

    case GOOGLE_LOGIN:
      return {
        ...state,
        usuario: action.payload,
      }

    case LOGIN_USER:
      return {
        ...state,
        usuario: !action.payload.error ? action.payload : null,
        email: action.payload.error ? action.payload.error : null,
        loginUser: action.payload._id && true,
      }

    case LOGOUT_USER:
      return {
        usuario: [],
        usuarioActual: [],
        allUsuarios: [],
        confirmacion: {},
        email: [],
        invalidToken: true,
        loginUser: false,
      }

    case AUTH_USER:
      return {
        ...state,
        usuario: action.payload,
      }

    case RESET_ERROR_LOGIN_USER:
      return {
        ...state,
        email: action.payload,
      }
    case VALIDATE_USER:
      return {
        ...state,
        confirmacion: action.payload,
      }

    case SEND_EMAIL_TO_RESET_PASSWORD:
      return {
        ...state,
        email: action.payload,
      }

    case RESET_PASSWORD:
      return {
        ...state,
        email: action.payload,
      }

    case RESET_ERROR_MAIL:
      return {
        ...state,
        email: [],
      }

    case POST_CREATE:
      return {
        ...state,

      }

    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload
      }

    case SEARCH_BY_NAME:
      return {
        ...state,
        books: action.payload
      }

    case CLEAN_DATA:
      return {
        ...state,
        detail: action.payload,
      }

    case CURRENT_USER:
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
      
    case PAGINATION_BOOKS:
      return {
        ...state,
        books: action.payload
      }

    case GET_TOTAL:
      return {
        ...state,
        countBooks: action.payload
      }

    default:
      return state
  }
}

export default rootReducer
