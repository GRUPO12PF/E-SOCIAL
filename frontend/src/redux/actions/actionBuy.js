import clienteAxios from '../../config/clienteAxios.jsx';

export const buyBook = (id) => {
   return async function (dispatch) {
     try {
         const json = await clienteAxios.get(`/books/${id}` );
         return dispatch({
            type:"BUY_BOOK",
            payload: json.data
        })

       } catch (error) {
         console.log(error)
       }
     };
   };

