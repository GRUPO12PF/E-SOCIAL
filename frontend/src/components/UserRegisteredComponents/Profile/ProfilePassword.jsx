import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import {
  setToResetPassword,
  setStateEmail,
} from "../../../redux/actions/actionUser"
import validarEmail from "../../../middleware/validarEmail"
import s from './Profile.module.css'

export default function ProfilePassword({closeModalPassword}) {
  const [email, setEmail] = useState("")
  const [errors, setErrors] = useState({})
  const respuesta = useSelector((state) => state.errorEmail)

  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      dispatch(setStateEmail())
    }
  }, [])

  const handleChange = (e) => {
    setEmail(e.target.value)
    if (validarEmail(e.target.value)) {
      e.target.value.length > 40
        ? setErrors({
            email: "Longitud inválida",
          })
        : setErrors({
            email: "E-mail inválido",
          })
    } else {
      setErrors({
        email: "",
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (email === "") {
      setErrors({
        email: "Campo requerido",
      })
    } else {
      dispatch(setToResetPassword(email))
      setEmail("")
    }
    alert('Te enviamos al correo las instruciones para el cambio de contraseña')
    window.location.reload()
  }

  return (
    <div className={s.containerGeneral}>
      <div className={s.containerImagen}>
      <button onClick={closeModalPassword}  >X</button>
        <div>
          <p>Ingresa tu e-mail para cambiar tu password</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">e-mail</label>
            <input
             className={s.input}
              name="email"
              value={email}
              onChange={handleChange}
              id="email"
              type="email"
              placeholder="Reset email"
            />
            {errors?.email && (
              <div>
                <p >{errors.email}</p>
              </div>
            )}
            {respuesta?.msg ? (
              <Link to="/">
                {" "}
                <button type="submit" >
                  HOME
                </button>{" "}
              </Link>
            ) : (
              <button className={s.buttonPsw} type="submit">
                RESETTEAR PASSWORD
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
