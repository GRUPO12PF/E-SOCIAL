import clienteAxios from '../../config/clienteAxios'

 export const postCreate = (payload) => {
    return async function (dispatch) {
      try {
          const json = await clienteAxios.post(`/nuevoBook`, payload );
          console.log(json)
          return json;
              
        } catch (error) {
            throw error
        }
      };
    };
           
             
        