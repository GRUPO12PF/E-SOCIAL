import clienteAxios from "../../config/clienteAxios.jsx"
import { toast } from "react-toastify"

export function subirFotos(payload) {
  return async function () {
    const id = localStorage.getItem("token")
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${id}`
      },
    }

    try {
      const body = {
        image: payload,
      }
      const form = new FormData()
      for (let key in body) {
        form.append(key, body[key])
      }
      const json = await clienteAxios.put(`/usuarios/imagen`, payload, config)
      toast.success(json.data.msg)
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.msg)
    }
  }
}
