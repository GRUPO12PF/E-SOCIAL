import { useState } from "react"
import { useDispatch } from "react-redux"
import { registroUsuario } from "../../../redux/actions/actionUser"
import { useNavigate } from "react-router"
import validarEmail from "../../../middleware/validarEmail"
import validatePassword from "../../../middleware/validarPassword"
import s from './Register.module.css'
import { FaRegEye,FaRegEyeSlash} from 'react-icons/fa'

export default function Register() {
  const navigate = useNavigate()
  const [estado, setEstado] = useState({
    email: "",
    nombre: "",
    password1: "",
    password2: "",
  })
  const [errores, setErrores] = useState([])
  const [state,setEstate]= useState(false)
  const [statee,setEstatee]= useState(false)

  const handleToggle = ()=>{
    setEstate(prevState => !prevState)
  }
  const handleTogglee = ()=>{
    setEstatee(prevState => !prevState)
  }

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setEstado({
      ...estado,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      !estado.email ||
      !estado.nombre ||
      !estado.password1 ||
      !estado.password2
    )
      setErrores([0, "Hay campos vacíos"])
    else if (estado.nombre.length < 3 || estado.nombre.length > 10)
      setErrores([1, "El nombre de usuario debe tener entre 3 y 10 caracteres"])
    else if (validarEmail(estado.email)) setErrores([2, "E-mail inválido"])
    else if (validatePassword(estado.password1))
      estado.password1.length < 8
        ? setErrores([3, "Tu password debe tener al menos 8 caracteres"])
        : setErrores([3, "Password inválido"])
    else if (validatePassword(estado.password2))
      estado.password2.length < 8
        ? setErrores([4, "Tu password debe tener al menos 8 caracteres"])
        : setErrores([4, "Password inválido"])
    else if (estado.password1 !== estado.password2)
      setErrores([5, "Los passwords deben coincidir"])
    else {
      setErrores([])
      dispatch(registroUsuario(estado))
      navigate("/")
    }
  }

  return (
    <div className={s.contRegister}>
<div className='container-login'>
        <div className='screen'>
          <div className='screen__content'>
            <form onSubmit={handleSubmit} className='login-login'>
              <div className='login__field'>
                <i className='login__icon fas fa-user'></i>
                <input
                  className='input-login'
                  name="nombre"
                  value={estado.username}
                  onChange={handleChange}
                  id="user"
                  type="text"
                  placeholder="Tu nombre de usuario"
                />
              </div>
              <div className='login__field'>
                <i className='login__icon fas fa-user'></i>
                <input
                  className='input-login'
                  name="email"
                  value={estado.email}
                  onChange={handleChange}
                  id="email"
                  type="text"
                  placeholder="Tu e-mail"
                />
              </div>
              <div className='login__field'>
                <i className='login__icon fas fa-lock'></i>
                <input
                  className='input-login'
                  name="password1"
                  value={estado.password1}
                  onChange={handleChange}
                  id="password1"
                  type={state ? "text" : "password"}
                  placeholder="Tu password"
                />

                <span className={s.bot} onClick={handleToggle}>{state ? <FaRegEye /> : <FaRegEyeSlash />}</span>
              </div>
              <div className='login__field'>
                <i className='login__icon fas fa-lock'></i>
                <input
                  className='input-login'
                  name="password2"
                  value={estado.password2}
                  onChange={handleChange}
                  id="password2"
                  type={statee ? "text" : "password"}
                  placeholder="Ingrese password de nuevo"
                />
                <span className={s.bot} onClick={handleTogglee}>{statee ? <FaRegEye /> : <FaRegEyeSlash />}</span>
              </div>

              {errores.length !== 0 && <p>{errores[1]}</p>}
              <button type="submit" className='button login__submit'>
                <span className='button__text'>Registrate</span>
                <i className='button__icon fas fa-chevron-right'></i>
              </button>
            </form>
          </div>
          <div className='screen__background'>
            <span className='screen__background__shape screen__background__shape4'></span>
            <span className='screen__background__shape screen__background__shape3'></span>
            <span className='screen__background__shape screen__background__shape2'></span>
            <span className='screen__background__shape screen__background__shape1'></span>
          </div>
        </div>
      </div>
    </div>
  )
}
