import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { validateUser } from "../redux/actions/actionUser.js";

export default function ConfirmarCuenta() {
  const dispatch = useDispatch();
  const respuesta = useSelector((state) => state.confirmacion);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    dispatch(validateUser(id));
  }, []);

  return (
    <div>
      <h2>
        Welcome to <span>Books</span> Market
      </h2>
      <div>{respuesta.msg}</div>
      <Link to="/">
        <button>Go back home</button>
      </Link>
    </div>
  );
}