

// 
import clienteAxios from '../../config/clienteAxios'

 export const detailsBook = (id) => {
    return async function (dispatch) {
      try {
          const json = await clienteAxios.get(`/detailBook${id}` );
         return dispatch({
             type:"GET_DETAIL",
             payload: json.data
         })
              
        } catch (error) {
            throw error
        }
      };
    };
       