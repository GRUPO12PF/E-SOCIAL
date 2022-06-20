import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { validateUser } from "../../../redux/actions/actionUser.js";
import s from "./ConfirmAccount.module.css";
import Footer from "../Footer/Footer.jsx";

export default function ConfirmarCuenta() {
  const dispatch = useDispatch();
  const respuesta = useSelector((state) => state.confirmacion);
  const params = useParams();
  const { id } = params;
  

  useEffect(() => {
    dispatch(validateUser(id));
  }, []);

  return (
    <div className={s.contConfirm}>
      <h2 className={s.title}>
        Welcome to <span>Books</span> Market
        <br/>
      </h2>
      <div className={s.response}>{respuesta.msg}</div>
      <br/>
      <Link to="/">
        <button className={s.btn}>Go back home</button>
      </Link>
    </div>
  );
}