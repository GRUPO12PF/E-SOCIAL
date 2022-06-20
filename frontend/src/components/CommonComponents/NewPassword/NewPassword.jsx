import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { resetPassword, setStateEmail } from "../../../redux/actions/actionUser.js";
import s from "./NewPassword.module.css";
import Footer from "../Footer/Footer";
import validatePassword from "../../../middleware/validarPassword";

export default function NewPassword() {
  const params = useParams();
  const respuesta = useSelector((state) => state.email);
  const { token } = params;
  const [estado, setEstado] = useState({
    password: "",
    password2: "",
  });
  const [errores, setErrores] = useState({
    error: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setStateEmail());
    };
  }, []);

  const handleChange = (e) => {
    setEstado({
      ...estado,
      [e.target.name]: e.target.value,
    });
    if (validatePassword(e.target.value)) {
      setErrores({
        ...errores,
        error: "Your password must be at least 8 characters",
      });
    } else {
      setErrores({
        ...errores,
        error: "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (estado.password !== estado.password2)
      setErrores({ ...errores, error: "las contraseñas deben ser las mismas" });
    else {
      setErrores({ ...errores, error: "" });
      dispatch(
        resetPassword({
          token: token,
          password: estado.password,
        })
      );
    }
  };

  return (
    <div className={s.contNewPass}>
      <div>
        <div>
          <h3 className={s.title}>Resetear Password</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="password">Password</label>
            <input
              name="password"
              value={estado.password}
              onChange={handleChange}
              id="password"
              type="password"
              placeholder="Reset password"
            />
            <label htmlFor="password">Repetir Password</label>
            <input     
              name="password2"
              value={estado.password2}
              onChange={handleChange}
              id="password"
              type="password"
              placeholder="Ingrese password"
            />
            {respuesta.error ? (
              <p>{respuesta.error}</p>
            ) : (
              <p>{respuesta.msg}</p>
            )}
            {errores.error && <p>{errores.error}</p>}
            {respuesta.msg ? (
              <Link to="home">
                {" "}
                <button type="submit" >
                  HOME
                </button>
              </Link>
            ) : (
              <button type="submit" >
                Reset password
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
