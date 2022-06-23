import React, { useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { validateUser } from "../../../redux/actions/actionUser.js"
import s from "./ConfirmAccount.module.css"

export default function ConfirmarCuenta() {
  const dispatch = useDispatch()
  const respuesta = useSelector((state) => state.confirmacion)
  const params = useParams()
  const { id } = params
  

  useEffect(() => {
    dispatch(validateUser(id))
  }, [])

  return (
    <div className={s.contConfirm}>
      <h2 className={s.title}>
        ¡Bienvenido a <span>E-Social</span>!
        <br/>
      </h2>
      <div className={s.response}>{respuesta.msg}</div>
      <br/>
      <Link to="/">
        <button className={s.btn}>Volver a HOME</button>
      </Link>
    </div>
  )
}