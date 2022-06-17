import { GET_CATEGORIES, FILTER_BY_CATEGORY, SORT_BY, NAME_ASC, NAME_DESC, PRICE_ASC, PRICE_DESC, BUY_BOOK } from '../utils/constants'

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
  buy: [],
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    
    //---------------------USER----------------------------------------
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

    case 'GET_BOOKS':
      return {
        ...state,
        books: action.payload,
        allBooks: action.payload,
      }

    //---------------------BOOKS----------------------------------------
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

    // FILTERS
    case FILTER_BY_CATEGORY:
      return {
        ...state,
        books: action.payload
      }

    // SORTERS
    case SORT_BY:
      let sortedBooks = [...state.books]

      if (action.payload === NAME_ASC) {
        sortedBooks.sort((a, b) => a.nombre.localeCompare(b.nombre))
      }
      if (action.payload === NAME_DESC) {
        sortedBooks.sort((a, b) => b.nombre.localeCompare(a.nombre))
      }
      if (action.payload === PRICE_ASC) {
        sortedBooks.sort((a, b) =>
          a.price !== b.price
            ? a.price - b.price
            : a.nombre.localeCompare(b.nombre)
        )
      }
      if (action.payload === PRICE_DESC) {
        sortedBooks.sort((a, b) =>
          a.price !== b.price
            ? b.price - a.price
            : b.nombre.localeCompare(a.nombre)
        )
      }
      return {
        ...state,
        books: sortedBooks
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
      return {
        ...state,
        delete: action.payload
      }

    case 'PUT_BOOK_BODY':
      return {
        ...state,
        put: action.payload
      }
   
      //BUY
    case BUY_BOOK:
      return {
        ...state,
        buy: action.payload
      }

    default:
      return state
  }
}

export default rootReducer
