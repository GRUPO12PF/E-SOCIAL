import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router"
import {
  login,
  resetErrorLoginUser,
  registroGoogle,
} from "../../../redux/actions/actionUser"
import validarEmail from "../../../middleware/validarEmail"
import validatePassword from "../../../middleware/validarPassword"
import { GoogleOAuthProvider } from "@react-oauth/google"
import { GoogleLogin } from "@react-oauth/google"
import image from '../../../assets/images/login.jpg'
import { FaRegEye, FaRegEyeSlash, FaWindows } from 'react-icons/fa'

function validate(email, password) {
  let objeto = {}
  if (email === "") objeto = { ...objeto, email: "Campo requerido" }
  else if (validarEmail(email))
    email.length > 40
      ? (objeto = { ...objeto, email: "Longitud inválida" })
      : (objeto = { ...objeto, email: "Formato inválido" })

  if (password === "")
    objeto = { ...objeto, password: "Campo requerido" }
  else if (validatePassword(password))
    objeto = {
      ...objeto,
      password: "Su password debe tener al menos 8 caracteres",
    }

  return objeto
}

export default function Login() {
  const errorEmail = useSelector((state) => state.errorEmail)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const token = localStorage.getItem("token")

  const [state, setEstate] = useState(false)
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  })

  useEffect(() => {

    token ? navigate("/") : null

  }, [token])


  const [errors, setErrors] = useState({
    email: "",
    password: "",
  })


  const handleToggle = () => {
    setEstate(prevState => !prevState)
  }

  function handleChangeEmail(e) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    })
    setErrors({
      ...errors,
      email: "",
    })
  }

  const handleChangePassword = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    })
    setErrors({
      ...errors,
      password: "",
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let val = validate(usuario.email, usuario.password)
    if (Object.keys(val).length === 0) {
      const loginData = await dispatch(login(usuario))
      console.log(loginData.payload)
      setUsuario({
        email: "",
        password: "",
      })

      if (errorEmail) {
        e.preventDefault()

      } else {
        dispatch(resetErrorLoginUser())
        loginData.payload.token ? navigate("/") : null
      }
    } else setErrors(val)
  }
  function responseGoogle(el) {
    dispatch(registroGoogle(el))

    setTimeout(function () {
      window.location.reload(1)
    }, 1500) // After 2,5 secs
  }

  return (
    <div className="fondeAt">

      <div className="container-login">
        <div className="screen">
          <div className="screen__content">
            <form className="login-login" onSubmit={handleSubmit}>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input id="email"
                  className="input-login"
                  value={usuario.email}
                  type="text"
                  name="email"
                  onChange={handleChangeEmail}
                  placeholder="Tu nombre / e-mail" />

                {errors.email && (
                  <div>
                    <p>{errors.email}</p>
                  </div>
                )}
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  id="password"
                  className="input-login"
                  type={state ? "text" : "password"}
                  value={usuario.password}
                  name="password"
                  onChange={handleChangePassword}
                  placeholder="Password" />
                {errors.password && (
                  <div>
                    <p>{errors.password}</p>
                  </div>
                )}
              </div>
              {errorEmail && !usuario.email && !usuario.password ? (
                <p>{errorEmail} </p>
              ) : null}
              <button className="button login__submit">
                <span className="button__text">Logueate</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
            </form>
            <div className="social-login">
              <h3>Loguearse via</h3>
              <div className="social-icons">
                <div className="logg">
                  <GoogleOAuthProvider
                    clientId={`${import.meta.env.VITE_URL_CLIENT_ID}`}
                  >
                    <GoogleLogin login_uri="" onSuccess={responseGoogle} />

                  </GoogleOAuthProvider>
                </div>
                <button className="eye" onClick={handleToggle}>{state ? <FaRegEye /> : <FaRegEyeSlash />}</button>
                <Link to="/olvide-password/" >
                  {" "}
                  <h4 className="forgett">¿Olvidaste tu password?</h4>
                </Link>
              </div>

            </div>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
