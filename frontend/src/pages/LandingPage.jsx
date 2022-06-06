import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { autenticarUser } from "../redux/actions/actionUser";


Modal.setAppElement("#root");

export default function LandingPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    let usuarioA = dispatch(autenticarUser(config));
    usuarioA ? navigate("/home") : null;
  }, []);

  return (
    <div>
      <div>
        <Link to="/login">
          <button>LOGIN</button>
        </Link>
        <Link to="/registrar">
          <button>REGISTER</button>
        </Link>
      </div>
    </div>
  );
}
