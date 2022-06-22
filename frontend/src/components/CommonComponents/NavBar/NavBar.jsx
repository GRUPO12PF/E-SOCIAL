import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { usuarioActual } from "../../../redux/actions/actionUser";
import { useDispatch, useSelector } from "react-redux";
import profile from "../../../assets/images/avatar2.png";
import io from "socket.io-client";
let socket;

import ProfileSettings from "../../UserRegisteredComponents/ProfileSettings/ProfileSettings";

const customStyls = {
  overlay: {
    backgroundColor: "rgba(11,12,41,0.48)",
  },
};

export default function NavBar() {
  const dispatch = useDispatch();
  const params = window.location.href;
  const usuarioAct = useSelector((state) => state.usuarioActual);
  const [showModal, setShowModal] = useState(false);
  const [showModalNotification, setShowModalNotification] = useState(false);

  const token = localStorage.getItem("token");
  
  useEffect(() => {
    dispatch(usuarioActual());
    socket = io(import.meta.env.VITE_BACKEND_URL);
    socket.emit("Actualizar", params);
  }, []);

  function handleButton() {
    setShowModal(true);
  }
  function closeModal() {
    showModalNotification && setShowModalNotification(false);
    showModal && setShowModal(false);
  }
  return (
    <div>
      <nav className="nav" onClick={closeModal}>
        <Link to="/" className="link">HOME</Link>
        {token ? (<Link to="/create" className="link">CREATED</Link>) : null}
        <Link to="/about" className="link">ABOUT</Link>
        {!token ? (<Link to="/homeout" className="link">REGISTER/LOGIN</Link>) : null}
        <div className="perfilIcon">
        {token ?<p className="nameUser">{`¡Hi ${usuarioAct.nombre}!`}</p>: null}
        {usuarioAct.length !== 0 ? (
          <div>
            <img
              className="fotoperfil"
              src={usuarioAct.image.url ? usuarioAct.image.url : profile}
              alt="Profile User"
              onClick={handleButton}
            />
          </div>
        ) : null}
        <Modal style={customStyls} isOpen={showModal} className="customStyles">
          <ProfileSettings/>
        </Modal>
      </div>
      </nav>
    </div>
  );
}
