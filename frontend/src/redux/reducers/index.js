
const initialState = {
  usuario: [],
  usuarioActual: [],
  allUsuarios: [],
  confirmacion: {},
  email: [],
  invalidToken: true,
  loginUser: false,
  post:[],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {

    case "GOOGLE_LOGIN":
      return {
        ...state,
        usuario: action.payload,
      };

    case "LOGIN_USER":
      return {
        ...state,
        usuario: !action.payload.error ? action.payload : null,
        email: action.payload.error ? action.payload.error : null,
        loginUser: action.payload._id && true,
      };
    case "LOGOUT_USER":
      return {
        usuario: [],
        usuarioActual: [],
        allUsuarios: [],
        confirmacion: {},
        email: [],
        invalidToken: true,
        loginUser: false,
      };

      case "AUTH_USER":
        return {
          ...state,
          usuario: action.payload,
        };
  
      case "RESET_ERROR_LOGUIN_USER":
        return {
          ...state,
          email: action.payload,
        };
        case "VALIDATE_USER":
          return {
            ...state,
            confirmacion: action.payload,
          };
    
        case "SEND_EMAIL_TO_RESET_PASSWORD":
          return {
            ...state,
            email: action.payload,
          };
    
        case "RESET_PASSWORD":
          return {
            ...state,
            email: action.payload,
          };
    
        case "RESET_ERROR":
          return {
            ...state,
            email: [],
          };
        
        case "POST_CREATE":
            return{
              ...state,
                
            }  
    default:
      return state;
  }
}
export default rootReducer;
