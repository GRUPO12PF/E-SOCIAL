import clienteAxios from '../../config/clienteAxios'

 export const postCreate = (payload) => {
    return async function (dispatch) {

      const id = localStorage.getItem("token");
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${id}`,
        },
      };

      try {
          const json = await clienteAxios.post(`/books`, payload, config);
          console.log(json)
          return json;
              
        } catch (error) {
            throw error
        }
      };
    };
           
             
        