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
      const json = await clienteAxios.post(`/books`, payload, config)
      console.log(json)
      return json

    } catch (error) {
      throw error
    }
  }
}



/* 
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
      let newBook = payload
      const imagesToBook = {
        image: newBook.image,
      }
      const form = new FormData()
      for (let key in imagesToBook) {
        form.append(key, imagesToBook[key])
      }
      newBook.image = imagesToBook
      const json = await clienteAxios.post(`/books`, newBook, config)
      toast.success(json.data.msg)
      console.log(json.data)
      return json

    } catch (error) {
      throw error
    }
  }
}
 */