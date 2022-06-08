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
        <div>
          <div>
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">email</label>
              <input
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
              <label htmlFor="password">password</label>
              <input
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
              {errorEmail && !usuario.email && !usuario.password ? (
                <p>{errorEmail} </p>
              ) : null}
              <button type="submit">
                LOGIN
              </button>
            </form>
            <Link to="/olvide-password/" >
              {" "}
              <h4>forget your password</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
