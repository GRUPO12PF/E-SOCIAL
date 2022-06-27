import React, { useEffect } from "react"
import { useNavigate } from "react-router"
import { registroGoogle } from "../../../redux/actions/actionUser"
import { GoogleOAuthProvider } from "@react-oauth/google"
import { GoogleLogin } from "@react-oauth/google"
import { useDispatch, useSelector } from "react-redux"
import './style.css'
import Login from "./Register"
import Register from "./Login"


export default function Homeout() {
 const dispatch = useDispatch();
 const navigate = useNavigate()
 const token = localStorage.getItem("token")

 useEffect(() => {

  token ? navigate("/") : null

}, [token])

  function responseGoogle(el) {
    dispatch(registroGoogle(el))

    setTimeout(function () {
      window.location.reload(1)
    }, 1500) // After 2,5 secs
  }
 
  //let container = document?.getElementById('container');

  function click() {
    (document?.getElementById('container')).classList.add("right-panel-active");
  };

  function clickk() {
    ( document?.getElementById('container')).classList.remove("right-panel-active");
  };

  return (
    <div>

      <div>
        <div class="container" id="container" >
          <div class="form-container sign-up-container">
            <Login/>
            </div> 
          <div class="form-container sign-in-container">
            <Register/>
          </div>
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-panel overlay-left">
                <h1>Hola nuevamente!</h1>
                <p>Para volver a iniciar sesion ingrese su informacion personal</p>
                <button class="ghost" onClick={e=>clickk(e)} id="signIn">Ingresar</button>
              </div>
              <div class="overlay-panel overlay-right">
                <h1>Hola le damos la bienvenida!</h1>
                <p>Ingrese sus datos personales y comience a comprar libros unicos</p>
                <button class="ghost" onClick={e=>click(e)} id="signUp">Registrarse</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="logg">
                  <GoogleOAuthProvider
                    clientId={`${import.meta.env.VITE_URL_CLIENT_ID}`}
                  >
                    <GoogleLogin login_uri="" onSuccess={responseGoogle} />

                  </GoogleOAuthProvider>
                </div>
    </div>
  )
}