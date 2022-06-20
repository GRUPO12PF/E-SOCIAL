import { useState } from "react";
import { useDispatch } from "react-redux";
import { registroUsuario } from "../../../redux/actions/actionUser";
import { useNavigate } from "react-router";
import validarEmail from "../../../middleware/validarEmail";
import validatePassword from "../../../middleware/validarPassword";
import { Link } from "react-router-dom";
import s from './Register.module.css';
import { FaRegEye,FaRegEyeSlash} from 'react-icons/fa';
import Footer from "../Footer/Footer";

export default function Register() {
  const navigate = useNavigate();
  const [estado, setEstado] = useState({
    email: "",
    nombre: "",
    password1: "",
    password2: "",
  });
  const [errores, setErrores] = useState([]);
  const [state,setEstate]= useState(false)
  const [statee,setEstatee]= useState(false)

  const handleToggle = ()=>{
    setEstate(prevState => !prevState)
  }
  const handleTogglee = ()=>{
    setEstatee(prevState => !prevState)
  }

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setEstado({
      ...estado,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !estado.email ||
      !estado.nombre ||
      !estado.password1 ||
      !estado.password2
    )
      setErrores([0, "there are empty fields"]);
    else if (estado.nombre.length < 3 || estado.nombre.length > 10)
      setErrores([1, "username must have between 3 and 10 characters"]);
    else if (validarEmail(estado.email)) setErrores([2, "invalid email"]);
    else if (validatePassword(estado.password1))
      estado.password1.length < 8
        ? setErrores([3, "the password must have at least 8 characters"])
        : setErrores([3, "invalid password"]);
    else if (validatePassword(estado.password2))
      estado.password2.length < 8
        ? setErrores([4, "the password must have at least 8 characters"])
        : setErrores([4, "invalid password"]);
    else if (estado.password1 !== estado.password2)
      setErrores([5, "passwords must be the same"]);
    else {
      setErrores([]);
      dispatch(registroUsuario(estado));
      navigate("/");
    }
  };

  return (
    <div className={s.contRegister}>
      <Link to="/" className={s.link}>
        <button className={s.btn}>Home</button>
      </Link>
      <div>
        <div>
          <div className={s.backg}>
            <h3 className={s.register}>Register</h3>
            <p className={s.parrafo}>
            Do you already have an account?
              
            </p>
            <Link to="/login">
                <button className={s.login}>Login</button>
              </Link>
            <form onSubmit={handleSubmit} className={s.form}>
              
              <div>
              <input
                name="nombre"
                value={estado.username}
                onChange={handleChange}
                id="user"
                type="text"
                placeholder="Your username"
                className={s.inp}
              />
              </div>
              
              <div>
              <input
                name="email"
                value={estado.email}
                onChange={handleChange}
                id="email"
                type="text"
                placeholder="Your email"
                className={s.inp}
              />
              </div>
              
             <div>
             <input
                name="password1"
                value={estado.password1}
                onChange={handleChange}
                id="password1"
                type={state ? "text" : "password"}
                placeholder="Your password"
                className={s.inp}
              />
              <span className={s.bot} onClick={handleToggle}>{state ? <FaRegEye/> : <FaRegEyeSlash/> }</span>
             </div>
              
              <div>
              <input
                name="password2"
                value={estado.password2}
                onChange={handleChange}
                id="password2"
                type={statee ? "text" : "password"}
                placeholder="enter password again"
                className={s.inp}
              />
                 <span className={s.bot} onClick={handleTogglee}>{statee ? <FaRegEye/> : <FaRegEyeSlash/>  }</span>
              </div>
              {errores.length !== 0 && <p>{errores[1]}</p>}
              <button type="submit" className={s.btnRes}>
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
