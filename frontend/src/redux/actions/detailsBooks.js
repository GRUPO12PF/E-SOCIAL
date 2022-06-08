

import clienteAxios from '../../config/clienteAxios.jsx';

 export const detailsBook = (id) => {
    return async function (dispatch) {
      try {
          const json = await clienteAxios.get(`/books/${id}` );
          return dispatch({
             type:"GET_DETAIL",
             payload: json.data
         })
              
        } catch (error) {
          console.log(error)
        }
      };
    };
       