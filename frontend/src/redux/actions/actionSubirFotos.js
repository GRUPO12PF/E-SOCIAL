import clienteAxios from "../../config/clienteAxios.jsx"
import { toast } from "react-toastify"

export function subirFotos(payload) {
  return async function () {
    try {
      const body = {
        image: payload,
      }
      const form = new FormData()
      for (let key in body) {
        form.append(key, body[key])
      }
      console.log("🚀 ~ file: actionSubirFotos.js ~ line 10 ~ body", body)
      const json = await clienteAxios.post(`/books/images`, body, config)
      toast.success(json.data.msg)

      return dispatch({
        type: IMG_UPLOAD,
        json
      })
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.msg)
    }
  }
}
