import clienteAxios from '../../config/clienteAxios'
// import { toast } from 'react-toastify'

export const postCreate = (payload) => {
  return async function () {
    const id = localStorage.getItem("token")
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${id}`,
      },
    }

    try {
      const postResponse = await clienteAxios.post(`/books`, payload, config)
      console.log("🚀 ~ file: postProducts.js ~ line 16 ~ payload", payload)
      console.log("🚀 ~ file: postProducts.js ~ line 16 ~ postResponse", postResponse.data) // por alguna razón, año_de_pub NO LLEGA en la respuesta
      return postResponse

    } catch (error) {
      throw error
    }
  }
}
