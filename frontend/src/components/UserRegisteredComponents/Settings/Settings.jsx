import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { cambiarImagen, usuarioActual } from "../../../redux/actions/actionUser"
import { useDispatch, useSelector } from "react-redux"
import profile from "../../../assets/images/avatar.png"
import NavBar from "../../CommonComponents/NavBar/NavBar"
import Loading from "../../CommonComponents/Loading/Loading"

import io from "socket.io-client"
let socket

export default function Settings() {
  const dispatch = useDispatch()
  const params = window.location.href
  const usuarioAct = useSelector((state) => state.usuarioActual)

  useEffect(() => {
    socket = io(import.meta.env.VITE_BACKEND_URL)
    socket.emit("Settings", params)
  }, [])

  useEffect(() => {
    dispatch(usuarioActual())
    //recibir la respuesta del back
    socket.on("userSettings", () => {
      dispatch(usuarioActual())
    })
  }, [])

  function handleImage(image) {
    dispatch(cambiarImagen(image))
  }

  return (
    usuarioAct.length !== 0 ?
      <div className="contSettings">
        <NavBar />
        <div className="contSettings-info">

          <div className="contProfile">
            <img src={usuarioAct.image.url ? usuarioAct.image.url : profile} alt="Imagen de usuario" />
            <span>Extensiones soportadas: jpg / png</span>

            <div className="contFile">
              <label className="labelmiinput" htmlFor="mifile"> {/* ¡AGREGAR UN ESTILO QUE PERMITA VER LA LETRA! */}
                CAMBIAR IMAGEN
              </label>
              <input
                type="file"
                name="image"
                className="file"
                id="mifile"
                onChange={(e) => handleImage(e.target.files[0])}
              />
            </div>

          </div>

          <div className="enlace">
            <Link to="/olvide-password/">
              <button>CAMBIAR PASSWORD</button>
            </Link>
          </div>

        </div>
      </div>

      : <Loading />
  )
}
