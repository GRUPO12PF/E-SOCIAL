import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import IconsLogout from "../../../Iconos/IconsLogout";
import Settings from "../../../Iconos/ArrowLeft";
import Order from "../../../Iconos/Order";
import Footer from "../../CommonComponents/Footer/Footer";

export default function ProfileSettings() {
  const navigate = useNavigate();
  const user = useSelector(state => state.usuarioActual)
  const idUser = user._id

  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/");
  }

  
  function handleOnClickBooks() {
    navigate(`/bookCreated/${idUser}`);
  }

  function logOut() {
    window.localStorage.removeItem("token");
    window.location.reload();
  }

  return (
    <div className="profileModal">
      <div className="divModalPerfil">
        <button onClick={e => (handleOnClickBooks(e))}>libros creados</button>
      </div>
      <div className="divModalPerfil">
        <Link to="/historyOrders/" >
        <Order />
        <h3>Orders</h3>
        </Link>
      </div>
      <div className="divModalPerfil">
        <Link to="/user/setting" >
          <Settings />
          <h3>Settings</h3>
        </Link>
      </div>
      <div className="divModalPerfil" onClick={() => logOut()}>
        <Link to="/">
          <IconsLogout />
          <h3>Logout</h3>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
