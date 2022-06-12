import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import {
  login,
  resetErrorLoginUser,
} from "../../redux/actions/actionUser";
import validarEmail from "../../middleware/validarEmail";
import validatePassword from "../../middleware/validarPassword";
import s from './Login.module.css';
import image from '../../assets/images/login.jpg';


function validate(email, password) {
  let objeto = {};
  if (email === "") objeto = { ...objeto, email: "this field is required" };
  else if (validarEmail(email))
    email.length > 40
      ? (objeto = { ...objeto, email: "invalid length" })
      : (objeto = { ...objeto, email: "invalid format" });

  if (password === "")
    objeto = { ...objeto, password: "this field is required" };
  else if (validatePassword(password))
    objeto = {
      ...objeto,
      password: "Your password must be at least 8 characters",
    };

  return objeto;
}

export default function Login() {
  const errorEmail = useSelector((state) => state.errorEmail);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    token ? navigate("/home") : null;
    // return () => {
    //   dispatch(resetErrorLoginUser());
    // };
  }, [token]);

  function handleChangeEmail(e) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      email: "",
    });
  }

  const handleChangePassword = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      password: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let val = validate(usuario.email, usuario.password);
    if (Object.keys(val).length === 0) {
      dispatch(login(usuario));
      setUsuario({
        email: "",
        password: "",
      });
      if (errorEmail) {
        e.preventDefault();
      } else {
        dispatch(resetErrorLoginUser());

        navigate("/home");
      }
    } else setErrors(val);
  };

  return (
    <div>
      <div>
        <img className={s.image} src={image} alt='' />
        <div>
          <div className={s.container}>
            <h3 className={s.title}>Login</h3>
            <form className={s.formGral} onSubmit={handleSubmit}>
              <label className={s.label} htmlFor="email">Email</label>
              <div>
                <input className={s.input}
                  id="email"
                  value={usuario.email}
                  type="text"
                  name="email"
                  onChange={handleChangeEmail}
                  placeholder="Your email"
                />
                {errors.email && (
                  <div>
                    <p>{errors.email}</p>
                  </div>
                )}
              </div>

              <label className={s.label} htmlFor="password">Password</label>
              <div>
                <input className={s.input}
                  id="password"
                  type="password"
                  value={usuario.password}
                  name="password"
                  onChange={handleChangePassword}
                  placeholder="Your password"
                />
                {errors.password && (
                  <div>
                    <p>{errors.password}</p>
                  </div>
                )}
              </div>

              {errorEmail && !usuario.email && !usuario.password ? (
                <p>{errorEmail} </p>
              ) : null}
              <button className={s.login} type="submit">
                LOGIN
              </button>
            </form>
            <Link to="/olvide-password/" className={s.link}>
              {" "}
              <h4>forget your password?</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
