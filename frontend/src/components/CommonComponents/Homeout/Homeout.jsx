import React, { useEffect } from "react"
import { useNavigate } from "react-router"
import { useDispatch } from "react-redux"
import Modal from "react-modal"
import Login from '../Login/Login'
import Register from "../Register/Register"
import { autenticarUser } from "../../../redux/actions/actionUser.js"
import s from "./Homeout.module.css"

Modal.setAppElement("#root")

export default function Homeout() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      return
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
    let usuarioA = dispatch(autenticarUser(config))
    usuarioA ? navigate("/") : null
  }, [])
  
  return (
    <div className={s.container}>
      <div className={s.login}>
        <h2>INGRESAR</h2>
        <Login />
      </div>
      <div className={s.register}>
        <h2>REGISTRATE</h2>
        <Register />
      </div>
    </div>
  )
}
