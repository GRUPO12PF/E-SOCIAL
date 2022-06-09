import clienteAxios from '../../config/clienteAxios.jsx'
import { toast } from 'react-toastify'

import { AUTH_USER, CURRENT_USER, LOGIN_USER, LOGOUT_USER, RESET_ERROR_MAIL, RESET_ERROR_LOGIN_USER, RESET_PASSWORD, SEND_EMAIL_TO_RESET_PASSWORD, VALIDATE_USER } from '../utils/constants.js'
export function registroUsuario({ nombre, email, password1 }) {
  return async function () {
    try {
      const body = {
        nombre,
        email,
        password: password1,
      }

      const response = await clienteAxios.post(`/usuarios`, body)

      toast.success(response.data)
    } catch (e) {
      toast.error(e.response.data.msg)
    }
  }
}

export function validateUser(id) {
  return async function (dispatch) {
    try {
      var json = await clienteAxios(`/usuarios/confirmar/${id}`)
      toast.success('User validated successfully')
      return dispatch({
        type: VALIDATE_USER,
        payload: json.data,
      })
    } catch (error) {
      toast.error('There was an error validating the user')
      return dispatch({
        type: VALIDATE_USER,
        payload: error.response.data,
      })
    }
  }
}

export function login(payload) {
  return async function (dispatch) {
    try {
      let json = await clienteAxios.post(`/usuarios/login`, payload)
      localStorage.setItem('token', json.data.token)
      return dispatch({
        type: LOGIN_USER,
        payload: json.data,
      })
    } catch (error) {
      return dispatch({
        type: LOGIN_USER,
        payload: { error: error.response.data.msg },
      })
    }
  }
}

export function resetErrorLoginUser() {
  return function (dispatch) {
    let nada = []
    return dispatch({
      type: RESET_ERROR_LOGIN_USER,
      payload: nada,
    })
  }
}

export function autenticarUser(config) {
  return async function (dispatch) {
    try {
      let json = await clienteAxios(`/usuarios/perfil`, config)

      return dispatch({
        type: AUTH_USER,
        payload: json.data,
      })
    } catch (error) {
      console.log(error.response.data.msg)
    }
  }
}

export function userLogout(dispatch) {
  localStorage.clear()
  return dispatch({
    type: LOGOUT_USER,
  })
}

export function setToResetPassword(data) {
  return async function (dispatch) {
    try {
      let json = await clienteAxios.post(`/usuarios/olvide-password/`, {
        email: data,
      })

      toast.success(json.data.msg)

      return dispatch({
        type: SEND_EMAIL_TO_RESET_PASSWORD,
        payload: json.data,
      })
    } catch (error) {
      toast.error(error.response.data.msg)
      return dispatch({
        type: SEND_EMAIL_TO_RESET_PASSWORD,
        payload: { error: error.response.data.msg },
      })
    }
  }
}

export function resetPassword(data) {
  const { token, password } = data
  return async function (dispatch) {
    try {
      let json = await clienteAxios.post(`/usuarios/olvide-password/${token}`, {
        password,
      })
      return dispatch({
        type: RESET_PASSWORD,
        payload: json.data,
      })
    } catch (error) {
      return dispatch({
        type: RESET_PASSWORD,
        payload: { error: error.response.data.msg },
      })
    }
  }
}

export function setStateEmail() {
  return async function (dispatch) {
    const resetMail = []
    return dispatch({
      type: RESET_ERROR_MAIL,
      payload: resetMail,
    })
  }
}

export function cambiarImagen(payload) {
  return async function (dispatch) {
    const id = localStorage.getItem('token')
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${id}`,
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
      const json = await clienteAxios.put(`/usuarios/imagen`, form, config)
      toast.success(json.data.msg)
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.msg)
    }
  }
}

export function usuarioActual() {
  return async function (dispatch) {
    const id = localStorage.getItem('token')
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${id}`,
      },
    }
    try {
      const json = await clienteAxios.get('/usuarios/actual', config)
      return dispatch({
        type: CURRENT_USER,
        payload: json.data,
      })
    } catch (e) {
      console.log(e)
    }
  }
}
