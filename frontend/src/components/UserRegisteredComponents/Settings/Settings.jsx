import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { cambiarImagen, usuarioActual } from "../../../redux/actions/actionUser";
import { useDispatch, useSelector } from "react-redux";
import profile from "../../../assets/images/avatar.png";
import NavBar from "../NavBar/NavBar";

export default function Settings() {
  const dispatch = useDispatch();
  const usuarioAct = useSelector((state) => state.usuario);

  useEffect(() => {
    dispatch(usuarioActual());
  }),
    [dispatch];

  function handleFileImage(image) {
    dispatch(cambiarImagen(image));
  }

  return (
    <div>
      <NavBar />
      <div className="contSettings">
        <div className="contSettings-info">
          <div className="contProfile">
            <img src={usuarioAct.image.url || profile} alt="No Img" width='250px' height='200px'/>
            <span>Extenciones Soportadas: jpg/png</span>
            <div className="contFile">
              <label className="labelmiinput" htmlFor="mifile">
                Change image
              </label>
              <input
                type="file"
                name="image"
                className="file"
                id="mifile"
                onChange={(e) => handleFileImage(e.target.files[0])}
              />
            </div>
          </div>
          <div className="enlace">
            <Link to="/home/">
              <button>HOME</button>
            </Link>
            <Link to="/olvide-password/">
              <button>Change password</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
