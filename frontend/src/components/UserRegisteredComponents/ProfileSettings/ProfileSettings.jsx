import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import IconsLogout from "../../../Iconos/IconsLogout";
import Settings from "../../../Iconos/ArrowLeft";
import Order from "../../../Iconos/Order";

export default function ProfileSettings() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/");
  }

  function logOut() {
    window.localStorage.removeItem("token");
    window.location.reload();
  }

  return (
    <div className="profileModal">
      <div className="divModalPerfil">
        <Link to="/profile">
          <h3>Profile</h3>
        </Link>
      </div>
      <div className="divModalPerfil">
        <Link to="/order" >
        <Order />
        <h3>Order</h3>
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
    </div>
  );
}
