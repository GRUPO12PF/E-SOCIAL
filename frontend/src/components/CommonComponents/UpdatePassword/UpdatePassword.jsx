import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  setToResetPassword,
  setStateEmail,
} from "../../../redux/actions/actionUser";
import validarEmail from "../../../middleware/validarEmail";
import Footer from "../Footer/Footer";

export default function OlvidePassword() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const respuesta = useSelector((state) => state.errorEmail);

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setStateEmail());
    };
  }, []);

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (validarEmail(e.target.value)) {
      e.target.value.length > 40
        ? setErrors({
            email: "invalid length",
          })
        : setErrors({
            email: "invalid email",
          });
    } else {
      setErrors({
        email: "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "") {
      setErrors({
        email: "this field is required",
      });
    } else {
      dispatch(setToResetPassword(email));
      setEmail("");
    }
  };

  return (
    <div>
      <div >
        <div>
          <h3>Enter your email to change your password</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input
              name="email"
              value={email}
              onChange={handleChange}
              id="email"
              type="email"
              placeholder="Reset email"
            />

            {errors.email && (
              <div>
                <p className="error">{errors.email}</p>
              </div>
            )}

            {respuesta.msg ? (
              <Link to="/">
                {" "}
                <button type="submit" className="buttonMorado">
                  Go back home
                </button>{" "}
              </Link>
            ) : (
              <button type="submit" className="buttonPrimary">
                Reset password
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
